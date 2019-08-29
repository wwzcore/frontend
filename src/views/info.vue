<template>
  <div class="userInfo">
    <h1>个人资料</h1>
    <table class="input" align="center">
      <tr>
        <td>用户名:</td>
        <td class="UserInfoShow">
          <input
            type="text"
            v-model="user.name"
            onkeyup="value=value.replace(/[^\a-zA-Z0-9]/gi,'')"
            v-bind:disabled="readonly"
            maxlength="30"
            id="Name"
          />
        </td>
        <td>*合法字符为字母、数字</td>
      </tr>
      <tr>
        <td>手机号:</td>
        <td>
          <input
            type="text"
            v-model="user.phone"
            onkeyup="value=value.replace(/[^\d]/g,'')"
            v-bind:disabled="true"
            id="Phone"
          />
        </td>
      </tr>
      <tr>
        <td>昵称:</td>
        <td>
          <input
            type="text"
            v-model="user.mallName"
            onkeyup="value=value.replace(/[^\u4E00-\u9FA5\a-zA-Z0-9]/gi,'')"
            v-bind:disabled="readonly"
            maxlength="50"
            id="Nickname"
          />
        </td>
        <td>合法字符为汉字、字母、数字</td>
      </tr>
      <tr>
        <td>邮箱:</td>
        <td>
          <input type="text" v-model="user.email" v-bind:disabled="readonly" id="UserEmail" />
        </td>
      </tr>
      <tr>
        <td>真实姓名:</td>
        <td>
          <input
            type="text"
            v-model="user.realName"
            onkeyup="value=value.replace(/[^\u4E00-\u9FA5\a-zA-Z]/gi,'')"
            v-bind:disabled="readonly"
            maxlength="50"
            id="Realname"
          />
        </td>
        <td>合法字符为汉字、字母</td>
      </tr>
      <tr>
        <td>性别:</td>
        <td>
          <select v-model="user.sex" v-bind:disabled="readonly" class="myUserInfoShow">
            <!-- 内联对象字面量 -->
            <option disabled selected value="0">==请选择==</option>
            <option value="男">男</option>
            <option value="女">女</option>
          </select>
        </td>
      </tr>
    </table>
    <br />
    <button v-on:click="modify()" v-show="readonly">编辑</button> |
    <button v-on:click="submit()">提交</button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'info',
  data () {
    return {
      user: {},
      readonly: true
    }
  },

  mounted () {
    this.nameForSendingToBackend = sessionStorage.getItem('nameInSession')
    this.getData()
  },

  methods: {
    getData () {
      axios
        .get('/user/getUseOne/userName=' + this.nameForSendingToBackend)
        .then(response => {
          this.user = response.data
        })
        .catch(function (error) {
          console.log(error)
        })
    },

    modify () {
      this.readonly = false
    },
    submit () {
      let emailLegal = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
      // let a = emailLegal.test(this.user.UserEmail);
      if (!emailLegal.test(this.user.Email)) {
        return alert('邮件地址不合规！')
      }
      axios
        .put('/user/updateUser/', this.user)
        .then(function (response) {
          window.sessionStorage.setItem('nameInSession', response.data.Name)
          alert('修改成功')
          console.log(response)
          window.location.reload()
        })
        .catch(function (error) {
          console.log(error)
          alert('输入的信息有误！')
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
.userInfo {
  border: 1px solid #000;
  width: 600px;
  margin-top: 10px;
  margin-left: 33%;

  .myUserInfoShow {
    width: 100px;
    text-decoration: underline;
  }
}
</style>
