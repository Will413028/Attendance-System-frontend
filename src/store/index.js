import { createStore } from 'vuex';

export default createStore({
    state: {
        isCollapse: true,
        user: {
            id: 0,
            name: "",
            account: "",
            role: ""
        },
        token: ''
    },
    mutations: {
        updateIsCollapse(state, payload) {
            state.isCollapse = !state.isCollapse
        },
        setToken(state, val) {
            state.token = val
            localStorage.setItem('token', JSON.stringify(val))
        }, 
        clearToken(state) {
            state.token = ''
            localStorage.remove('token')
        },
        getToken(state) {
            state.token = state.token || localStorage.get('token')
        },
        setUser(state, val) {
            state.user = val
            localStorage.setItem('user', JSON.stringify(val))
        }, 
        clearUser(state) {
            state.user = ''
            localStorage.remove('user')
        },
        getUser(state) {
            state.user = state.user || localStorage.get('user')
        }
    }
});