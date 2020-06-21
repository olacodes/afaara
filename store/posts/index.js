const BASE_URL = `https://jsonplaceholder.typicode.com/`

export const state = () => ({
  posts: {},
  post: {},
  userPosts: {},
})

export const getters = {
  getPosts: (state) => state.posts,
  getPost: (state) => state.post,
  getUserPosts: (state) => state.userPosts,
}

export const mutations = {
  SETPOSTS(state, payload) {
    return (state.posts = payload)
  },

  SETUSERPOSTS(state, payload) {
    return (state.userPosts = payload)
  },

  SETPOST(state, payload) {
    return (state.post = payload)
  }
}

export const actions = {
  async fetchPosts({ commit }) {
    let posts
    try {
      posts = await this.$axios.$get(`${BASE_URL}posts/`)
      commit('SETPOSTS', posts)
    } catch (error) {
      let { response } = error
      return response.data
    }
  },

  async fetchPost({ commit }, data) {
    let post
    try {
      post = await this.$axios.$get(`${BASE_URL}posts/${data}/`)
      commit('SETPOST', post)
      console.log(post);
      
    } catch (error) {
      return response.data
    }
  },

  async fetchUserPosts({ commit }, data) {
    let userPosts
    try {
      userPosts = await this.$axios.$get(`${BASE_URL}posts?userId=${data}`)
      commit('SETUSERPOSTS', userPosts)
      // console.log(userPosts);
      
    } catch (error) {
      return response.data
    }
  },
}
