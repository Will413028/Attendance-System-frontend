<template>
  <el-header>
    <div class="l-content">
      <el-button size="small" plain @click="handleCollaase">
        <el-icon :size="20">
          <Menu />
        </el-icon>
      </el-button>
    </div>
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
          <el-dropdown-item>Logout</el-dropdown-item>
          <el-dropdown-item disabled>Action 4</el-dropdown-item>
          <el-dropdown-item divided>Action 5</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </el-header>
</template>

<script>
import { defineComponent } from "vue";
import { useStore } from "vuex";
export default defineComponent({
  setup() {
    let store = useStore();
    let getImgage_src = (base) => {
      return new URL(`../assets/${base}`, import.meta.url).href;
    };
    let handleCollaase = () => {
      store.commit("updateIsCollapse");
    };
    return {
      getImgage_src,
      handleCollaase
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
.l-content {
  display: flex;
  align-items: center;
  .el-button {
    margin-right: 20px;
  }
  h3 {
    color: #fff;
  }
}
</style>