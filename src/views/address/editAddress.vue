<template>
    <div id="editAddress">

        <h1>编辑收货地址</h1>

        <table class="editAddressTable">
            <tr>
                <td><label>姓名：</label></td>
                <td>
                    <label>
                        <input type="text" onkeyup="value=value.replace(/[^\u4E00-\u9FA5\a-zA-Z]/gi,'')" v-model="item.receiverName"/>
                    </label>
                    <span style="color:red">*</span>
                </td>
            </tr>
            <tr>
                <td><label>联系电话：</label></td>
                <td>
                    <!--使用onkeyup方法和type=tel，使文本框只能输入数字-->
                    <label><input type="tel" onkeyup="value=value.replace(/[^\d]/g,'')"  v-model="item.receiverPhone" /></label>
                    <span style="color:red">*</span>
                </td>
            </tr>
            <tr>
                <td><label>收货地址：</label></td>
                <td>
                    <label><input type="text" v-model="item.receiverAddressInfo" style="width:400px;" maxlength="1000"/></label>
                    <span style="color:red">*</span>
                </td>
            </tr>
            <tr>
                <td><label>id:</label></td>
                <td>
                    <span>{{item.receiverId}}</span>
                    <label>（模拟后台，测试用）</label>
                </td>
            </tr>
        </table>

        <div>
            <button type="submit" v-on:click="_cancel" class="editAddressButton">取消编辑</button>
            <button type="submit" v-on:click="_save" class="editAddressButton">保存地址</button>
        </div>

    </div>
</template>

<script>
    import axios from "axios";

    export default {

        name: "editAddress",

        data() {
            return {
                item: ""
            }
        },

        mounted() {
            this.getData();
        },

        methods: {
            getData() {
                let getUserId = 1;
                let r = this.$route.query.id;

                axios.get('/receiver/list/userId='+getUserId).then(response => {

                    let itemList = response.data;

                    if(itemList && itemList.length > 0){
                        this.item = itemList[r]
                    }else {
                        console.log("not found data");
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
            },

            _cancel: function () {
                window.location.href = "/address";
            },

            _save: async function () {
                if(this.item.receiverPhone.length !== 11){
                    alert("请输入正确的手机号。")
                }else {
                    await axios.put('/receiver/updReceiver/', {
                        receiverId: this.item.receiverId,
                        userId: this.item.userId,
                        receiverName: this.item.receiverName,
                        receiverPhone: this.item.receiverPhone,
                        receiverAddressInfo: this.item.receiverAddressInfo
                    })
                    .then(function (response) {
                        console.log(response);
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
                    window.location.href = '/myAddress';
                }
            },

        }
    }
</script>


<style lang="stylus" scoped>
    #editAddress
        position absolute;
        width:600px;
        left:50%;
        margin-left:-300px;
        border:1px solid #000;
    .editAddressTable
        text-align: left;
    // border:1px solid #000;
    .editAddressButton
        margin-right:100px
</style>
