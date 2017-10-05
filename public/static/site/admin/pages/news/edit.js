define('site/admin/pages/news/edit.vue', function(require, exports, module) {

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
  
  var _kindeditor = require("kindeditor");
  
  var _kindeditor2 = _interopRequireDefault(_kindeditor);
  
  var _pizzatools = require('pizzatools');
  
  var _pizzatools2 = _interopRequireDefault(_pizzatools);
  
  exports['default'] = {
    data: function data() {
      return {
        form: {
          title: '',
          nodeid: 1,
          timg: "",
          link: "",
          source: "",
          brief: "",
          content: "",
          tags: "",
          pass: 1,
          reco: 1
        },
        nodeOptions: [{
          text: '首页',
          value: 1
        }],
        passOption: [{
          text: '审核',
          value: 1
        }, {
          text: '未审核',
          value: 0
        }],
        recoOption: [{
          text: '不推荐',
          value: 0
        }, {
          text: '1级推荐',
          value: 1
        }],
        rules: {
          title: [{
            required: true,
            message: "请填写1-60位的标题",
            trigger: 'blur'
          }, {
            min: 1,
            max: 60,
            message: '长度在 1 到 60 个字符',
            trigger: 'blur'
          }],
          timg: [{
            min: 1,
            max: 100,
            message: '长度在 1 到 100 个字符',
            trigger: 'blur'
          }],
          link: [{
            min: 5,
            max: 100,
            message: '长度在 5 到 100 个字符',
            trigger: 'blur'
          }],
          source: [{
            min: 3,
            max: 100,
            message: '长度在 3 到 100 个字符',
            trigger: 'blur'
          }],
          breif: [{
            min: 3,
            max: 500,
            message: '长度在 3 到 500 个字符',
            trigger: 'blur'
          }],
          tags: [{
            min: 1,
            max: 100,
            message: '长度在 1 到 100 个字符',
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
  
                      self.form.content = escape(editor.html());
                      context$2$0.next = 6;
                      return regeneratorRuntime.awrap(_pizzatools2['default'].httpAgent("/admin/article/" + op, "post", self.form));
  
                    case 6:
                      history.back();
                      context$2$0.next = 11;
                      break;
  
                    case 9:
                      console.log("数据验证失败");
                      id = self.$layer.alert("this is demo", {
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
      },
      /**
       * 递归格式化nodelist
       * @method fomatNodeList
       * @param  {[type]}      pid  [description]
       * @param  {[type]}      data [description]
       * @return {[type]}           [description]
       */
      formatNodeList: function formatNodeList(pid, data, na) {
        var s = '';
        for (var i = 0, len = data.length; i < len; i++) {
          if (data[i].pid == pid + "") {
            na.push({
              text: this.setNodeListGap(data[i].nodepath) + data[i].name,
              value: data[i].id
            });
            // s += '<option value="' + data[i].id + '">' + setNodeListGap(data[i].nodepath) + data[i].name + '</option>';
            this.formatNodeList(data[i].id, data, na);
          }
        }
        return s;
      },
      /**
       * fomat nodelist 添加制表符
       * @method setNodeListGap
       * @param  {[type]}       nodepath [description]
       */
      setNodeListGap: function setNodeListGap(nodepath) {
        var l = nodepath.split(',').length - 3;
        var s = '';
        if (l == 0) {
          return s;
        } else {
          s += '├';
          for (var i = 0; i < l; i++) {
            s += '─ ';
          }
          return s;
        }
      }
  
    },
    mounted: function mounted() {
      var self, nodes, nodesArray, id, article;
      return regeneratorRuntime.async(function mounted$(context$1$0) {
        while (1) switch (context$1$0.prev = context$1$0.next) {
          case 0:
            self = this;
  
            window.editor = KindEditor.create('#content', {
              uploadJson: '/admin/upfile/local',
              allowFileManager: false,
              minWidth: 888,
              cssData: "p{font-size:14px;}"
            });
            KindEditor('#timgup').click(function () {
              editor.loadPlugin('image', function () {
                editor.plugin.imageDialog({
                  imageUrl: self.form.timg,
                  clickFn: function clickFn(url, title, width, height, border, align) {
                    self.form.timg = url;
                    editor.hideDialog();
                  }
                });
              });
            });
            //获取node
            context$1$0.next = 5;
            return regeneratorRuntime.awrap(_pizzatools2['default'].httpAgent("/admin/tree/pageall", "post"));
  
          case 5:
            nodes = context$1$0.sent;
            nodesArray = [{
              text: "首页",
              value: 1
            }];
  
            this.formatNodeList(1, nodes.msg, nodesArray);
            this.nodeOptions = nodesArray;
            //获取article
            id = this.$route.params.id;
  
            if (!id) {
              context$1$0.next = 19;
              break;
            }
  
            context$1$0.next = 13;
            return regeneratorRuntime.awrap(_pizzatools2['default'].httpAgent("/admin/article/get", "post", {
              id: id
            }));
  
          case 13:
            article = context$1$0.sent;
  
            this.form = article.msg;
            this.nodeDefault = article.msg.nodeid;
            this.recoDefault = article.msg.reco;
            this.passDefault = article.msg.pass;
            editor.html(article.msg.content);
  
          case 19:
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
  __vue__options__.template = "\r\n\r\n<div id=\"main\">\r\n    <div class=\"menu\">\r\n        <a href=\"javascript:history.back();\">返回</a>\r\n    </div>\r\n    <el-form ref=\"form\" :model=\"form\" :rules=\"rules\" label-width=\"100px\">\r\n        <el-form-item label=\"标题\" prop=\"title\">\r\n            <el-input v-model.trim=\"form.title\" placeholder=\"请输入活文章标题\"></el-input>\r\n        </el-form-item>\r\n        <el-form-item label=\"节点\">\r\n            <el-select v-model.trim=\"form.nodeid\">\r\n                <el-option v-for=\"item in nodeOptions\" :label=\"item.text\" :value=\"item.value\"></el-option>\r\n            </el-select>\r\n        </el-form-item>\r\n        <el-form-item label=\"标题图片\" prop=\"timg\">\r\n            <el-input v-model.trim=\"form.timg\" id=\"timg\" style=\"width:592px;display:inline-block;\"></el-input>\r\n            <el-button id=\"timgup\">上传</el-button>\r\n        </el-form-item>\r\n        <el-form-item label=\"文章连接\" prop=\"link\">\r\n            <el-input v-model.trim=\"form.link\"></el-input>\r\n        </el-form-item>\r\n        <el-form-item label=\"文章来源\" prop=\"source\">\r\n            <el-input v-model.trim=\"form.source\"></el-input>\r\n        </el-form-item>\r\n        <el-form-item label=\"描述\" prop=\"brief\">\r\n            <el-input type=\"textarea\" v-model.trim=\"form.brief\" :rows=\"4\"></el-input>\r\n        </el-form-item>\r\n        <el-form-item label=\"正文\">\r\n            <textarea id=\"content\"></textarea>\r\n        </el-form-item>\r\n        <el-form-item label=\"标签\" prop=\"tags\">\r\n            <el-input v-model.trim=\"form.tags\"></el-input>\r\n        </el-form-item>\r\n        <el-form-item label=\"附加\" prop=\"xs\">\r\n            <el-select v-model.trim=\"form.pass\">\r\n                <el-option v-for=\"item in passOption\" :label=\"item.text\" :value=\"item.value\"></el-option>\r\n            </el-select>\r\n            <el-select  v-model.trim=\"form.reco\">\r\n              <el-option v-for=\"item in recoOption\" :label=\"item.text\" :value=\"item.value\"></el-option>\r\n            </el-select>\r\n        </el-form-item>\r\n        <el-form-item>\r\n            <el-button type=\"primary\" @click=\"submitHandle\">提交</el-button>\r\n        </el-form-item>\r\n    </el-form>\r\n</div>\r\n\r\n"
  

});
