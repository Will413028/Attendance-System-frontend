<template>
  <el-row class="home" :gutter="20">
    <el-col :span="8" style="margin-top: 20px">
      <el-card shadow="hover">
        <div class="user">
          <img src="../../assets/vue.svg" />
          <div class="user-info">
            <p class="name">User</p>
            <p class="name">Employee</p>
          </div>
        </div>
        <div class="clock-info">
          <p>time of last clock in:<span>2022-12-31 08:00:00</span></p>
          <p>position of last clock in:<span>Taiepi city</span></p>
        </div>
      </el-card>
      <el-card shadow="hover" style="margin-top: 20px" height="450px">
        <el-table :data="attendanceData">
          <el-table-column
            v-for="(val, key) in attendanceLabel"
            :key="key"
            :prop="key"
            :label="val"
          >
          </el-table-column>
        </el-table>
      </el-card>
    </el-col>
    <el-col :span="16" style="margin-top: 20px"></el-col>
  </el-row>
</template>

<script>
import { defineComponent, getCurrentInstance, onMounted, ref } from "vue";

export default defineComponent({
  setup() {
    const {proxy} = getCurrentInstance();
    let attendanceData = ref([]);
    let attendanceLabel = {
      attend_date: "attend_date",
      clock_in_time: "clock_in_time",
      clock_out_time: "clock_out_time",
      status: "status",
    };
    const getAttendanceList = async () => {
        let res = await proxy.$api.getTableData();
        attendanceData.value = res.data;
    };
    onMounted(() => {
      getAttendanceList();
    });
    return {
      attendanceData,
      attendanceLabel,
    };
  },
});
</script>

<style lang="less" scoped>
.home {
  .user {
    display: flex;
    align-items: center;
    padding-bottom: 20px;
    border-bottom: 1px solid #ccc;
    margin-bottom: 20px;
    img {
      width: 150px;
      height: 150px;
      border-radius: 50%;
      margin-right: 40px;
    }
  }
  .clock-info {
    p {
      line-height: 30px;
      font-size: 14px;
      color: #999;
      span {
        color: #666;
        margin-left: 60px;
      }
    }
  }
}
</style>