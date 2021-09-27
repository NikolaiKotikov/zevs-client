<script>
import Vue from 'vue'
import modHeader from './site-nav-mod-header.scss?module'
import modMenu from './site-nav-mod-menu.scss?module'
export default Vue.extend({
  name: 'SiteNav',
  functional: true,
  props: {
    mod: {
      type: String,
      default: 'header',
    },
  },
  render(h, { props, parent: { $store, $gsap }, $style }) {
    const propModToImportedStyle = { header: modHeader, menu: modMenu }
    const mod = propModToImportedStyle[props.mod]
    const navigation = $store.state.settings?.navigation
    if (!navigation.length) {
      return null
    }
    return (
      <nav class={mod.el}>
        {navigation.map((item) => {
          return (
            <a
              vOn:click_prevent={() =>
                $gsap.to(window, {
                  duration: 1,
                  scrollTo: { y: `#${item?.link?.sectionId}`, offsetY: 100 },
                })
              }
              class={[$style.link, mod.link]}
              href={'#' + item?.link?.sectionId}
            >
              {item?.link?.title}
            </a>
          )
        })}
      </nav>
    )
  },
})
</script>

<style module lang="scss">
.link {
  font-size: 16px;
  @include not-phones-and-tablets {
    &:hover {
      color: $accent;
    }
  }
}
</style>
