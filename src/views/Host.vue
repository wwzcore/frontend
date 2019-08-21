<template>
  <div class="container">
    <header class="header">
      <div class="image">
        <img alt="logo" src="../assets/suancai.jpg" style="width:50px;height: 50px;" />
      </div>
      <div class="nav">
        <a>我的京西</a>
        <div class="menu">
          <li>
            <a href="/MyInfo">个人资料</a>
          </li>
          <li>
            <a href="/myAddress">收货地址</a>
          </li>
        </div>
      </div>

      <div class="link">
        <a href="/Login">登录</a>
        <a href="/Register">注册</a>
      </div>
    </header>
    <main>
      <p>show</p>
      <Browsing />
    </main>
    <footer>
      <p>Here's some contact info</p>
    </footer>
  </div>
</template>

<script>
import Browsing from '@/components/Browsing.vue'
export default {
  name: 'Host',
  components: {
    Browsing
  },

  data () {
    return {
      getUserName: ''
    }
  }
}
</script>

<style lang="stylus" >
.header {
  align-items: center;
  display: flex;
  flex-wrap: nowrap;
  background-color: #24292e;
  color: hsla(0, 0%, 100%, 0.7);
  font-size: 14px;
  line-height: 1.5;
  padding: 9px;
  z-index: 32;
  position: relative;

  .nav {
    font-weight: bold;
    font-size: 20px;
    position: relative;
    left: 40px;
    list-style: none;

    a:hover, a:active {
      background-color: #5E5E5E;
    }

    .menu {
      padding: 0;
      display: none;
      position: absolute;
      text-decoration: none;
      text-transform: uppercase;

      a:hover, a:active {
        background-color: #5E5E5E;
      }
    }
  }

  .nav:hover .menu {
    display: block;
    background-color: #24292e;
  }

  .link {
    position: absolute;
    right: 40px;

    a:link, a:visited {
      font-weight: bold;
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
</style>
