export const state = () => ({
  current: 0,
  isOpened: false,
  settings: {
    component: '',
    props: {},
  },
})

export const mutations = {
  OPEN(state, settings) {
    state.isOpened = true
    state.settings.component = settings?.component
    state.settings.props = settings?.props
  },
  CLOSE(state) {
    state.isOpened = false
    state.settings.component = ''
    state.settings.props = {}
  },
}

export const actions = {
  open({ commit }, settings = {}) {
    commit('OPEN', settings)
  },
  close({ commit }) {
    commit('CLOSE')
  },
}
