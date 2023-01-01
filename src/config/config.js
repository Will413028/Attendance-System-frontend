const env = import.meta.env.MODE || "production";

const EnvConfig = {
    development: {
        baseApi: 'localhost:3000',
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