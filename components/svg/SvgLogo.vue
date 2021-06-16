<script>
import Vue from 'vue'
export default Vue.extend({
  name: 'SvgLogo',
  functional: true,
  props: {
    theme: {
      type: String,
      default: 'dark',
    },
  },
  render(h, { data, props, $style }) {
    return (
      <svg
        {...data}
        class={$style[props.theme]}
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="206"
        height="100"
        viewBox="0 0 206 100"
      >
        <g data-name="Group 41">
          <path
            class={$style.letter}
            fill="#fff"
            d="M206 17.473h-44.055l-5.577 15.323 18.11 22.985h-24.56l-8.453 22.981h44.273l8.234-22.98.009-.007-18.1-22.978h24.546z"
            data-name="Path 33"
          />
          <path
            class={$style.letter}
            fill="#fff"
            d="M68.28 17.473H22.463l-5.731 15.323h19.8L0 78.762h45.971l8.365-22.985h-16.5z"
            data-name="Path 34"
          />
          <path
            class={$style.letter}
            fill="#fff"
            d="M81.089 55.782l1.394-3.831h23.112l5.577-15.323H88.121l1.394-3.831h23.048l5.577-15.323H72.11L49.801 78.762h46.033l8.366-22.985z"
            data-name="Path 35"
          />
          <path
            fill="#ffa800"
            d="M82.695 44.295H66.186L82.427 0l-44.6 55.705h16.509L38.095 100z"
            data-name="Path 36"
          />
          <path
            class={$style.letter}
            fill="#fff"
            d="M121.976 17.473h22.985l-9.775 26.816 21.45-26.816h19.575l-48.909 61.289H99.666z"
            data-name="Path 37"
          />
        </g>
      </svg>
    )
  },
})
</script>

<style module lang="scss">
.light {
  .letter {
    fill: $white;
  }
}

.dark {
  .letter {
    fill: $brand;
  }
}
</style>
