const env = import.meta.env.MODE || "production";

const EnvConfig = {
    development: {
        baseApi: 'http://127.0.0.1:3000',
        mockApi: ""
    },
    test: {
        baseApi: '',
        mockApi: ""
    },
    production: {
        baseApi: '',
        mockApi: ""
    }
}

export default {
    env,
    mock:true,
    ...EnvConfig[env]
}