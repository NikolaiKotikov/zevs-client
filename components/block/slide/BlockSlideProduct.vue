<script>
import Vue from 'vue'
import BaseImageVue from '~/components/base/BaseImage.vue'
const Items = {
  functional: true,
  props: ['$style', 'items'],
  render(_, { props: { $style, items } }) {
    if (!items?.length) {
      return null
    }
    return (
      <div>
        {items.map((item) => {
          return (
            <div class={$style.row}>
              <span class={$style.rowTitle} domPropsInnerHTML={item.title} />
              <span class={$style.rowValue} domPropsInnerHTML={item.value} />
            </div>
          )
        })}
      </div>
    )
  },
}
export default Vue.extend({
  name: 'BlockSlideProduct',
  functional: true,
  props: {
    title: { type: String, default: '' },
    image: { type: Object, default: () => {} },
    specifications: { type: Array, default: () => [] },
  },
  render(_, { data, props, $style }) {
    return (
      <div {...data} class={$style.el}>
        <div class={$style.media}>
          <BaseImageVue class={$style.image} image={props.image} />
        </div>
        <div class={$style.content}>
          {props.title ? <h2 domPropsInnerHTML={props.title}></h2> : null}
          <Items items={props.specifications} $style={$style} />
        </div>
      </div>
    )
  },
})
</script>

<style module lang="scss">
.el {
  display: grid;

  @include media('>=tablet') {
    grid-template-columns: repeat(var(--grid-columns), 1fr);
    gap: var(--grid-gutter);
  }
}

.media {
  position: relative;
  @include media('>=laptop') {
    grid-column: 2/7;
  }
  @include media('<laptop', '>=tablet') {
    grid-column: 2/5;
  }
  &::before {
    --aspect-ratio: #{math.div(520, 362)};
    @include ratio;
    content: '';
    display: block;
    width: 100%;
  }
}
.image {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.content {
  @include media('>=laptop') {
    grid-column: 8/-1;
  }
  @include media('<laptop', '>=tablet') {
    grid-column: 6/-1;
  }
}

.row {
  display: flex;
  justify-content: space-between;
}
</style>
