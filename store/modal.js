import bodyScroll from '~/utils/bodyScroll'

export const state = () => ({
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
    bodyScroll.lock()
  },
  CLOSE(state) {
    state.isOpened = false
    state.settings.component = ''
    state.settings.props = {}
    bodyScroll.unlock()
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
