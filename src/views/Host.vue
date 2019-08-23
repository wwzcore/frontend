<template>
  <div class="container">
    <header class="header">
      <div class="avatar">
        <img alt="logo" src="../assets/suancai.jpg" />
      </div>
      <div class="nav">
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

      <div class="link">
        <a href="/login">登录</a>
        <a href="/register">注册</a>
      </div>
    </header>
    <main>
      <router-view />
    </main>
    <footer></footer>
  </div>
</template>

<script>
export default {
  name: 'host',

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

  .avatar {
    width: 50px;
    height: 50px;

    img {
      width: 100%;
      height: 100%;
      margin-left: 15px;
    }
  }

  .nav {
    font-weight: bold;
    font-size: 20px;
    position: relative;
    left: 40px;
    list-style: none;

    .menu {
      padding: 10px;
      display: none;
      position: absolute;
      text-decoration: none;
      text-transform: uppercase;
      white-space: nowrap;
    }

    &:hover {
      .menu {
        display: block;
        background-color: #24292e;
      }
    }
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
