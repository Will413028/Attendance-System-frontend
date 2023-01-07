<template>
  <el-form :model="userForm" class="edituser-container">
    <h3>edituser</h3>
    <el-form-item>
      <el-input
        type="password"
        placeholder="password"
        v-model="userForm.password"
      >
      </el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="updateUser"> updateUser </el-button>
    </el-form-item>
  </el-form>
</template>
  <script>
import { reactive, getCurrentInstance } from "vue";

export default {
  setup() {
    const { proxy } = getCurrentInstance();
    const userForm = reactive({
      password: "",
    });
    let user = JSON.parse(localStorage.getItem("user"));
    const updateUser = async () => {
      let res = await proxy.$api.updateUser(user.id, userForm);
    };
    return {
      userForm,
      updateUser,
    };
  },
};
</script>
<style lang="less" scoped>
.edituser-container {
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