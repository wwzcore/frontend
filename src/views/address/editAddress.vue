<template>
<div id="editAddress">
    <h1>编辑收货地址</h1>
    <table class="editAddressTable">
        <tr>
            <td><label>姓名：</label></td>
            <td>
                <label>
                    <input type="text" id="name" v-model="item.receiverName" @input="_inputName" @click="_inputName"/>
                </label>
                <span style="color:red">*</span>
                <span class="promptText">{{namePrompt}}</span>
            </td>
        </tr>
        <tr>
            <td><label>联系电话：</label></td>
            <td>
                <!--使用onkeyup方法和type=tel，使文本框只能输入数字-->
                <label><input type="tel" id="phone"  v-model="item.receiverPhone" @input="_inputPhone" @click="_inputPhone"/></label>
                <span style="color:red">*</span>
                <span class="promptText">{{phonePrompt}}</span>
            </td>
        </tr>
        <tr>
            <td><label>收货地址：</label></td>
            <td>
                <label><input type="text" v-model="item.receiverAddressInfo" style="width:400px;" maxlength="1000" @click="_inputAddress"/></label>
                <span style="color:red">*</span>
                <span class="promptText">{{addressPrompt}}</span>
            </td>
        </tr>
    </table>
    <br/><br/>
    <div>
        <button type="submit" v-on:click="_save" class="editAddressButton">保存地址</button>
        <button type="submit" v-on:click="_cancel" class="editAddressButton">取消编辑</button>
    </div>

</div>
</template>

<script>
import axios from 'axios'

export default {

  name: 'editAddress',

  data () {
    return {
      namePrompt: '',
      phonePrompt: '',
      addressPrompt: '',

      item: ''
    }
  },

  mounted () {
    this.getUserName = sessionStorage.getItem('getUserName')
    this.getData()
  },

  methods: {
    getData () {
      let r = this.$route.query.id
      axios.get('/receiver/list/userName=' + this.getUserName).then(response => {
        let itemList = response.data
        if (itemList && itemList.length > 0) {
          this.item = itemList[r]
        } else {
          console.log('not found data')
        }
      })
        .catch(function (error) {
          console.log(error)
        })
    },

    checkName () {
      return this.item.receiverName === this.item.receiverName.replace(/[^\u4E00-\u9FA5\a-zA-Z]/gi, '')
    },

    _inputName: function () {
      if (!this.checkName()) {
        this.namePrompt = '用户名只能为数字和字母的组合'
        this.item.receiverName = this.item.receiverName.replace(/[^\u4E00-\u9FA5\a-zA-Z]/gi, '')
      } else {
        this.namePrompt = ''
      }
    },

    _inputPhone: function () {
      this.item.receiverPhone = this.item.receiverPhone.replace(/[^\d]/g, '')
      this.phonePrompt = ''
    },

    _inputAddress: function () {
      this.addressPrompt = ''
    },

    _cancel: function () {
      window.location.href = '/myAddress'
    },

    _save: function () {
      if (!this.item.receiverName) {
        this.namePrompt = '姓名不能为空'
      } else if (!this.checkName()) {
        this.namePrompt = '用户名只能为数字和字母的组合'
      } else if (this.item.receiverPhone.length !== 11) {
        this.phonePrompt = '请输入正确的手机号'
      } else if (!this.item.receiverAddressInfo) {
        this.addressPrompt = '收货地址不能为空'
      } else {
        axios.put('/receiver/updReceiver', this.item)
          .then(function (response) {
            console.log(response)
            window.location.href = '/myAddress'
          })
          .catch(function (error) {
            console.log(error)
            alert('输入信息格式不正确。')
          })
      }
    }
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
    .promptText
        font-size 14px
        margin-left 20px
        color red
</style>
