define('site/home/pages/main.vue', function(require, exports, module) {

  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
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
  exports['default'] = {
    data: function data() {
      return {
        menuList: []
      };
    },
    methods: {
      getMenu: function getMenu() {
        var doc;
        return regeneratorRuntime.async(function getMenu$(context$1$0) {
          while (1) switch (context$1$0.prev = context$1$0.next) {
            case 0:
              context$1$0.next = 2;
              return regeneratorRuntime.awrap(this.$tools.httpAgent('/ajax/tree/page', 'post', 'pid=1'));
  
            case 2:
              doc = context$1$0.sent;
  
              this.menuList = doc.msg;
  
            case 4:
            case 'end':
              return context$1$0.stop();
          }
        }, null, this);
      },
      setMenu: function setMenu(pid) {
        var doms, i, nodeDom;
        return regeneratorRuntime.async(function setMenu$(context$1$0) {
          while (1) switch (context$1$0.prev = context$1$0.next) {
            case 0:
              doms = document.getElementsByClassName('menutop');
  
              for (i = 0; i < doms.length; i++) {
                doms[i].setAttribute("class", doms[i].getAttribute('class').replace('router-link-active', ''));
              }
              nodeDom = document.getElementById('node' + pid);
  
              if (nodeDom) {
                nodeDom.setAttribute('class', nodeDom.getAttribute('class') + ' router-link-active');
              }
  
            case 4:
            case 'end':
              return context$1$0.stop();
          }
        }, null, this);
      }
    },
    mounted: function mounted() {
      var self = this;
      this.getMenu();
      this.$on('checkMenu', this.setMenu);
    },
    watch: {
      '$route': function $route() {
        this.setMenu(0);
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
  __vue__options__.template = "\r\n\r\n<div id=\"app\">\r\n    <div class=\"header-menu\">\r\n        <div class=\"header-menu-c\">\r\n            <a href=\"/\"><img src=\"/static/site/home/assets/img/logo.png\" alt=\"\"></a>\r\n            <div>\r\n                 <router-link to=\"/\" exact>首页</router-link>\r\n                 <template v-for=\"node in menuList\">\r\n                   <router-link :to=\"node.link\" class=\"menutop\" :id=\"'node' + node.id\" v-if=\"node.link.indexOf('http')== -1\">{{node.name}}</router-link>\r\n                   <a :href=\"node.link\"  v-else>{{node.name}}</a>\r\n               </template>\r\n            </div>\r\n        </div>\r\n    </div>\r\n     <router-view></router-view>\r\n    <div class=\"footer\">\r\n      <div class=\"footer-c\">\r\n        © 2005 - 2017 河南左盐网络科技有限公司 版权所有 粤ICP备08130115号-1 联系方式：4001-666-888\r\n      </div>\r\n    </div>\r\n    <div class=\"online-cus\">\r\n         <div class=\"online-cus-check\">\r\n           在线客服\r\n         </div>\r\n         <div class=\"online-cus-bh\">\r\n           <h2>在线咨询</h2>\r\n           <ul>\r\n             <li>售前：<a target=\"_blank\" href=\"http://wpa.qq.com/msgrd?v=3&uin=490526801&site=qq&menu=yes\"><img src=\"http://wpa.qq.com/pa?p=2:490526801:51\" alt=\"点击这里给我发消息\" title=\"点击这里给我发消息\"/></a></li>\r\n             <li>售前：<a target=\"_blank\" href=\"http://wpa.qq.com/msgrd?v=3&uin=490526801&site=qq&menu=yes\"><img src=\"http://wpa.qq.com/pa?p=2:490526801:51\" alt=\"点击这里给我发消息\" title=\"点击这里给我发消息\"/></a></li>\r\n             <li>售后：<a target=\"_blank\" href=\"http://wpa.qq.com/msgrd?v=3&uin=490526801&site=qq&menu=yes\"><img src=\"http://wpa.qq.com/pa?p=2:490526801:51\" alt=\"点击这里给我发消息\" title=\"点击这里给我发消息\"/></a></li>\r\n             <li>售后：<a target=\"_blank\" href=\"http://wpa.qq.com/msgrd?v=3&uin=490526801&site=qq&menu=yes\"><img src=\"http://wpa.qq.com/pa?p=2:490526801:51\" alt=\"点击这里给我发消息\" title=\"点击这里给我发消息\"/></a></li>\r\n           </ul>\r\n         </div>\r\n    </div>\r\n</div>\r\n\r\n"
  

});
