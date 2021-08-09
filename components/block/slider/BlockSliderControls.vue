<script>
import Vue from 'vue'
import SvgArrowVue from '~/components/svg/SvgArrow.vue'
export default Vue.extend({
  name: 'BlockSliderControls',
  functional: true,
  props: {
    size: {
      type: String,
      default: 'large',
    },
    id: {
      type: Number,
      default: 1,
    },
  },
  render(h, { props, $style }) {
    return (
      <div class={[$style.controls, $style[props.size]]}>
        <button
          data-control={`prev${props.id}`}
          class={[$style.button, $style.prev]}
        >
          <SvgArrowVue direction={'left'} />
        </button>
        <button
          data-control={`next${props.id}`}
          class={[$style.button, $style.next]}
        >
          <SvgArrowVue direction={'right'} />
        </button>
      </div>
    )
  },
})
</script>

<style module lang="scss">
.large {
  --color: #{$brand};
  @include media('>=laptop') {
    --size: 82px;
  }
  @include media('<laptop') {
    --size: 39px;

    svg {
      width: 9px;
    }
  }
}
.controls {
  @include abs-center;
  width: 100%;
  z-index: 3;

  :global(.swiper-button-disabled) {
    opacity: 0;
    pointer-events: none;
  }
}
.button {
  @include abs-center('vertical');
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: var(--color);
  width: var(--size);
  height: var(--size);
}

.prev {
  left: 0;
  margin-left: calc(var(--size) / 2 * -1);
}
.next {
  margin-right: calc(var(--size) / 2 * -1);
  right: 0;
}
</style>
