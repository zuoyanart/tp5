define('site/home/components/base-crumb/crumb.vue', function(require, exports, module) {

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
  
  var _pizzatools = require('pizzatools');
  
  var _pizzatools2 = _interopRequireDefault(_pizzatools);
  
  exports['default'] = {
    name: 'base-crumb',
    data: function data() {
      return {
        nodepath: []
      };
    },
    props: {
      cls: {
        type: String,
        'default': ''
      },
      param: {
        type: Object,
        'default': function _default() {
          return {
            separator: '/',
            nodeid: 0
          };
        }
      }
    },
    methods: {
      getData: function getData() {
        var doc;
        return regeneratorRuntime.async(function getData$(context$1$0) {
          while (1) switch (context$1$0.prev = context$1$0.next) {
            case 0:
              if (!(this.param.nodeid > 0)) {
                context$1$0.next = 5;
                break;
              }
  
              context$1$0.next = 3;
              return regeneratorRuntime.awrap(_pizzatools2['default'].httpAgent('/ajax/tree/crumb', 'post', 'nodeid=' + this.param.nodeid));
  
            case 3:
              doc = context$1$0.sent;
  
              this.nodepath = doc.msg;
  
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
            return regeneratorRuntime.awrap(this.getData());
  
          case 2:
          case 'end':
            return context$1$0.stop();
        }
      }, null, this);
    },
    watch: {
      param: function param() {
        return regeneratorRuntime.async(function param$(context$1$0) {
          while (1) switch (context$1$0.prev = context$1$0.next) {
            case 0:
              context$1$0.next = 2;
              return regeneratorRuntime.awrap(this.getData());
  
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
  __vue__options__.template = "\n<el-breadcrumb separator=\"/\" :class=\"cls\">\n  <el-breadcrumb-item :to=\"{ path: c.link }\" v-for=\"c in nodepath\">{{c.name}}</el-breadcrumb-item>\n</el-breadcrumb>\n"
  

});
