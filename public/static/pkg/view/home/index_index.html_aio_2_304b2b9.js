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
  __vue__options__.template = "\r\n\r\n<div id=\"app\">\r\n    <div class=\"header-menu\">\r\n        <div class=\"header-menu-c\">\r\n            <a href=\"/\"><img src=\"/static/site/home/assets/img/logo_80bcce0.png\" alt=\"\"></a>\r\n            <div>\r\n                 <router-link to=\"/\" exact>首页</router-link>\r\n                 <template v-for=\"node in menuList\">\r\n                   <router-link :to=\"node.link\" class=\"menutop\" :id=\"'node' + node.id\" v-if=\"node.link.indexOf('http')== -1\">{{node.name}}</router-link>\r\n                   <a :href=\"node.link\"  v-else>{{node.name}}</a>\r\n               </template>\r\n            </div>\r\n        </div>\r\n    </div>\r\n     <router-view></router-view>\r\n    <div class=\"footer\">\r\n      <div class=\"footer-c\">\r\n        © 2005 - 2017 河南左盐网络科技有限公司 版权所有 粤ICP备08130115号-1 联系方式：4001-666-888\r\n      </div>\r\n    </div>\r\n    <div class=\"online-cus\">\r\n         <div class=\"online-cus-check\">\r\n           在线客服\r\n         </div>\r\n         <div class=\"online-cus-bh\">\r\n           <h2>在线咨询</h2>\r\n           <ul>\r\n             <li>售前：<a target=\"_blank\" href=\"http://wpa.qq.com/msgrd?v=3&uin=490526801&site=qq&menu=yes\"><img src=\"http://wpa.qq.com/pa?p=2:490526801:51\" alt=\"点击这里给我发消息\" title=\"点击这里给我发消息\"/></a></li>\r\n             <li>售前：<a target=\"_blank\" href=\"http://wpa.qq.com/msgrd?v=3&uin=490526801&site=qq&menu=yes\"><img src=\"http://wpa.qq.com/pa?p=2:490526801:51\" alt=\"点击这里给我发消息\" title=\"点击这里给我发消息\"/></a></li>\r\n             <li>售后：<a target=\"_blank\" href=\"http://wpa.qq.com/msgrd?v=3&uin=490526801&site=qq&menu=yes\"><img src=\"http://wpa.qq.com/pa?p=2:490526801:51\" alt=\"点击这里给我发消息\" title=\"点击这里给我发消息\"/></a></li>\r\n             <li>售后：<a target=\"_blank\" href=\"http://wpa.qq.com/msgrd?v=3&uin=490526801&site=qq&menu=yes\"><img src=\"http://wpa.qq.com/pa?p=2:490526801:51\" alt=\"点击这里给我发消息\" title=\"点击这里给我发消息\"/></a></li>\r\n           </ul>\r\n         </div>\r\n    </div>\r\n</div>\r\n\r\n"
  

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
  
  var _uuidV4 = require('uuid/v4');
  
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

