<template>
  <el-row class="home" :gutter="20">
    <el-col :span="15" style="margin-top: 20px">
      <el-card shadow="hover">
        <div class="user">
          <el-icon class="user" size="100px">
            <UserFilled />
          </el-icon>
          <div class="user-info">
            <p class="name" v-once>{{ user.name }}</p>
            <p class="name" v-once>{{ user.role }}</p>
          </div>
        </div>
        <div class="clock-info">
          <p>
            Today is <span>{{ new Date().toLocaleDateString() }}</span>
          </p>
          <p>
            your position :<span> {{ currentPosition }} </span>
          </p>
        </div>
      </el-card>
      <el-card shadow="hover" style="margin-top: 20px" height="450px">
        <p>Lastet Attendance Information</p>
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
    <el-card
      shadow="hover"
      style="margin-top: 20px; width: 450px; height: 800px"
    >
      <vue-qrcode :value="QRcodeData" :options="{ width: 400 }"></vue-qrcode>
      <el-button
        style="margin-top: 50px; width: 400px; height: 50px"
        @click="clockin"
      >
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
    let user = JSON.parse(localStorage.getItem("user"));
    let token = JSON.parse(localStorage.getItem("token"));

    let attendanceData = ref([]);
    let QRcodeData = ref();
    let currentPosition = ref();
    let attendanceLabel = {
      attend_date: "attend_date",
      clock_in_time: "clock_in_time",
      clock_out_time: "clock_out_time",
      status: "status",
    };
    const getAttendanceList = async () => {
      let data = { user_id: user.id };
      let res = await proxy.$api.getTableData(data);
      attendanceData.value = res.data;
    };
    const getQRcodeData = async () => {
      let createAttendanceURL = `https://fast-gorge-70763.herokuapp.com/createAttendanceQRcode?user_id=${user.id}`;
      QRcodeData.value = createAttendanceURL;
    };
    const clockin = async () => {
      await getposition();
      let body = { user_id: user.id };
      await axios.post(
        "https://fast-gorge-70763.herokuapp.com/attendance",
        body,
        { headers: { token: token } }
      );
      getAttendanceList();
    };
    const getposition = async () => {
      navigator.geolocation.getCurrentPosition((position) => {

        let latitude = position.coords.latitude;

        let longitude = position.coords.longitude;

        let timestamp = position.timestamp;
        currentPosition.value = {
          latitude: latitude,
          longitude: longitude,
          timestamp: timestamp,
        };
      });
    };

    onMounted(() => {
      getQRcodeData();
      getAttendanceList();
      getposition();
    });
    return {
      attendanceData,
      attendanceLabel,
      QRcodeData,
      user,
      clockin,
      currentPosition,
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