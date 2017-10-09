define("pizzatools",function(require,exports,module){"use strict";function a(a){return a&&a.__esModule?a:{"default":a}}var g=require("node_modules/vue-layer/dist/vue-layer"),c=a(g),h=c["default"](Vue),v=function(){var a={};return a.extendJson=function(a,g){for(var c in a)g[c]=a[c];return g},a.formatParams=function(a){if("string"!=typeof a){var g=[];for(var c in a)g.push(encodeURIComponent(c)+"="+encodeURIComponent(a[c]));return g.push(("v="+Math.random()).replace(".")),g.join("&")}return a},a.httpAgent=function(g){var c=arguments.length<=1||void 0===arguments[1]?"get":arguments[1],v=arguments.length<=2||void 0===arguments[2]?"":arguments[2],M=arguments.length<=3||void 0===arguments[3]?{}:arguments[3];c=c.toUpperCase();var w={dataType:"json"};return M=a.extendJson(M,w),new Promise(function(w,y){var b=h.loading(1),R=new XMLHttpRequest;R.onreadystatechange=function(){if(h.close(b),4===R.readyState){var a=R.status;a>=200&&300>a?w("json"===M.dataType.toLowerCase()?JSON.parse(R.responseText):R.responseText):y(a)}};var T=a.formatParams(v);"GET"===c?(R.open(c,g+"?"+T,!0),R.send(null)):(R.open(c,g,!0),R.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),R.send(T))})},a.randomChar=function(l){for(var a=1e8,x="0123456789qwertyioplkjhgfsazxcvbnm",g="",i=0;l>i;i++)g+=x.charAt(Math.ceil(Math.random()*a)%x.length);return g},a.getCharLen=function(a){return a.replace(/[^\x00-\xff]/g,"rr").length},a.subStr=function(s,l,a){var g=!1,r="";if(v.getCharLen(s)>l){a=a?a:"",l-=v.getCharLen(a);for(var c=escape(s),h=c.length,M=0,i=0;h>i;i++){if(!(l>M)){g=!0;break}var t=c.charAt(i);"%"===t?(t=c.charAt(i+1),"u"===t?(r+=c.substring(i,i+6),M+=2,i+=5):(r+=c.substring(i,i+3),M++,i+=2)):(r+=t,M++)}}return g?unescape(r)+a:s},a.getPara=function(a){var g=new RegExp("(^|&)"+a+"=([^&]*)(&|$)"),r=window.location.search.substr(1).match(g);return null!==r?unescape(r[2]):""},a.subTime=function(a,g){var c=new Date(a),h=void 0;return h=void 0===g?new Date:new Date(g),(h.getTime()-c.getTime())/1e3},a.getUnixTime=function(){return Math.round((new Date).getTime()/1e3)},a.formatTime=function(){var g=arguments.length<=0||void 0===arguments[0]?a.getUnixTime():arguments[0],c=arguments.length<=1||void 0===arguments[1]?"YYYY-MM-DD HH:mm:ss":arguments[1],h=new Date(1e3*g),v=h,o={"M+":v.getMonth()+1,"D+":v.getDate(),"h+":v.getHours()%12===0?12:v.getHours()%12,"H+":v.getHours(),"m+":v.getMinutes(),"s+":v.getSeconds(),"q+":Math.floor((v.getMonth()+3)/3),S:v.getMilliseconds()},M={0:"日",1:"一",2:"二",3:"三",4:"四",5:"五",6:"六"};/(Y+)/.test(c)&&(c=c.replace(RegExp.$1,(v.getFullYear()+"").substr(4-RegExp.$1.length))),/(E+)/.test(c)&&(c=c.replace(RegExp.$1,(RegExp.$1.length>1?RegExp.$1.length>2?"星期":"周":"")+M[v.getDay()+""]));for(var w in o)new RegExp("("+w+")").test(c)&&(c=c.replace(RegExp.$1,1===RegExp.$1.length?o[w]:("00"+o[w]).substr((""+o[w]).length)));return c},a.getCookie=function(a){for(var g="0",t=document.cookie,c=t.split(";"),i=0;i<c.length;i++)if(c[i].split("=")[0].trim()===a){g=decodeURIComponent(c[i].split("=")[1]);break}return g},a.setCookie=function(a,s,d){var g=a+"="+s;g+=d?"; max-age="+24*d*60*60:"",document.cookie=g+";path=/"},a.getMeta=function(a){return document.querySelector('meta[name="'+a+'"]').getAttribute("content")},a.setMeta=function(a,g){document.querySelector('meta[name="'+a+'"]').setAttribute("content",g)},a.setMetaKey=function(a){document.querySelector('meta[name="keywords"]').setAttribute("content",a)},a.setMetaDes=function(a){document.querySelector('meta[name="description"]').setAttribute("content",a.replace(/"/g,"“"))},a.setSeo=function(g,c,h){document.title=g+"-"+document.title,a.setMetaKey(c),a.setMetaDes(h)},a}();module.exports=v});
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

define('site/touch/pages/index.vue', function(require, exports, module) {

  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
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
    data: function data() {
      return {
        swiperList: []
      };
    },
    components: {},
    methods: {
      getSwipper: function getSwipper() {
        var docs;
        return regeneratorRuntime.async(function getSwipper$(context$1$0) {
          while (1) switch (context$1$0.prev = context$1$0.next) {
            case 0:
              context$1$0.next = 2;
              return regeneratorRuntime.awrap(this.$tools.httpAgent("/ajax/article/page", 'post', {
                cp: 1,
                nodeid: 3,
                mp: 5
              }));
  
            case 2:
              docs = context$1$0.sent;
  
              this.swiperList = docs.msg;
  
            case 4:
            case "end":
              return context$1$0.stop();
          }
        }, null, this);
      }
    },
    mounted: function mounted() {
      this.getSwipper();
    }
  };
  module.exports = exports["default"];
  var __vue__options__;
  if(exports && exports.__esModule && exports.default){
    __vue__options__ = exports.default;
  }else{
    __vue__options__ = module.exports;
  }
  __vue__options__.template = "\n<div id=\"main\">\n  <yd-slider autoplay=\"3000\">\n    <yd-slider-item v-for=\"spr in swiperList\">\n        <a href=\"#\">\n            <img :src=\"spr.timg\">\n        </a>\n    </yd-slider-item>\n</yd-slider>\n<div class=\"gap-item\">\n  <h2>Services</h2>\n  <p>OUR FULL SERVICES RPOJECT</p>\n</div>\n<div class=\"index-application\">\n  <i class=\"zyitfont zyit-pingtai\"></i>\n  <h2>网站应用产品解决方案</h2>\n  <p>企业宣传 / 电商平台 / 分销系统 / 视觉设计 / HTML5开发 / 定制化平台</p>\n</div>\n<div class=\"index-application\">\n  <i class=\"zyitfont zyit-phone\"></i>\n  <h2>微信应用产品解决方案</h2>\n  <p>微商城 / 微站 / 微分销 / 微活动 / HTML5场景定制 / 微信定制服务</p>\n</div>\n<div class=\"index-application\">\n  <i class=\"zyitfont zyit-app\"></i>\n  <h2>移动应用产品解决方案</h2>\n  <p>iOS / Android / APP交互设计、视觉设计、功能定制开发</p>\n</div>\n<div class=\"index-application\">\n  <i class=\"zyitfont zyit-yunying\"></i>\n  <h2>互联网产品运营策划</h2>\n  <p>定制化产品运营策略，制定顶层设计，帮助企业降低运营损耗，快速适应市场变化</p>\n</div>\n<div class=\"gap-item\">\n      <h2>About Us</h2>\n      <p>INFORMATION ABOUT ZUOYANIT</p>\n</div>\n<div class=\"index-aboutus\">\n  <p>我们是一支拥有政府背景，并且融交互、创新、视觉设计、产品研发于一体的专业品牌策划与制作团队，鼎力为国内外知名企业提供全方位多平台的产品服务解决方案。以专业的交互设计、创新理念、视觉呈现，服务国内外企业多达100余家，成功案例300余例。涉及IT、汽车、教育、房地产、金融等各个行业，拥有包括中国移动、中国电信、百度、新浪、淘宝、索尼、联想、人民网、中国日报等企业在内的成功案例，在国内拥有较高美誉。</p>\n  <img src=\"/static/site/home/assets/img/true_4fa06c0.jpg\" >\n</div>\n<div class=\"index-kouhao\">\n  <div>\n    <h3>创新。</h3>\n    <h4>Innovate</h4>\n    <p>我们通过研究理解用户的思维、行为、和目标，挖掘用户对产品使用的潜在需求，通过我们服务于各行业客户的丰富经验，结合品牌的优势进行分析，让用户在情绪上、行为上感知产品的创新、感受完美的体验。超越品牌的价值。</p>\n  </div>\n  <div>\n    <h3>激情。</h3>\n    <h4>Intense</h4>\n    <p>我们是一只富有激情的创新团队。我们将设计通过情感的表达把用户和产品很自然的连接在一起，让用户享受使用产品的愉悦，以此来强化对产品、品牌的体验认知！通过自然的交互和生动的设计展现出来，用一个充满情感化的设计打动用户！</p>\n  </div>\n  <div>\n    <h3>未来。</h3>\n    <h4>Future</h4>\n    <p>为客户提供品牌化、一站式的解决方案。服务涵盖了互联网，掌上移动设备、桌面平台以及电子消费类产品等。为客户提供从品牌设计、概念设计、交互设计、视觉设计、功能研发到最终产品实现。为客户提供真正具有创新价值的产品体验。</p>\n  </div>\n</div>\n<div class=\"gap-item\">\n      <h2>Contact Us</h2>\n      <p>CONTACT US AND JOIN US</p>\n</div>\n <div class=\"index-contact\">\n    <div class=\"index-contact-left\" id=\"addr\">\n\n    </div>\n    <div class=\"index-contact-right\">\n        <el-button type=\"primary\" style=\"width:100%;margin-bottom:30px;\">发起咨询</el-button>\n        <p>XXX省XXX市XXX区XXX大道东88号</p>\n        <p>service@zuoyanit.com</p>\n    </div>\n </div>\n\n\n\n</div>\n"
  

});

define("touch/router",function(require,exports,module){"use strict";var c=function(c){return require(["site/touch/pages/node.vue"],c)},a=function(c){return require(["site/touch/pages/list.vue"],c)},h=function(c){return require(["site/touch/pages/content.vue"],c)},g=function(c){return require(["site/touch/pages/team.vue"],c)},v=[{path:"/",component:require("site/touch/pages/main.vue"),children:[{path:"",component:require("site/touch/pages/index.vue")},{path:":path-:nodeid(\\d+)-:mp(\\d+)list",component:a},{path:"/:path-:nodeid(\\d+)-:mp(\\d+)list/:cp(\\d+)",component:a},{path:":path-:nodeid(\\d+)node",component:c},{path:"/:path-:nodeid(\\d+)-:mp(\\d+)img",component:a},{path:"/:path-:nodeid(\\d+)-:mp(\\d+)img:cp(\\d+)",component:a},{path:"/content/:id(\\d+)",component:h},{path:"team",component:g}]}];module.exports=v});
define("touch/main",function(require){"use strict";function a(a){return a&&a.__esModule?a:{"default":a}}var c=require("vue"),v=a(c),h=require("site/touch/App.vue"),_=a(h),y=require("vue-router"),w=a(y),z=require("vue-ydui"),g=a(z);require("/node_modules/vue-ydui/dist/ydui.rem.css");var k=require("touch/router"),A=a(k),E=require("pizzatools"),M=a(E);v["default"].use(w["default"]),v["default"].use(g["default"]),v["default"].prototype.$tools=M["default"];var P=new w["default"]({mode:"history",routes:A["default"]});P.afterEach(function(){if(_hmt){var a=document.location.href;_hmt.push(["_trackPageview",a])}});new v["default"]({el:"#app",render:function(a){return a(_["default"])},router:P})});
