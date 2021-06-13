<template>
  <main>
    <component
      :is="getComponentName(section.__component)"
      v-for="section in page.sections"
      :key="section.__component"
      v-bind="section"
    ></component>
  </main>
</template>

<script>
import Vue from 'vue'

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
  methods: {
    getComponentName(rawComponentName) {
      const [, componentName] = rawComponentName.split('.')
      return componentName
    },
  },
})
</script>
