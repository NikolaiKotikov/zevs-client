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
      if (!props.thumbs?.length) {
        return null
      }
      return props.thumbs.map((thumb) => {
        return (
          <div class={$style.thumb}>
            <img src={strapiURL + thumb.url} />
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

<style module lang="scss">
.el {
  display: grid;
  @include media('>=laptop') {
    grid-template-columns: 503px 650px;
    column-gap: 163px;
  }
  @include media('<laptop', '>=tablet') {
    grid-template-columns: 242px 300px;
    column-gap: 66px;
  }
}

.controls {
  @include abs-center;
  width: 100%;
  z-index: 3;
}

.left {
  position: relative;
  min-width: 0;

  :global(.swiper-container) {
    border-radius: 20px;
    box-shadow: 6px 11px 21px 0 rgba(0, 0, 0, 0.23);
  }

  :global(.swiper-slide) {
    height: auto;
    display: flex;
    overflow: hidden;
  }
}

.right {
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
    font-size: 40px;
    margin-bottom: 30px;
  }
  @include media('<laptop', '>=tablet') {
    font-size: 20px;
    margin-bottom: 20px;
  }

  @include media('<tablet') {
    font-size: 16px;
    margin-bottom: 10px;
  }
}

.logo {
  position: absolute;
  top: 20px;
  left: 42px;
  width: 79px;
  z-index: 2;
}

.thumbs {
  @include media('<tablet') {
    display: none;
  }
  @include media('>=tablet') {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }

  @include media('>=laptop') {
    gap: 16px;
  }

  @include media('<laptop', '>=tablet') {
    gap: 8px;
  }
}

.thumb {
  background: $brand;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 5px 11px 21px 0 rgba(0, 0, 0, 0.23);

  @include media('>=laptop') {
    height: 181px;
    padding: 23px;
  }
  @include media('<laptop', '>=tablet') {
    height: 88px;
    padding: 11px;
  }
}
</style>
