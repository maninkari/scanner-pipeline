export const state = () => ({
  name: 'start',
  token: 'sjdlksjdl',
})

export const getters = {
  getState(state) {
    return state.name
  },
}

export const mutations = {
  changeState(state) {
    return (name) => (state.name = name)
  },
}
