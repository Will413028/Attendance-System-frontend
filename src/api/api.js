import request from "./request"

export default {
    getTableData(params) {
        return request({
            url: '/attendance',
            method: 'get',
            headers: { token: JSON.parse(localStorage.getItem("token")) },
            data: params,
            mock: false
        })
    },
    getUserData(params) {
        return request({
            url: '/user',
            method: 'get',
            data: params,
            mock: false
        })
    },
    login(params) {
        return request({
            url: 'http://127.0.0.1:3000/login',
            method: 'post',
            mock: false,
            data: params
        })
    },
    post(params) {
        return request({
            url: 'http://127.0.0.1:3000/attendance',
            method: 'post',
            headers: { token: JSON.parse(localStorage.getItem("token")) },
            mock: false,
            data: params
        })
    }
}