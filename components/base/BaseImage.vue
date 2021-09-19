<script>
import Vue from 'vue'
export default Vue.extend({
  name: 'BaseImage',
  functional: true,
  props: { image: { type: Object, default: () => {} } },
  render(
    _,
    {
      data,
      parent: {
        $config: { strapiURL },
      },
      props: { image },
      $style,
    }
  ) {
    if (!image?.url) {
      return null
    }
    return (
      <img
        {...data}
        src={strapiURL + image.url}
        alt={image?.alternativeText}
        width={image?.width}
        height={image?.height}
      />
    )
  },
})
</script>

<style module lang="scss"></style>
