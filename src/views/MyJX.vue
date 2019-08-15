<template>
  <div id="MyJX">
<<<<<<< HEAD

    <div>
      <img src="../assets/logo.png" alt=""/>
      <h1>{{ msg }}</h1>
    </div>

    <router-view/>
=======
    <div id="nav">
      <img src="@/assets/logo.png" />
      <h1>{{ msg }}</h1>
      <router-link to="/UserInfo">个人资料</router-link>|
      <router-link to="/myAddress">收货地址</router-link>
    </div>
    <router-view />
>>>>>>> 7d9a93e8dde73c47cd14c06d2ddb98f290dca633
  </div>
</template>

<script>
<<<<<<< HEAD

  export default {

    name: 'MyJX',

    data() {
      return {
        getUserName:"",
        msg: '我的京西'
      };
    },

    mounted() {
      this.getUserName = sessionStorage.getItem("getUserName");
    },

    methods: {
      _out:function() {

      }
    }
  };

=======
export default {
  name: "MyJX",
  data() {
    return {
      msg: "我的京西"
    };
   }  
};
>>>>>>> 7d9a93e8dde73c47cd14c06d2ddb98f290dca633
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
<<<<<<< HEAD
#MyJX
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50

=======
#MyJX {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

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
}
>>>>>>> 7d9a93e8dde73c47cd14c06d2ddb98f290dca633
</style>
