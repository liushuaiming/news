<template>
  <div class="New-Nav" @click="clickfn">
      <div class="NavLeft"><slot></slot></div>
      <div class="NavCenter"><slot name="NavCenterNav"></slot></div>
      <div class="NavRight"><span class="iconfont iconjiantou1"></span></div>
  </div>
</template>

<script>
export default {
  props: {
    to: String
  },
  methods: {
    clickfn () {
      this.$router.push(this.to)
    }
  }
}
</script>

<style lang='less' scoped>
.New-Nav {
  font-size: 18px;
  height: 40px;
  line-height: 40px;
  border-bottom: 2px solid #e4e4e4;
  margin-left: 20px;
  display: flex;
  .NavLeft {
    flex: 1;
  }
  .NavCenter {
       padding-right: 10px;
       color: #a0a0a0;
  }
  .NavRight {
     padding-right: 20px;
  }
}
</style>
