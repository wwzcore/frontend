<template>
  <div class="Login">
    <h1>{{ msg }}</h1>
    <from>
      <table action="" method="post">
        <tr>
          <td><label>账号：</label></td>
          <td>
            <input type="text" id="AcctNo" maxlength="50"/>
            <span style="color:red">*</span>
          </td>
          <td><label>密码：</label></td>
          <td>
            <input type="text" id="PassWord" maxlength="50"/>
            <span style="color:red">*</span>
          </td>
        <tr>
          <td><label>模拟主键ID：</label></td>
          <td>
            <input type="text" id="id"/>
          </td>
        </tr>
        </tr>
      </table>
    </from>
    <a>
      <button type="submit" v-on:click="commit">登录</button>
    </a>
    <router-link tag="a" :to="'/register'">注册</router-link>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Login',
  data () {
    return {

      AcctNo: '',

      PassWord: '',
      id: '',

      msg: '欢迎来到京西商城'
    }
  },

  methods: {

    commit: function postData () {
      axios.post('http://localhost:5000/interface/', {

        name: document.getElementById('AcctNo').value,

        phone: document.getElementById('PassWord').value,
        id: document.getElementById('id').value
      })

        .then(function (response) {
          console.log(response)
        })

        .catch(function (error) {
          console.log(error)
        })
      window.location.href = '#/myjx'
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
