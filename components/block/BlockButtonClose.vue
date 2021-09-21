<script>
import Vue from 'vue'
export default Vue.extend({
  name: 'BlockButtonClose',
  functional: true,
  render(_, { data, props, $style }) {
    return (
      <button {...data}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="52"
          height="52"
          viewBox="0 0 52 52"
        >
          <g data-name="Group 50" transform="translate(-1508 -226)">
            <circle
              cx="26"
              cy="26"
              r="26"
              fill="#fcb913"
              data-name="Ellipse 1"
              transform="translate(1508 226)"
            />
            <path
              fill="none"
              stroke="#fff"
              stroke-width="4"
              d="m1520.5 238.5 28 28"
              data-name="Line 3"
            />
            <path
              fill="none"
              stroke="#fff"
              stroke-width="4"
              d="m1548.5 238.5-28 28"
              data-name="Line 4"
            />
          </g>
        </svg>
      </button>
    )
  },
})
</script>

<style module lang="scss"></style>
