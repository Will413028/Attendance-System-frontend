const env = import.meta.env.MODE || "production";

const EnvConfig = {
    development: {
        baseApi: import.meta.env.VITE_BACKEND_HOST,
        mockApi: ""
    },
    test: {
        baseApi: '',
        mockApi: ""
    },
    production: {
        baseApi: import.meta.env.VITE_BACKEND_HOST,
        mockApi: ""
    }
}

export default {
    env,
    mock:true,
    ...EnvConfig[env]
}