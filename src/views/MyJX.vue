<template>
  <div id="MyJX">

    <div>
      <img src="../assets/logo.png" alt=""/>
      <h1>{{ msg }}</h1>
    </div>

    <router-view/>
  </div>
</template>

<script>

export default {

  name: 'MyJX',

  data () {
    return {
      getUserName: '',
      msg: '我的京西'
    }
  },

  mounted () {
    this.getUserName = sessionStorage.getItem('getUserName')
  }

}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
#MyJX
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50

</style>
