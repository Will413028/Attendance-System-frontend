<template>
  <el-aside width="200px">
    <el-menu class="el-menu-vertical-demo">
      <el-menu-item
        :index="item.path"
        v-for="item in noChildren()"
        :key="item.path"
      >
        <component class="icons" :is="item.icon"></component>
        <span>{{ item.label }}</span>
      </el-menu-item>

    </el-menu>
  </el-aside>
</template>

<script>
export default {
  setup() {
    const list = [
      {
        path: "/user",
        name: "user",
        label: "user_management",
        icon: "user",
        url: "UserManage/UserManage",
      },
    ];

    const noChildren = () => {
      return list.filter((item) => !item.children);
    };

    const hasChildren = () => {
      return list.filter((item) => item.children);
    };

    return {
      noChildren,
      hasChildren,
    };
  },
};
</script>


<style lang="less" scoped>
.icons {
  width: 18px;
  height: 18px;
}

</style>