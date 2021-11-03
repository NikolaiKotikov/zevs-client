<script>
import Vue from 'vue'
import BlockFeatureVue from '../block/BlockFeature.vue'

export default Vue.extend({
  name: 'SectionHero',
  functional: true,
  props: {
    title: {
      type: String,
      default: '',
    },
    subtitle: {
      type: String,
      default: '',
    },
    level: {
      type: String,
      default: '',
    },
    caption: {
      type: String,
      default: '',
    },
    types: {
      type: Array,
      default: () => [],
    },
    features: {
      type: Array,
      default: () => [],
    },
    imageRight: {
      type: Object,
      default: () => {},
    },
    imageBottom: {
      type: Object,
      default: () => {},
    },
  },
  render(
    h,
    {
      props,
      parent: {
        $global,
        $config: { strapiURL },
      },
      $style,
    }
  ) {
    return (
      <section class={$style.el}>
        <div class={[$style.inner, $global.container]}>
          <div class={$style.top}>
            <h1 class={[$style.title, $global.h1]}>{props.title}</h1>
            <span class={[$style.level, $global.h1]}>{props.level}</span>
            <span class={$style.subtitle} domPropsInnerHTML={props.subtitle} />
          </div>
          {(() =>
            props.types.length ? (
              <div class={$style.middle}>
                <ul class={$style.types}>
                  {props.types.map((type) => {
                    return type?.title ? (
                      <li class={$style.type}>{type.title}</li>
                    ) : null
                  })}
                </ul>
              </div>
            ) : null)()}
          <div class={$style.bottom}>
            <BlockFeatureVue
              class={$style.features}
              features={props.features}
            />
            <span class={$style.caption}>{props.caption || ''}</span>
          </div>
          <div
            class={$style.imageRight}
            style={`background-image: url(${strapiURL + props.imageRight.url})`}
          />
        </div>
        <div
          class={$style.imageBottom}
          style={`background-image: url(${strapiURL + props.imageBottom.url})`}
        />
      </section>
    )
  },
})
</script>

<style lang="scss" module>
.el {
  position: relative;
  @include media('>=laptop') {
    --bottom-image-height: 140px;
    --bottom-line-height: 24px;
  }
  @include media('>=tablet') {
    padding-bottom: calc(
      var(--bottom-image-height) + var(--bottom-line-height)
    );
  }
  @include media('<laptop', '>=tablet') {
    --bottom-image-height: 68px;
    --bottom-line-height: 12px;
  }
  @include media('<tablet') {
    padding-bottom: var(--bottom-line-height);
    --bottom-line-height: 5px;
    --bottom-image-height: 120px;
  }

  &::after {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: var(--bottom-line-height);
    content: '';
    background: $brand;
  }

  .level {
    line-height: 1;
    @include media('>=tablet') {
      display: block;
    }
  }
}

.inner {
  position: relative;
  @include media('>=laptop') {
    padding-bottom: 30px;
  }
  @include media('<laptop', '>=tablet') {
    max-width: 800px;
    padding-bottom: 16px;
  }
  @include media('<tablet') {
    z-index: 1;
    overflow-x: hidden;
  }
}

.top {
  position: relative;
  color: $white;
  @include left-decorator;
  @include skew-bg;
  --background: #{$accent};

  @include media('>=laptop') {
    min-height: 395px;
    padding-top: 25px;
    padding-bottom: 25px;
    --border: 995px;
  }
  @include media('<laptop', '>=tablet') {
    min-height: 190px;
    padding-top: 13px;
    padding-bottom: 13px;
    --border: 465px;
  }
  @include media('<tablet') {
    min-height: 105px;
    padding-top: 12px;
    padding-bottom: 8px;
    background: transparent;
    & > * {
      position: relative;
      z-index: 1;
    }
    &::after {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      content: '';
      mix-blend-mode: multiply;
      @include skew-bg;
    }
    --border: 207px;
  }
}

.middle {
  position: relative;
  display: flex;
  align-items: center;
  color: $white;
  @include left-decorator;
  @include skew-bg;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  --background: #{$brand};
  @include media('>=laptop') {
    min-height: 170px;
    padding-top: 20px;
    padding-bottom: 20px;
    font-size: 32px;
    --border: 847px;
  }
  @include media('<laptop') {
    font-size: 14px;
  }
  @include media('<laptop', '>=tablet') {
    min-height: 82px;
    padding-top: 10px;
    padding-bottom: 10px;
    --border: 394px;
  }
  @include media('<tablet') {
    min-height: 115px;
    padding-top: 10px;
    padding-bottom: 10px;
    --border: 168px;
  }
}

.types {
  @include media('>=laptop') {
    width: 515px;
  }
  @include media('>=tablet') {
    display: flex;
    flex-wrap: wrap;
  }
  @include media('<laptop', '>=tablet') {
    width: 235px;
  }
}

.type {
  @include media('>=tablet') {
    &:nth-child(odd) {
      &::after {
        margin-right: 5px;
        margin-left: 5px;
        content: '•';
      }
    }
  }
}

.title {
  @include media('>=laptop') {
    margin-bottom: 28px;
  }
  @include media('<laptop', '>=tablet') {
    margin-bottom: 15px;
  }
  @include media('<tablet') {
    margin-bottom: 2px;
  }
}

.subtitle {
  font-weight: $bold;
  text-transform: uppercase;
  @include media('>=laptop') {
    font-size: 36px;
  }
  @include media('>=tablet') {
    & > br {
      display: none;
    }
  }

  @include media('<laptop', '>=tablet') {
    font-size: 16px;
  }
  @include media('<tablet') {
    font-size: 14px;
    & > br {
      display: initial;
    }
  }
}

.caption {
  display: block;
  color: $brand;
  line-height: 1em;
  @include media('>=laptop') {
    font-size: 16px;
  }
  @include media('<laptop') {
    max-width: 220px;
    font-size: 12px;
  }
}

.bottom {
  @include media('<tablet') {
    position: relative;
    padding-bottom: 15px;
    --background: white;
    --border: 350px;
    @include left-decorator;
    @include skew-bg;
    &::after {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 100%;
      width: 50vw;
      content: '';
      background-color: white;
    }
  }
}

.features {
  @include media('>=laptop') {
    margin-bottom: 30px;
    padding-top: 40px;
  }
  @include media('<laptop', '>=tablet') {
    padding-top: 11px;
    padding-bottom: 7px;
  }

  @include media('<tablet') {
    position: relative;
    padding-top: 12px;
    padding-bottom: 2px;
  }
}

.imageRight,
.imageBottom {
  position: absolute;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

.imageRight {
  @include media('>=laptop') {
    right: 0;
    width: 790px;
    height: 880px;
  }
  @include media('>=tablet') {
    bottom: 0;
  }
  @include media('<laptop', '>=tablet') {
    left: 383px;
    width: 380px;
    height: 420px;
  }
  @include media('<tablet') {
    top: 8px;
    left: 160px;
    z-index: -1;
    width: 195px;
    height: 225px;
  }
}

.imageBottom {
  bottom: var(--bottom-line-height);
  width: 100%;
  height: var(--bottom-image-height);
  @include media('<tablet') {
    display: none;
  }
}
</style>
