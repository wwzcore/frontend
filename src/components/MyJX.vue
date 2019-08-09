<template>
  <div class="MyJX">
    <img src="@/assets/logo.png">
    <h1>{{ msg }}</h1>
    <router-link tag="a" :to="'/myinfo'" >个人资料</router-link>
    <router-link tag="a" :to="'/myaddress'" >收货地址</router-link>
  </div>
</template>

<script>
export default {
  name: 'MyJX',
  data () {
    return {
      msg: '我的京西'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
</style>
