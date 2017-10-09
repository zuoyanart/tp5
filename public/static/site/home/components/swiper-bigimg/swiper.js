define('site/home/components/swiper-bigimg/swiper.vue', function(require, exports, module) {

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
  
  // let Swiper = require("swiper");
  // window.Swiper = Swiper;
  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _uuidV4 = require('node_modules/uuid/v4');
  
  var _uuidV42 = _interopRequireDefault(_uuidV4);
  
  var swiperOptionDefault = {
    direction: 'horizontal',
    autoplay: 3500,
    autoplayDisableOnInteraction: false,
    loop: true,
    pagination: '.swiper-pagination',
    grabCursor: true
  };
  
  // lazyLoading: true,
  exports['default'] = {
    name: 'swiper',
    data: function data() {
      return {
        id: '',
        news: []
      };
    },
    props: {
      cls: {
        type: String,
        'default': ''
      },
      page: {
        type: Object,
        'default': function _default() {
          return {
            islink: false,
            nodeid: 0,
            mp: 3
          };
        }
      },
      options: {
        type: Object,
        'default': function _default() {
          return {};
        }
      }
    },
    computed: {},
    methods: {
      getArticle: function getArticle() {
        var docs;
        return regeneratorRuntime.async(function getArticle$(context$1$0) {
          while (1) switch (context$1$0.prev = context$1$0.next) {
            case 0:
              if (!(this.page.nodeid != 0)) {
                context$1$0.next = 5;
                break;
              }
  
              context$1$0.next = 3;
              return regeneratorRuntime.awrap(this.$tools.httpAgent("/ajax/article/page", 'post', {
                cp: 1,
                nodeid: this.page.nodeid,
                mp: this.page.mp
              }));
  
            case 3:
              docs = context$1$0.sent;
  
              this.news = docs.msg;
  
            case 5:
            case 'end':
              return context$1$0.stop();
          }
        }, null, this);
      }
    },
    mounted: function mounted() {
      this.id = (0, _uuidV42['default'])().replace(/-/g, '');
      this.getArticle();
  
      var option = swiperOptionDefault;
      for (var key in this.options) {
        option[key] = this.options[key];
      }
      option.pagination = '#' + this.id + 'pag';
  
      var self = this;
      window.onload = function () {
        setTimeout(function () {
          if (!window['mySwiper' + self.id]) {
            window['mySwiper' + self.id] = new Swiper('#' + self.id, option);
            console.log('swiper');
          }
        }, 1000);
      };
      setTimeout(function () {
        if (!window['mySwiper' + self.id]) {
          window['mySwiper' + self.id] = new Swiper('#' + self.id, option);
          console.log('swiper111');
        }
      }, 1010);
    }
  };
  module.exports = exports['default'];
  var __vue__options__;
  if(exports && exports.__esModule && exports.default){
    __vue__options__ = exports.default;
  }else{
    __vue__options__ = module.exports;
  }
  __vue__options__.template = "\r\n<div class=\"swiper-container\" :class=\"cls\" :id=\"id\">\r\n  <div class=\"swiper-wrapper\">\r\n    <div class=\"swiper-slide\" :style=\"{backgroundImage: 'url(' + n.timg + ')'}\" v-for=\"n in this.news\" v-if=\"!page.islink\">&nbsp;</div>\r\n    <div class=\"swiper-slide\" :style=\"{backgroundImage: 'url(' + n.timg + ')'}\" v-for=\"n in this.news\" v-if=\"page.islink\">\r\n      <router-link :to=\"n.link\">&nbsp;</router-link>\r\n    </div>\r\n  </div>\r\n  <div class=\"swiper-pagination\" :id=\"id + 'pag'\"></div>\r\n</div>\r\n"
  

});
