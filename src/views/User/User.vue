<template>
  <div class="table">
    <el-table :data="userList" style="width: 100%">
      <el-table-column
        v-for="item in tableLabel"
        :key="item.prop"
        :label="item.label"
        :prop="item.prop"
        :width="item.width ? item.width : 125"
      />
      <el-table-column fixed="right" label="Operations" width="180">
        <template #default>
          <el-button type="primary" size="small" @click="handleClick"
            >Detail</el-button
          >
          <el-button type="primary" size="small">Edit</el-button>
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
        label: "error_times",
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
      userList.value = res.data;
    };
    return {
      userList,
      tableLabel,
    };
  },
});
</script>