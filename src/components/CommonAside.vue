<template>
  <el-aside width="180px">
    <el-menu class="el-menu-vertical-demo" background-color="#545c64" text-color="#fff">
      <h3>Dashboard</h3>
      <el-menu-item :index="item.path" v-for="item in noChildren()" :key="item.path" @click="clickMenu(item)">
        <component class="icons" :is="item.icon"></component>
        <span>{{ item.label }}</span>
      </el-menu-item>
      <el-menu-item :index="item.path" v-for="item in onlyAdmin()" :key="item.path" @click="clickMenu(item)">
        <component class="icons" :is="item.icon"></component>
        <span>{{ item.label }}</span>
      </el-menu-item>
      <el-sub-menu :index="item.label" v-for="item in hasChildren()" :key="item.path">
        <template #title>
          <component class="icons" :is="item.icon"></component>
          <span>{{ item.label }}</span>
        </template>
        <el-menu-item-group>
          <el-menu-item :index="subItem.path" v-for="(subItem, subIndex) in item.children" :key="subIndex"
            @click="clickMenu(subItem)">
            <component class="icons" :is="subItem.icon"></component>
            <span>{{ subItem.label }}</span>
          </el-menu-item>
        </el-menu-item-group>
      </el-sub-menu>
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
        path: "/user",
        name: "user",
        label: "employee manage",
        icon: "user",
        role: "admin"
      },
      {
        label: "other",
        icon: "location",
        children: [
          {
            path: "/page2",
            name: "page2",
            label: "page2",
            icon: "setting",
            url: "Other/PageTwo",
          },
        ],
      },
    ];

    const router = useRouter();

    const noChildren = () => {
      return list.filter((item) => (!item.children && !item.role));
    };

    const hasChildren = () => {
      return list.filter((item) => item.children);
    };
    const onlyAdmin = () => {
      let role = JSON.parse(localStorage.getItem('user')).role
      return list.filter((item) => (item.role && role === "HR"));
    };
    const clickMenu = (item) => {
      router.push({
        name: item.name,
      });
    };
    return {
      noChildren,
      hasChildren,
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