import { createStore } from 'vuex';

export default createStore({
    state: {
        user: {
            id: 0,
            name: "",
            account: "",
            role: ""
        },
        token: '',
        numberOfLockedAccount: 0,
        numberOfAbsent: 0,
    },
    mutations: {
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
        },
        setNumberOfLockedAccount(state, val) {
            state.numberOfLockedAccount = val
            localStorage.setItem('numberOfLockedAccount', val)
        },
        clearNumberOfLockedAccount(state) {
            state.numberOfLockedAccount = 0
            localStorage.setItem('numberOfLockedAccount', 0)
        },
        getNumberOfLockedAccount(state) {
            state.numberOfLockedAccount = state.numberOfLockedAccount || localStorage.get('numberOfLockedAccount')
        },
        setNumberOfAbsent(state, val) {
            state.numberOfAbsent = val
            localStorage.setItem('numberOfAbsent', val)
        },
        clearNumberOfAbsent(state) {
            state.numberOfAbsent = ''
            localStorage.setItem('numberOfAbsent', 0)
        },
        getNumberOfAbsent(state) {
            state.numberOfAbsent = state.numberOfAbsent || localStorage.get('numberOfAbsent')
        }
    }
});