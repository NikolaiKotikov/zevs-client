<script>
import Vue from 'vue'
import modCatalogDetailed from './block-card-mod-catalog_detailed.scss?module'
import BaseImageVue from '~/components/base/BaseImage.vue'

export default Vue.extend({
  name: 'BlockCard',
  props: {
    mod: {
      type: String,
      default: 'catalog-detailed',
    },
    image: {
      type: Object,
      default: () => {},
    },
    title: {
      type: String,
      default: '',
    },
    caption: {
      type: String,
      default: '',
    },
  },
  render(_) {
    const propModToImportedStyle = { 'catalog-detailed': modCatalogDetailed }
    const mod = propModToImportedStyle[this.mod]

    return (
      <div class={mod.el}>
        {this.image?.url ? (
          <div class={[mod.image]}>
            <BaseImageVue image={this.image} />
          </div>
        ) : null}
        {this.title ? <span class={mod.title}>{this.title}</span> : null}
        {this.caption ? (
          <span class={mod.caption} domPropsInnerHTML={this.caption}></span>
        ) : null}
        {this.mod === 'catalog-detailed' ? (
          <button vOn:click={() => this.$emit('openSlide')} class={mod.button}>
            Подробнее
          </button>
        ) : null}
      </div>
    )
  },
})
</script>

<style lang="scss" module></style>
