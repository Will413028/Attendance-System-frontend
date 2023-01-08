import axios from "axios";
import config from "../config/config";
import { ElMessage } from 'element-plus'

const default_error = "server_error"

const service = axios.create({
    baseURL: config.baseApi
})

service.interceptors.request.use((req) => {
    return req
})

service.interceptors.response.use((res) => {
    const { code, data, message } = res

    const status_code = res.status
    if (status_code === 200) {
        return data
    } else if (code === 200) {
        return data
    } else {
        ElMessage.error(message || default_error)
        return Promise.reject(message || default_error)
    }
})

function request(options) {
    options.method = options.method || 'get'
    if (options.method.toLowerCase() == 'get') {
        options.params = options.data
    }

    let isMock = config.mock

    if (typeof options.mock !== "undefined") {
        isMock = options.mock
    }
    if (config.env == 'production') {
        service.defaults.baseURL = config.baseApi
    } else {
        service.defaults.baseURL = isMock ? config.mockApi : config.baseApi
    }

    return service(options)
}

export default request