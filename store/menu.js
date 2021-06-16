export const state = () => ({
  isOpened: false,
})

export const mutations = {
  OPEN(state) {
    state.isOpened = true
  },
  CLOSE(state) {
    state.isOpened = false
  },
}

export const actions = {
  open({ commit }) {
    commit('OPEN')
  },
  close({ commit }) {
    commit('CLOSE')
  },
  toggle({ state, dispatch }) {
    if (state.isOpened) {
      dispatch('close')
    } else {
      dispatch('open')
    }
  },
}
