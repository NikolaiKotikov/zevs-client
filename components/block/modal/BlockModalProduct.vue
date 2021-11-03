<script>
import Vue from 'vue'
import BlockSliderControlsVue from '../slider/BlockSliderControls.vue'
import BlockButtonCloseVue from '../BlockButtonClose.vue'
import SvgLogoVue from '~/components/svg/SvgLogo.vue'
import BaseImageVue from '~/components/base/BaseImage.vue'

export default Vue.extend({
  name: 'BlockModalProduct',
  props: {
    currentSlideIndex: { type: Number, default: 0 },
    title: { type: String, default: '' },
    slides: { type: Array, default: () => [] },
  },
  data() {
    return {
      activeSlide: 0,
      swiperOption: {
        slidesPerView: 'auto',
        pagination: {
          el: '.swiper-pagination',
        },
        navigation: {
          nextEl: `.${this.$style.controls} button[data-control="next1"]`,
          prevEl: `.${this.$style.controls} button[data-control="prev1"]`,
        },
      },
    }
  },
  computed: {
    currentSlideContent() {
      return this.slides[this.activeSlide]
    },
  },
  mounted() {
    if (this.currentSlideIndex) {
      this.$swiper.slideTo(this.currentSlideIndex, 0)
    }
  },
  methods: {
    handleSlideChange(swiper) {
      this.activeSlide = swiper.activeIndex
    },
    renderSlider() {
      if (!this.slides.length) {
        return null
      }
      return (
        <div
          vSwiper={this.swiperOption}
          vOn:slideChange={(s) => this.handleSlideChange(s)}
        >
          <div class="swiper-wrapper">
            {this.slides.map((slide) => {
              return (
                <div class={[this.$style.slide, 'swiper-slide']}>
                  <BaseImageVue class={this.$style.image} image={slide.image} />
                </div>
              )
            })}
          </div>
        </div>
      )
    },
    renderSlideContent() {
      if (!this.slides.length) {
        return null
      }
      if (!this.currentSlideContent?.specifications?.length) {
        return null
      }
      return (
        <div class={this.$style.contentScrollWrap}>
          {this.currentSlideContent?.title ? (
            <span
              class={this.$style.slideTitle}
              domPropsInnerHTML={this.currentSlideContent.title}
            />
          ) : null}
          <div class={this.$style.contentScroll}>
            {this.currentSlideContent.specifications.map((item, index) => {
              return (
                <div key={'row' + index} class={this.$style.row}>
                  <span
                    class={this.$style.rowTitle}
                    domPropsInnerHTML={item.title}
                  />
                  <span
                    class={this.$style.rowValue}
                    domPropsInnerHTML={item.value}
                  />
                </div>
              )
            })}
          </div>
        </div>
      )
    },
  },
  render(_) {
    return (
      <div class={this.$style.wrapper}>
        <div class={this.$style.el}>
          <BlockButtonCloseVue
            vOn:click={() => this.$store.dispatch('modal/close')}
            class={this.$style.close}
          />
          <div class={this.$style.slider}>
            <div class={this.$style.headline}>
              <SvgLogoVue theme={'light'} class={this.$style.logo} />
              {this.title ? (
                <h2 class={this.$style.title} domPropsInnerHTML={this.title} />
              ) : null}
            </div>
            <div class={this.$style.sliderContainer}>
              {this.renderSlider()}
              <div class="swiper-pagination" slot="pagination" />
              <BlockSliderControlsVue class={this.$style.controls} />
            </div>
          </div>
          <div class={this.$style.content}>{this.renderSlideContent()}</div>
        </div>
      </div>
    )
  },
})
</script>

<style lang="scss" module>
.close {
  position: absolute;
  top: 20px;
  right: 20px;

  @include media('<laptop') {
    width: 24px;
    height: 24px;
    svg {
      width: 24px;
      height: 24px;
    }
  }
}

.wrapper {
  height: 100%;
  // align-items: center;
  @include media('>=tablet') {
    display: grid;
    padding-top: 50px;
    padding-bottom: 50px;
    place-items: center;
    @include container;
  }
  @include media('<tablet') {
    overflow-y: auto;
    background: white;
  }
}

.el {
  position: relative;
  display: grid;
  @include media('>=laptop') {
    padding-bottom: 100px;
    --border: 35%;
  }
  @include media('<laptop', '>=tablet') {
    padding-bottom: 45px;
    --border: 40%;
  }
  @include media('>=tablet') {
    grid-template-columns: repeat(var(--grid-columns), 1fr);
    gap: var(--grid-gutter);
    height: 80vh;
    @include skew-bg;
    background-color: white;
    box-shadow: 12px 23px 45px 0 rgba(0, 0, 0, 0.5);
    --background: #{$brand};
  }
}

.headline {
}

