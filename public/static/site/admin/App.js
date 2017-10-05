define('site/admin/App.vue', function(require, exports, module) {

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
  
  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports["default"] = {
    data: function data() {
      return {
        show: {
          news: false,
          hudong: false,
          system: false
        },
        username: ""
      };
    },
    methods: {
      slider: function slider(event) {
        var o = event.target;
        var style = o.getAttribute("class");
        if (style.indexOf("submenu") > -1) {
          //带子菜单的父对象
          var data = o.getAttribute("data");
          this.$data.show[data] = !this.$data.show[data];
        } else {}
      },
      loginout: function loginout() {
        return regeneratorRuntime.async(function loginout$(context$1$0) {
          while (1) switch (context$1$0.prev = context$1$0.next) {
            case 0:
              context$1$0.next = 2;
              return regeneratorRuntime.awrap(this.$tools.httpAgent("/admin/login/loginout", "post", {}));
  
            case 2:
              document.location.href = "/admin/login";
  
            case 3:
            case "end":
              return context$1$0.stop();
          }
        }, null, this);
      }
    },
    mounted: function mounted() {
      this.username = this.$tools.getCookie("username");
    }
  };
  module.exports = exports["default"];
  var __vue__options__;
  if(exports && exports.__esModule && exports.default){
    __vue__options__ = exports.default;
  }else{
    __vue__options__ = module.exports;
  }
  __vue__options__.template = "\r\n\r\n<div id=\"app1\">\r\n    <div id=\"header\">\r\n        <h1><i class=\"pzicon-pizza\"></i>Pizza Admin</h1>\r\n        <div id=\"user-nav\">\r\n            <ul>\r\n                <li><i class=\"pzicon-accountfilling\"></i><span id=\"userinfo\">{{username}}</span></li>\r\n                <li><a href=\"javascript:void(0);\" id=\"loginout\" @click=\"loginout\"><i class=\"icon-loginout\"></i>退出</a></li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n    <!-- <div id=\"search\">\r\n        <input type=\"search\" id=\"searchkw\">\r\n    </div> -->\r\n    <div id=\"main-parent\">\r\n      <div id=\"sidebar\" @click=\"slider\">\r\n          <ul>\r\n              <li>\r\n                  <router-link to=\"/\"><i class=\"pzicon-home\"></i>主页</router-link>\r\n              </li>\r\n              <li>\r\n                  <a class=\"submenu\" data=\"news\"><i class=\"pzicon-liebiao\"></i>信息管理</a>\r\n                  <ul v-show=\"show.news\">\r\n                      <li>\r\n                          <router-link to=\"/tree\" class=\"tree\">节点管理</router-link>\r\n                      </li>\r\n                      <li>\r\n                          <router-link to=\"/news\" class=\"news\">文章管理</router-link>\r\n                      </li>\r\n                      <li>\r\n                          <router-link to=\"/block\" class=\"block\">模块管理</router-link>\r\n                          </a>\r\n                      </li>\r\n                  </ul>\r\n              </li>\r\n              <li>\r\n                  <a class=\"submenu\" data=\"hudong\"><i class=\"pzicon-hudong\"></i>互动管理</a>\r\n                  <ul v-show=\"show.hudong\">\r\n                      <li>\r\n                          <router-link to=\"/guestbook\">留言板管理</router-link>\r\n                          </a>\r\n                      </li>\r\n                  </ul>\r\n              </li>\r\n              <li>\r\n                  <a class=\"submenu\" data=\"system\"><i class=\"pzicon-setting\"></i>系统管理</a>\r\n                  <ul v-show=\"show.system\">\r\n                      <li>\r\n                          <router-link to=\"/user\">管理员管理</router-link>\r\n                          </a>\r\n                      </li>\r\n                  </ul>\r\n              </li>\r\n          </ul>\r\n      </div>\r\n      <router-view></router-view>\r\n    </div>\r\n    <div class=\"row-fluid\"></div>\r\n</div>\r\n\r\n"
  

});
