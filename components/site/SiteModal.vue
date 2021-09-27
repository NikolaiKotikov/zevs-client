<script>
import Vue from 'vue'
export default Vue.extend({
  name: 'SiteModal',
  functional: true,
  render(_, { parent: { $store }, props, $style }) {
    const Child = $store.state.modal.settings.component
    const childProps = $store.state.modal.settings.props
    return (
      <div
        vOn:click_self={() => $store.dispatch('modal/close')}
        class={$style.el}
      >
        <Child props={childProps} />
      </div>
    )
  },
})
</script>

<style module lang="scss">
.el {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;

  @include media('>=tablet') {
    backdrop-filter: blur(20px);
  }
  @supports not (backdrop-filter: blur(20px)) {
    background-color: rgba(0, 0, 0, 0.5);
  }
}
</style>
