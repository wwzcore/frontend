<template>
  <div class="container">
    <header class="header">
      <div class="image">
        <img alt="logo" src="../assets/suancai.jpg" style="width:50px;height: 50px;" />
      </div>
      <div class="link">
        <ul class="linkin">
          <li style="display:inline;">
            <a href="/Login">登录</a>
          </li>
          <li style="display:inline;">
            <a href="/Register">注册</a>
          </li>
        </ul>
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
import Browsing from "@/components/Browsing.vue";
export default {
  name: "Host",
  components: {
    Browsing
  },

  data() {
    return {
      getUserName: ""
    };
  }
};
</script>

<style lang="stylus">
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
}

.image {
  position: relative;
  left: 15px;
  width: 50px;
  height: 50px;
}

.link {
  position: fixed;
  right: 40px;
}

.linkin {
  list-style-type: none;
  margin: 0;
  padding: 0;
  padding-top: 6px;
  padding-bottom: 6px;
}

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
</style>
