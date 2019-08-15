<template>
  <div id="Register">
    <h1>用户注册</h1>
    <table class="registerTable">

      <tr>
        <td><label>用户名：</label></td>
        <td class="registerShow">
          <label><input type="text" id="acctNo" maxlength="30" v-model="user_name" @input="_inputUsername" @click="_inputUsername"/></label>
          <span style="color:red">*</span>
        </td>
        <td><label>密码：</label></td>
        <td class="registerShow">
          <label><input type="text" id="passWord" maxlength="12" v-model="user_password" @input="_inputPassword" @click="_inputPassword"/></label>
          <span style="color:red">*</span>
        </td>
      </tr>
      <tr>
          <td>&nbsp</td>
          <td class="promptText">{{usernamePrompt}}</td>
          <td>&nbsp</td>
          <td class="promptText">{{passwordPrompt}}</td>
      </tr>

      <tr>
        <td><label>邮箱：</label></td>
        <td class="registerShow">
          <label><input type="text" id="userEmail" maxlength="50" v-model="user_email" @click="_inputEmail"/></label>
          <span style="color:red">*</span>
        </td>
        <td><label>联系电话：</label></td>
        <td class="registerShow">
          <label><input type="tel" onkeyup="value=value.replace(/[^\d]/g,'')" id="userPhone" @click="_inputPhone"/></label>
          <span style="color:red">*</span>
        </td>
      </tr>
       <tr>
          <td>&nbsp</td>
          <td class="promptText">{{emailPrompt}}</td>
          <td>&nbsp</td>
          <td class="promptText">{{phonePrompt}}</td>
       </tr>

      <tr>
          <td><label>姓名：</label></td>
          <td class="registerShow">
            <label><input type="text" id="actName" maxlength="50" /></label>
          </td>
          <td><label>性别：</label></td>
          <td class="registerShow">
              <select style="width:50px" id="userSex">
                  <option value="男">男</option>
                  <option value="女">女</option>
              </select>
          </td>
      </tr>
        <tr>
            <td>&nbsp</td>
            <td>&nbsp</td>
            <td>&nbsp</td>
            <td>&nbsp</td>
        </tr>

        <tr>
        <td><label>地址：</label></td>
        <td class="registerShow">
          <label><input type="text" id="userAddress" maxlength="50" /></label>
        </td>
        <td><label>id：</label></td>
        <td class="registerShow">
          <label><input type="text" id="userId" maxlength="50" /></label>
        </td>
      </tr>

    </table>
      <br/>
      <br/>
    <a>
      <button type="submit" v-on:click="_register" style="margin-right:100px">注册 </button>
    </a>
    <router-link tag="a" :to="'/'">返回</router-link>
  </div>
</template>

<script>

    import axios from "axios";

    export default {

      name: 'Register',

      data () {
        return {
          user_name:"",
          user_password:"",
          user_email:"",

          usernamePrompt:"",
          passwordPrompt:"",
          phonePrompt:"",
          emailPrompt:""
        }
      },

      methods:{

          checkUserName(){
              return this.user_name === this.user_name.replace(/[^\d\a-zA-Z]/gi,'');
          },

          checkPassword(){
              return this.user_password === this.user_password.replace(/[^\d\a-zA-Z]/gi,'');
          },

          checkUserEmail(){
              let regEmail = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
              return regEmail.test(this.user_email);
          },


          _inputUsername: function(){
            if(!this.checkUserName()) {
               this.usernamePrompt = "用户名只能为数字和字母的组合";
               this.user_name = this.user_name.replace(/[^\d\a-zA-Z]/gi,'');
            }else {
               this.usernamePrompt = "";
            }
          },

          _inputPassword: function(){
              if(!this.checkPassword()) {
                  this.passwordPrompt = "用户名只能为数字和字母的组合";
                  this.user_password = this.user_password.replace(/[^\d\a-zA-Z]/gi,'');
              }else {
                  this.passwordPrompt = "";
              }
          },

          _inputEmail: function(){
                  this.emailPrompt = "";
          },

          _inputPhone: function(){
              this.phonePrompt = "";
          },


          addPassword(){
              axios.post('/userInfo/addUser/', {
                  userId: document.getElementById("userId").value,
                  userName: document.getElementById("acctNo").value,
                  userPassword: document.getElementById("passWord").value
              })
                  .then(function (response) {
                      console.log(response);
                      window.location.href = "/";  // 新用户注册成功后在此处返回登录页面
                  })
                  .catch(function (error) {
                      console.log(error);
                      alert("输入信息格式不正确。");
                  });
          },

          _register: function () {
              let user_acct = document.getElementById("acctNo").value;
              let user_password = document.getElementById("passWord").value;
              let user_email = document.getElementById("userEmail").value;
              let user_phone = document.getElementById("userPhone").value;

              if(!user_acct){
                  this.usernamePrompt = "用户名不能为空";
              } else if(!this.checkUserName()){
                  this.usernamePrompt = "用户名只能为数字和字母的组合";
              } else if(!user_password){
                  this.passwordPrompt = "密码不能为空";
              } else if(!this.checkPassword()){
                  this.passwordPrompt = "密码只能为数字和字母的组合";
              } else if(!user_email){
                  this.emailPrompt = "邮箱不能为空";
              } else if(!this.checkUserEmail()){
                  this.emailPrompt = "请输入正确的邮箱";
              } else if(!user_phone){
                  this.phonePrompt = "手机号不能为空";
              } else if(user_phone.length !== 11){
                  this.phonePrompt = "请输入正确的手机号";
              } else{
                  this.checkUserEmail();
                  axios.post('/user/addUser/', {
                      userId: document.getElementById("userId").value,
                      userName: user_acct,
                      userPhone: user_phone,
                      userRealName: document.getElementById("actName").value,
                      userMallName: user_email,
                      userSex: document.getElementById("userSex").value,
                      userEmail: user_email,
                      userAddress: document.getElementById("userAddress").value
                  })
                  .then(response => {
                      switch(response.data) {
                          case "userName false":
                              this.usernamePrompt = "用户名不能重复";
                              break;
                          case "userPhone false":
                              this.phonePrompt = "手机号不能重复";
                              break;
                          case "userMallName false":
                              this.emailPrompt= "邮箱不能重复";
                              break;
                          case "Success":
                              alert("新用户可以注册！");
                              this.addPassword();
                              break;
                          default:
                              alert("请求异常");
                      }
                      console.log(response);
                  })
                  .catch(function (error) {
                      console.log(error);
                      alert("输入信息格式不正确。");
                  });

              }
          }
      }
    };
</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  #Register
     float center
     position absolute
     width:1000px
     left:50%
     margin-left:-500px
  .registerTable
     text-align right
     margin-left:250px
  .registerShow
     width 200px
     text-align left
  .promptText
     font-size 14px
     text-align left
     color red
</style>
