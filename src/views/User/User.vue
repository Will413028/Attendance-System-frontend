<template>
  <div class="table">
    <el-table :data="userList" style="width: 100%">
      <el-table-column
        v-for="item in tableLabel"
        :key="item.prop"
        :label="item.label"
        :prop="item.prop"
        :width="item.width ? item.width : 200"
      />
      <el-table-column fixed="right" label="account unlock" width="180">
        <template #default>
          <el-button type="danger" size="small" @click="handleClick"
            >lock</el-button
          >
          <el-button type="primary" size="small">unlock</el-button>
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="Attendances" width="180">
        <template #default>
          <el-button type="primary" size="small" @click="handleClick"
            >Detail</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import {
  defineComponent,
  getCurrentInstance,
  onMounted,
  ref,
  reactive,
} from "vue";

export default defineComponent({
  setup() {
    const { proxy } = getCurrentInstance();
    const userList = ref([]);
    const tableLabel = reactive([
      {
        prop: "name",
        label: "Name",
      },
      {
        prop: "role",
        label: "Role",
      },
      {
        prop: "error_times",
        label: "login error times",
      },
      {
        prop: "Attendances",
        label: "Attendances",
      },
    ]);
    onMounted(() => {
      getUserData();
    });
    const getUserData = async () => {
      let res = await proxy.$api.getUserData();
      userList.value = res.data.data;
    };
    return {
      userList,
      tableLabel,
    };
  },
});
</script>