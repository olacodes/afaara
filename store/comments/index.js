const BASE_URL = `https://jsonplaceholder.typicode.com/`

export const state = () => ({
  comments: {}
})

export const getters = {
  getComments: (state) => state.comments,
}

export const mutations = {
  SETCOMMENTS(state, payload) {
    return (state.comments = payload)
  }
}

export const actions = {

  async fetchComments({ commit }, data) {
    let comments
    try {
      comments = await this.$axios.$get(`${BASE_URL}posts/${data}/comments`)
      commit('SETCOMMENTS', comments)
    } catch (error) {
      let { response } = error
      return response.data
    }
  }

}
