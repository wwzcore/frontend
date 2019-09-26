<template>
  <div class="Login">
    <h1>来京西，有惊喜！</h1>
    <div class="login-container">
      <div class="login-main">
        <div class="login-header">
          <a>用户名登录</a>
        </div>
        <div class="login-info">
          <div class="content">
            <label>用户名：</label>
            <input
              type="text"
              class="AcctNo"
              v-model="user_name"
              maxlength="50"
              @click="_inputUsername"
              @input="_inputUsername"
            />
            <span style="color:red">*</span>
          </div>
          <div class="promptText">
            <span>{{usernamePrompt}}</span>
          </div>
          <div class="content">
            <label>密码：</label>
            <input type="text" v-model="user_password" maxlength="12" @click="_inputPassword" />
            <span style="color:red">*</span>
          </div>
          <div class="content">
            <button type="submit" class="loginButton" v-on:click="_commit">登录</button>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="loginDiv">
      <router-link tag="a" :to="'/register'">注册</router-link>
    </div>-->
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'login',

  data () {
    return {
      user_name: '',
      user_password: '',
      usernamePrompt: '',
      passwordPrompt: ''
    }
  },

  mounted () {
    window.sessionStorage.clear()
  },

  methods: {
    checkUserName () {
      return this.user_name === this.user_name.replace(/[^\d\a-zA-Z]/gi, '')
    },

    _inputUsername: function () {
      if (!this.checkUserName()) {
        this.usernamePrompt = '用户名只能为数字和字母的组合'
        this.user_name = this.user_name.replace(/[^\d\a-zA-Z]/gi, '')
      } else {
        this.usernamePrompt = ''
      }
    },

    _inputPassword: function () {
      this.passwordPrompt = ''
    },

    _commit: function () {
      if (!this.user_name) {
        console.log('账号不能为空！')
        this.usernamePrompt = '账号不能为空'
        this.passwordPrompt = ''
      } else if (!this.checkUserName()) {
        this.usernamePrompt = '用户名只能为数字和字母的组合'
      } else if (!this.user_password) {
        this.usernamePrompt = ''
        this.passwordPrompt = '密码不能为空'
      } else {
        this.usernamePrompt = ''
        this.passwordPrompt = ''
        // 用户登录校验请求
        axios
          .post('/userInfo/login/', {
            userId: '',
            name: this.user_name,
            password: this.user_password
          })
          .then(response => {
            switch (response.data) {
              case 'No user':
                this.usernamePrompt = '用户信息不存在！'
                break
              case 'Password error':
                this.passwordPrompt = '密码错误！'
                break
              case 'Success':
                // 把拿到的返回结果放在sessionStorage中
                window.sessionStorage.setItem('nameInSession', this.user_name)
                alert(window.sessionStorage.getItem('nameInSession'))
                // 得到用户名userName并存储在sessionStorage中
                window.location.href = '/'
                break
              default:
                alert('请求异常')
            }
          })
          .catch(function (error) {
            console.log(error)
            alert('系统出错/Login/getUserName()')
          })
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" >
.Login {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  .login-container {
    width: 100%;
    height: 500px;
    background-image: url('../assets/loginBack.jpg');
    background-size: contain;
    display: flex;
    justify-content: center;
    align-items: center;

    .login-main {
      width: 30%;
      background: #fff;
      padding: 25px;
      box-sizing: border-box;
      border: 2px solid #aaa;
      border-radius: 10px;

      .login-header {
        font-size: 80%;
        line-height: 40px;
        border-bottom: 1px solid #e3e4e5;
        color: #212121;
        text-align: left;
        font-weight: bold;
      }

      .login-info {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: auto;
        border-bottom: 1px solid #e3e4e5;
        padding: 25px;

        .content {
          margin: 15px;
        }
      }
    }
  }
}

.loginButton {
  border: none;
  line-height: 30px;
  background-color: #ff7f24;
  width: 80%;
  color: #FFFFFF;
}

.promptText {
  font-size: 14px;
  text-align: left;
  color: red;
}
</style>
