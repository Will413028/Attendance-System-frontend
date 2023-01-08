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
            url: '/attendance',
            method: 'post',
            headers: { token: JSON.parse(localStorage.getItem("token")) },
            mock: false,
            data: params
        })
    },
    updateUser(user_id, params) {
        return request({
            url: `/user/${user_id}`,
            method: 'put',
            headers: { token: JSON.parse(localStorage.getItem("token")) },
            mock: false,
            data: params
        })
    },
    getHoliday(params){
        return request({
            url: '/holiday',
            method: 'get',
            headers: { token: JSON.parse(localStorage.getItem("token")) },
            mock: false,
            data: params
        }) 
    },
    updateHoliday(params){
        return request({
            url: '/holiday',
            method: 'post',
            headers: { token: JSON.parse(localStorage.getItem("token")) },
            mock: false,
            data: params
        }) 
    }
}