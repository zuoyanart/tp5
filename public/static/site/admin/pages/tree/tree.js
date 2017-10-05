define('site/admin/pages/tree/tree.vue', function(require, exports, module) {

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
  
  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
  
  var _componentsTreeTreeVue = require('site/admin/components/tree/tree.vue');
  
  var _componentsTreeTreeVue2 = _interopRequireDefault(_componentsTreeTreeVue);
  
  exports["default"] = {
    data: function data() {
      return {
        datalist: {
          options: {},
          more: [],
          rows: {},
          button: []
        },
        handle: {} };
    },
    //传递方法
    mounted: function mounted() {
      var doc, data, level1, i, l;
      return regeneratorRuntime.async(function mounted$(context$1$0) {
        while (1) switch (context$1$0.prev = context$1$0.next) {
          case 0:
            context$1$0.next = 2;
            return regeneratorRuntime.awrap(this.$tools.httpAgent("/admin/tree/page", "post", {
              pid: 1
            }));
  
          case 2:
            doc = context$1$0.sent;
            data = doc.msg;
            level1 = {};
  
            for (i = 0, l = data.length; i < l; i++) {
              level1[data[i].id] = {
                id: data[i].id,
                pid: data[i].pid,
                name: data[i].name,
                path: data[i].nodepath.split(','),
                ishide: data[i].ishide,
                fold: false };
            }
            //是否展开
            this.datalist.rows = level1;
            this.handle = {
              fold: this.fold
            };
  
          case 8:
          case "end":
            return context$1$0.stop();
        }
      }, null, this);
    },
    methods: {
      fold: function fold(id, nodepath) {
        var doc, data, level, i, l, path, key;
        return regeneratorRuntime.async(function fold$(context$1$0) {
          while (1) switch (context$1$0.prev = context$1$0.next) {
            case 0:
              context$1$0.next = 2;
              return regeneratorRuntime.awrap(this.$tools.httpAgent("/admin/tree/page", "post", {
                pid: id
              }));
  
            case 2:
              doc = context$1$0.sent;
              data = doc.msg;
  
              if (!(data.length == 0)) {
                context$1$0.next = 6;
                break;
              }
  
              return context$1$0.abrupt("return");
  
            case 6:
              level = {};
  
              for (i = 0, l = data.length; i < l; i++) {
                level[data[i].id] = {
                  id: data[i].id,
                  name: data[i].name,
                  pid: data[i].pid,
                  path: data[i].nodepath.split(','),
                  ishide: data[i].ishide,
                  fold: false };
              }
              path = (",0" + nodepath + "0,").replace(/,0,/g, "").split(",");
              key = this.datalist.rows[path[1]];
  
              for (i = 2, l = path.length; i < l; i++) {
                key = key.children[path[i]];
              }
              this.$set(key, "children", level);
  
            case 12:
            case "end":
              return context$1$0.stop();
          }
        }, null, this);
      }
    },
    components: {
      pztree: _componentsTreeTreeVue2["default"]
    }
  };
  module.exports = exports["default"];
  
  //获取数据
  //是否展开
  var __vue__options__;
  if(exports && exports.__esModule && exports.default){
    __vue__options__ = exports.default;
  }else{
    __vue__options__ = module.exports;
  }
  __vue__options__.template = "\r\n<div id=\"main\">\r\n    <!-- <router-link to=\"/tree/add/1\">编辑</router-link> -->\r\n    <pztree :docs=\"datalist\" :handle=\"handle\"></pztree>\r\n</div>\r\n\r\n"
  

});
