import request from "./request"

export default {
    getTableData(params) {
        return request({
            url: '/attendances',
            method: 'get',
            headers: { token: JSON.parse(localStorage.getItem("token")) },
            data: params,
            mock: false
        })
    },
    getUserData(params) {
        return request({
            url: '/users',
            method: 'get',
            headers: { token: JSON.parse(localStorage.getItem("token")) },
            data: params,
            mock: false
        })
    },
    login(params) {
        return request({
            url: '/login',
            method: 'post',
            mock: false,
            data: params
        })
    },
    postAttendance(params) {
        return request({
            url: '/attendances',
            method: 'post',
            headers: { token: JSON.parse(localStorage.getItem("token")) },
            mock: false,
            data: params
        })
    },
    updateAttendance(id, params) {
        return request({
            url: `/attendances/${id}`,
            method: 'put',
            headers: { token: JSON.parse(localStorage.getItem("token")) },
            mock: false,
            data: params
        })
    },
    updateUser(user_id, params) {
        return request({
            url: `/users/${user_id}`,
            method: 'put',
            headers: { token: JSON.parse(localStorage.getItem("token")) },
            mock: false,
            data: params
        })
    },
    getHoliday(params){
        return request({
            url: '/holidays',
            method: 'get',
            headers: { token: JSON.parse(localStorage.getItem("token")) },
            mock: false,
            data: params
        }) 
    },
    updateHoliday(params){
        return request({
            url: '/holidays',
            method: 'post',
            headers: { token: JSON.parse(localStorage.getItem("token")) },
            mock: false,
            data: params
        }) 
    }
}