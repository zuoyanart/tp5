<style lang="less">
@import "../../../../assets/less/mixin.less";
body {
    background-color: #2E363F!important;
}
.login {
    width: 360px;
    height: 342px;
    margin: 7% auto;
    padding: 40px 0;
    border-top: 1px solid #3f4954;
    border-bottom: 1px solid #3f4954;
    & > h2 {
        font-weight: 700;
        color: #fff;
        margin-bottom: 25px;
        text-align: center;
    }
    & > .login-content {
        width: 100%;
        height: 343px;
        // padding: 20px;
        & > div {
            & > button {
                float: right;
            }
        }
    }
}
.code > .el-form-item__content {
    .flex-cont();
    img {
        width: 100px;
        height: 37px;
        margin-left: 15px;
    }
    .el-input {
        .flex-item();
    }
}
</style>

<template lang="html">

<div class="login">
    <h2>PizzaAdmin</h2>
    <el-form ref="form" class="login-content" :model="form" :rules="rules" label-width="0px">
        <el-form-item prop="name">
            <el-input placeholder="用户名" v-model.trim="form.name"></el-input>
        </el-form-item>
        <el-form-item prop="password">
            <el-input placeholder="密码" v-model.trim="form.password" type="password"></el-input>
        </el-form-item>
        <el-form-item prop="code" class="code">
            <el-input placeholder="验证码" v-model.trim="form.code" @keydown.enter.native="submitHandle"></el-input>
            <img :src="src" @click="setSrc">
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submitHandle">提交</el-button>
        </el-form-item>
    </el-form>
</div>

</template>

<script>
import tools from 'pizzatools';

export default {
  data() {
    return {
      src: '/plugin/captcha',
      form: {
        name: "",
        password: "",
        code: ""
      },
      rules: {
        name: [{
          validator: this.validateUsername,
          trigger: 'blur',
          message: "请填写1-20位的用户名"
        }],
        password: [{
          validator: this.validatePassword,
          trigger: 'blur',
          message: "请填写6-20位的密码"
        }],
        code: [{
          validator: this.validateCode,
          message: "请填写5位的验证码",
          trigger: 'blur'
        }]
      }
    };
  },
  methods: {
    validateUsername(rule, value, callback) {
      let len = value.length;
      if (len > 20 || len == 0) {
        callback(new Error("请填写用户名"));
      } else {
        callback();
      }
    },
    validatePassword(rule, value, callback) {
      let len = value.length;
      if (len > 20 || len < 6) {
        callback(new Error("请填写密码"));
      } else {
        callback();
      }
    },
    validateCode(rule, value, callback) {
      let len = value.length;
      if (len != 5) {
        callback(new Error("请填写4位验证码"));
      } else {
        callback();
      }
    },
    setSrc() {
      this.src = '/plugin/captcha?p=' + new Date().getTime();
    },
    submitHandle: async function () {
      let self = this;
      this.$refs.form.validate(async(valid) => {
        if (valid) {
          let doc = await tools.httpAgent('/admin/login/login', 'post', self.form);
          if (doc.state) {
            document.location.href = "/admin";
          } else {
            self.$layer.msg("帐号或者密码错误");
            this.setSrc();
          }
        }
      });
    }
  }
}
</script>
