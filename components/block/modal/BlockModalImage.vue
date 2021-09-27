<script>
import Vue from 'vue'
import BlockButtonCloseVue from '../BlockButtonClose.vue'
import BaseImageVue from '~/components/base/BaseImage.vue'
export default Vue.extend({
  name: 'BlockModalImage',
  functional: true,
  props: {
    image: { type: Object, default: () => ({}) },
  },
  render(_, { parent: { $store }, props, $style }) {
    return (
      <div class={$style.el}>
        <div class={$style.imageWrapper}>
          <BlockButtonCloseVue
            vOn:click={() => $store.dispatch('modal/close')}
            class={$style.close}
          />
          <BaseImageVue class={$style.image} image={props.image} />
        </div>
      </div>
    )
  },
})
</script>

<style module lang="scss">
.el {
  position: relative;
  padding-top: 50px;
  padding-bottom: 50px;
  padding-left: 50px;
  padding-right: 50px;
  display: grid;
  place-items: center;
  height: 100%;
  overflow-y: auto;
}

.imageWrapper {
  position: relative;
  max-width: max-content;
}

.image {
  margin-left: auto;
  margin-right: auto;
}

.close {
  position: absolute;
  right: -25px;
  top: -25px;

  @include media('<laptop') {
    width: 24px;
    height: 24px;
    right: -12px;
    top: -12px;
    svg {
      width: 24px;
      height: 24px;
    }
  }
}
</style>