define("pizzatools",function(require,exports,module){"use strict";function a(a){return a&&a.__esModule?a:{"default":a}}var g=require("vue-layer"),c=a(g),h=c["default"](Vue),v=function(){var a={};return a.extendJson=function(a,g){for(var c in a)g[c]=a[c];return g},a.formatParams=function(a){if("string"!=typeof a){var g=[];for(var c in a)g.push(encodeURIComponent(c)+"="+encodeURIComponent(a[c]));return g.push(("v="+Math.random()).replace(".")),g.join("&")}return a},a.httpAgent=function(g){var c=arguments.length<=1||void 0===arguments[1]?"get":arguments[1],v=arguments.length<=2||void 0===arguments[2]?"":arguments[2],M=arguments.length<=3||void 0===arguments[3]?{}:arguments[3];c=c.toUpperCase();var w={dataType:"json"};return M=a.extendJson(M,w),new Promise(function(w,y){var b=h.loading(1),R=new XMLHttpRequest;R.onreadystatechange=function(){if(h.close(b),4===R.readyState){var a=R.status;a>=200&&300>a?w("json"===M.dataType.toLowerCase()?JSON.parse(R.responseText):R.responseText):y(a)}};var T=a.formatParams(v);"GET"===c?(R.open(c,g+"?"+T,!0),R.send(null)):(R.open(c,g,!0),R.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),R.send(T))})},a.randomChar=function(l){for(var a=1e8,x="0123456789qwertyioplkjhgfsazxcvbnm",g="",i=0;l>i;i++)g+=x.charAt(Math.ceil(Math.random()*a)%x.length);return g},a.getCharLen=function(a){return a.replace(/[^\x00-\xff]/g,"rr").length},a.subStr=function(s,l,a){var g=!1,r="";if(v.getCharLen(s)>l){a=a?a:"",l-=v.getCharLen(a);for(var c=escape(s),h=c.length,M=0,i=0;h>i;i++){if(!(l>M)){g=!0;break}var t=c.charAt(i);"%"===t?(t=c.charAt(i+1),"u"===t?(r+=c.substring(i,i+6),M+=2,i+=5):(r+=c.substring(i,i+3),M++,i+=2)):(r+=t,M++)}}return g?unescape(r)+a:s},a.getPara=function(a){var g=new RegExp("(^|&)"+a+"=([^&]*)(&|$)"),r=window.location.search.substr(1).match(g);return null!==r?unescape(r[2]):""},a.subTime=function(a,g){var c=new Date(a),h=void 0;return h=void 0===g?new Date:new Date(g),(h.getTime()-c.getTime())/1e3},a.getUnixTime=function(){return Math.round((new Date).getTime()/1e3)},a.formatTime=function(){var g=arguments.length<=0||void 0===arguments[0]?a.getUnixTime():arguments[0],c=arguments.length<=1||void 0===arguments[1]?"YYYY-MM-DD HH:mm:ss":arguments[1],h=new Date(1e3*g),v=h,o={"M+":v.getMonth()+1,"D+":v.getDate(),"h+":v.getHours()%12===0?12:v.getHours()%12,"H+":v.getHours(),"m+":v.getMinutes(),"s+":v.getSeconds(),"q+":Math.floor((v.getMonth()+3)/3),S:v.getMilliseconds()},M={0:"日",1:"一",2:"二",3:"三",4:"四",5:"五",6:"六"};/(Y+)/.test(c)&&(c=c.replace(RegExp.$1,(v.getFullYear()+"").substr(4-RegExp.$1.length))),/(E+)/.test(c)&&(c=c.replace(RegExp.$1,(RegExp.$1.length>1?RegExp.$1.length>2?"星期":"周":"")+M[v.getDay()+""]));for(var w in o)new RegExp("("+w+")").test(c)&&(c=c.replace(RegExp.$1,1===RegExp.$1.length?o[w]:("00"+o[w]).substr((""+o[w]).length)));return c},a.getCookie=function(a){for(var g="0",t=document.cookie,c=t.split(";"),i=0;i<c.length;i++)if(c[i].split("=")[0].trim()===a){g=decodeURIComponent(c[i].split("=")[1]);break}return g},a.setCookie=function(a,s,d){var g=a+"="+s;g+=d?"; max-age="+24*d*60*60:"",document.cookie=g+";path=/"},a.getMeta=function(a){return document.querySelector('meta[name="'+a+'"]').getAttribute("content")},a.setMeta=function(a,g){document.querySelector('meta[name="'+a+'"]').setAttribute("content",g)},a.setMetaKey=function(a){document.querySelector('meta[name="keywords"]').setAttribute("content",a)},a.setMetaDes=function(a){document.querySelector('meta[name="description"]').setAttribute("content",a.replace(/"/g,"“"))},a.setSeo=function(g,c,h){document.title=g+"-"+document.title,a.setMetaKey(c),a.setMetaDes(h)},a}();module.exports=v});
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

define('site/home/pages/index.vue', function(require, exports, module) {

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
  
  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _componentsSwiperBigimgSwiperVue = require('site/home/components/swiper-bigimg/swiper.vue');
  
  var _componentsSwiperBigimgSwiperVue2 = _interopRequireDefault(_componentsSwiperBigimgSwiperVue);
  
  var _componentsBaseBlockBlockVue = require('site/home/components/base-block/block.vue');
  
  var _componentsBaseBlockBlockVue2 = _interopRequireDefault(_componentsBaseBlockBlockVue);
  
  exports['default'] = {
    data: function data() {
      return {
        swiperData: {
          nodeid: 3,
          mp: 5
        }
      };
    },
    methods: {},
    components: {
      'swiper-bigimg': _componentsSwiperBigimgSwiperVue2['default'],
      'base-block': _componentsBaseBlockBlockVue2['default']
    },
    mounted: function mounted() {
      window.map = new BMap.Map("addr");
      var point = new BMap.Point(113.680576, 34.762719);
      map.centerAndZoom(point, 15);
      var marker = new BMap.Marker(point); // 创建标注
      map.addOverlay(marker); // 将标注添加到地图中
      marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
      var top_left_control = new BMap.ScaleControl({
        anchor: BMAP_ANCHOR_TOP_LEFT
      }); // 左上角，添加比例尺
      var top_left_navigation = new BMap.NavigationControl(); //左上角，添加默认缩放平移控件
      var top_right_navigation = new BMap.NavigationControl({
        anchor: BMAP_ANCHOR_TOP_RIGHT,
        type: BMAP_NAVIGATION_CONTROL_SMALL
      }); //右上角
  
      map.addControl(top_left_control);
      map.addControl(top_left_navigation);
      map.addControl(top_right_navigation);
      map.enableScrollWheelZoom(); //启用滚轮放大缩小，默认禁用
      map.enableContinuousZoom(); //启用地图惯性拖拽，默认禁用
    }
  };
  module.exports = exports['default'];
  var __vue__options__;
  if(exports && exports.__esModule && exports.default){
    __vue__options__ = exports.default;
  }else{
    __vue__options__ = module.exports;
  }
  __vue__options__.template = "\r\n\r\n<div class=\"\">\r\n    <swiper-bigimg :page=\"swiperData\"  cls=\"swiep-item1\"></swiper-bigimg>\r\n    <div class=\"item-gap\">\r\n          <h2>Services</h2>\r\n          <p>OUR FULL SERVICES RPOJECT</p>\r\n    </div>\r\n    <div class=\"index-service-item\">\r\n          <div class=\"index-service-item-sub\">\r\n              <i class=\"zyitfont zyit-pingtai\"></i>\r\n              <h2>网站应用产品解决方案</h2>\r\n              <p>企业宣传 / 电商平台 / 分销系统 / 视觉设计 / HTML5开发 / 定制化平台</p>\r\n          </div>\r\n          <div class=\"index-service-item-sub\">\r\n            <i class=\"zyitfont zyit-phone\"></i>\r\n            <h2>微信应用产品解决方案</h2>\r\n            <p>微商城 / 微站 / 微分销 / 微活动 / HTML5场景定制 / 微信定制服务</p>\r\n          </div>\r\n          <div class=\"index-service-item-sub\">\r\n            <i class=\"zyitfont zyit-app\"></i>\r\n            <h2>移动应用产品解决方案</h2>\r\n            <p>iOS / Android / APP交互设计、视觉设计、功能定制开发</p>\r\n          </div>\r\n          <div class=\"index-service-item-sub\">\r\n            <i class=\"zyitfont zyit-yunying\"></i>\r\n            <h2>互联网产品运营策划</h2>\r\n            <p>定制化产品运营策略，制定顶层设计，帮助企业降低运营损耗，快速适应市场变化</p>\r\n          </div>\r\n    </div>\r\n    <div class=\"item-gap\">\r\n          <h2>About Us</h2>\r\n          <p>INFORMATION ABOUT ZUOYANIT</p>\r\n    </div>\r\n    <div class=\"index-aboutus\">\r\n      <p>我们是一支拥有政府背景，并且融交互、创新、视觉设计、产品研发于一体的专业品牌策划与制作团队，鼎力为国内外知名企业提供全方位多平台的产品服务解决方案。以专业的交互设计、创新理念、视觉呈现，服务国内外企业多达100余家，成功案例300余例。涉及IT、汽车、教育、房地产、金融等各个行业，拥有包括中国移动、中国电信、百度、新浪、淘宝、索尼、联想、人民网、中国日报等企业在内的成功案例，在国内拥有较高美誉。</p>\r\n      <img src=\"/static/site/home/assets/img/true_4fa06c0.jpg\" >\r\n    </div>\r\n    <div class=\"index-kouhao\">\r\n      <div>\r\n        <h3>创新。</h3>\r\n        <h4>Innovate</h4>\r\n        <p>我们通过研究理解用户的思维、行为、和目标，挖掘用户对产品使用的潜在需求，通过我们服务于各行业客户的丰富经验，结合品牌的优势进行分析，让用户在情绪上、行为上感知产品的创新、感受完美的体验。超越品牌的价值。</p>\r\n      </div>\r\n      <div>\r\n        <h3>激情。</h3>\r\n        <h4>Intense</h4>\r\n        <p>我们是一只富有激情的创新团队。我们将设计通过情感的表达把用户和产品很自然的连接在一起，让用户享受使用产品的愉悦，以此来强化对产品、品牌的体验认知！通过自然的交互和生动的设计展现出来，用一个充满情感化的设计打动用户！</p>\r\n      </div>\r\n      <div>\r\n        <h3>未来。</h3>\r\n        <h4>Future</h4>\r\n        <p>为客户提供品牌化、一站式的解决方案。服务涵盖了互联网，掌上移动设备、桌面平台以及电子消费类产品等。为客户提供从品牌设计、概念设计、交互设计、视觉设计、功能研发到最终产品实现。为客户提供真正具有创新价值的产品体验。</p>\r\n      </div>\r\n    </div>\r\n    <div class=\"item-gap\">\r\n          <h2>Contact Us</h2>\r\n          <p>CONTACT US AND JOIN US</p>\r\n    </div>\r\n     <div class=\"index-contact\">\r\n        <div class=\"index-contact-left\" id=\"addr\">\r\n\r\n        </div>\r\n        <div class=\"index-contact-right\">\r\n            <el-button type=\"primary\" style=\"width:100%;margin-bottom:30px;\">发起咨询</el-button>\r\n            <p>XXX省XXX市XXX区XXX大道东88号</p>\r\n            <p>service@zuoyanit.comddd</p>\r\n        </div>\r\n     </div>\r\n</div>\r\n\r\n"
  

});

define("home/router",function(require,exports,module){"use strict";var a=function(a){return require(["site/home/pages/node.vue"],a)},h=function(a){return require(["site/home/pages/list.vue"],a)},c=function(a){return require(["site/home/pages/list-img.vue"],a)},g=function(a){return require(["site/home/pages/content.vue"],a)},v=function(a){return require(["site/home/pages/team.vue"],a)},_=[{path:"/",component:require("site/home/pages/main.vue"),meta:{title:"asdasd"},children:[{path:"",component:require("site/home/pages/index.vue")},{path:":path-:nodeid(\\d+)-:mp(\\d+)list",component:h},{path:"/:path-:nodeid(\\d+)-:mp(\\d+)list/:cp(\\d+)",component:h},{path:":path-:nodeid(\\d+)node",component:a},{path:"/:path-:nodeid(\\d+)-:mp(\\d+)img",component:c},{path:"/:path-:nodeid(\\d+)-:mp(\\d+)img/:cp(\\d+)",component:c},{path:"/content/:id(\\d+)",component:g},{path:"/content_photo/:id(\\d+)",component:g},{path:"/team",component:v}]}];module.exports=_});
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

define("home/main",function(require){"use strict";function a(a){return a&&a.__esModule?a:{"default":a}}var c=require("site/home/App.vue"),h=a(c),v=require("node_modules/vue-layer/dist/vue-layer"),V=a(v),b=require("home/router"),y=a(b),_=require("pizzatools"),k=a(_),w=require("site/home/components/base-crumb/crumb.vue"),z=a(w),E=require("site/home/components/base-block/block.vue"),R=a(E);Vue.use(VueRouter),Vue.prototype.$layer=V["default"](Vue),Vue.prototype.$tools=k["default"],Vue.component(z["default"].name,z["default"]),Vue.component(R["default"].name,R["default"]);var $=new VueRouter({mode:"history",routes:y["default"]});$.beforeEach(function(a,c,h){var v=a.meta.title;document.title=v?v:"河南左盐网络科技有限公司",h()}),$.afterEach(function(){if(_hmt){var a=document.location.href;_hmt.push(["_trackPageview",a])}});new Vue({el:"#app",render:function(a){return a(h["default"])},router:$})});
