<script>
import Vue from 'vue'
import SvgLogoVue from '../svg/SvgLogo.vue'
import BlockSliderVue from './slider/BlockSlider.vue'
import BlockSliderControlsVue from './slider/BlockSliderControls.vue'

export default Vue.extend({
  name: 'BlockCatalogItem',
  functional: true,
  props: {
    id: {
      type: Number,
      default: 1,
    },
    title: {
      type: String,
      default: 'Default Title',
    },
    thumbs: {
      type: Array,
      default: () => [],
    },
    products: {
      type: Array,
      default: () => [],
    },
  },
  render(
    h,
    {
      props,
      data,
      parent: {
        $store,
        $config: { strapiURL },
      },
      $style,
    }
  ) {
    const thumbs = () => {
      if (!props.products?.length) {
        return null
      }
      return props.products.map((thumb, i) => {
        return (
          <div
            vOn:click={() => {
              $store.dispatch('modal/open', {
                component: 'block-modal-product',
                props: {
                  slides: props.products,
                  title: props.title,
                  currentSlideIndex: i,
                },
              })
            }}
            class={$style.thumb}
          >
            <img src={strapiURL + thumb.image.url} />
          </div>
        )
      })
    }
    const swiperOption = {
      slidesPerView: 'auto',
      navigation: {
        nextEl: `.${$style.el} button[data-control='next${props.id}']`,
        prevEl: `.${$style.el} button[data-control='prev${props.id}']`,
      },
    }
    return (
      <div {...data} class={$style.el}>
        <div class={$style.left}>
          <SvgLogoVue class={$style.logo} />
          <BlockSliderControlsVue class={$style.controls} id={props.id} />
          <BlockSliderVue
            vOn:openSlide={(i) =>
              $store.dispatch('modal/open', {
                component: 'block-modal-product',
                props: {
                  slides: props.products,
                  title: props.title,
                  currentSlideIndex: i,
                },
              })
            }
            slides={props.products}
            swiperOption={swiperOption}
          />
        </div>
        <div class={$style.right}>
          <h2 class={$style.title} domPropsInnerHTML={props.title} />
          <div class={$style.thumbs}>{thumbs()}</div>
        </div>
      </div>
    )
  },
})
</script>

<style lang="scss" module>
.el {
  display: grid;
  @include media('>=laptop') {
    grid-template-columns: 503px minmax(0, 1fr);
    column-gap: 163px;
  }
  @include media('<laptop', '>=tablet') {
    grid-template-columns: 242px minmax(0, 1fr);
    column-gap: 66px;
  }
}

.controls {
  @include abs-center;
  z-index: 3;
  width: 100%;
}

.left {
  position: relative;
  min-width: 0;

  :global(.swiper-container) {
    border-radius: 20px;
    box-shadow: 6px 11px 21px 0 rgba(0, 0, 0, 0.23);
  }

  :global(.swiper-slide) {
    display: flex;
    overflow: hidden;
    height: auto;
  }
}

.right {
  //overflow-x: auto;
  @include media('>=tablet') {
    align-self: center;
  }
  @include media('<tablet') {
    order: -1;
    text-align: center;
  }
}

.title {
  font-weight: $bold;
  text-transform: uppercase;
  @include media('>=laptop') {
    margin-bottom: 30px;
    font-size: 40px;
  }
  @include media('<laptop', '>=tablet') {
    margin-bottom: 20px;
    font-size: 20px;
  }

  @include media('<tablet') {
    margin-bottom: 10px;
    font-size: 16px;
  }
}

.logo {
  position: absolute;
  top: 20px;
  left: 42px;
  z-index: 2;
  width: 79px;
}

.thumbs {
  overflow-x: auto;
  padding-bottom: 20px;
  @include media('<tablet') {
    display: none;
  }
  @include media('>=tablet') {
    display: flex;
    grid-template-columns: repeat(3, 1fr);
  }

  @include media('>=laptop') {
    gap: 16px;
  }

  @include media('<laptop', '>=tablet') {
    gap: 8px;
  }
  --scrollbarBG: #cfd8dc;
  --thumbBG: #{$brand};

  &::-webkit-scrollbar {
    height: 11px;
  }

  & {
    scrollbar-width: thin;
    scrollbar-color: var(--thumbBG) var(--scrollbarBG);
  }

  &::-webkit-scrollbar-track {
    background: var(--scrollbarBG);
  }

  &::-webkit-scrollbar-thumb {
    border: 3px solid var(--scrollbarBG);
    border-radius: 6px;
    background-color: var(--thumbBG);
  }
}

.thumb {
  display: flex;
  flex: none;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  background: $brand;
  cursor: pointer;

  @include media('>=tablet') {
    width: 206px;
    height: 181px;
    padding: 23px;
  }

  &:hover {
    box-shadow: 5px 11px 21px 0 rgba(0, 0, 0, 0.23);
  }

  //@include media('<laptop', '>=tablet') {
  //  height: 88px;
  //  padding: 11px;
  //}
}
</style>
