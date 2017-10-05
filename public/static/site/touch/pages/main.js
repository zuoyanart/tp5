define('site/touch/pages/main.vue', function(require, exports, module) {

  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  
  // let jQuery = require("jquery");
  // let $ = jQuery;
  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
  
  var _pizzatools = require('pizzatools');
  
  var _pizzatools2 = _interopRequireDefault(_pizzatools);
  
  exports["default"] = {
    data: function data() {
      return {
        isMenuShow: false
      };
    },
    methods: {
      menuSwitch: function menuSwitch() {
        //菜单开关
        this.isMenuShow = !this.isMenuShow;
      },
      goback: function goback() {
        console.log("asd55a4sd45");
        this.$router.go(-1);
      }
    },
    mounted: function mounted() {}
  };
  module.exports = exports["default"];
  var __vue__options__;
  if(exports && exports.__esModule && exports.default){
    __vue__options__ = exports.default;
  }else{
    __vue__options__ = module.exports;
  }
  __vue__options__.template = "\n\n<yd-layout>\n    <yd-navbar slot=\"navbar\">\n        <router-link replace to=\"#\" slot=\"left\" @click.native=\"goback\">\n            <yd-navbar-back-icon></yd-navbar-back-icon>\n        </router-link>\n        <router-link to=\"/\" slot=\"center\">OPPP手机</router-link>\n        <router-link to=\"#\" slot=\"right\" @click.native=\"menuSwitch\">\n          <yd-icon name=\"type\" size=\"25px\" color=\"#777\"></yd-icon>\n      </router-link>\n    </yd-navbar>\n    <ul v-show=\"isMenuShow\" class=\"menu-menu\" @click=\"menuSwitch\">\n      <li><router-link to=\"/anlizhanshi-9-20img\">企业建站</router-link></li>\n      <li><router-link to=\"/news-4-20list\">微开发</router-link></li>\n      <li><router-link to=\"/anlizhanshi-14-10img\">大型平台</router-link></li>\n      <li><router-link to=\"/team\">关于我们</router-link></li>\n      <li><router-link to=\"/seo-16node\">运营服务</router-link></li>\n    </ul>\n    <router-view></router-view>\n    <div class=\"footer\">\n          <span>售前：<a target=\"_blank\" href=\"http://wpa.qq.com/msgrd?v=3&uin=490526801&site=qq&menu=yes\"><img src=\"http://wpa.qq.com/pa?p=2:490526801:51\" alt=\"点击这里给我发消息\" title=\"点击这里给我发消息\"/></a></span>\n          <span>售前：<a target=\"_blank\" href=\"http://wpa.qq.com/msgrd?v=3&uin=490526801&site=qq&menu=yes\"><img src=\"http://wpa.qq.com/pa?p=2:490526801:51\" alt=\"点击这里给我发消息\" title=\"点击这里给我发消息\"/></a></span><br/><br/>\n          <span>售后：<a target=\"_blank\" href=\"http://wpa.qq.com/msgrd?v=3&uin=490526801&site=qq&menu=yes\"><img src=\"http://wpa.qq.com/pa?p=2:490526801:51\" alt=\"点击这里给我发消息\" title=\"点击这里给我发消息\"/></a></span>\n          <span>售后：<a target=\"_blank\" href=\"http://wpa.qq.com/msgrd?v=3&uin=490526801&site=qq&menu=yes\"><img src=\"http://wpa.qq.com/pa?p=2:490526801:51\" alt=\"点击这里给我发消息\" title=\"点击这里给我发消息\"/></a></span>\n    </div>\n</yd-layout>\n\n"
  

});
