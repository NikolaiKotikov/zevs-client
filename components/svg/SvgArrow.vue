<script>
import Vue from 'vue'
export default Vue.extend({
  name: 'SvgArrow',
  functional: true,
  props: {
    direction: {
      type: String,
      default: 'left',
    },
  },
  render(h, { props, data, $style }) {
    return (
      <svg
        {...data}
        class={[$style[props.direction], $style.el]}
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="23.166"
        height="40.676"
        viewBox="0 0 23.166 40.676"
      >
        <path
          fill="none"
          stroke="#fff"
          stroke-width="4"
          d="M1.414 1.414l18.924 18.924L1.414 39.262"
          data-name="Path 32"
        />
      </svg>
    )
  },
})
</script>

<style module lang="scss">
.el {
  path {
    stroke: var(--fill, white);
  }
}
.left {
  transform: rotate(180deg);
}
</style>