.logo {
  display: block;
  margin-right: auto;
  margin-left: auto;

  @include media('>=laptop') {
    width: 206px;
    margin-bottom: 65px;
  }
  @include media('<laptop', '>=tablet') {
    margin-bottom: 40px;
  }
  @include media('<laptop') {
    width: 95px;
  }
}

.title {
  color: white;
  font-weight: $bold;
  text-align: center;
  text-transform: uppercase;
  text-shadow: 1px 1px 5px black;
  @include media('>=laptop') {
    font-size: 40px;
  }
  @include media('<laptop') {
    font-size: 20px;
  }
}

.slideTitle {
  display: block;

  font-weight: $bold;

  @include media('>=laptop') {
    margin-bottom: 80px;
    font-size: 28px;
  }

  @include media('<laptop', '>=tablet') {
    margin-bottom: 13px;
    font-size: 18px;
  }

  @include media('<tablet') {
    padding-top: 20px;
    padding-bottom: 20px;
    font-size: 16px;
    text-align: center;
  }
}

.sliderContainer {
  position: relative;
  @include media('>=tablet') {
    padding-top: 60px;
    padding-bottom: 60px;
  }
  @include media('<tablet') {
    padding-top: 20px;
    padding-bottom: 20px;
  }
}

.slider {
  @include media('>=laptop') {
    grid-column: 2/7;
    padding-top: 30px;
  }
  @include media('<laptop', '>=tablet') {
    grid-column: 2/5;
    padding-top: 15px;
  }
  @include media('<tablet') {
    padding-right: 50px;
    padding-bottom: 10px;
    padding-left: 50px;
    --background: #{$brand};
    @include skew-bg;
    --border: 74%;
  }
}

.content {
  @include media('>=laptop') {
    grid-column: 8/-1;
    padding-top: 190px;
    padding-right: 25px;
  }
  @include media('>=tablet') {
    overflow-y: hidden;
    height: 100%;
  }
  @include media('<laptop', '>=tablet') {
    grid-column: 6/-1;
    padding-top: 55px;
  }
  @include media('<tablet') {
    padding-right: var(--grid-sides);
    padding-left: var(--grid-sides);
  }
}

.contentScrollWrap {
  @include media('>=tablet') {
    display: flex;
    overflow-y: hidden;
    flex-direction: column;
    height: 100%;
  }
}

.contentScroll {
  --scrollbarBG: #cfd8dc;
  --thumbBG: #{$brand};
  @include media('>=laptop') {
    padding-right: 30px;
  }
  @include media('>=tablet') {
    overflow-y: auto;
    &::-webkit-scrollbar {
      width: 11px;
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
  @include media('<laptop', '>=tablet') {
    padding-right: 20px;
  }
}

.row {
  display: flex;
  justify-content: space-between;
  @include media('>=laptop') {
    margin-bottom: 18px;
    font-size: 20px;
  }
  @include media('<laptop') {
    margin-bottom: 8px;
    font-size: 12px;
  }
}

.rowTitle {
  width: 60%;
  padding-right: 15px;
  font-weight: $bold;
}

.rowValue {
  flex: none;
  width: 40%;
  font-weight: $regular;
  text-align: right;
  word-break: break-all;
}

.slide {
  position: relative;

  &::before {
    display: block;
    @include ratio;
    width: 100%;
    content: '';
    --aspect-ratio: #{math.div(520, 362)};
  }
}

.image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.controls {
  [data-control='prev1'],
  [data-control='next1'] {
    @include media('>=laptop') {
      width: 52px;
      height: 52px;
      svg {
        width: 14px;
      }
    }
    @include media('<laptop') {
      width: 24px;
      height: 24px;
    }
  }

  [data-control='prev1'] {
    --color: white;
    --fill: #{$brand};
    @include media('>=laptop') {
      margin-left: -15%;
    }
    @include media('<laptop', '>=tablet') {
      margin-left: -24%;
    }
    @include media('<tablet') {
      margin-left: -30px;
    }
  }

  [data-control='next1'] {
    @include media('>=laptop') {
      margin-right: -15%;
    }
    @include media('<laptop', '>=tablet') {
      margin-right: -24%;
    }
    @include media('<tablet') {
      margin-right: -30px;
    }
  }
}

.wrapper {
  .el {
    .slider {
      :global {
        .swiper-pagination {
          bottom: 0;
          width: 100%;
        }

        .swiper-pagination-bullet {
          opacity: 0.6;
          background-color: white;
          box-shadow: 0 0 5px black;
          vertical-align: middle;
          @include media('>=laptop') {
            width: 16px;
            height: 16px;
            margin: 0 20px;
          }
          @include media('<laptop') {
            width: 7px;
            height: 7px;
            margin: 0 10px;
          }
        }

        .swiper-pagination-bullet-active {
          opacity: 1;
          @include media('>=laptop') {
            width: 20px;
            height: 20px;
          }
          @include media('<laptop') {
            width: 8px;
            height: 8px;
          }
        }
      }
    }
  }
}
</style>
