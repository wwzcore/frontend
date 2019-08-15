<template>
<<<<<<< HEAD
  <div id="Login">
    <h1>{{ msg }}</h1>
    <br/><br/><br/><br/>
    <table class="loginTable">
      <tr>
        <td><label>用户名：</label></td>
        <td class="loginShow">
            <label><input type="text" id="AcctNo" v-model="AcctNo" maxlength="50" @click="_inputUsername"/></label>
          <span style="color:red">*</span>
        </td>
        <td><label>密码：</label></td>
        <td class="loginShow">
            <label><input type="text" id="PassWord" maxlength="50" @click="_inputPassword"/></label>
          <span style="color:red">*</span>
        </td>
      <tr>
      <tr>
        <td></td>
        <td class="promptText"><span>{{usernamePrompt}}</span></td>
        <td></td>
        <td class="promptText"><span>{{passwordPrompt}}</span></td>
      </tr>
    </table>
    <br/><br/>
    <a>
      <button type="submit" class="loginButton" v-on:click="_commit">登录</button>
    </a>
    <router-link tag="a" :to="'/register'">注册</router-link>
  </div>
=======
    <div id="Login">
    <div class="logincss">
        <h1>{{ msg }}</h1>
        <table align="center">
            <tr>
                <td><label>账号：</label></td>
                <td>
                    <label><input type="text" id="AcctNo" maxlength="50" placeholder="请输入手机号或用户名" /></label>
                    <span style="color:red">*</span>
                </td>
            </tr>
            <br>
            <tr>
                <td><label>密码：</label></td>
                <td>
                    <label><input type="text" id="PassWord" maxlength="12"/></label>
                    <span style="color:red">*</span>
                </td>
            </tr>
            <br>
            <tr>
                <td><label>模拟主键ID：</label></td>
                <td>
                    <label><input type="text" id="id"/></label>
                </td>
            </tr>
        </table>
        <a>
            <button type="submit" v-on:click="commit">登录</button>
        </a>
        <span >&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</span>
        <router-link tag="a" :to="'/register'">注册</router-link>
    </div>
    <div class="loginimgcss" >
        <img border="0"  src="../assets/jingxi.png" alt="LoginImage" >
    </div>
    </div>
>>>>>>> 7d9a93e8dde73c47cd14c06d2ddb98f290dca633
</template>


<script>
<<<<<<< HEAD
  import axios from 'axios';

  export default {

     name: 'Login',

        data() {
           return {
           msg: '欢迎来到京西商城',
           AcctNo:"",
           usernamePrompt:"",
           passwordPrompt:""
        };
      },

    mounted(){
      window.sessionStorage.clear();
    },

     methods: {
       checkUserName(){
         return this.AcctNo === this.AcctNo.replace(/[^\d\a-zA-Z]/gi,'');
       },

       _inputUsername: function(){
         this.usernamePrompt = "";
       },

       _inputPassword: function(){
         this.passwordPrompt = "";
       },


       // 根据userID得到用户名userName
       getUserName(){
         let getUserId = sessionStorage.getItem("getUserId");
         axios.get('/user/getUserName/userId='+getUserId).then(response => {
           let getUserName = response.data;
           if(getUserName.length>0){
             window.sessionStorage.setItem('getUserName',getUserName);
             window.location.href = "/MyJX";                         //登录后页面从这里跳转
           }else {
             console.log("not found data");
             alert("系统出错/Login/getUserName()");
           }
         })
         .catch(function (error) {
           console.log(error);
         });
       },

        _commit: function() {

           let acctNo = document.getElementById("AcctNo").value;
           let passWord = document.getElementById("PassWord").value;

           if(!acctNo){
              console.log("账号不能为空！");
              this.usernamePrompt = "账号不能为空";
              this.passwordPrompt = "";
           } else if(!this.checkUserName()){
             this.usernamePrompt = "用户名只能为数字和字母的组合";
           } else if(!passWord) {
              console.log("密码不能为空！");
              this.usernamePrompt = "";
              this.passwordPrompt = "密码不能为空";
           } else {
              this.usernamePrompt = '';
              this.passwordPrompt = '';
              axios.get('/userInfo/login/userName=' + acctNo + '?userPassword=' + passWord)
                 .then(response => {
                    if(!response.data){
                       //console.log("账号或密码错误。");
                       alert("账号或密码错误。");
                       document.getElementById("PassWord").value = "";
                    }else {
                       // 把拿到的返回结果放在sessionStorage中
                       window.sessionStorage.setItem('getUserId',response.data.userId);
                       // 得到用户名userName并存储在sessionStorage中
                       this.getUserName();
                    }
                 })
                 .catch(function (error) {
                    console.log(error);
                 });
           }
        }
     }
  };
=======
    import axios from 'axios';

    export default {
        name: 'Login',
        data() {
            return {

                AcctNo: '',

                PassWord: '',
                id: '',

                msg: '欢迎来到京西商城',
            };
        },

        methods: {

            commit: function postData() {
                axios.post('http://localhost:5000/interface/', {
                    name: document.getElementById('AcctNo').value,
                    phone: document.getElementById('PassWord').value,
                    id: document.getElementById('id').value
                })
                    .then(function (response) {
                        console.log(response);
                    })
                    .catch(function (error) {
                        console.log(error)
                    });
                window.location.href = '/myjx';
            }
        }
    };
>>>>>>> 7d9a93e8dde73c47cd14c06d2ddb98f290dca633
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
<<<<<<< HEAD
  #Login
    font-family 'Avenir', Helvetica, Arial, sans-serif
    -webkit-font-smoothing antialiased
    -moz-osx-font-smoothing grayscale
    text-align center
    float center
    position absolute
    width:1000px
    left:50%
    margin-left:-500px
    color #2c3e50
  .loginTable
    text-align right
    margin-left:225px
  .loginShow
    width 200px
    text-align left
  .loginButton
    margin-right:100px
  .promptText
    font-size 14px
    text-align left
    color red
  a
    color: #42b983;
=======
    #Login
        font-family 'Avenir', Helvetica, Arial, sans-serif
        -webkit-font-smoothing antialiased
        -moz-osx-font-smoothing grayscale
        text-align center
        color #2c3e50

        h1, h2 {
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

    .logincss{
        position: relative;
        left: 400px;
        top: 200px;
    }
    .loginimgcss{
        position: relative;
        height:300px;
        width:500px;
        left: 300px;
        top: -50px;
    }
>>>>>>> 7d9a93e8dde73c47cd14c06d2ddb98f290dca633
</style>



