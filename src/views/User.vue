<template>
  <div class="User">
      <div class="UserHeads">
          <div class="UserLeftImg">
             <img :src="'http://127.0.0.1:3000'+user.head_img" alt="">
          </div>
          <div class="UserInfo">
            <div>
              <span class="iconfont iconxingbienan"></span>
              <span>{{user.nickname}}</span>
            </div>
              <div class="times">{{user.create_date | time('YYYY-MM-DD')}}</div>
          </div>
          <div class="UserDetailed">
            <span class="iconfont iconjiantou1"></span>
          </div>
      </div>
      <NewNav to="/follow">
        <template>我的关注</template>
        <template #NavCenterNav>
          关注的内容
        </template>
      </NewNav>
      <NewNav to='/post'>
        <template>我的跟帖</template>
        <template #NavCenterNav>
          跟帖/回复
        </template>
      </NewNav>
      <NewNav to='collect'>
        <template>我的收藏</template>
        <template #NavCenterNav>
         文章/视频
        </template>
      </NewNav>
      <NewNav to='setting'>
          设置
      </NewNav>
  </div>
</template>

<script>
export default {
  data () {
    return {
      user: ''
    }
  },
  async created () {
    const token = localStorage.getItem('token')
    const itemId = localStorage.getItem('itemId')
    const res = await this.$axios.get(`/user/${itemId}`, {
      headers: {
        Authorization: token
      }
    })
    const { data, statusCode, message } = res.data
    console.log(res)
    if (statusCode === 200) {
      this.user = data
      console.log(this.user)
    } else if (statusCode === 401) {
      localStorage.removeItem('token')
      this.$toast.fail(message)
      this.$router.push('/login')
    } else {
      this.$toast.fail(message)
    }
  }
}
</script>

<style lang='less' scoped>
 .User {
   font-size: 16px;
   align-items: center;
   .UserHeads {
     padding: 40px 0px 40px 20px;
     display: flex;
     border-bottom: 5px solid #e4e4e4;
     .UserLeftImg {
       width: 95px;
       height: 90px;
      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
     }
     .UserInfo {
       padding-left: 15px;
       padding-top: 20px;
       flex: 1;
       .iconxingbienan {
         margin-right: 10px;
       }
       .times {
       margin-top: 10px;
       color: rgb(160, 161, 181);
     }
     }
     .UserDetailed {
       padding-right: 20px;
       line-height: 90px;
     }
   }
 }
</style>
