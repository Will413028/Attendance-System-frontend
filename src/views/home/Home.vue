<template>
  <el-button
    :data="LockedUser"
    v-if="user.role !== `employee` && LockedUser > 0"
    type="danger"
    size="small"
    @click="goToUserManagePage"
    >{{ LockedUser }} User is Locked!</el-button
  >
  <el-button
    :data="AbsentUser"
    v-if="user.role !== `employee` && AbsentUser > 0"
    type="danger"
    size="small"
    @click="goToAbsentUserPage"
    >Have {{ AbsentUser }} Absent Employee!</el-button
  >
  <el-row class="home" :gutter="20">
    <el-col :span="15" style="margin-top: 20px">
      <el-card shadow="hover">
        <div class="user">
          <el-icon class="user" size="100px">
            <UserFilled />
          </el-icon>
          <div class="user-info">
            <p class="name" v-once>Naem: {{ user.name }}</p>
            <p class="name" v-once>Role: {{ user.role }}</p>
          </div>
        </div>
        <div class="clock-info">
          <p>
            Today is <span>{{ new Date().toLocaleDateString() }}</span>
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
      <vue-qrcode :value="QRcodeData" :options="{ width: 300 }"></vue-qrcode>
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
import { useRouter } from "vue-router";
import getQRcodeURL from "../../api/QRcode";
import { useStore } from "vuex";
import moment from "moment";

export default defineComponent({
  setup() {
    const store = useStore();
    const router = useRouter();
    const { proxy } = getCurrentInstance();

    let user = JSON.parse(localStorage.getItem("user"));
    let token = JSON.parse(localStorage.getItem("token"));
    let attendanceData = ref([]);
    let QRcodeData = ref();
    let currentPosition = ref();
    let AbsentUser = ref();
    let LockedUser = ref();
    let attendanceLabel = {
      attend_date: "attend_date",
      clock_in_time: "clock_in_time",
      clock_out_time: "clock_out_time",
      status: "status",
    };
    const getAttendanceList = async () => {
      let data = { user_id: user.id };
      let res = await proxy.$api.getTableData(data);
      attendanceData.value = res.data.data;
    };
    const clockin = async () => {
      let position = currentPosition;
      let body = {
        user_id: user.id,
        latitude: position.value.latitude,
        longitude: position.value.longitude,
      };

      try {
        await proxy.$api.postAttendance(body);

        ElMessage({
          showClose: true,
          message: `clock in success`,
          type: "success",
        });
      } catch (error) {
        ElMessage({
          showClose: true,
          message: `clock in failed: ${error}`,
          type: "error",
        });
      }
      getAttendanceList();
    };
    const getposition = async () => {
      if (!navigator.geolocation) {
        ElMessage({
          showClose: true,
          message: "Geolocation is not supported by this browser.",
          type: "error",
        });
      }
      navigator.geolocation.getCurrentPosition(
        (success) => {
          let latitude = success.coords.latitude;

          let longitude = success.coords.longitude;

          let timestamp = success.timestamp;

          let QrcodeURL = getQRcodeURL(
            user.id,
            token,
            latitude,
            longitude,
            timestamp
          );

          QRcodeData.value = QrcodeURL;

          currentPosition.value = {
            latitude: latitude,
            longitude: longitude,
            timestamp: timestamp,
          };
        },
        (err) => {
          ElMessage({
            showClose: true,
            message: `getCurrentPosition failed: ${err}`,
            type: "error",
          });
        },
        { enableHighAccuracy: true, timeout: 10000 }
      );
    };
    const getAbsentUser = async () => {
      let date = moment().format("YYYY-MM-DD");

      let body = { attend_date: date, status: "Absent" };
      try {
        let res = await proxy.$api.getTableData(body);
        let numberOfAbsentUser = res.data.data.length;
        store.commit("setNumberOfAbsent", numberOfAbsentUser);
        AbsentUser.value = numberOfAbsentUser;
      } catch (err) {}
    };

    const getLockedAccount = async () => {
      let body = { error_times: 5 };
      try {
        let res = await proxy.$api.getUserData(body);
        let numberOfLockedUser = res.data.data.length;
        store.commit("setNumberOfLockedAccount", numberOfLockedUser);
        LockedUser.value = numberOfLockedUser;
      } catch (err) {}
    };

    const goToAbsentUserPage = async () => {
      router.push({
        name: "AbsentUser",
      });
    };
    const goToUserManagePage = async () => {
      router.push({
        name: "user",
      });
    };
    onMounted(async () => {
      await getAttendanceList();
      await getposition();
      await getAbsentUser();
      await getLockedAccount();
    });
    return {
      attendanceData,
      attendanceLabel,
      QRcodeData,
      user,
      clockin,
      currentPosition,
      goToAbsentUserPage,
      goToUserManagePage,
      getLockedAccount,
      getAbsentUser,
      LockedUser,
      AbsentUser,
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