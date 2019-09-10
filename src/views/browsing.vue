<template>
  <div>
    <header>
      <h3>京西商城</h3>
    </header>
    <main class="main">
      <div class="browsingheader">
        <span class="b-span">主题市场</span>
      </div>
      <div class="b-theme">
        <ul>
          <li>
            <router-link :to="{name:'apparelIndex'}">服装</router-link>
          </li>
          <li>
            <router-link :to="{name:'digitalIndex'}">数码</router-link>
          </li>
        </ul>
      </div>
    </main>
  </div>
</template>

<script>
export default {};
</script>

<style lang="stylus" >
.main {
  position: relative;
  margin: auto;
  width: 80%;

  .browsingheader {
    background-color: #FFF8DC;
    color: #CD3333;
    font-size: 18px;
    height: 40px;
    display: flex;
    flex-wrap: nowrap;

    .b-span {
      margin-left: 20px;
      align-items: center;
      display: flex;
      flex-wrap: nowrap;
    }
  }

  .b-theme {
    margin-left: 20px;
    position: absolute;

    ul {
      padding-left: 0px;
      margin-top: 0px;
      border: 1px solid #FFF8DC;
      width: 72px;
      li{float:left}

      a {
        text-decoration: none;
        align-items: center;
      }

      li {
        list-style: none;
      }
    }
  }
}
</style>
