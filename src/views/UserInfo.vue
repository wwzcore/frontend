<template>
  <div class="UserInfo">
    <h1>个人资料</h1>
    <div id="userInfo" v-for="(userInfo,index) of userInfoList" :key="index">
      <table class="input" align="center">
        <tr>
          <td>用户名:</td>
          <td class="myUserInfoShow">
            <input
              type="text"
              v-model="userInfo.UserName"
              onkeyup="value=value.replace(/[^\u4E00-\u9FA5\a-zA-Z]/gi,'')"
              disabled="disabled"
              maxlength="30"
              id="UserName"
            />
          </td>
          <td>*合法字符为字母、数字</td>
        </tr>
        <tr>
          <td>手机号:</td>
          <td>
            <input
              type="text"
              v-model="userInfo.UserPhone"
              onkeyup="value=value.replace(/[^\d]/g,'')"
              disabled="disabled"
              id="UserPhone"
            />
          </td>
        </tr>
        <tr>
          <td>昵称:</td>
          <td>
            <input
              type="text"
              v-model="userInfo.UserNickname"
              onkeyup="value=value.replace(/[^\u4E00-\u9FA5\a-zA-Z]/gi,'')"
              disabled="disabled"
              maxlength="50"
              id="UserNickname"
            />
          </td>
          <td>合法字符为汉字、字母、数字</td>
        </tr>
        <tr>
          <td>邮箱:</td>
          <td>
            <input type="text" v-model="userInfo.UserEmail" disabled="disabled" id="UserEmail" />
          </td>
        </tr>
        <tr>
          <td>真实姓名:</td>
          <td>
            <input
              type="text"
              v-model="userInfo.UserRealname"
              onkeyup="value=value.replace(/[^\u4E00-\u9FA5\a-zA-Z]/gi,'')"
              disabled="disabled"
              maxlength="50"
              id="UserRealname"
            />
          </td>
          <td>合法字符为汉字、字母</td>
        </tr>
        <tr>
          <td>性别:</td>
          <td>
            <input type="text" v-model="userInfo.UserSex" disabled="disabled" id="UserSex" />
          </td>
        </tr>
      </table>
    </div>
    <br />
    <button v-on:click="modify()">编辑</button> |
    <button v-on:click="submit()">提交</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "UserInfo",
  data() {
    return {
      UserId: "1", //从前端获得
      userInfoList: [],
      userInfoArray: ""
    };
  },

  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      axios
        .get("/UserInfo")
        .then(response => {
          this.userInfoList = response.data;

          let userInfoList = response.data;
          this.userInfoArray = userInfoList[0];
          let email = this.userInfoArray.UserEmail;

          console.log(typeof response.data);
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    modify() {
      document.getElementById("UserName").disabled = false;
      document.getElementById("UserNickname").disabled = false;
      document.getElementById("UserEmail").disabled = false;
      document.getElementById("UserRealname").disabled = false;
      document.getElementById("UserSex").disabled = false;
    },
    submit() {
      // this.$options.methods.check(this.userInfoArray);
      var emailLegal = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
      var a = emailLegal.test(this.userInfoArray.UserEmail);
      if (!emailLegal.test(this.userInfoArray.UserEmail)) {
        alert("邮件地址不合规！");
      } else {
        axios
          .put("/userInfo/" + 1, {
            id: "1",
            UserPhone: document.getElementById("UserPhone").value,
            UserName: document.getElementById("UserName").value,
            UserNickname: document.getElementById("UserNickname").value,
            UserEmail: document.getElementById("UserEmail").value,
            UserRealname: document.getElementById("UserRealname").value,
            UserSex: document.getElementById("UserSex").value
          })
          .then(function(response) {
            console.log(response);
            alert("修改成功");
            window.location.reload();
          })
          .catch(function(error) {
            console.log(error);
            alert("输入的信息有误！");
          });
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
.myUserInfoShow {
  width: 100px;
  text-decoration: underline;
}
</style>
