<template>
  <el-header>
    <div class="r-content"></div>
    <el-dropdown>
      <span class="el-dropdown-link">
        <el-icon class="user" size="30px" color="white"><UserFilled /></el-icon>
        <el-icon class="el-icon--right">
          <arrow-down />
        </el-icon>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item @click="logout" divided>Logout</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </el-header>
</template>

<script>
import { defineComponent } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  setup() {
    const router = useRouter();
    let user = JSON.parse(localStorage.getItem("user"));

    const logout = async () => {
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      router.push({
        name: "login",
      });
    };

    return {
      user,
      logout,
    };
  },
});
</script>


<style lang="less" scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background: #333;
}
.r-content {
  .user {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
}
</style>