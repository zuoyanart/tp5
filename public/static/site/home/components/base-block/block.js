define('site/home/components/base-block/block.vue', function(require, exports, module) {

  //
  //
  //
  //
  
  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
      value: true
  });
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _pizzatools = require('pizzatools');
  
  var _pizzatools2 = _interopRequireDefault(_pizzatools);
  
  exports['default'] = {
      name: "base-block",
      data: function data() {
          return {
              blockContent: '' };
      },
      //正文内容
      props: {
          cls: {
              type: String,
              'default': ''
          },
          blockid: {
              type: Number,
              'default': 0
          }
      },
      methods: {
          getBlock: function getBlock() {
              var block;
              return regeneratorRuntime.async(function getBlock$(context$1$0) {
                  while (1) switch (context$1$0.prev = context$1$0.next) {
                      case 0:
                          if (!(this.blockid > 0)) {
                              context$1$0.next = 5;
                              break;
                          }
  
                          context$1$0.next = 3;
                          return regeneratorRuntime.awrap(_pizzatools2['default'].httpAgent('/ajax/block/get', 'post', 'id=' + this.blockid));
  
                      case 3:
                          block = context$1$0.sent;
  
                          if (block.state) {
                              this.blockContent = block.msg.content;
                          }
  
                      case 5:
                      case 'end':
                          return context$1$0.stop();
                  }
              }, null, this);
          }
      },
      mounted: function mounted() {
          return regeneratorRuntime.async(function mounted$(context$1$0) {
              while (1) switch (context$1$0.prev = context$1$0.next) {
                  case 0:
                      context$1$0.next = 2;
                      return regeneratorRuntime.awrap(this.getBlock());
  
                  case 2:
                  case 'end':
                      return context$1$0.stop();
              }
          }, null, this);
      },
      watch: {
          blockid: function blockid() {
              return regeneratorRuntime.async(function blockid$(context$1$0) {
                  while (1) switch (context$1$0.prev = context$1$0.next) {
                      case 0:
                          context$1$0.next = 2;
                          return regeneratorRuntime.awrap(this.getBlock());
  
                      case 2:
                      case 'end':
                          return context$1$0.stop();
                  }
              }, null, this);
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
  __vue__options__.template = "\n<div :class=\"cls\" v-html=\"blockContent\"></div>\n"
  

});
