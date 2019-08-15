<template>
  <div id="app">
    <div v-show="getUserName">
      <div style="float: right">
        <span>用户名：{{getUserName}}</span>
        <button type="submit" style="margin-left:20px" v-on:click="_out">退出登录</button>
      </div>
      <br>
      <br>
      <div id="nav">
        <router-link tag="a" :to="'/myJx'" >我的京西</router-link>|
        <router-link tag="a" :to="'/myInfo'" >个人资料</router-link>|
        <router-link to="/myAddress" >收货地址</router-link>
      </div>
    </div>
    <router-view/>
  </div>
</template>


<script>

  export default {

    name: 'App',

    data() {
      return {
        getUserName:"",
      };
    },

    mounted() {
      this.getUserName = sessionStorage.getItem("getUserName");
    },

    methods: {
      _out:function() {
        window.sessionStorage.clear();
        console.log("退出登录，清空sessionStorage");
        window.location.reload();
      }
    }
  };

</script>

<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  #nav
  padding 30px
  border 1px solid #000

  h1, h2
    font-weight: normal
  ul
    list-style-type: none
    padding: 0
  li
    display: inline-block
    margin: 0 10px
  a
    color: #42b983
</style>
