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
        <el-table :data="tableData">
          <el-table-column
            v-for="(val, key) in tableLabel"
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
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    let tableData = [
      {
        attend_date: "2022-12-25",
        clock_in_time: "2022-12-25 14:31:43",
        clock_out_time: "2022-12-25 20:57:06",
        status: "present",
      },
      {
        attend_date: "2022-12-26",
        clock_in_time: "2022-12-26 14:31:43",
        clock_out_time: "2022-12-26 20:57:06",
        status: "present",
      },
      {
        attend_date: "2022-12-27",
        clock_in_time: "2022-12-27 14:31:43",
        clock_out_time: "2022-12-27 20:57:06",
        status: "present",
      },
      {
        attend_date: "2022-12-28",
        clock_in_time: "2022-12-28 14:31:43",
        clock_out_time: "2022-12-28 20:57:06",
        status: "present",
      },
      {
        attend_date: "2022-12-29",
        clock_in_time: "2022-12-29 14:31:43",
        clock_out_time: "2022-12-29 20:57:06",
        status: "present",
      },
      {
        attend_date: "2022-12-30",
        clock_in_time: "2022-12-30 14:31:43",
        clock_out_time: "",
        status: "absent",
      },
    ];
    let tableLabel = {
      attend_date: "attend_date",
      clock_in_time: "clock_in_time",
      clock_out_time: "clock_out_time",
      status: "status",
    };
    return {
      tableData,
      tableLabel,
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