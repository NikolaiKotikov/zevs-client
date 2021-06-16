export default {
  mounted() {
    const mediaQuery = window.matchMedia('(min-width: 1600px)')
    mediaQuery.addEventListener('change', this.handleLaptopChange)
  },
  methods: {
    handleLaptopChange(e) {
      if (e.matches) {
        this.$store.dispatch('menu/close')
      }
    },
  },
}
