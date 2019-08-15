<template>
    <div id="Login">
    <div class="logincss">
        <h1>{{ msg }}</h1>
        <table align="center">
            <tr>
                <td><label>账号：</label></td>
                <td>
                    <label><input type="text" id="AcctNo" maxlength="50" placeholder="请输入手机号或用户名" /></label>
                    <span style="color:red">*</span>
                </td>
            </tr>
            <br>
            <tr>
                <td><label>密码：</label></td>
                <td>
                    <label><input type="text" id="PassWord" maxlength="12"/></label>
                    <span style="color:red">*</span>
                </td>
            </tr>
            <br>
            <tr>
                <td><label>模拟主键ID：</label></td>
                <td>
                    <label><input type="text" id="id"/></label>
                </td>
            </tr>
        </table>
        <a>
            <button type="submit" v-on:click="commit">登录</button>
        </a>
        <span >&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</span>
        <router-link tag="a" :to="'/register'">注册</router-link>
    </div>
    <div class="loginimgcss" >
        <img border="0"  src="../assets/jingxi.png" alt="LoginImage" >
    </div>
    </div>
</template>


<script>
    import axios from 'axios';

    export default {
        name: 'Login',
        data() {
            return {

                AcctNo: '',

                PassWord: '',
                id: '',

                msg: '欢迎来到京西商城',
            };
        },

        methods: {

            commit: function postData() {
                axios.post('http://localhost:5000/interface/', {
                    name: document.getElementById('AcctNo').value,
                    phone: document.getElementById('PassWord').value,
                    id: document.getElementById('id').value
                })
                    .then(function (response) {
                        console.log(response);
                    })
                    .catch(function (error) {
                        console.log(error)
                    });
                window.location.href = '/myjx';
            }
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
    #Login
        font-family 'Avenir', Helvetica, Arial, sans-serif
        -webkit-font-smoothing antialiased
        -moz-osx-font-smoothing grayscale
        text-align center
        color #2c3e50

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

    .logincss{
        position: relative;
        left: 400px;
        top: 200px;
    }
    .loginimgcss{
        position: relative;
        height:300px;
        width:500px;
        left: 300px;
        top: -50px;
    }
</style>



