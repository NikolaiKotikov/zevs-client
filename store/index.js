export const state = () => ({
  settings: {},
  params: {
    page: null,
    category: null,
    item: null,
  },
})

export const mutations = {
  SET_SETTINGS(state, settings) {
    state.settings = settings
  },
  SET_PARAMS(state, { page, category, item }) {
    state.params = { page, category, item }
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
