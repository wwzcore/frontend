<template>
  <div class="UserInfo">
    <h1>{{ msg }}</h1>
    <div id="userInfo">
      <table class="input" align="center">
        <tr>
          <td>用户名:</td>
          <td>
            <input type="text" name="userName" />
          </td>
          <td>手机号:</td>
          <td>
            <input type="text" name="userPhone" />
          </td>
        </tr>
        <tr>
          <td>昵称:</td>
          <td>
            <input type="text" name="userNickname" />
          </td>
          <td>邮箱:</td>
          <td>
            <input type="text" name="userEmail" />
          </td>
        </tr>
        <tr>
          <td>真实姓名:</td>
          <td>
            <input type="text" name="userRealname" />
          </td>
          <td>性别:</td>
          <td>
            <input type="text" name="userSex" />
          </td>
        </tr>
      </table>
    </div>
    <button v-on:click="modify()">修改</button>
    <button v-on:click="submit()">提交</button>
  </div>
</template>

<script>
export default {
  name: "UserInfo",
  data() {
    return {
      msg: "个人信息"
    };
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
