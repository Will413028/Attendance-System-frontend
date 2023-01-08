<template>
  <el-form :model="loginForm" class="login-container">
    <h3>Login</h3>
    <el-form-item>
      <el-input type="input" placeholder="account" v-model="loginForm.account">
      </el-input>
    </el-form-item>
    <el-form-item>
      <el-input
        type="password"
        placeholder="password"
        v-model="loginForm.password"
      >
      </el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="login"> Login </el-button>
    </el-form-item>
  </el-form>
</template>
<script>
import { reactive, getCurrentInstance } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

export default {
  setup() {
    const { proxy } = getCurrentInstance();
    const loginForm = reactive({
      account: "",
      password: "",
    });

    const store = useStore();
    const router = useRouter();

    const login = async () => {
      try {
        let response = await proxy.$api.login(loginForm);
        store.commit("setUser", response.user);
        store.commit("setToken", response.token);
        router.push({
          name: "home",
        });
        ElMessage({
          showClose: true,
          message: "Login success",
          type: "success",
        });
      } catch (err) {
        ElMessage({
          showClose: true,
          message: `Login failed`,
          type: "error",
        });
      }
    };
    return {
      loginForm,
      login,
    };
  },
};
</script>
<style lang="less" scoped>
.login-container {
  width: 350px;
  background-color: #fff;
  border: 1px solid #eaeaea;
  border-radius: 15px;
  padding: 35px 35px 15px 35px;
  box-shadow: 0 0 25px #cacaca;
  margin: 180px auto;

  h3 {
    text-align: center;
    margin-bottom: 20px;
    color: #505450;
  }
}
</style>