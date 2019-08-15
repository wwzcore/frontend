<template>
<div id="newAdd">
    <h1>新增收货地址</h1>
    <table class="newAddTable">
        <tr>
            <td><span>姓名：</span></td>
            <td>
                <label>
                    <input type="text" onkeyup="value=value.replace(/[^\u4E00-\u9FA5\a-zA-Z]/gi,'')" id="name" @click="_inputName"/>
                </label>
                <span style="color:red">*</span>
                <span class="promptText">{{namePrompt}}</span>
            </td>
        </tr>
        <tr>
            <td><span>联系电话：</span></td>
            <td>
                <!--使用onkeyup方法和type=tel，使文本框只能输入数字-->
                <label>
                    <input type="tel" onkeyup="value=value.replace(/[^\d]/g,'')" id="phone"  @click="_inputPhone"/>
                </label>
                <span style="color:red">*</span>
                <span class="promptText">{{phonePrompt}}</span>
            </td>
        </tr>
        <tr>
            <td><span>收货地址：</span></td>
            <td>
                <label><input type="text" id="address" style="width:400px;" maxlength="1000" @click="_inputAddress"/></label>
                <span style="color:red">*</span>
                <span class="promptText">{{addressPrompt}}</span>
            </td>
        </tr>
        <tr>
            <td><span>id：</span></td>
            <td>
                <label><input type="text" id="id"/></label>
                <span>（模拟后台，测试用）</span>
            </td>
        </tr>
    </table>

    <div>
        <button type="submit" v-on:click="_commit">提交新地址</button>
    </div>
</div>
</template>

<script>

    import axios from "axios";

    export default {

        name: "newAdd",

        data() {
            return {
                getUserId:"",

                namePrompt:"",
                phonePrompt:"",
                addressPrompt:"",


                // 送给后端的json对象
                receiverId:"",
                userId:"",
                receiverName: "",
                receiverPhone: "",
                receiverAddressInfo: ""
            }
        },

        mounted() {
            this.getUserId = sessionStorage.getItem("getUserId");
        },

        methods: {
            _inputName: function(){
                this.namePrompt = "";
            },

            _inputPhone: function(){
                this.phonePrompt = "";
            },

            _inputAddress: function(){
                this.addressPrompt = "";
            },

            _commit: function() {

                let getName = document.getElementById("name").value;
                let getPhone = document.getElementById("phone").value;
                let getAddress = document.getElementById("address").value;

                if(!getName){
                    this.namePrompt = "姓名不能为空";
                }else if(getPhone.length !== 11){
                    this.phonePrompt = "请输入正确的手机号";
                }else if(!getAddress){
                    this.addressPrompt = "收货地址不能为空";
                }else{
                    axios.post('/receiver/add/', {
                        receiverId: document.getElementById("id").value,
                        userId: this.getUserId,
                        receiverName: getName,
                        receiverPhone: getPhone,
                        receiverAddressInfo: getAddress
                })
                    .then(function (response) {
                        console.log(response);
                        window.location.href = "/myAddress";
                    })
                    .catch(function (error) {
                        console.log(error);
                        alert("输入信息格式不正确。");
                    });
                }
            }

        }
    }
</script>



<style lang="stylus">
    #newAdd
        position absolute;
        width:600px;
        left:50%;
        margin-left:-300px;
        border:1px solid #000;
    .newAddTable
        text-align: left;
        margin-left:40px;
    .promptText
        font-size 14px
        margin-left 20px
        color red
</style>
