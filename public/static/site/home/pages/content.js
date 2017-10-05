define('site/home/pages/content.vue', function(require, exports, module) {

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
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _pizzatools = require('pizzatools');
  
  var _pizzatools2 = _interopRequireDefault(_pizzatools);
  
  exports['default'] = {
      data: function data() {
          return {
              article: {},
              crumbParam: {}
          };
      },
      components: {
          // 'base-crumb': crumb
      },
      methods: {},
      filters: {
          formatTime: function formatTime(time) {
              return _pizzatools2['default'].formatTime(time);
          }
      },
      computed: {},
      mounted: function mounted() {
          var param, content;
          return regeneratorRuntime.async(function mounted$(context$1$0) {
              while (1) switch (context$1$0.prev = context$1$0.next) {
                  case 0:
                      param = this.$route.params;
                      context$1$0.next = 3;
                      return regeneratorRuntime.awrap(this.$tools.httpAgent("/ajax/article/get", 'post', 'id=' + param.id));
  
                  case 3:
                      content = context$1$0.sent;
  
                      this.article = content.msg;
  
                      this.crumbParam = {
                          nodeid: this.article.nodeid
                      };
  
                      document.title = this.article.title + "-" + document.title;
                      this.$tools.setMetaKey(this.article.title + "-" + document.title);
                      this.$tools.setMetaDes(this.article.title + "-" + document.title);
  
                  case 9:
                  case 'end':
                      return context$1$0.stop();
              }
          }, null, this);
      }
  };
  module.exports = exports['default'];
  var __vue__options__;
  if(exports && exports.__esModule && exports.default){
    __vue__options__ = exports.default;
  }else{
    __vue__options__ = module.exports;
  }
  __vue__options__.template = "\r\n\r\n<div id=\"main\">\r\n    <base-crumb :param=\"crumbParam\"></base-crumb>\r\n    <h1 class=\"content-h1title\">{{article.title}}</h1>\r\n    <div class=\"content-gap\">\r\n        <span>{{article.createtime | formatTime}}</span>\r\n        &nbsp;&nbsp;&nbsp;&nbsp;来源：<span>{{article.source}}</span>\r\n    </div>\r\n    <div class=\"content-content\" v-html=\"article.content\"></div>\r\n</div>\r\n\r\n"
  

});
