<template>
  <el-header>
    <div class="r-content"></div>
    <el-dropdown>
      <span class="el-dropdown-link">
        <img class="user" :src="getImgage_src('vue.svg')" />
        <el-icon class="el-icon--right">
          <arrow-down />
        </el-icon>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>About</el-dropdown-item>
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

    let getImgage_src = (base) => {
      return new URL(`../assets/${base}`, import.meta.url).href;
    };
    const logout = async () => {
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      router.push({
        name: "login",
      });
    };

    return {
      getImgage_src,
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