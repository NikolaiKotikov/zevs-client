<script>
import Vue from 'vue'
export default Vue.extend({
  name: 'BlockFeature',
  functional: true,
  props: {
    features: {
      type: Array,
      default: () => [],
    },
  },
  render(
    h,
    {
      data,
      props,
      parent: {
        $config: { strapiURL },
      },
      $style,
    }
  ) {
    if (!props.features?.length) {
      return null
    }
    return (
      <ul {...data}>
        {props.features.map((feature) => {
          const url = strapiURL + feature.icon.url
          return (
            <li class={$style.item}>
              <span
                class={$style.icon}
                style={`background-image: url(${url})`}
              ></span>
              <span>{feature.title || ''}</span>
            </li>
          )
        })}
      </ul>
    )
  },
})
</script>

<style module lang="scss">
.item {
  display: flex;
  align-items: center;
  font-weight: $bold;
  @include media('>=laptop') {
    margin-bottom: 20px;
    font-size: 28px;
  }
  @include media('<laptop') {
    margin-bottom: 5px;
    font-size: 14px;
  }
}

.icon {
  width: var(--size);
  height: var(--size);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  @include media('>=laptop') {
    --size: 60px;
    margin-right: 35px;
  }
  @include media('<laptop', '>=tablet') {
    --size: 29px;
    margin-right: 14px;
  }
  @include media('<tablet') {
    --size: 18px;
    margin-right: 5px;
  }
}
</style>
