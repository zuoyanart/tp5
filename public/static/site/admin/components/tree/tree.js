define('site/admin/components/tree/tree.vue', function(require, exports, module) {

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
  
  var _treeItemVue = require("site/admin/components/tree/tree-item.vue");
  
  var _treeItemVue2 = _interopRequireDefault(_treeItemVue);
  
  exports["default"] = {
    data: function data() {
      return {
        nodepath: []
      };
    },
    props: {
      docs: {
        type: Object,
        "default": function _default() {
          return {};
        }
      },
      handle: {
        type: Object,
        "default": function _default() {
          return {};
        }
      }
    },
    method: {},
    components: {
      treeitem: _treeItemVue2["default"]
    }
  };
  module.exports = exports["default"];
  var __vue__options__;
  if(exports && exports.__esModule && exports.default){
    __vue__options__ = exports.default;
  }else{
    __vue__options__ = module.exports;
  }
  __vue__options__.template = "\r\n<ul class=\"treelist\" id=\"treelist\">\r\n    <li id=\"1\" path=\"path,1,\"><b class=\"pzicon-setting\"></b>&nbsp;&nbsp;<em>首页</em><span><router-link to=\"/tree/edit/1\">编辑</router-link><router-link to=\"/tree/add/1\">添加子节点</router-link></span></li>\r\n    <treeitem v-for=\"doc in docs.rows\" :items=\"doc\" :handle=\"handle\"></treeitem>\r\n</ul>\r\n\r\n"
  

});
