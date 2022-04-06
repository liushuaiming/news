<template>
  <div class="NewHeads">
      <div class="NewHeads-left"><span class="iconfont iconicon-test"></span></div>
      <div class="NewHeads-center"><slot></slot></div>
      <div class="NewHeads-right"></div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang='less'>
  .NewHeads {
    display: flex;
    height: 80px;
    line-height: 80px;
    font-size: 16px;
    .NewHeads-left {
      padding-left: 10px;
    }
    .NewHeads-center {
      flex: 1;
      text-align: center;
      font-size: 18px;
    }
    .NeHeads-right {
      padding-right: 24px;
    }
   .iconicon-test {
     font-size: 14px;
    }
  }

</style>
