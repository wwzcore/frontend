<template>
  <div id="Login">
    <h1>来京西，有惊喜！</h1>
    <br/><br/><br/><br/>
    <div id="loginDiv">
      <div id="tableDiv">
      <br/><br/><br/>
      <table id="loginTable">
        <tr>
          <td><label>用户名：</label></td>
          <td class="loginShow">
              <label><input type="text" id="AcctNo" v-model="user_name" maxlength="50" @click="_inputUsername"  @input="_inputUsername"/></label>
          </td>
          <td><span style="color:red">*</span></td>
          <td>&nbsp;</td>
          <td><label>密码：</label></td>
          <td class="loginShow">
              <label><input type="text" v-model="user_password" maxlength="12" @click="_inputPassword"/></label>
          </td>
          <td><span style="color:red">*</span></td>
        </tr>
        <tr>
          <td>&nbsp;</td>
          <td class="promptText"><span>{{usernamePrompt}}</span></td>
          <td></td>
          <td></td>
          <td></td>
          <td class="promptText"><span>{{passwordPrompt}}</span></td>
        </tr>
      </table>
    </div>
    <br/><br/>
    <a>
      <button type="submit" class="loginButton" v-on:click="_commit">登录</button>
    </a>
    <router-link tag="a" :to="'/register'">注册</router-link>
    <br/><br/>
    <br/><br/><br/>
  </div>
    <h1 style="color: darkmagenta">{{ msg }}</h1>
  </div>
</template>

<script>
import axios from 'axios'

export default {

  name: 'login',

  data () {
    return {
      msg: '欢迎来到京西商城',
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
        axios.post('/userInfo/login/', {
          userId: '',
          userName: this.user_name,
          userPassword: this.user_password
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
                alert('登录成功！')
                // 把拿到的返回结果放在sessionStorage中
                window.sessionStorage.setItem('getUserName', this.user_name)
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
  #Login
      font-family 'Avenir', Helvetica, Arial, sans-serif
      -webkit-font-smoothing antialiased
      -moz-osx-font-smoothing grayscale
      text-align center
      float center
      position absolute
      width:600px
      margin-left:-300px
      left:50%
      color #2c3e50
  #loginDiv
      height 220 px
      border 1px solid #000
      background yellow
  #tableDiv
      height 140 px
  #loginTable
      width:550px
      text-align center
      margin-left:25px
  .loginShow
      width 50px
      text-align left
  .loginButton
      margin-right:80px
  .promptText
      font-size 14px
      text-align left
      color red
  a
      color: #42b983;
</style>
