export const state = () => ({
  name: 'start',
  token: 'sjdlksjdl',
})

export const getters = {
  getState: (state) => {
    return state.name
  },
}

export const mutations = {
  updateState: (state, payload) => {
    state.name = payload.name
    state.token = payload.token
  },
}

// export const actions = {}
