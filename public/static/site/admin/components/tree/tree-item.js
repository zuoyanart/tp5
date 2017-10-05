define('site/admin/components/tree/tree-item.vue', function(require, exports, module) {

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
  
  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports["default"] = {
    name: "treeitem",
    props: {
      items: {
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
    methods: {
      click: function click(event) {
        var target = event.target;
        if (target.tagName != "I") {
          return;
        }
        var parent = target.parentNode;
        var id = parent.getAttribute("id");
        var path = parent.getAttribute("path");
        target.className = "pzicon-sub";
        this.handle["fold"](id, path);
      },
      hideNode: function hideNode(nodeid, event) {
        var o, ishide, doc;
        return regeneratorRuntime.async(function hideNode$(context$1$0) {
          while (1) switch (context$1$0.prev = context$1$0.next) {
            case 0:
              o = event.target;
              ishide = o.innerHTML == '隐藏' ? 1 : 0;
              context$1$0.next = 4;
              return regeneratorRuntime.awrap(this.$tools.httpAgent('/admin/tree/ishide', 'post', 'id=' + nodeid + '&ishide=' + ishide));
  
            case 4:
              doc = context$1$0.sent;
  
              event.target.innerHTML = ishide == 1 ? '取消隐藏' : '隐藏';
  
            case 6:
            case "end":
              return context$1$0.stop();
          }
        }, null, this);
      }
    }
  };
  module.exports = exports["default"];
  var __vue__options__;
  if(exports && exports.__esModule && exports.default){
    __vue__options__ = exports.default;
  }else{
    __vue__options__ = module.exports;
  }
  __vue__options__.template = "\r\n\r\n<div>\r\n    <li  :id=\"items.id\" :path=\"items.path\">\r\n        <b class=\"indent\" v-for=\"a in (items.path.length-3)\"></b>\r\n        <i class=\"pzicon-add\" @click=\"click\"></i>\r\n        <em>{{items.name}}</em>\r\n        <span>\r\n          <router-link :to=\"'/tree/edit/'+items.id\">编辑</router-link>\r\n          <router-link :to=\"'/tree/add/'+items.id\">添加子节点</router-link>\r\n          <i class=\"ishide\" @click=\"hideNode(items.id, $event)\" v-if=\"items.ishide == 0\">隐藏</i>\r\n          <i class=\"ishide\" @click=\"hideNode(items.id, $event)\" v-if=\"items.ishide == 1\">取消隐藏</i>\r\n      </span>\r\n    </li>\r\n    <treeitem v-for=\"doc in items.children\" :items=\"doc\" :handle=\"handle\"></treeitem>\r\n</div>\r\n\r\n"
  

});
