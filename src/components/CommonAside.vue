<template>
  <el-aside width="180px">
    <el-menu
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
    >
      <h3>Dashboard</h3>
      <el-menu-item
        :index="item.path"
        v-for="item in noRole()"
        :key="item.path"
        @click="clickMenu(item)"
      >
        <component class="icons" :is="item.icon"></component>
        <span>{{ item.label }}</span>
      </el-menu-item>
      <el-menu-item
        :index="item.path"
        v-for="item in onlyAdmin()"
        :key="item.path"
        @click="clickMenu(item)"
      >
        <component class="icons" :is="item.icon"></component>
        <span>{{ item.label }}</span>
      </el-menu-item>
    </el-menu>
  </el-aside>
</template>

<script>
import { useRouter } from "vue-router";
export default {
  setup() {
    const list = [
      {
        path: "/home",
        name: "home",
        label: "home",
        icon: "HomeFilled",
      },
      {
        path: "/edituser",
        name: "edituser",
        label: "update password",
        icon: "setting",
      },
      {
        path: "/Calendar",
        name: "Calendar",
        label: "Calendar",
        icon: "Calendar",
      },
      {
        path: "/user",
        name: "user",
        label: "employee manage",
        icon: "user",
        role: "admin",
      },
      {
        path: "/AbsentUser",
        name: "AbsentUser",
        label: "Absent Employee",
        icon: "user",
        role: "admin",
      },
    ];

    const router = useRouter();

    const noRole = () => {
      return list.filter((item) => !item.role);
    };
    const onlyAdmin = () => {
      let role = JSON.parse(localStorage.getItem("user")).role;
      return list.filter((item) => item.role && role === "HR");
    };
    const clickMenu = (item) => {
      router.push({ name: item.name });
    };
    return {
      noRole,
      onlyAdmin,
      clickMenu,
    };
  },
};
</script>


<style lang="less" scoped>
.icons {
  width: 18px;
  height: 18px;
}

.el-menu {
  border-right: none;

  h3 {
    line-height: 48px;
    color: #fff;
    text-align: center;
  }
}
</style>