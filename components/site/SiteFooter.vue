<script>
import Vue from 'vue'
export default Vue.extend({
  name: 'SiteFooter',
  functional: true,
  render(h, { data, props, parent: { $store }, $style }) {
    const copyright = $store.state.settings?.copyright?.title
    return (
      <footer {...data} class={$style.footer}>
        <span>{copyright}</span>
      </footer>
    )
  },
})
</script>

<style module lang="scss">
.footer {
  display: flex;
  justify-content: center;
  align-items: center;
  background: $accent;
  color: $white;
  @include media('>=laptop') {
    min-height: 64px;
    font-size: 14px;
  }
  @include media('<laptop') {
    min-height: 31px;
    font-size: 12px;
  }
}
</style>
