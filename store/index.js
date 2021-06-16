export const state = () => ({
  settings: {},
})

export const mutations = {
  SET_SETTINGS(state, settings) {
    state.settings = settings
  },
}

export const actions = {
  nuxtServerInit({ dispatch }) {
    return dispatch('setSettings')
  },
  getSettings() {
    return this.$strapi.$settings.find()
  },
  getContent() {
    return this.$strapi.$content.find()
  },
  async setSettings({ dispatch, commit }) {
    commit('SET_SETTINGS', await dispatch('getSettings'))
  },
}
