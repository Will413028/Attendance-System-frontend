<template>
  <el-card shadow="hover" style="margin-top: 20px" height="450px">
    <div class="table">
      <p>Attendance Information</p>
      <el-table :data="attendanceData">
        <el-table-column
          v-for="(val, key) in attendanceLabel"
          :key="key"
          :prop="key"
          :label="val"
        >
        </el-table-column>
        <el-table-column fixed="right" label="Attendance Status" width="180">
          <template #default="scope">
            <el-button
              type="primary"
              size="small"
              @click="editToPresent(scope.row)"
              >Present</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
  </el-card>
</template>




<script>
import { defineComponent, getCurrentInstance, onMounted, ref } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  setup() {
    const { proxy } = getCurrentInstance();
    const store = useStore();
    let numberOfAbsent = localStorage.getItem("numberOfAbsent");
    let attendanceData = ref([]);
    let attendanceLabel = {
      attend_date: "attend_date",
      clock_in_time: "clock_in_time",
      clock_out_time: "clock_out_time",
      status: "status",
      User: "User",
    };
    const getAttendanceList = async () => {
      let data = { status: "Absent" };
      let res = await proxy.$api.getTableData(data);
      res.data.data.forEach((item) => {
        item.User = item.User.name;
      });
      attendanceData.value = res.data.data;
    };
    const editToPresent = async (row) => {
      let body = { status: "Present" };

      try {
        await proxy.$api.updateAttendance(row.id, body);

        ElMessage({
          showClose: true,
          message: "update Attendance is success",
          type: "success",
        });
      } catch (err) {
        ElMessage({
          showClose: true,
          message: `updateAttendance failed: ${err}`,
          type: "error",
        });
      }
      let numberOfAbsent = numberOfAbsent - 1;

      if (numberOfAbsent < 0) {
        store.commit("clearNumberOfAbsent");
      } else {
        store.commit("setNumberOfAbsent", numberOfAbsent);
      }
      getAttendanceList();
    };

    onMounted(async () => {
      await getAttendanceList();
    });
    return {
      attendanceData,
      attendanceLabel,
      editToPresent,
    };
  },
});
</script>

<style lang="less" scoped>
</style>