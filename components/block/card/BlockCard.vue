<script>
import Vue from 'vue'
import modCatalogDetailed from './block-card-mod-catalog_detailed.scss?module'
export default Vue.extend({
  name: 'BlockCard',
  functional: true,
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
  render(
    h,
    {
      props,
      data,
      parent: {
        $config: { strapiURL },
      },
      $style,
    }
  ) {
    const propModToImportedStyle = { 'catalog-detailed': modCatalogDetailed }
    const mod = propModToImportedStyle[props.mod]

    const image = () => {
      if (!props.image?.url) {
        return null
      }
      const src = strapiURL + props.image.url
      return <img src={src} class={[mod.image]}></img>
    }
    const title = () => {
      return props.title ? <span class={mod.title}>{props.title}</span> : null
    }
    const caption = () => {
      return props.caption ? (
        <span class={mod.caption} domPropsInnerHTML={props.caption}></span>
      ) : null
    }

    const button = () => {
      return props.mod === 'catalog-detailed' ? (
        <button class={mod.button}>Подробнее</button>
      ) : null
    }

    return (
      <div class={mod.el}>
        {image()}
        {title()}
        {caption()}
        {button()}
      </div>
    )
  },
})
</script>

<style module lang="scss"></style>
