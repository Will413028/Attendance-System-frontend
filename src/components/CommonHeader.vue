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
          <el-dropdown-item divided>Logout</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </el-header>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  setup() {
    let getImgage_src = (base) => {
      return new URL(`../assets/${base}`, import.meta.url).href;
    };
    return {
      getImgage_src,
    };
  }
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