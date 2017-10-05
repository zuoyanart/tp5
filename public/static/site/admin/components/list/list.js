define('site/admin/components/list/list.vue', function(require, exports, module) {

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
  
  // import $ from 'jquery';
  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
  
  var _pzvueCheckbox = require('node_modules/pzvue-checkbox/dist/pz-checkbox');
  
  var _pzvueCheckbox2 = _interopRequireDefault(_pzvueCheckbox);
  
  exports["default"] = {
    data: function data() {
      return {
        ids: [], //全选获取选中的id，
        checked: false,
        cp: 1,
        mp: 50,
        kw: "",
        scroll: true, //滚动可以加载
        lastScrollBottom: 0
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
    mounted: function mounted() {
      document.getElementById("main").style.minHeight = document.documentElement.clientHeight - 50 + "px";
      var self = this;
      document.addEventListener('scroll', function () {
        var docHeight = document.body.scrollHeight;
        var scrollTop = 0; //滚动条高度
        if (document.documentElement && document.documentElement.scrollTop) {
          scrollTop = document.documentElement.scrollTop;
        } else if (document.body) {
          scrollTop = document.body.scrollTop;
        }
        var bottomHeight = docHeight - scrollTop - window.screen.availHeight;
        if (self.lastScrollBottom < bottomHeight) {
          self.lastScrollBottom = bottomHeight;
          return;
        }
        self.lastScrollBottom = bottomHeight;
        if (bottomHeight <= 10 && bottomHeight >= 5 && self.scroll) {
          self.scroll = false;
          self.cp++;
          self.$parent.$emit("list-page", {
            kw: self.kw,
            cp: self.cp,
            mp: self.mp
          });
          setTimeout(function () {
            self.scroll = true;
          }, 500);
        }
      }, false);
    },
    methods: {
      enter: function enter(event) {
        this.cp = 1;
        this.$parent.$emit("list-page", {
          kw: event.target.value.trim(),
          cp: 1,
          mp: this.mp
        });
      },
      checkAll: function checkAll(value, ischecked) {
        //全选
        this.checked = ischecked;
      },
      change: function change(value, ischecked) {
        //checkbox change事件
        var index = this.ids.indexOf(value);
        if (ischecked) {
          //true
          if (index === -1) {
            this.ids.push(value);
          }
        } else {
          this.ids.splice(index, 1);
        }
      },
      click: function click(event) {
        var target = event.target;
        var cls = target.className;
        var targetParent = target.parentNode;
        if (target.tagName == "A") {
          //a标签则返回，不执行任何操作
          return;
        }
        var id = "";
        if (targetParent.className == "menu") {
          id = this.ids.join(",");
        } else {
          id = targetParent.getAttribute("id");
        }
        if (id.length == 0) {
          return;
        }
        this.handle[event.target.className](id, target.innerText);
      }
    },
    components: {
      pzcheckbox: _pzvueCheckbox2["default"]
    }
  };
  module.exports = exports["default"];
  var __vue__options__;
  if(exports && exports.__esModule && exports.default){
    __vue__options__ = exports.default;
  }else{
    __vue__options__ = module.exports;
  }
  __vue__options__.template = "\r\n\r\n<div>\r\n    <div class=\"menu\">\r\n        <pzcheckbox name=\"list\" :change=\"checkAll\">全选</pzcheckbox>|\r\n        <template v-for=\"b in docs.more\">\r\n          <router-link :to=\"b.link\" v-if=\"b.link && b.link != ''\">{{b.text}}</router-link>\r\n          <em v-else :class=\"b.cls\"  @click=\"click\">{{b.text}}</em> |\r\n        </template>\r\n        <el-input type=\"search\" id=\"searchkw\" @keyup.native.enter=\"enter\" v-model=\"kw\" ></el-input>\r\n    </div>\r\n    <ul class=\"list\" id=\"list\">\r\n        <li v-for=\"doc in docs.rows\">\r\n          <pzcheckbox name=\"list\" :checked=\"checked\" :change=\"change\" :value=\"doc.id\"></pzcheckbox>\r\n          <a :href=\"doc.link\" target=\"_blank\">\r\n              <template v-for=\"(item, key) in doc\">\r\n                {{(key != \"link\" && key != \"button\") ? item : \"\"}}\r\n              </template>\r\n            </a>\r\n            <span @click=\"click\" :id=\"doc.id\">\r\n              <template v-for=\"b in docs.button\">\r\n                <router-link :to=\"b.link +'/' + doc.id\" v-if=\"b.link && b.link != ''\">{{b.text}}</router-link>\r\n                <i :class=\"b.cls\" v-if=\"!b.link || b.link == ''\">{{b.text}}</i>\r\n             </template>\r\n              <template v-for=\"b in doc.button\">\r\n                <router-link :to=\"b.link +'/' + doc.id\" v-if=\"b.link && b.link != ''\">{{b.text}}</router-link>\r\n                <i :class=\"b.cls\" v-if=\"!b.link || b.link == ''\">{{b.text}}</i>\r\n              </template>\r\n            </span>\r\n        </li>\r\n    </ul>\r\n</div>\r\n\r\n"
  

});
