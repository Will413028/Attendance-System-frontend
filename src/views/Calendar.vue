<template>
  <el-button
    v-if="user.role !== `employee`"
    type="primary"
    @click="updateHoliday"
  >
    Update Holiday
  </el-button>
  <el-table :data="holidayData" style="width: 100%">
    <el-table-column
      :prop="index"
      :label="item"
      v-for="(item, index) in tableHeader"
      :key="index"
    >
    </el-table-column>
  </el-table>
</template>

<script>
import { getCurrentInstance, onMounted, ref } from "vue";

export default {
  setup() {
    const { proxy } = getCurrentInstance();
    let holidayData = ref([]);
    let tableHeader = {
      date: "Holiday",
      content: "Description",
    };
    let user = JSON.parse(localStorage.getItem("user"));

    const getHolidayList = async () => {
      let res = await proxy.$api.getHoliday();
      let holidayList = res.map((item) => {
        return { date: item.date, content: item.holiday_category };
      });
      holidayData.value = holidayList;
    };
    const updateHoliday = async () => {
      try {
        await proxy.$api.updateHoliday();
        ElMessage({
          showClose: true,
          message: "updateHoliday success",
          type: "success",
        });
      } catch (err) {
        ElMessage({
          showClose: true,
          message: `updateHoliday failed ${err}`,
          type: "error",
        });
      }
    };
    onMounted(async () => {
      await getHolidayList();
    });
    return {
      holidayData,
      tableHeader,
      updateHoliday,
      user,
    };
  },
};
</script>