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

define('node_modules/uuid/lib/rng-browser', function(require, exports, module) {

  var global = typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {};
  // Unique ID creation requires a high quality random # generator.  In the
  // browser this is a little complicated due to unknown quality of Math.random()
  // and inconsistent support for the `crypto` API.  We do the best we can via
  // feature-detection
  var rng;
  
  var crypto = global.crypto || global.msCrypto; // for IE 11
  if (crypto && crypto.getRandomValues) {
    // WHATWG crypto RNG - http://wiki.whatwg.org/wiki/Crypto
    var rnds8 = new Uint8Array(16); // eslint-disable-line no-undef
    rng = function whatwgRNG() {
      crypto.getRandomValues(rnds8);
      return rnds8;
    };
  }
  
  if (!rng) {
    // Math.random()-based (RNG)
    //
    // If all else fails, use Math.random().  It's fast, but is of unspecified
    // quality.
    var rnds = new Array(16);
    rng = function() {
      for (var i = 0, r; i < 16; i++) {
        if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
        rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
      }
  
      return rnds;
    };
  }
  
  module.exports = rng;
  

});

define('node_modules/uuid/lib/bytesToUuid', function(require, exports, module) {

  /**
   * Convert array of 16 byte values to UUID string format of the form:
   * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
   */
  var byteToHex = [];
  for (var i = 0; i < 256; ++i) {
    byteToHex[i] = (i + 0x100).toString(16).substr(1);
  }
  
  function bytesToUuid(buf, offset) {
    var i = offset || 0;
    var bth = byteToHex;
    return bth[buf[i++]] + bth[buf[i++]] +
            bth[buf[i++]] + bth[buf[i++]] + '-' +
            bth[buf[i++]] + bth[buf[i++]] + '-' +
            bth[buf[i++]] + bth[buf[i++]] + '-' +
            bth[buf[i++]] + bth[buf[i++]] + '-' +
            bth[buf[i++]] + bth[buf[i++]] +
            bth[buf[i++]] + bth[buf[i++]] +
            bth[buf[i++]] + bth[buf[i++]];
  }
  
  module.exports = bytesToUuid;
  

});

define('node_modules/uuid/v4', function(require, exports, module) {

  var rng = require('node_modules/uuid/lib/rng-browser');
  var bytesToUuid = require('node_modules/uuid/lib/bytesToUuid');
  
  function v4(options, buf, offset) {
    var i = buf && offset || 0;
  
    if (typeof(options) == 'string') {
      buf = options == 'binary' ? new Array(16) : null;
      options = null;
    }
    options = options || {};
  
    var rnds = options.random || (options.rng || rng)();
  
    // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
    rnds[6] = (rnds[6] & 0x0f) | 0x40;
    rnds[8] = (rnds[8] & 0x3f) | 0x80;
  
    // Copy bytes to buffer, if provided
    if (buf) {
      for (var ii = 0; ii < 16; ++ii) {
        buf[i + ii] = rnds[ii];
      }
    }
  
    return buf || bytesToUuid(rnds);
  }
  
  module.exports = v4;
  

});

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
  __vue__options__.template = "\n<div class=\"swiper-container\" :class=\"cls\" :id=\"id\">\r\n  <div class=\"swiper-wrapper\">\r\n    <div class=\"swiper-slide\" :style=\"{backgroundImage: 'url(' + n.timg + ')'}\" v-for=\"n in this.news\" v-if=\"!page.islink\">&nbsp;</div>\r\n    <div class=\"swiper-slide\" :style=\"{backgroundImage: 'url(' + n.timg + ')'}\" v-for=\"n in this.news\" v-if=\"page.islink\">\r\n      <router-link :to=\"n.link\">&nbsp;</router-link>\r\n    </div>\r\n  </div>\r\n  <div class=\"swiper-pagination\" :id=\"id + 'pag'\"></div>\r\n</div>\n"
  

});

