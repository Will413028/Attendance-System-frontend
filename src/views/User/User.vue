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
        <template #default="scope">
          <el-button type="danger" size="small" @click="lock(scope.row)"
            >lock</el-button
          >
          <el-button type="primary" size="small" @click="unlock(scope.row)"
            >unlock</el-button
          >
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
        label: "Account Status",
      },
    ]);
    onMounted(() => {
      getUserData();
    });

    const getUserData = async () => {
      let res = await proxy.$api.getUserData();
      userList.value = res.data.data.map((element) => {
        element.error_times = element.error_times === 5 ? "Locked" : "Normal";
        return element;
      });
    };
    const lock = async (row) => {
      let body = { error_times: 5 };
      try {
        await proxy.$api.updateUser(row.id, body);
        ElMessage({
          showClose: true,
          message: `${row.name} is locked`,
          type: "warning",
        });
      } catch (err) {
        ElMessage({
          showClose: true,
          message: `lock failed: ${err}`,
          type: "error",
        });
      }
    };
    const unlock = async (row) => {
      let body = { error_times: 0 };
      try {
        await proxy.$api.updateUser(row.id, body);
        ElMessage({
          showClose: true,
          message: `${row.name} is unlocked`,
          type: "success",
        });
      } catch (err) {
        ElMessage({
          showClose: true,
          message: `unlock failed: ${err}`,
          type: "error",
        });
      }
    };
    return {
      userList,
      tableLabel,
      lock,
      unlock,
    };
  },
});
</script>