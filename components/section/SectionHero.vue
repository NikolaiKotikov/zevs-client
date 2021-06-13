<script>
import Vue from 'vue'
export default Vue.extend({
  name: 'SectionHero',
  functional: true,
  props: {
    title: {
      type: String,
      default: '',
    },
  },
  render(h, { props, $style }) {
    return <div>{props.title}</div>
  },
})
</script>

<style module lang="scss"></style>
