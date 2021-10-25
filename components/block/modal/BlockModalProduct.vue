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
        <div>
          {this.currentSlideContent?.title ? (
            <span
              class={this.$style.slideTitle}
              domPropsInnerHTML={this.currentSlideContent.title}
            />
          ) : null}
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
              <div class="swiper-pagination" slot="pagination"></div>
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

<style module lang="scss">
.close {
  position: absolute;
  right: 20px;
  top: 20px;

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
  overflow-y: auto;
  // align-items: center;
  @include media('>=tablet') {
    display: grid;
    place-items: center;
    padding-top: 50px;
    padding-bottom: 50px;
    @include container;
  }
  @include media('<tablet') {
    background: white;
  }
}
.el {
  // min-height: 80%;
  position: relative;
  display: grid;
  @include media('>=laptop') {
    padding-bottom: 100px;
    --border: 49%;
  }
  @include media('<laptop', '>=tablet') {
    --border: 40%;
    padding-bottom: 45px;
  }
  @include media('>=tablet') {
    box-shadow: 12px 23px 45px 0 rgba(0, 0, 0, 0.5);
    grid-template-columns: repeat(var(--grid-columns), 1fr);
    gap: var(--grid-gutter);
    --background: #{$brand};
    @include skew-bg;
    background-color: white;
  }
}

.headline {
}

.logo {
  display: block;
  margin-left: auto;
  margin-right: auto;

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
  font-weight: $bold;
  color: white;
  text-align: center;
  text-transform: uppercase;
  @include media('>=laptop') {
    font-size: 40px;
  }
  @include media('<laptop') {
    font-size: 20px;
  }
}

.slideTitle {
  font-weight: $bold;

  display: block;

  @include media('>=laptop') {
    margin-bottom: 80px;
    font-size: 28px;
  }

  @include media('<laptop', '>=tablet') {
    font-size: 18px;
    margin-bottom: 13px;
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
    padding-top: 30px;
    grid-column: 2/7;
  }
  @include media('<laptop', '>=tablet') {
    grid-column: 2/5;
    padding-top: 15px;
  }
  @include media('<tablet') {
    padding-bottom: 10px;
    padding-right: 50px;
    padding-left: 50px;
    --background: #{$brand};
    @include skew-bg;
    --border: 74%;
  }
}

.content {
  @include media('>=laptop') {
    padding-right: 55px;
    grid-column: 8/-1;
    padding-top: 190px;
  }
  @include media('<laptop', '>=tablet') {
    grid-column: 6/-1;
    padding-top: 55px;
    padding-right: 20px;
  }
  @include media('<tablet') {
    padding-right: var(--grid-sides);
    padding-left: var(--grid-sides);
  }
}

.row {
  display: flex;
  justify-content: space-between;
  @include media('>=laptop') {
    font-size: 20px;
    margin-bottom: 18px;
  }
  @include media('<laptop') {
    margin-bottom: 8px;
    font-size: 12px;
  }
}

.rowTitle {
  font-weight: $bold;
  padding-right: 15px;
  width: 60%;
}
.rowValue {
  font-weight: $regular;
  width: 40%;
  flex: none;
  text-align: right;
  word-break: break-all;
}

.slide {
  position: relative;
  &::before {
    --aspect-ratio: #{math.div(520, 362)};
    @include ratio;
    content: '';
    display: block;
    width: 100%;
  }
}

.image {
  position: absolute;
  left: 0;
  top: 0;
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
          width: 100%;
          bottom: 0;
        }
        .swiper-pagination-bullet {
          box-shadow: 0 0 5px black;
          vertical-align: middle;
          background-color: white;
          opacity: 0.6;
          @include media('>=laptop') {
            margin: 0 20px;
            width: 16px;
            height: 16px;
          }
          @include media('<laptop') {
            margin: 0 10px;
            width: 7px;
            height: 7px;
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
