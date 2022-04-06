<template>
  <div class="Register">
    <NewsHeads>注册</NewsHeads>
    <NewTitle></NewTitle>
    <van-form @submit="Register">
      <van-field
        v-model="user.username"
        name="用户名"
        label="用户名"
        placeholder="用户名/手机号码"
        :rules="rules.username"
      />
       <van-field
        v-model="user.nickname"
        name="昵称"
        label="昵称"
        placeholder="请输入昵称"
        :rules="rules.nickname"
      />
      <van-field
        v-model="user.password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="rules.password"
      />
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">注册</van-button>
      </div>
    </van-form>
      <div class="registeright">已经有账号，去 <router-link to="/login">登陆</router-link> </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      user: {
        username: '',
        nickname: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: '请填写用户名', trigger: 'onChange' },
          { pattern: /^\d{5,11}$/, message: '请输入五位位至十一位数字', trigger: 'onChange' }
        ],
        nicknname: [
          { required: true, message: '请填写昵称', trigger: 'onChange' },
          { pattern: /^\[\u4e00-\u9fa5]{2,6}$/, message: '请输入五位位至十一位数字', trigger: 'onChange' }
        ],
        password: [
          { required: true, message: '请填写密码', trigger: 'onChange' },
          { pattern: /^\d{3,11}$/, message: '请输入三位位至十一位数字', trigger: 'onChange' }
        ]
      }
    }
  },
  methods: {
    async Register () {
      const res = await this.$axios.post('/register', {
        username: this.user.username,
        nickname: this.user.nickname,
        password: this.user.password
      })
      const { message, statusCode } = res.data
      if (statusCode === 200) {
        this.$toast.success(message)
        this.$router.push({ name: 'login', params: this.user })
      } else {
        this.$toast.fail(message)
      }
    }
  }
}
</script>

<style lang="less">
  .registeright {
     text-align: right;
     padding: 10px;
     font-size: 14px;
  }
</style>
