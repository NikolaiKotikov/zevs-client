<script>
import Vue from 'vue'
export default Vue.extend({
  name: 'SiteFooter',
  functional: true,
  render(h, { data, props, $style }) {
    return (
      <footer {...data} class={$style.footer}>
        Footer
      </footer>
    )
  },
})
</script>

<style module lang="scss">
.footer {
  // demo
  background: $accent;
  color: $white;
  height: 50px;
}
</style>
