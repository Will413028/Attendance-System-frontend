import axios from "axios";
import config from "../config/config";

const service = axios.create({
    baseURL: config.baseApi
})

service.interceptors.request.use((req) => {
    return req
})

service.interceptors.response.use((res) => {
    if (res.status === 200) {
        return res.data
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