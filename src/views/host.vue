<template>
  <div class="container">
    <header class="header">
      <div class="head_left">
        <div class="avatar">
          <!--
          <img alt="logo" :src="require('../assets/'+userico+'.jpg')" />
          -->
          <img alt="logo" v-if="userImgUrl" :src="userImgUrl" />
          <img alt="logo" v-else src="../assets/default.jpg" />
        </div>
        <div v-bind:class="[userName?'nav':'nav_h']">
          <router-link :to="{name: 'browsing'}">我的京西</router-link>
          <ul class="menu">
            <li>
              <router-link :to="{name: 'info'}">个人资料</router-link>
            </li>
            <li>
              <router-link :to="{name: 'address'}">收货地址</router-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="link" v-show="!userName">
        <a href="/login">登录</a>
        <a href="/register">注册</a>
      </div>
      <div class="link" v-show="userName">
        <span>用户名:{{userName}}</span>
        <span class="div_b" v-on:click="out">退出登录</span>
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
import { EventBus } from '@/bus/event-bus'

export default {
  name: 'host',

  data () {
    return {
      user: {},
      userName: '',
      userico: 'header',
      userImgUrl: ''
    }
  },

  mounted () {
    this.userName = sessionStorage.getItem('nameInSession')

    this.userico = this.userName

    this.getImg(this.userName)

    EventBus.$on('test', msg => {
      this.userImgUrl = msg.imgUrl
      this.userName = msg.userName
    })
  },

  methods: {
    getImg (val) {
      axios
        .get('/user/getUseOne/userName=' + val)
        .then(response => {
          this.userImgUrl = response.data.imgUrl
        })
        .catch(function (error) {
          console.log(error)
        })
    },

    out () {
      axios
        .post('/userInfo/loginout/', {
          userName: this.userName
        })
        .then(response => {
          window.sessionStorage.clear()
          console.log('退出登录，清空sessionStorage')
          window.location.href = '/'
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
  justify-content: space-between;
  background-color: #24292e;
  color: hsla(0, 0%, 100%, 0.7);
  font-size: 14px;
  line-height: 1.5;
  padding: 9px;
  z-index: 32;
  position: relative;

  .head_left {
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
      font-size: 25px;
      position: relative;
      left: 10px;
      list-style: none;

      a {
        text-decoration: none;
        color: #FFEC00;
      }

      .menu {
        padding: 10px;
        display: none;
        position: absolute;
        white-space: nowrap;
        margin-block-start: auto;

        a {
          text-decoration: none;
        }
      }
    }

    &:hover {
      .menu {
        text-decoraction: none;
        position: absolute;
        display: block;
        background-color: #24292e;
      }

      a:hover, a:active {
        background-color: #5E5E5E;
      }
    }

    .nav_h {
      font-weight: bold;
      font-size: 25px;
      position: relative;
      left: 10px;
      list-style: none;

      a {
        text-decoration: none;
        color: #FFEC00;
      }

      .menu {
        padding: 10px;
        display: none;
        position: absolute;
        text-decoration: none;
        white-space: nowrap;
      }
    }
  }

  .link {
    position: relative;
    right: 10px;
    list-style: none;
    font-weight: bold;
    font-size: 17px;

    a:link, a:visited {
      color: #FFFFFF;
      text-align: center;
      padding: 6px;
      text-decoration: none;
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

.div_b {
  cursor: pointer;
  margin-left: 20px;
  text-decoration: none;
  color: #FFFFFF;
}
</style>
