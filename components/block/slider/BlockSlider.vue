<script>
import Vue from 'vue'
export default Vue.extend({
  name: 'BlockSlider',
  props: {
    mod: {
      type: Number,
      default: 1,
    },
    slides: {
      type: Array,
      default: () => [],
    },
    hasControls: {
      type: Boolean,
      default: true,
    },
    swiperOption: {
      type: Object,
      default: () => ({
        slidesPerView: 'auto',
        navigation: {
          nextEl: 'button[data-control="next"]',
          prevEl: 'button[data-control="prev"]',
        },
      }),
    },
    slide: {
      type: Object,
      default: () => ({
        component: 'block-card',
        mod: 'catalog-detailed',
      }),
    },
  },
  render(h) {
    return (
      <div vSwiper={this.swiperOption}>
        <div class="swiper-wrapper">
          {this.slides.map((slide, index) => {
            return (
              <div class="swiper-slide">
                <this.slide.component
                  vOn:openSlide={() => this.$emit('openSlide', index)}
                  mod={this.slide.mod}
                  {...{ props: slide }}
                />
              </div>
            )
          })}
        </div>
      </div>
    )
  },
})
</script>

<style module lang="scss"></style>
