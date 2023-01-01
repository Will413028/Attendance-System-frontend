<template>
  <el-header>
    <div class="l-content">
      <el-button size="small">
        <el-icon :size="20">
          <Menu />
        </el-icon>
      </el-button>
    </div>
    <div class="r-content"></div>
  </el-header>
</template>


<style lang="less" scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background: #333;
}
.r-content {
  .user {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
}
.l-content {
  display: flex;
  align-items: center;
  .el-button {
    margin-right: 20px;
  }
  h3 {
    color: #fff;
  }
}
</style>