<template>
  <el-row class="home" :gutter="20">
    <el-col :span="15" style="margin-top: 20px">
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
        <p>lastet clock-information</p>
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
    <el-card shadow="hover" style="margin-top: 20px; width: 450px; height: 800px">
      <vue-qrcode :value="QRcodeData" :options="{ width: 400 }"></vue-qrcode>
      <el-button style="margin-top: 50px; width: 400px; height: 50px" @click="clockin">
        Clock in
      </el-button>
    </el-card>
    <el-col :span="16" style="margin-top: 20px">
      <div>
        <el-card :body-style="{ display: 'flex', padding: 0 }"> </el-card>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import { defineComponent, getCurrentInstance, onMounted, ref } from "vue";
import axios from "axios";

export default defineComponent({
  setup() {
    const { proxy } = getCurrentInstance();
    let user = JSON.parse(localStorage.getItem("user"))
    let attendanceData = ref([]);
    let QRcodeData = ref();
    let attendanceLabel = {
      attend_date: "attend_date",
      clock_in_time: "clock_in_time",
      clock_out_time: "clock_out_time",
      status: "status",
    };
    const getAttendanceList = async () => {
      let data = { user_id: user.id }
      let res = await proxy.$api.getTableData(data);
      attendanceData.value = res.data;
    };
    const getQRcodeData = async () => {
      let createAttendanceURL = `http://127.0.0.1:3000/createAttendanceQRcode?user_id=${user.id}`;
      QRcodeData.value = createAttendanceURL
    }
    const clockin = async () => {
      let body = { user_id: user.id }
      await axios.post("http://127.0.0.1:3000/attendance", body, { headers: { token: JSON.parse(localStorage.getItem("token")) } });
    };
    onMounted(() => {
      getQRcodeData();
      getAttendanceList();
    });
    return {
      attendanceData,
      attendanceLabel,
      QRcodeData,
      clockin
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