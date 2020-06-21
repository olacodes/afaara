const BASE_URL = `https://jsonplaceholder.typicode.com/`

export const state = () => ({
  users: {},
  user: {},
})

export const getters = {
  GETUSERS: (state) => state.users,
  GETUSER: (state) => state.user,
}

export const mutations = {
  SETUSERS(state, payload) {
    return (state.users = payload)
  },
  SETUSER(state, payload) {
    return (state.user = payload)
  },
}

export const actions = {
  async fetchUsers({ commit }) {
    let users
    try {
      users = await this.$axios.$get(`${BASE_URL}users/`)
      commit('SETUSERS', users)
    } catch (error) {
      let { response } = error
      return response.data
    }
  },
  async fetchUser({ commit }, data) {
    let user
    try {
      user = await this.$axios.$get(`${BASE_URL}users/${data}/`)
      commit('SETUSER', user)
      // console.log(user)
    } catch (error) {
      return response.data
    }
  },
}
