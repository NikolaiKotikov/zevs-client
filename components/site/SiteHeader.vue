<script>
import Vue from 'vue'
export default Vue.extend({
  name: 'SiteHeader',
  functional: true,
  render(h, { data, props, $style }) {
    return (
      <header {...data} class={$style.header}>
        Header
      </header>
    )
  },
})
</script>

<style module lang="scss">
.header {
  // demo
  background: $black;
  color: $white;
  height: 50px;
}
</style>
