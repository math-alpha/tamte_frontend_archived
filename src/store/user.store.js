const axios = require('axios')

const state = {
  user: {}
}

const getters = {
  getUserName: state => ({ name: 'Ngadou', email: 'nyopa@ngadou.me' })
}

const actions = {
  async getUsers ({ commit /*, dispatch {to call other actions} */ }) {
    const response = await axios.get('http://localhost:3000/users')
    commit('SET_USER', response.data)
  },
  async addUsers ({ commit }, user) {
    const response = await axios.post('http://localhost:3000/users', user)
    commit('addNewUser', response.data)
  },
  async logout ({ commit }, id) {
    await axios.delete(`http://localhost:3000/users/${id}`)
    commit('LOGOUT_USER', id)
  }
}

const mutations = {
  SET_USER: (state, user) => (
    state.user = user
  ),
  LOGOUT_USER: (state) => { state.user = {} }
}

export default {
  state,
  getters,
  actions,
  mutations
}
