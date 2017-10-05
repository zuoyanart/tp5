define('site/admin/pages/tree/edit.vue', function(require, exports, module) {

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
  
  var _kindeditor = require('kindeditor');
  
  var _kindeditor2 = _interopRequireDefault(_kindeditor);
  
  var _pizzatools = require('pizzatools');
  
  var _pizzatools2 = _interopRequireDefault(_pizzatools);
  
  exports['default'] = {
    data: function data() {
      return {
        form: {
          'link': '',
          'timg': ''
        },
        articleTypeOption: [{
          label: '普通',
          value: ""
        }, {
          label: '组图',
          value: "photo"
        }, {
          label: "视频",
          value: "video"
        }],
        rules: {
          name: [{
            required: true,
            message: "请填写1-20位的标题",
            trigger: 'blur'
          }, {
            min: 1,
            max: 20,
            message: '长度在 1 到 20 个字符',
            trigger: 'blur'
          }],
          timg: [{
            required: false,
            min: 3,
            max: 300,
            message: "请上传图片",
            trigger: 'blur'
          }],
          link: [{
            min: 1,
            max: 100,
            message: '长度在 1 到 100 个字符',
            trigger: 'blur'
          }],
          keyword: [{
            min: 3,
            max: 100,
            message: '长度在 3 到 100 个字符',
            trigger: 'blur'
          }],
          seodes: [{
            min: 3,
            max: 500,
            message: '长度在 3 到 500 个字符',
            trigger: 'blur'
          }],
          brief: [{
            min: 1,
            max: 3000,
            message: '长度在 3 到 3000 个字符',
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
                var url, id, op;
                return regeneratorRuntime.async(function callee$1$0$(context$2$0) {
                  while (1) switch (context$2$0.prev = context$2$0.next) {
                    case 0:
                      if (!valid) {
                        context$2$0.next = 11;
                        break;
                      }
  
                      url = document.location.href;
                      id = self.$route.params.id;
                      op = url.indexOf("/tree/add/") == -1 ? "update" : "create";
  
                      self.form.brief = escape(editor.html());
                      if (op == 'create') {
                        self.form.pid = id;
                      }
                      context$2$0.next = 8;
                      return regeneratorRuntime.awrap(_pizzatools2['default'].httpAgent("/admin/tree/" + op, "post", self.form));
  
                    case 8:
                      history.back();
                      context$2$0.next = 12;
                      break;
  
                    case 11:
                      id = self.$layer.alert("数据格式不合法", {
                        title: "警告"
                      });
  
                    case 12:
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
      var self, url, id, article;
      return regeneratorRuntime.async(function mounted$(context$1$0) {
        while (1) switch (context$1$0.prev = context$1$0.next) {
          case 0:
            self = this;
  
            window.editor = KindEditor.create('#brief', {
              uploadJson: '/admin/upfile/local',
              allowFileManager: false,
              cssData: "p{font-size:14px;}"
            });
            KindEditor('#timgup').click(function () {
              editor.loadPlugin('image', function () {
                editor.plugin.imageDialog({
                  imageUrl: self.form.timg,
                  clickFn: function clickFn(url, title, width, height, border, align) {
                    console.log(url);
                    self.form.timg = url;
                    editor.hideDialog();
                  }
                });
              });
            });
            //获取
            url = document.location.href;
            id = this.$route.params.id;
  
            if (!(url.indexOf("/tree/add/") == -1)) {
              context$1$0.next = 11;
              break;
            }
  
            context$1$0.next = 8;
            return regeneratorRuntime.awrap(_pizzatools2['default'].httpAgent("/admin/tree/get", "post", {
              id: id
            }));
  
          case 8:
            article = context$1$0.sent;
  
            this.form = article.msg;
            editor.html(article.msg.brief);
  
          case 11:
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
  __vue__options__.template = "\r\n\r\n<div id=\"main\">\r\n    <div class=\"menu\">\r\n        <a href=\"javascript:history.back();\">返回</a>\r\n    </div>\r\n    <el-form ref=\"form\" :model=\"form\" :rules=\"rules\" label-width=\"130px\">\r\n        <el-form-item label=\"标题\" prop=\"name\">\r\n            <el-input v-model.trim=\"form.name\" placeholder=\"请输入节点名称\"></el-input>\r\n        </el-form-item>\r\n        <el-form-item label=\"标题图\" prop=\"timg\">\r\n            <el-input v-model.trim=\"form.timg\" placeholder=\"请输入图片路径\" style=\"width:804px;\"></el-input>\r\n            <el-button id=\"timgup\" type=\"primary\">上传</el-button>\r\n        </el-form-item>\r\n        <el-form-item label=\"连接地址\" prop=\"link\">\r\n            <el-input v-model.trim=\"form.link\" placeholder=\"请输入节点名称\"></el-input>\r\n        </el-form-item>\r\n        <el-form-item label=\"正文类型\" prop=\"article_type\">\r\n            <el-select v-model.trim=\"form.article_type\">\r\n              <el-option v-for=\"item in articleTypeOption\" :label=\"item.label\" :value=\"item.value\"></el-option>\r\n            </el-select>\r\n        </el-form-item>\r\n        <el-form-item label=\"SEO keyword\" prop=\"keyword\">\r\n            <el-input v-model.trim=\"form.keyword\" placeholder=\"请输入keyword\"></el-input>\r\n        </el-form-item>\r\n        <el-form-item label=\"SEO des\" prop=\"seodes\">\r\n            <el-input type=\"textarea\" :rows=\"4\" v-model.trim=\"form.seodes\" placeholder=\"请输入description\"></el-input>\r\n        </el-form-item>\r\n        <el-form-item label=\"正文\" prop=\"brief\">\r\n            <textarea id=\"brief\" v-model.trim=\"form.brief\" style=\"width:888px;height:500px;\"></textarea>\r\n        </el-form-item>\r\n        <el-form-item>\r\n            <el-button type=\"primary\" @click=\"submitHandle\">提交</el-button>\r\n        </el-form-item>\r\n    </el-form>\r\n</div>\r\n"
  

});
