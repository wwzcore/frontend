<template>
  <div class="UserInfo">
    <h1>个人资料</h1>
    <div id="userInfo" v-for="(userInfo,index) of userInfoList" :key="index">
      <table class="input" align="center">
        <tr>
          <td>用户名:</td>
          <td>
            <span>{{userInfo.UserName}}</span>
          </td>
          <td>手机号:</td>
          <td>
            <span>{{userInfo.UserPhone}}</span>
          </td>
        </tr>
        <tr>
          <td>昵称:</td>
          <td>
            <span>{{userInfo.UserNickname}}</span>
          </td>
          <td>邮箱:</td>
          <td>
            <span>{{userInfo.UserEmail}}</span>
          </td>
        </tr>
        <tr>
          <td>真实姓名:</td>
          <td>
            <span>{{userInfo.userRealname}}</span>
          </td>
          <td>性别:</td>
          <td>
            <span>{{userInfo.userSex}}</span>
          </td>
        </tr>
      </table>
    </div>
    <br />
    <button v-on:click="modify()">修改</button>
    <button v-on:click="submit()">提交</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "myAddress",
  data() {
    return {
      getUserId: "1", //从前端获得
      radioId: "",
      userInfoList: []
    };
  },

  mounted() {
    this.getData();
  },
  methods: {
    modify() {
      alert("HW");
    },
    getData() {
      axios
        .get("/interface")
        .then(response => {
          //this.itemList = JSON.parse(response.data);
          this.userInfoList = response.data;
          console.log(typeof response.data);
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
