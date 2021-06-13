import Vue from 'vue'
import globalStyles from '@/assets/scss/global/global.scss?module'

export default () => {
  Vue.prototype.$global = globalStyles
}
