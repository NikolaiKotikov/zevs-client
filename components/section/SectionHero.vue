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
            <span
              class={$style.subtitle}
              domPropsInnerHTML={props.subtitle}
            ></span>
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
          ></div>
        </div>
        <div
          class={$style.imageBottom}
          style={`background-image: url(${strapiURL + props.imageBottom.url})`}
        ></div>
      </section>
    )
  },
})
</script>

<style module lang="scss">
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
    --bottom-line-height: 5px;
    --bottom-image-height: 120px;
    padding-bottom: var(--bottom-line-height);
  }
  &::after {
    position: absolute;
    content: '';
    width: 100%;
    left: 0;
    bottom: 0;
    background: $brand;
    height: var(--bottom-line-height);
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
    padding-bottom: 16px;
  }
  @include media('<tablet') {
    z-index: 1;
    overflow-x: hidden;
  }
}
.top {
  --background: #{$accent};
  position: relative;
  @include left-decorator;
  @include skew-bg;
  color: $white;

  @include media('>=laptop') {
    min-height: 395px;
    --border: 995px;
    padding-top: 25px;
    padding-bottom: 25px;
  }
  @include media('<laptop', '>=tablet') {
    min-height: 190px;
    --border: 465px;
    padding-top: 13px;
    padding-bottom: 13px;
  }
  @include media('<tablet') {
    background: transparent;
    & > * {
      position: relative;
      z-index: 1;
    }
    &::after {
      position: absolute;
      mix-blend-mode: multiply;
      content: '';
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      @include skew-bg;
    }
    min-height: 105px;
    --border: 207px;
    padding-top: 12px;
    padding-bottom: 8px;
  }
}

.middle {
  display: flex;
  align-items: center;
  --background: #{$brand};
  position: relative;
  @include left-decorator;
  @include skew-bg;
  color: $white;
  text-transform: uppercase;
  letter-spacing: 0.07em;
  @include media('>=laptop') {
    --border: 847px;
    min-height: 170px;
    font-size: 32px;
    padding-top: 20px;
    padding-bottom: 20px;
  }
  @include media('<laptop') {
    font-size: 14px;
  }
  @include media('<laptop', '>=tablet') {
    min-height: 82px;
    --border: 394px;
    padding-top: 10px;
    padding-bottom: 10px;
  }
  @include media('<tablet') {
    min-height: 115px;
    --border: 168px;
    padding-top: 10px;
    padding-bottom: 10px;
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
        content: '•';
        margin-right: 5px;
        margin-left: 5px;
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
    font-size: 12px;
    max-width: 220px;
  }
}

.bottom {
  @include media('<tablet') {
    position: relative;
    padding-bottom: 15px;
    --background: white;
    --border: 126px;
    @include left-decorator;
    @include skew-bg;
  }
}

.features {
  @include media('>=laptop') {
    padding-top: 40px;
    margin-bottom: 30px;
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
  background-position: center;
  background-repeat: no-repeat;
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
    width: 195px;
    height: 225px;
    left: 160px;
    top: 8px;
    z-index: -1;
  }
}

.imageBottom {
  width: 100%;
  height: var(--bottom-image-height);
  bottom: var(--bottom-line-height);
}
</style>
