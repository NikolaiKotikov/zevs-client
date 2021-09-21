<script>
import Vue from 'vue'
import SvgPhone from '../../svg/SvgPhone.vue'
import modHeader from './site-phone-mod-header.scss?module'
import modFooter from './site-phone-mod-footer.scss?module'
export default Vue.extend({
  name: 'SitePhone',
  functional: true,
  props: {
    mod: {
      type: String,
      default: 'header',
    },
  },
  render(h, { props, parent: { $store }, $style }) {
    const phone = $store.state.settings?.phone
    const propModToImportedStyle = { header: modHeader, footer: modFooter }
    const mod = propModToImportedStyle[props.mod]
    return (
      <a class={[$style.el, mod.el]} href={phone?.href}>
        <SvgPhone class={mod.icon} />
        <span class={[$style.title, mod.title]}>{phone?.title}</span>
      </a>
    )
  },
})
</script>

<style module lang="scss">
.el {
  display: flex;
  align-items: center;

  .title {
    color: $white;
    transition: color $transition-duration;
  }

  @include not-phones-and-tablets {
    &:hover {
      .title {
        color: $accent;
      }
    }
  }
}
</style>
