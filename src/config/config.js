const env = import.meta.env.MODE || "production";

const EnvConfig = {
    development: {
        baseApi: 'https://fast-gorge-70763.herokuapp.com',
        mockApi: ""
    },
    test: {
        baseApi: '',
        mockApi: ""
    },
    production: {
        baseApi: 'https://fast-gorge-70763.herokuapp.com',
        mockApi: ""
    }
}

export default {
    env,
    mock:true,
    ...EnvConfig[env]
}