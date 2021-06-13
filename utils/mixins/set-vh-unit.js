// The problem is described here:
// https://css-tricks.com/the-trick-to-viewport-units-on-mobile/
import _debounce from 'lodash/debounce'

export default {
  computed: {
    setNewUnitDebounced() {
      return _debounce(this.setNewUnit, 200)
    },
  },
  methods: {
    calculateNewUnit() {
      return window.innerHeight * 0.01
    },
    setNewUnit() {
      const vh = this.calculateNewUnit()
      document.documentElement.style.setProperty('--vh', `${vh}px`)
    },
  },
  mounted() {
    this.setNewUnit()
    window.addEventListener('resize', this.setNewUnitDebounced)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.setNewUnitDebounced)
  },
}
