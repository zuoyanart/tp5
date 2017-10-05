define('site/home/components/list-img/list.vue', function(require, exports, module) {

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
        articles: [],
        total: 0
      };
    },
    props: {
      id: {
        type: String,
        'default': ''
      },
      cls: {
        type: String,
        'default': ''
      },
      param: {
        type: Object,
        'default': function _default() {
          return {
            nodeid: 0,
            cp: 1,
            mp: 10,
            istp: false
          };
        }
      }
    },
    methods: {
      getArticles: function getArticles() {
        var article;
        return regeneratorRuntime.async(function getArticles$(context$1$0) {
          while (1) switch (context$1$0.prev = context$1$0.next) {
            case 0:
              if (!(this.param.nodeid && this.param.nodeid != 0)) {
                context$1$0.next = 7;
                break;
              }
  
              context$1$0.next = 3;
              return regeneratorRuntime.awrap(_pizzatools2['default'].httpAgent("/ajax/article/page", "post", this.param));
  
            case 3:
              article = context$1$0.sent;
  
              this.total = article.count ? article.count : 0;
              this.articles = article.msg;
              return context$1$0.abrupt('return', this.articles);
  
            case 7:
            case 'end':
              return context$1$0.stop();
          }
        }, null, this);
      },
      subStr: function subStr(str) {
        return this.$tools.subStr(str, 30);
      }
    },
    computed: {},
    mounted: function mounted() {
      return regeneratorRuntime.async(function mounted$(context$1$0) {
        while (1) switch (context$1$0.prev = context$1$0.next) {
          case 0:
            this.getArticles();
  
          case 1:
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
              this.getArticles();
  
            case 1:
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
  __vue__options__.template = "\n<div :class=\"cls\" :id=\"id\">\n  <ul >\n      <li v-for=\"a in articles\">\n          <router-link :to=\"a.link\">\n            <img :src=\"a.timg\"  style=\"width:291px;height:194px;\">\n            <p>{{subStr(a.title,100)}}</p>\n          </router-link>\n      </li>\n  </ul>\n  <el-pagination class=\"list-tp\" :class=\"cls + '-tp'\" :id=\"id + '-tp'\" :current-page=\"param.cp\" :page-size=\"param.mp\" layout=\"prev, pager, next, jumper\" :total=\"total\" v-if=\"total > 0\">\n  </el-pagination>\n</div>\n"
  

});
