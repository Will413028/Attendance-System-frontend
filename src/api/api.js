import request from "./request"

export default {
    getTableData(params) {
        return request({
            url: '/attendance',
            method: 'get',
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
}