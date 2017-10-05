define('site/admin/pages/block/edit.vue', function(require, exports, module) {

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
  
  var _kindeditor = require("kindeditor");
  
  var _kindeditor2 = _interopRequireDefault(_kindeditor);
  
  var _pizzatools = require('pizzatools');
  
  var _pizzatools2 = _interopRequireDefault(_pizzatools);
  
  exports['default'] = {
      data: function data() {
          return {
              form: {
                  title: '',
                  content: ""
              },
              rules: {
                  title: [{
                      required: true,
                      message: "请填写1-40位的标题",
                      trigger: 'blur'
                  }, {
                      min: 1,
                      max: 40,
                      message: '长度在 1 到 40 个字符',
                      trigger: 'blur'
                  }],
                  content: {
                      required: false,
                      min: 1,
                      max: 300,
                      message: "请填写1-20位的名称"
                  }
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
  
                                          self.form.content = escape(editor.html());
                                          context$2$0.next = 6;
                                          return regeneratorRuntime.awrap(_pizzatools2['default'].httpAgent("/admin/block/" + op, "post", self.form));
  
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
                      window.editor = KindEditor.create('#content', {
                          uploadJson: '/admin/upfile/local',
                          allowFileManager: false
                      });
                      KindEditor('#timgup').click(function () {
                          editor.loadPlugin('image', function () {
                              editor.plugin.imageDialog({
                                  imageUrl: KindEditor('#timg').val(),
                                  clickFn: function clickFn(url, title, width, height, border, align) {
                                      KindEditor('#timg').val(url);
                                      editor.hideDialog();
                                  }
                              });
                          });
                      });
                      //获取block
                      id = this.$route.params.id;
  
                      if (!id) {
                          context$1$0.next = 10;
                          break;
                      }
  
                      context$1$0.next = 6;
                      return regeneratorRuntime.awrap(_pizzatools2['default'].httpAgent("/admin/block/get", "post", {
                          id: id
                      }));
  
                  case 6:
                      article = context$1$0.sent;
  
                      this.form = article.msg;
                      this.nodeDefault = article.msg.nodeid;
                      editor.html(article.msg.content);
  
                  case 10:
                  case 'end':
                      return context$1$0.stop();
              }
          }, null, this);
      }
  };
  module.exports = exports['default'];
  //通过验证
  var __vue__options__;
  if(exports && exports.__esModule && exports.default){
    __vue__options__ = exports.default;
  }else{
    __vue__options__ = module.exports;
  }
  __vue__options__.template = "\r\n\r\n<div id=\"main\">\r\n    <div class=\"menu\">\r\n        <a href=\"javascript:history.back();\">返回</a>\r\n    </div>\r\n    <el-form  ref=\"form\" :model=\"form\" :rules=\"rules\" label-width=\"100px\">\r\n        <el-form-item label=\"标题\" prop=\"title\">\r\n            <el-input v-model=\"form.title\" placeholder=\"请输入模块标题\"></el-input>\r\n        </el-form-item>\r\n        <el-form-item label=\"正文\" prop=\"content\">\r\n            <textarea id=\"content\" v-model=\"form.content\" style=\"height:500px;\"></textarea>\r\n        </el-form-item>\r\n        <el-form-item>\r\n            <el-button type=\"primary\" @click=\"submitHandle\">提交</el-button>\r\n        </el-form-item>\r\n    </el-form>\r\n</div>\r\n\r\n"
  

});
