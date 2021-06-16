<template>
  <div :class="$style.el">
    <SiteHeader />
    <Nuxt />
    <SiteFooter :class="$style.footer" />
    <transition name="slide">
      <SiteMenu v-if="isMenuOpened" />
    </transition>
  </div>
</template>

<script>
import CloseMenuOnWindowResize from '~/utils/mixins/close-menu-on-window-resize'
import SiteHeader from '~/components/site/SiteHeader.vue'
import SiteMenu from '~/components/site/SiteMenu.vue'
import SiteFooter from '~/components/site/SiteFooter.vue'

export default {
  name: 'LayoutDefault',
  components: { SiteHeader, SiteMenu, SiteFooter },
  mixins: [CloseMenuOnWindowResize],
  computed: {
    isMenuOpened() {
      return this.$store.state.menu.isOpened
    },
  },
}
</script>

<style module lang="scss">
.el {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.footer {
  margin-top: auto;
}
</style>
