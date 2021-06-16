<script>
import Vue from 'vue'
import SiteNavVue from './nav/SiteNav.vue'
export default Vue.extend({
  name: 'SiteMenu',
  functional: true,
  render(h, { props, $style }) {
    return (
      <div class={$style.el}>
        <SiteNavVue mod={'menu'} />
      </div>
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
    position: fixed;
    top: var(--header-height);
    right: 0;
    z-index: $z-layout-menu;
    box-shadow: -3px 3px 6px 0px rgba(0, 0, 0, 0.23);
  }
}
</style>
