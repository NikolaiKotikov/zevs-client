<script>
import Vue from 'vue'
import SvgLogo from '../svg/SvgLogo.vue'
import SiteNav from './nav/SiteNav.vue'
import SitePhone from './phone/SitePhone.vue'
import SiteButtonBurgerVue from './SiteButtonBurger.vue'
export default Vue.extend({
  name: 'SiteHeader',
  functional: true,
  render(h, { data, props, $style, parent: { $global } }) {
    return (
      <header {...data} class={$style.header}>
        <div class={[$global.container, $style.container]}>
          <SvgLogo class={$style.logo} theme={'light'} />
          <SiteNav mod={'header'} />
          <SitePhone />
          <SiteButtonBurgerVue />
        </div>
      </header>
    )
  },
})
</script>

<style module lang="scss">
.header {
  position: fixed;
  z-index: $z-layout-header;
  left: 0;
  top: 0;
  width: 100%;
  display: flex;
  align-items: center;
  background: $brand;
  color: $white;
  min-height: var(--header-height);
}

.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  @include media('>=laptop') {
    width: 206px;
  }
  @include media('<laptop', '>=tablet') {
    width: 99px;
  }
  @include media('<tablet') {
    width: 41px;
  }
}
</style>
