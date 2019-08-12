<template>
  <div id="MyJX">
    <div id="nav">
      <img src="@/assets/logo.png"/>
      <h1>{{ msg }}</h1>
      <router-link to="/myinfo" >个人资料</router-link> |
      <router-link to="/myAddress" >收货地址</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'MyJX',
  data() {
    return {
      msg: '我的京西',
    };
  }
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
#MyJX
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50

#nav
  padding 30px
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
