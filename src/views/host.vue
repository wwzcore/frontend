<template>
  <div class="container">
    <header class="header">
      <div class="headleft">
        <div class="avatar">
          <img alt="logo" :src="require('../assets/'+userico+'.jpg')" />
        </div>
        <div v-bind:class="[getUserName?'nav':'nav_h']">
        <router-link :to="{name: 'browsing'}">我的京西</router-link>
        <div class="menu">
          <li>
            <router-link :to="{name: 'info'}">个人资料</router-link>
          </li>
          <li>
            <router-link :to="{name: 'address'}">收货地址</router-link>
          </li>
        </div>
      </div>
      </div>
      <div class="link" v-show="!getUserName">
        <a href="/login">登录</a>
        <a href="/register">注册</a>
      </div>
      <div class="link" v-show="getUserName">
        <span>用户名:{{getUserName}}</span>
        <span class="div_b" v-on:click="_out">退出登录</span>
      </div>
    </header>
    <main>
      <router-view />
    </main>
    <footer></footer>
  </div>
</template>

<script>
  import axios from 'axios'
export default {
  name: 'host',

  data () {
    return {
      getUserName: '',
      userico:'header'
    }
  },
  mounted: function () {
    this.getUserName = sessionStorage.getItem("getUserName");
      alert(this.getUserName)
      userico = this.getUserName

  },
  methods: {
    _out:function() {
      axios.post('/userInfo/loginout/', {
        userName: this.getUserName
      })
        .then(response => {
          window.sessionStorage.clear();
          console.log("退出登录，清空sessionStorage");
          alert(response.data.message);
          window.location.href = '/';
        })
        .catch(function (error) {
          console.log(error)
          alert('系统出错/userInfo/loginout')
        })
    }
  }
}
</script>

<style lang="stylus" >
.header {
  align-items: center;
  display: flex;
  flex-wrap: nowrap;
  justify-content : space-between;
  background-color: #24292e;
  color: hsla(0, 0%, 100%, 0.7);
  font-size: 14px;
  line-height: 1.5;
  padding: 9px;
  z-index: 32;
  position: relative;
  .headleft{
    display: flex;
    flex-wrap: nowrap;
    position: relative;
    align-items: center;
    .avatar {
      width: 25px;
      height: 25px;
      margin-left: 15px;
      position: relative;
      img {
        width: 100%;
        height: 100%;
      }
    }

    .nav {
      font-weight: bold;
      font-size: 20px;
      position: relative;
      left: 10px;
      list-style: none;

      .menu {
        padding: 10px;
        display: none;
        position: absolute;
        text-decoration: none;
        text-transform: uppercase;
        white-space: nowrap;
      }
    }

    &:hover {
      .menu {
        display: block;
        background-color: #24292e;
      }
    }

    .nav_h {
      font-weight: bold;
      font-size: 20px;
      position: relative;
      left: 10px;
      list-style: none;

      .menu {
        padding: 10px;
        display: none;
        position: absolute;
        text-decoration: none;
        text-transform: uppercase;
        white-space: nowrap;
      }
    }
  }

  .link {
    position: relative;
    right: 10px;
    list-style: none;
    font-weight: bold;
    font-size: 20px


    a:link, a:visited {
      color: #FFFFFF;
      text-align: center;
      padding: 6px;
      text-decoration: none;
      text-transform: uppercase;
    }

    a:hover, a:active {
      background-color: #5E5E5E;
    }
  }
}

.image {
  position: relative;
  left: 15px;
  width: 50px;
  height: 50px;
}
.div_b
  cursor:pointer
  margin-left:20px
  text-decoration:underline
  color: #1830b9
</style>
