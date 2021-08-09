<script>
import Vue from 'vue'
import BlockCatalogItemVue from '../block/BlockCatalogItem.vue'
export default Vue.extend({
  name: 'SectionCatalog',
  functional: true,
  props: {
    link: {
      type: Object,
      default: () => ({}),
    },
    items: {
      type: Array,
      default: () => [],
    },
  },
  render(h, { props, parent: { $global }, $style }) {
    const items = () => {
      if (!props.items.length) {
        return null
      }
      return (
        <ul class={[$global.container, $style.list]}>
          {props.items.map((item, idx) => {
            return (
              <li>
                <BlockCatalogItemVue
                  title={item.title}
                  thumbs={item.thumbs}
                  products={item.products}
                  id={idx}
                />
              </li>
            )
          })}
        </ul>
      )
    }
    return (
      <section class={$style.el} id={props.link.sectionId}>
        {items()}
      </section>
    )
  },
})
</script>

<style module lang="scss">
.el {
  overflow-x: hidden;
  --background: #{$accent};
  --border: 34%;
  @include skew-bg;
  @include media('>=laptop') {
    padding-top: 80px;
    padding-bottom: 80px;
  }
  @include media('>=tablet', '<laptop') {
    padding-top: 40px;
    padding-bottom: 40px;
  }
  @include media('<tablet') {
    padding-top: 20px;
    padding-bottom: 30px;
  }
}

.list {
  display: grid;
  @include media('>=laptop') {
    row-gap: 60px;
  }
  @include media('>=tablet', '<laptop') {
    row-gap: 40px;
  }
  @include media('<tablet') {
    row-gap: 20px;
  }
}
</style>
