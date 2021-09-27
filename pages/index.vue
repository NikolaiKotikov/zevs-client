<template>
  <main :class="$style.el">
    <component
      :is="getComponentName(section.__component)"
      v-for="section in page.sections"
      v-bind="section"
      :key="section.__component"
    ></component>
  </main>
</template>

<script>
import Vue from 'vue'
import { generateHead } from '~/utils/generateHead'

export default Vue.extend({
  name: 'PageIndex',
  async asyncData({ store, error }) {
    const page = await store.dispatch('getContent')

    if (!page?.sections?.length) {
      error({ statusCode: 404 })
    }

    return { page }
  },
  data() {
    return {
      page: {},
    }
  },
  head() {
    return generateHead(this)
  },
  methods: {
    getComponentName(rawComponentName) {
      const [, componentName] = rawComponentName.split('.')
      return componentName
    },
  },
})
</script>

<style module lang="scss">
.el {
  padding-top: var(--header-height);
}
</style>
