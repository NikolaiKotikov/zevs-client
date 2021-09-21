<script>
import Vue from 'vue'
import SvgMailVue from '../svg/SvgMail.vue'

export default Vue.extend({
  name: 'SiteMail',
  functional: true,
  render(_, { parent: { $store }, props, $style }) {
    const email = $store.state.settings.email || {}
    const href = email?.href
    const title = email?.title
    if (!href || !title) {
      return null
    }
    return (
      <a class={$style.el} href={href}>
        <SvgMailVue />
        {title}
      </a>
    )
  },
})
</script>

<style module lang="scss">
.el {
  display: flex;
  align-items: center;

  @include media('>=laptop') {
    font-size: 33px;
  }
  @include media('<laptop') {
    font-size: 16px;
  }
}
</style>
