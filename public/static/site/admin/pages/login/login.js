define('site/admin/pages/login/login.vue', function(require, exports, module) {

  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  
  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _pizzatools = require('pizzatools');
  
  var _pizzatools2 = _interopRequireDefault(_pizzatools);
  
  exports['default'] = {
    data: function data() {
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
      validateUsername: function validateUsername(rule, value, callback) {
        var len = value.length;
        if (len > 20 || len == 0) {
          callback(new Error("请填写用户名"));
        } else {
          callback();
        }
      },
      validatePassword: function validatePassword(rule, value, callback) {
        var len = value.length;
        if (len > 20 || len < 6) {
          callback(new Error("请填写密码"));
        } else {
          callback();
        }
      },
      validateCode: function validateCode(rule, value, callback) {
        var len = value.length;
        if (len != 5) {
          callback(new Error("请填写4位验证码"));
        } else {
          callback();
        }
      },
      setSrc: function setSrc() {
        this.src = '/plugin/captcha?p=' + new Date().getTime();
      },
      submitHandle: function submitHandle() {
        var self;
        return regeneratorRuntime.async(function submitHandle$(context$1$0) {
          var _this = this;
  
          while (1) switch (context$1$0.prev = context$1$0.next) {
            case 0:
              self = this;
  
              this.$refs.form.validate(function callee$1$0(valid) {
                var doc;
                return regeneratorRuntime.async(function callee$1$0$(context$2$0) {
                  while (1) switch (context$2$0.prev = context$2$0.next) {
                    case 0:
                      if (!valid) {
                        context$2$0.next = 5;
                        break;
                      }
  
                      context$2$0.next = 3;
                      return regeneratorRuntime.awrap(_pizzatools2['default'].httpAgent('/admin/login/login', 'post', self.form));
  
                    case 3:
                      doc = context$2$0.sent;
  
                      if (doc.state) {
                        document.location.href = "/admin";
                      } else {
                        self.$layer.msg("帐号或者密码错误");
                        this.setSrc();
                      }
  
                    case 5:
                    case 'end':
                      return context$2$0.stop();
                  }
                }, null, _this);
              });
  
            case 2:
            case 'end':
              return context$1$0.stop();
          }
        }, null, this);
      }
    }
  };
  module.exports = exports['default'];
  var __vue__options__;
  if(exports && exports.__esModule && exports.default){
    __vue__options__ = exports.default;
  }else{
    __vue__options__ = module.exports;
  }
  __vue__options__.template = "\r\n\r\n<div class=\"login\">\r\n    <h2>PizzaAdmin</h2>\r\n    <el-form ref=\"form\" class=\"login-content\" :model=\"form\" :rules=\"rules\" label-width=\"0px\">\r\n        <el-form-item prop=\"name\">\r\n            <el-input placeholder=\"用户名\" v-model.trim=\"form.name\"></el-input>\r\n        </el-form-item>\r\n        <el-form-item prop=\"password\">\r\n            <el-input placeholder=\"密码\" v-model.trim=\"form.password\" type=\"password\"></el-input>\r\n        </el-form-item>\r\n        <el-form-item prop=\"code\" class=\"code\">\r\n            <el-input placeholder=\"验证码\" v-model.trim=\"form.code\" @keydown.enter.native=\"submitHandle\"></el-input>\r\n            <img :src=\"src\" @click=\"setSrc\">\r\n        </el-form-item>\r\n        <el-form-item>\r\n            <el-button type=\"primary\" @click=\"submitHandle\">提交</el-button>\r\n        </el-form-item>\r\n    </el-form>\r\n</div>\r\n\r\n"
  

});
