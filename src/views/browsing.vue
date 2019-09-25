<template>
  <div>
    <header>
      <div class="header-div">
        <h1>京西商城</h1>
      </div>
    </header>
    <main class="main">
      <div class="browsingheader">
        <span class="b-span">主题市场</span>
      </div>
      <div class="b-list">
        <ul>
          <li class="li-father">
            <router-link :to="{name:'apparelIndex'}">服装</router-link>
          </li>
          <li class="li">
            <router-link :to="{name:'apparelIndex'}">男装</router-link>
            <router-link :to="{name:'apparelIndex'}">女装</router-link>
          </li>
        </ul>
        <ul>
          <li class="li-father">
            <router-link :to="{name:'digitalIndex'}">数码</router-link>
          </li>
          <li class="li">
            <router-link :to="{name:'digitalIndex'}">手机</router-link>
            <router-link :to="{name:'digitalIndex'}">电脑</router-link>
            <router-link :to="{name:'digitalIndex'}">相机</router-link>
          </li>
        </ul>
      </div>
      <div class="browsing-body">
        <div class="products">
          <div>
            <router-link :to="{name:'apparelIndex'}">服装</router-link>
          </div>
          <div class="images-container">
            <div>
              <img class="big-img" src="../assets/suancai.jpg" alt="apparel" />
            </div>
            <div class="right-img">
              <img class="small-img" src="../assets/suancai.jpg" alt="apparel" />
              <img class="small-img" src="../assets/suancai.jpg" alt="apparel" />
            </div>
          </div>
        </div>
        <div class="products">
          <div>
            <router-link :to="{name:'digitalIndex'}">数码</router-link>
          </div>
          <div class="images-container">
            <div>
              <img class="big-img" src="../assets/suancai.jpg" alt="apparel" />
            </div>
            <div class="right-img">
              <img class="small-img" src="../assets/suancai.jpg" alt="apparel" />
              <img class="small-img" src="../assets/suancai.jpg" alt="apparel" />
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {}
</script>

<style lang="stylus" >
.header-div {
  margin: auto;
  width: fit-content;
}

.main {
  position: relative;
  margin: auto;
  width: 80%;
  height: fit-content;
  padding: 10px;

  .browsingheader {
    background-color: #FF7F24;
    color: #FFFFFF;
    font-size: 20px;
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

  .b-list {
    margin-left: 20px;
    position: absolute;
    height: fit-content;
    width: 100px;

    ul {
      padding-top: 2px;
      padding-left: 0px;
      margin: auto;
      height: 25px;

      .li-father {
        position: absolute;
        float: left;
        list-style: none;
        border-bottom: solid 1px #FF7F24;
      }

      .li {
        display: none;
        list-style: none;
        max-width: 50px;
      }

      &:hover {
        .li {
          left: 45px;
          padding: 5px;
          border: solid 1px #FF7F24;
          position: absolute;
          display: block;
          list-style: none;
          white-space: nowrap;
        }
      }

      a {
        text-decoration: none;
        align-items: center;
        color: #FF7F24;
      }
    }
  }

  .browsing-body {
    position: relative;
    top: 80px;
    background-color: #FF7F24;
    display: flex;
    background-color: #FFFFFF;

    .products {
      width: 500px;
      height: 300px;
      border: solid 1px #FF7F24;
      white-space: nowrap;
      margin: auto;

      .big-img {
        width: 200px;
        height: 200px;
        display: block;
      }

      .small-img {
        width: 180px;
        height: 90px;
      }

      .images-container {
        display: flex;
        justify-content: space-evenly;

        .right-img {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
      }
    }
  }
}
</style>
