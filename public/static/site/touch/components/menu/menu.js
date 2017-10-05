define('site/touch/components/menu/menu.vue', function(require, exports, module) {

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
    props: {
      menuItem: {
        type: Array,
        "default": []
      },
      show: {
        type: Boolean,
        "default": false
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
  __vue__options__.template = "\n<ul v-show=\"show\" class=\"menu-ismenu\">\n  <li v-for=\"item in menuItem\"><router-link :to=\"item.to\">{{item.label}}</router-link></li>\n</ul>\n"
  

});
