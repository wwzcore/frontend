<template>
    <div id="newAdd">

        <h1>新增收货地址</h1>

        <table class="newAddTable">
            <tr>
                <td><label>姓名：</label></td>
                <td>
                    <label>
                        <input type="text" onkeyup="value=value.replace(/[^\u4E00-\u9FA5\a-zA-Z]/gi,'')" id="name"/>
                    </label>
                    <span style="color:red">*</span>
                </td>
            </tr>
            <tr>
                <td><label>联系电话：</label></td>
                <td>
                    <!--使用onkeyup方法和type=tel，使文本框只能输入数字-->
                    <label>
                        <input type="tel" onkeyup="value=value.replace(/[^\d]/g,'')" id="phone" v-model="phoneInput"/>
                    </label>
                    <span style="color:red">*</span>
                </td>
            </tr>
            <tr>
                <td><label>收货地址：</label></td>
                <td>
                    <label><input type="text" id="address" style="width:400px;" maxlength="1000"/></label>
                    <span style="color:red">*</span>
                </td>
            </tr>
            <tr>
                <td><label>id：</label></td>
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
                phoneInput:"",
                receiverId:"",
                userId:"",
                receiverName: "",
                receiverPhone: "",
                receiverAddressInfo: ""
            }
        },

        methods: {
            _commit: async function() {
                if(this.phoneInput.length !== 11){
                    alert("请输入正确的手机号。")
                }else {
                    await axios.post('/receiver/add/', {
                        receiverId: document.getElementById("id").value,
                        userId:1,
                        receiverName: document.getElementById("name").value,
                        receiverPhone: document.getElementById("phone").value,
                        receiverAddressInfo: document.getElementById("address").value
                })
                    .then(function (response) {
                        console.log(response);
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
                    window.location.href = "/myAddress";
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
</style>
