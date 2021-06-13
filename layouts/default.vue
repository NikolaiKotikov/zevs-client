<template>
  <div :class="$style.el">
    <SiteHeader />
    <Nuxt />
    <SiteFooter :class="$style.footer" />
  </div>
</template>

<script>
import SetVhUnit from '~/utils/mixins/set-vh-unit'

export default {
  name: 'LayoutDefault',
  mixins: [SetVhUnit],
}
</script>

<style module lang="scss">
.el {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.footer {
  margin-top: auto;
}
</style>
