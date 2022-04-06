<template>
  <div id="Login">
    <NewsHeads>登陆</NewsHeads>
    <NewTitle></NewTitle>
    <van-form @submit="Login">
      <van-field
        v-model="username"
        name="用户名"
        label="用户名"
        placeholder="用户名/手机号码"
        :rules="rules.username"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="rules.password"
      />
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">登陆</van-button>
      </div>
    </van-form>
    <div class="loginright">没有账号，去 <router-link to="/register">注册</router-link> </div>
  </div>
</template>

<script>
export default {
  created () {
    const { username, password } = this.$route.params
    this.username = username
    this.password = password
  },
  data () {
    return {
      username: '',
      password: '',
      rules: {
        username: [
          { required: true, message: '请填写用户名', trigger: 'onChange' },
          { pattern: /^\d{5,11}$/, message: '请输入五位位至十一位数字', trigger: 'onChange' }
        ],
        password: [
          { required: true, message: '请填写密码', trigger: 'onChange' },
          { pattern: /^\d{3,11}$/, message: '请输入三位位至十一位数字', trigger: 'onChange' }
        ]
      }
    }
  },
  methods: {
    async Login () {
      const res = await this.$axios.post('/login', {
        username: this.username,
        password: this.password
      })
      const { message, statusCode, data } = res.data
      console.log(data)
      if (statusCode === 200) {
        this.$toast.success(message)
        localStorage.setItem('token', data.token)
        localStorage.setItem('itemId', data.user.id)
        this.$router.push('/user')
      } else {
        this.$toast.fail(message)
      }
    }
  }
}
</script>

<style lang="less">
  .loginright {
     text-align: right;
     padding: 10px;
     font-size: 14px;
  }
</style>
