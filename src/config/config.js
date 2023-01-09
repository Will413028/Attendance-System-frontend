const env = import.meta.env.MODE || "production";

const EnvConfig = {
    development: {
        baseApi: "http://localhost:3000",
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