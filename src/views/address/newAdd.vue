<template>
<div id="newAdd">
    <h1>新增收货地址</h1>
    <table class="newAddTable">
        <tr>
            <td><span>姓名：</span></td>
            <td>
                <label>
                    <input type="text" id="name" v-model="receiverName" @input="_inputName" @click="_inputName"/>
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
                    <label><input type="tel" id="phone"  v-model="receiverPhone" @input="_inputPhone" @click="_inputPhone"/></label>
                </label>
                <span style="color:red">*</span>
                <span class="promptText">{{phonePrompt}}</span>
            </td>
        </tr>
        <tr>
            <td><span>收货地址：</span></td>
            <td>
                <label><input type="text" v-model="receiverAddressInfo" style="width:400px;" maxlength="1000" @click="_inputAddress"/></label>
                <span style="color:red">*</span>
                <span class="promptText">{{addressPrompt}}</span>
            </td>
        </tr>
    </table>
    <br/><br/>
    <div>
        <button type="submit" v-on:click="_commit" class="newAddButton">提交新地址</button>
        <button type="submit" v-on:click="_cancel" class="newAddButton">取消新增</button>
    </div>
</div>
</template>

<script>

    import axios from "axios";

    export default {

        name: "newAdd",

        data() {
            return {
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
            this.getUserName = sessionStorage.getItem("getUserName");
        },

        methods: {
            checkName() {
                return this.receiverName === this.receiverName.replace(/[^\u4E00-\u9FA5\a-zA-Z]/gi, '');
            },

            _inputName: function () {
                if (!this.checkName()) {
                    this.namePrompt = "用户名只能为数字和字母的组合";
                    this.receiverName = this.receiverName.replace(/[^\u4E00-\u9FA5\a-zA-Z]/gi, '');
                } else {
                    this.namePrompt = "";
                }
            },

            _inputPhone: function(){
                this.receiverPhone = this.receiverPhone.replace(/[^\d]/g, '');
                this.phonePrompt = "";
            },

            _inputAddress: function(){
                this.addressPrompt = "";
            },

            _cancel:function(){
                window.location.href = "/myAddress";
            },

            _commit: function(){

                if(!this.receiverName){
                    this.namePrompt = "姓名不能为空";
                } else if (!this.checkName()) {
                    this.namePrompt = "用户名只能为数字和字母的组合";
                }else if(this.receiverPhone.length !== 11){
                    this.phonePrompt = "请输入正确的手机号";
                }else if(!this.receiverAddressInfo){
                    this.addressPrompt = "收货地址不能为空";
                }else{
                    axios.post('/receiver/add/userName=' + this.getUserName, {
                        receiverId: "", // 系统自动生成
                        userId: "",     // 在后端从user表中得到userId
                        receiverName: this.receiverName,
                        receiverPhone: this.receiverPhone,
                        receiverAddressInfo: this.receiverAddressInfo,
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
    .newAddButton
        margin-right:100px
    .promptText
        font-size 14px
        margin-left 20px
        color red
</style>
