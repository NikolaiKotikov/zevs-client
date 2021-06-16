<script>
import Vue from 'vue'
export default Vue.extend({
  name: 'SiteButtonBurger',
  data() {
    return {
      animation: {},
    }
  },
  computed: {
    isMenuOpened() {
      return this.$store.state.menu.isOpened
    },
  },
  watch: {
    isMenuOpened(nv) {
      if (nv) {
        this.animation.play()
      } else {
        this.animation.reverse()
      }
    },
  },
  mounted() {
    this.animation = this.toggleAnimation().duration(0.5)
  },
  methods: {
    toggleMenu() {
      this.$store.dispatch('menu/toggle')
    },
    toggleAnimation() {
      const top = `.${this.$style.el} .${this.$style.line}:first-child`
      const middle = `.${this.$style.el} .${this.$style.line}:nth-child(2)`
      const bottom = `.${this.$style.el} .${this.$style.line}:last-child`
      return this.$gsap
        .timeline({ paused: true })
        .to(top, { top: '50%', yPercent: -50 })
        .to(bottom, { top: '50%', yPercent: -50 }, '<')
        .to(middle, { scale: 0 })
        .to(top, { rotate: 45 }, '<')
        .to(bottom, { rotate: -45 }, '<')
    },
  },
  render(h) {
    return (
      <button vOn:click={this.toggleMenu} class={this.$style.el}>
        <span aria-hidden="true" class={this.$style.line}></span>
        <span aria-hidden="true" class={this.$style.line}></span>
        <span aria-hidden="true" class={this.$style.line}></span>
      </button>
    )
  },
})
</script>

<style module lang="scss">
.el {
  @include media('>=laptop') {
    display: none;
  }
  @include media('<laptop') {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    --background: #{$white};
  }
  @include media('<laptop', '>=tablet') {
    width: 42px;
    height: 29px;
  }
  @include media('<tablet') {
    width: 18px;
    height: 10px;
  }
}

.line {
  @include media('<laptop') {
    background: var(--background);
    position: absolute;
    width: 100%;

    &:first-child {
      top: 0;
    }
    &:nth-child(2) {
      top: 50%;
      transform: translateY(-50%);
    }
    &:last-child {
      bottom: 0;
    }
  }
  @include media('<laptop', '>=tablet') {
    height: 5px;
  }
  @include media('<tablet') {
    height: 2px;
  }
}
</style>
