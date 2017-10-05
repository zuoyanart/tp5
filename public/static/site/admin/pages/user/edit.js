define('site/admin/pages/user/edit.vue', function(require, exports, module) {

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
              form: {
                  username: '',
                  nickname: '',
                  password: ''
              },
              rules: {
                  username: [{
                      required: true,
                      message: "请填写1-20位的用户名",
                      trigger: 'blur'
                  }, {
                      min: 4,
                      max: 20,
                      message: '长度在 4 到 20 个字符',
                      trigger: 'blur'
                  }],
                  nickname: [{
                      required: true,
                      message: "请填写4-20位的昵称",
                      trigger: 'blur'
                  }, {
                      min: 4,
                      max: 20,
                      message: '长度在 4 到 20 个字符',
                      trigger: 'blur'
                  }],
                  password: [{
                      min: 6,
                      max: 20,
                      message: '长度在 6 到 20 个字符',
                      trigger: 'blur'
                  }]
              }
          };
      },
      components: {},
      methods: {
          submitHandle: function submitHandle() {
              var self;
              return regeneratorRuntime.async(function submitHandle$(context$1$0) {
                  var _this = this;
  
                  while (1) switch (context$1$0.prev = context$1$0.next) {
                      case 0:
                          self = this;
  
                          this.$refs.form.validate(function callee$1$0(valid) {
                              var id, op;
                              return regeneratorRuntime.async(function callee$1$0$(context$2$0) {
                                  while (1) switch (context$2$0.prev = context$2$0.next) {
                                      case 0:
                                          if (!valid) {
                                              context$2$0.next = 9;
                                              break;
                                          }
  
                                          id = self.$route.params.id;
                                          op = id ? "update" : "create";
  
                                          self.form.id = id;
                                          context$2$0.next = 6;
                                          return regeneratorRuntime.awrap(_pizzatools2['default'].httpAgent("/admin/user/" + op, "post", self.form));
  
                                      case 6:
                                          history.back();
                                          context$2$0.next = 11;
                                          break;
  
                                      case 9:
                                          console.log("数据验证失败");
                                          id = self.$layer.alert("self is demo", {
                                              title: "警告"
                                          });
  
                                      case 11:
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
      },
      mounted: function mounted() {
          var id, article;
          return regeneratorRuntime.async(function mounted$(context$1$0) {
              while (1) switch (context$1$0.prev = context$1$0.next) {
                  case 0:
                      id = this.$route.params.id;
  
                      if (!id) {
                          context$1$0.next = 6;
                          break;
                      }
  
                      context$1$0.next = 4;
                      return regeneratorRuntime.awrap(_pizzatools2['default'].httpAgent("/admin/user/get", "post", {
                          id: id
                      }));
  
                  case 4:
                      article = context$1$0.sent;
  
                      this.form = article.msg;
  
                  case 6:
                  case 'end':
                      return context$1$0.stop();
              }
          }, null, this);
      }
  };
  module.exports = exports['default'];
  //通过验证
  
  //获取block
  var __vue__options__;
  if(exports && exports.__esModule && exports.default){
    __vue__options__ = exports.default;
  }else{
    __vue__options__ = module.exports;
  }
  __vue__options__.template = "\r\n\r\n<div id=\"main\">\r\n    <div class=\"menu\">\r\n        <a href=\"javascript:history.back();\">返回</a>\r\n    </div>\r\n    <el-form ref=\"form\" :model=\"form\" :rules=\"rules\" label-width=\"100px\">\r\n        <el-form-item label=\"用户名\" prop=\"username\">\r\n            <el-input v-model=\"form.username\" placeholder=\"\"></el-input>\r\n        </el-form-item>\r\n        <el-form-item label=\"昵称\" prop=\"nickname\">\r\n            <el-input v-model=\"form.nickname\" placeholder=\"\"></el-input>\r\n        </el-form-item>\r\n        <el-form-item label=\"密码\" prop=\"password\">\r\n            <el-input type=\"password\" v-model=\"form.password\" placeholder=\"\"></el-input>\r\n        </el-form-item>\r\n        <el-form-item>\r\n            <el-button type=\"primary\" @click=\"submitHandle\">提交</el-button>\r\n        </el-form-item>\r\n    </el-form>\r\n</div>\r\n\r\n"
  

});
