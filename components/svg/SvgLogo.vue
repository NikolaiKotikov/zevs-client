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
        xmlns="http://www.w3.org/2000/svg"
        xml:space="preserve"
        width="284"
        height="356"
        viewBox="0 0 284 356"
      >
        <rect width="100%" height="100%" fill="none" />
        <g className="currentLayer">
          <g>
            <path
              fill="#004D71"
              d="M129.177 118.478h-64.5l21.2-50.6h138.2l-70.1 83.9h-52.9l28.1-33.3zm15.2 152.7 25.7-65.7h-112l-57.8 67.1h143.6l.5-1.4z"
            />
            <g fill="#FF8300">
              <path d="m160.877 151.678 124-148.4-61.5 148.4h-62.5zm15.3 53.8-58.3 148.5 127.3-148.5h-69zM176.777 199.678h-27.2l36.3-42.6h27.3l-33.9 39.8-2.5 2.8zm87.8-42.7h-42.1v.1l-2.4 2.8-33.9 39.8h60.3l36.1-42.4.2-.2-18.2-.1zm-29.8 29.9h-10.4l14.5-17.1h10.4l-14.5 17.1zm-77.8-29.9H43.577l-11.3 12.8h24.7l-25.4 29.8h29.9l25.4-29.9h8.8l-3.8 4.7-21.4 25.2h29.9l4-4.7 5-5.9h.5l.8 10.5h29.6l.3-.4-.2-1.6-1.2-8.5h10l27.4-32.1-19.6.1zm-19.1 19.4h-17.5l5.6-6.5h17.6l-5.7 6.5z" />
            </g>
          </g>
        </g>
      </svg>
      // <svg
      //   {...data}
      //   class={$style[props.theme]}
      //   aria-hidden="true"
      //   xmlns="http://www.w3.org/2000/svg"
      //   width="206"
      //   height="100"
      //   viewBox="0 0 206 100"
      // >
      //   <g data-name="Group 41">
      //     <path
      //       class={$style.letter}
      //       fill="#fff"
      //       d="M206 17.473h-44.055l-5.577 15.323 18.11 22.985h-24.56l-8.453 22.981h44.273l8.234-22.98.009-.007-18.1-22.978h24.546z"
      //       data-name="Path 33"
      //     />
      //     <path
      //       class={$style.letter}
      //       fill="#fff"
      //       d="M68.28 17.473H22.463l-5.731 15.323h19.8L0 78.762h45.971l8.365-22.985h-16.5z"
      //       data-name="Path 34"
      //     />
      //     <path
      //       class={$style.letter}
      //       fill="#fff"
      //       d="M81.089 55.782l1.394-3.831h23.112l5.577-15.323H88.121l1.394-3.831h23.048l5.577-15.323H72.11L49.801 78.762h46.033l8.366-22.985z"
      //       data-name="Path 35"
      //     />
      //     <path
      //       fill="#ffa800"
      //       d="M82.695 44.295H66.186L82.427 0l-44.6 55.705h16.509L38.095 100z"
      //       data-name="Path 36"
      //     />
      //     <path
      //       class={$style.letter}
      //       fill="#fff"
      //       d="M121.976 17.473h22.985l-9.775 26.816 21.45-26.816h19.575l-48.909 61.289H99.666z"
      //       data-name="Path 37"
      //     />
      //   </g>
      // </svg>
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
