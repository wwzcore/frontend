<template>
  <div class="Info">
    <header>个人资料</header>
    <main>
      <table>
        <tr>
          <td>用户名:</td>
          <td>
            <input
              type="text"
              v-model="user.name"
              onkeyup="value=value.replace(/[^\a-zA-Z0-9]/gi,'')"
              v-bind:disabled="readonly"
              maxlength="30"
            />
          </td>
          <td>*合法字符为字母、数字</td>
        </tr>
        <tr>
          <td>手机号:</td>
          <td>
            <input
              type="text"
              v-model="user.phone"
              onkeyup="value=value.replace(/[^\d]/g,'')"
              v-bind:disabled="true"
            />
          </td>
        </tr>
        <tr>
          <td>昵称:</td>
          <td>
            <input
              type="text"
              v-model="user.mallName"
              onkeyup="value=value.replace(/[^\u4E00-\u9FA5\a-zA-Z0-9]/gi,'')"
              v-bind:disabled="readonly"
              maxlength="50"
              id="Nickname"
            />
          </td>
          <td>合法字符为汉字、字母、数字</td>
        </tr>
        <tr>
          <td>邮箱:</td>
          <td>
            <input type="text" v-model="user.email" v-bind:disabled="readonly" />
          </td>
        </tr>
        <tr>
          <td>真实姓名:</td>
          <td>
            <input
              type="text"
              v-model="user.realName"
              onkeyup="value=value.replace(/[^\u4E00-\u9FA5\a-zA-Z]/gi,'')"
              v-bind:disabled="readonly"
              maxlength="50"
            />
          </td>
          <td>合法字符为汉字、字母</td>
        </tr>
        <tr>
          <td>性别:</td>
          <td>
            <select v-model="user.sex" v-bind:disabled="readonly">
              <option value="男">男</option>
              <option value="女">女</option>
            </select>
          </td>
        </tr>
        <td>头像:</td>
        <td>
          <img :src="user.imgUrl" width="25px" height="25px" />
        </td>
      </table>
      <br />
      <div class="pictureUpload">
        <input type="file" accept=".png, .jpg, .jpeg" @change="onChange" v-bind:disabled="readonly" />
        <button @click="upload" v-bind:disabled="readonly">上传</button>
        <p>{{imgUrl}}</p>
        <img :src="imgUrl" width="25px" height="25px" />
      </div>
      <button v-on:click="modify()">编辑</button> |
      <button v-on:click="submit()">提交</button>
    </main>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      user: {},
      readonly: true,
      imgUrl: null,
      file: null
    };
  },

  mounted() {
    this.nameForSendingToBackend = sessionStorage.getItem("nameInSession");
    this.getData();
  },

  methods: {
    onChange(event) {
      const inputElement = event.target;
      // 判断是否符合上传条件
      if (inputElement.files.length === 0) return false;
      const file = inputElement.files[0];
      /*
              this.imgUrl = URL.createObjectURL(file)
      */
      this.file = file;
    },
    upload() {
      let formFile = new FormData();
      formFile.append("uploadImage", this.file);

      axios
        .post("/user/upload", formFile)
        .then(res => {
          this.imgUrl = res.data;
          console.log("success!");
        })
        .catch(err => {
          console.log(err);
        });
    },
    getData() {
      axios
        .get("/user/getUseOne/userName=" + this.nameForSendingToBackend)
        .then(response => {
          this.user = response.data;
        })
        .catch(function(error) {
          console.log(error);
        });
    },

    modify() {
      this.readonly = false;
    },
    submit() {
      let emailLegal = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
      // let a = emailLegal.test(this.user.UserEmail);
      if (!emailLegal.test(this.user.Email)) {
        return alert("邮件地址不合规！");
      }

      this.user.imgUrl = this.imgUrl;

      axios
        .put("/user/updateUser/", this.user)
        .then(function(response) {
          window.sessionStorage.setItem("nameInSession", response.data.Name);
          alert("修改成功");
          console.log(response);
          window.location.reload();
        })
        .catch(function(error) {
          console.log(error);
          alert("输入的信息有误！");
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
.Info {
  header {
    padding: 10px;
  }

  padding: 10px;
  border: 1px solid #000;
  text-align: center;
  width: 600px;
  margin-right : auto;
  margin-left: auto;
  margin-top : 70px;

  table {
    margin: auto;
  }
}
</style>
