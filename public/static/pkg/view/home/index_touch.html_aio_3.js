define('pizzatools', function(require, exports, module) {

  /**
   * --------------------------------------------------------
   * witch js 工具类，包含前台字符串、cookie、图片缩放，特殊字符过滤等操作
   * @Version 0.5
   * @Author: 左盐(huabinglan@163.com)
   * @Date: 14-2-12 下午3:16
   * --------------------------------------------------------
   */
  'use strict';
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _vue = require('node_modules/vue/dist/vue');
  
  var _vue2 = _interopRequireDefault(_vue);
  
  var _vueLayer = require('node_modules/vue-layer/dist/vue-layer');
  
  var _vueLayer2 = _interopRequireDefault(_vueLayer);
  
  var layer = (0, _vueLayer2['default'])(_vue2['default']);
  
  var tools = (function () {
    var self = {};
    /**
     * 合并json
     * @method
     * @param  {[type]} json        [description]
     * @param  {[type]} defaultJson [description]
     * @return [type]               [description]
     */
    self.extendJson = function (json, defaultJson) {
      for (var key in json) {
        defaultJson[key] = json[key];
      }
      return defaultJson;
    };
    /**
     * 格式化url参数
     * @method
     * @param  {[type]} data [description]
     * @return [type]        [description]
     */
    self.formatParams = function (data) {
      if (typeof data !== 'string') {
        var arr = [];
        for (var name in data) {
          arr.push(encodeURIComponent(name) + '=' + encodeURIComponent(data[name]));
        }
        arr.push(('v=' + Math.random()).replace('.'));
        return arr.join('&');
      } else {
        return data;
      }
    };
    /**
     * http请求
     * @method httpAgent
     * @param  {[type]}  url    [description]
     * @param  {[type]}  method [description]
     * @param  {[type]}  data   [description]
     * @return {[type]}         [description]
     */
    self.httpAgent = function (url) {
      var method = arguments.length <= 1 || arguments[1] === undefined ? 'get' : arguments[1];
      var data = arguments.length <= 2 || arguments[2] === undefined ? '' : arguments[2];
      var option = arguments.length <= 3 || arguments[3] === undefined ? {} : arguments[3];
  
      method = method.toUpperCase();
      var defOption = {
        dataType: 'json'
      };
      option = self.extendJson(option, defOption);
      return new Promise(function (resolve, reject) {
        var id = layer.loading(1);
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
          //接收方法
          layer.close(id);
          if (xhr.readyState === 4) {
            var _status = xhr.status;
            if (_status >= 200 && _status < 300) {
              if (option.dataType.toLowerCase() === 'json') {
                resolve(JSON.parse(xhr.responseText));
              } else {
                resolve(xhr.responseText);
              }
            } else {
              reject(_status);
            }
          }
        };
        var param = self.formatParams(data);
        if (method === 'GET') {
          xhr.open(method, url + '?' + param, true);
          xhr.send(null);
        } else {
          xhr.open(method, url, true);
          xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
          xhr.send(param);
        }
      });
    };
    /**
     * 获取随机数
     * @param  {[type]} l [description]
     * @return {[type]}   [description]
     */
    self.randomChar = function (l) {
      //获取l位随机数
      var MAX = 100000000;
      var x = '0123456789qwertyioplkjhgfsazxcvbnm';
      var tmp = '';
      for (var i = 0; i < l; i++) {
        tmp += x.charAt(Math.ceil(Math.random() * MAX) % x.length);
      }
      return tmp;
    };
    /**
     * 获取字符串长度，区分中英文
     * @param  {[type]} str [description]
     * @return {[type]}     [description]
     */
    self.getCharLen = function (str) {
      //获取字符串长度，区分中英文
      return str.replace(/[^\x00-\xff]/g, 'rr').length;
    };
    //截取字符串，区分中英文
    self.subStr = function (s, l, st) {
      var T = false;
      var r = '';
      if (tools.getCharLen(s) > l) {
        st = st ? st : '';
        l -= tools.getCharLen(st);
        var S = escape(s);
        var M = S.length;
        var C = 0;
        for (var i = 0; i < M; i++) {
          if (C < l) {
            var t = S.charAt(i);
            if (t === '%') {
              t = S.charAt(i + 1);
              if (t === 'u') {
                r += S.substring(i, i + 6);
                C += 2;
                i += 5;
              } else {
                r += S.substring(i, i + 3);
                C++;
                i += 2;
              }
            } else {
              r += t;
              C++;
            }
          } else {
            T = true;
            break;
          }
        }
      }
      return T ? unescape(r) + st : s;
    };
    //获取url的参数
    self.getPara = function (name) {
      var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
      var r = window.location.search.substr(1).match(reg);
      if (r !== null) return unescape(r[2]);
      return '';
    };
    //计算时间差time2-time1，返回时间差的毫秒数
    self.subTime = function (time1, time2) {
      var t1 = new Date(time1),
          t2 = undefined;
      if (time2 === undefined) {
        t2 = new Date(); //当前时间
      } else {
          t2 = new Date(time2);
        }
      return (t2.getTime() - t1.getTime()) / 1000; //时间差的秒数
    };
    /**
     * 获取unix时间
     * @method
     * @return {[type]} [description]
     */
    self.getUnixTime = function () {
      return Math.round(new Date().getTime() / 1000);
    };
    //时间格式化
    self.formatTime = function () {
      var time = arguments.length <= 0 || arguments[0] === undefined ? self.getUnixTime() : arguments[0];
      var fmt = arguments.length <= 1 || arguments[1] === undefined ? 'YYYY-MM-DD HH:mm:ss' : arguments[1];
  
      var unixTimestamp = new Date(time * 1000);
      var commonTime = unixTimestamp; //.toLocaleString();
      var o = {
        'M+': commonTime.getMonth() + 1,
        //月份
        'D+': commonTime.getDate(),
        //日
        'h+': commonTime.getHours() % 12 === 0 ? 12 : commonTime.getHours() % 12,
        //小时
        'H+': commonTime.getHours(),
        //小时
        'm+': commonTime.getMinutes(),
        //分
        's+': commonTime.getSeconds(),
        //秒
        'q+': Math.floor((commonTime.getMonth() + 3) / 3),
        //季度
        'S': commonTime.getMilliseconds() //毫秒
      };
      var week = {
        '0': '日',
        '1': '一',
        '2': '二',
        '3': '三',
        '4': '四',
        '5': '五',
        '6': '六'
      };
      if (/(Y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (commonTime.getFullYear() + '').substr(4 - RegExp.$1.length));
      }
      if (/(E+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length > 1 ? RegExp.$1.length > 2 ? '星期' : '周' : '') + week[commonTime.getDay() + '']);
      }
      for (var k in o) {
        if (new RegExp('(' + k + ')').test(fmt)) {
          fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length));
        }
      }
      return fmt;
    };
    /**
     * 获取cookie
     * @param  {[type]} c    [description]
     * @param  {[type]} name [description]
     * @return {[type]}      [description]
     */
    self.getCookie = function (name) {
      var v = '0';
      var t = document.cookie;
      var us = t.split(';');
      for (var i = 0; i < us.length; i++) {
        if (us[i].split('=')[0].trim() === name) {
          v = decodeURIComponent(us[i].split('=')[1]);
          break;
        }
      }
      return v;
    };
    //设置cookie，不推荐使用，请在服务器端设置cookie，如需本地存储，请使用本地化存储插件pizza.ui.store.js
    self.setCookie = function (c, s, d) {
      var v = c + '=' + s;
      v += d ? '; max-age=' + d * 24 * 60 * 60 : '';
      document.cookie = v + ';path=/';
    };
    /**
     * 获取meta标签内容
     */
    self.getMeta = function (key) {
      return document.querySelector('meta[name="' + key + '"]').getAttribute('content');
    };
    /**
     * 设置meta标签
     */
    self.setMeta = function (key, des) {
      document.querySelector('meta[name="' + key + '"]').setAttribute('content', des);
    };
    /**
     * 设置meta标签
     */
    self.setMetaKey = function (des) {
      document.querySelector('meta[name="keywords"]').setAttribute('content', des);
    };
    /**
     * 设置meta标签
     */
    self.setMetaDes = function (des) {
      document.querySelector('meta[name="description"]').setAttribute('content', des.replace(/"/g, '“'));
    };
    /**
     * 设置SEO相关属性
     * @method
     * @param  {[type]} title   [description]
     * @param  {[type]} keyword [description]
     * @param  {[type]} des     [description]
     * @return {[type]}         [description]
     */
    self.setSeo = function (title, keyword, des) {
      document.title = title + '-' + document.title;
      self.setMetaKey(keyword);
      self.setMetaDes(des);
    };
    return self;
  })();
  
  module.exports = tools;

});

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
  __vue__options__.template = "\n<div id=\"main\">\n  <yd-slider autoplay=\"3000\">\n    <yd-slider-item v-for=\"spr in swiperList\">\n        <a href=\"#\">\n            <img :src=\"spr.timg\">\n        </a>\n    </yd-slider-item>\n</yd-slider>\n<div class=\"gap-item\">\n  <h2>Services</h2>\n  <p>OUR FULL SERVICES RPOJECT</p>\n</div>\n<div class=\"index-application\">\n  <i class=\"zyitfont zyit-pingtai\"></i>\n  <h2>网站应用产品解决方案</h2>\n  <p>企业宣传 / 电商平台 / 分销系统 / 视觉设计 / HTML5开发 / 定制化平台</p>\n</div>\n<div class=\"index-application\">\n  <i class=\"zyitfont zyit-phone\"></i>\n  <h2>微信应用产品解决方案</h2>\n  <p>微商城 / 微站 / 微分销 / 微活动 / HTML5场景定制 / 微信定制服务</p>\n</div>\n<div class=\"index-application\">\n  <i class=\"zyitfont zyit-app\"></i>\n  <h2>移动应用产品解决方案</h2>\n  <p>iOS / Android / APP交互设计、视觉设计、功能定制开发</p>\n</div>\n<div class=\"index-application\">\n  <i class=\"zyitfont zyit-yunying\"></i>\n  <h2>互联网产品运营策划</h2>\n  <p>定制化产品运营策略，制定顶层设计，帮助企业降低运营损耗，快速适应市场变化</p>\n</div>\n<div class=\"gap-item\">\n      <h2>About Us</h2>\n      <p>INFORMATION ABOUT ZUOYANIT</p>\n</div>\n<div class=\"index-aboutus\">\n  <p>我们是一支拥有政府背景，并且融交互、创新、视觉设计、产品研发于一体的专业品牌策划与制作团队，鼎力为国内外知名企业提供全方位多平台的产品服务解决方案。以专业的交互设计、创新理念、视觉呈现，服务国内外企业多达100余家，成功案例300余例。涉及IT、汽车、教育、房地产、金融等各个行业，拥有包括中国移动、中国电信、百度、新浪、淘宝、索尼、联想、人民网、中国日报等企业在内的成功案例，在国内拥有较高美誉。</p>\n  <img src=\"/static/site/home/assets/img/true.jpg\" >\n</div>\n<div class=\"index-kouhao\">\n  <div>\n    <h3>创新。</h3>\n    <h4>Innovate</h4>\n    <p>我们通过研究理解用户的思维、行为、和目标，挖掘用户对产品使用的潜在需求，通过我们服务于各行业客户的丰富经验，结合品牌的优势进行分析，让用户在情绪上、行为上感知产品的创新、感受完美的体验。超越品牌的价值。</p>\n  </div>\n  <div>\n    <h3>激情。</h3>\n    <h4>Intense</h4>\n    <p>我们是一只富有激情的创新团队。我们将设计通过情感的表达把用户和产品很自然的连接在一起，让用户享受使用产品的愉悦，以此来强化对产品、品牌的体验认知！通过自然的交互和生动的设计展现出来，用一个充满情感化的设计打动用户！</p>\n  </div>\n  <div>\n    <h3>未来。</h3>\n    <h4>Future</h4>\n    <p>为客户提供品牌化、一站式的解决方案。服务涵盖了互联网，掌上移动设备、桌面平台以及电子消费类产品等。为客户提供从品牌设计、概念设计、交互设计、视觉设计、功能研发到最终产品实现。为客户提供真正具有创新价值的产品体验。</p>\n  </div>\n</div>\n<div class=\"gap-item\">\n      <h2>Contact Us</h2>\n      <p>CONTACT US AND JOIN US</p>\n</div>\n <div class=\"index-contact\">\n    <div class=\"index-contact-left\" id=\"addr\">\n\n    </div>\n    <div class=\"index-contact-right\">\n        <el-button type=\"primary\" style=\"width:100%;margin-bottom:30px;\">发起咨询</el-button>\n        <p>XXX省XXX市XXX区XXX大道东88号</p>\n        <p>service@zuoyanit.com</p>\n    </div>\n </div>\n\n\n\n</div>\n"
  

});

define('touch/router', function(require, exports, module) {

  /**
   * @Author: 左盐 <zuoyan>
   * @Date:   2017-12-03 19:33:24
   * @Email:  huabinglan@163.com
   * @Project: xxxx
   * @Last modified by:   左盐
   * @Last modified time: 2017-16-03 17:09:09
   */
  
  'use strict';
  
  var node = function node(resolve) {
      return require(['site/touch/pages/node.vue'], resolve);
  };
  var list = function list(resolve) {
      return require(['site/touch/pages/list.vue'], resolve);
  }; //实现懒加载
  var content = function content(resolve) {
      return require(['site/touch/pages/content.vue'], resolve);
  }; //实现懒加载
  var team = function team(resolve) {
      return require(['site/touch/pages/team.vue'], resolve);
  }; //实现懒加载
  
  var routes = [{
      path: '/',
      component: require("site/touch/pages/main.vue"),
      children: [{ //空路由，什么都没匹配到的时候执行
          path: '',
          component: require('site/touch/pages/index.vue')
      }, {
          path: ':path-:nodeid(\\d+)-:mp(\\d+)list', //普通列表页
          component: list
      }, {
          path: '/:path-:nodeid(\\d+)-:mp(\\d+)list/:cp(\\d+)', //普通列表页
          component: list
      }, {
          path: ':path-:nodeid(\\d+)node', //节点型列表页
          component: node
      }, {
          path: '/:path-:nodeid(\\d+)-:mp(\\d+)img', //图片列表页
          component: list
      }, {
          path: '/:path-:nodeid(\\d+)-:mp(\\d+)img\:cp(\\d+)', //图片列表页
          component: list
      }, {
          path: '/content/:id(\\d+)', //正文页
          component: content
      }, {
          path: 'team',
          component: team
      }]
  }];
  
  module.exports = routes;

});

define('touch/main', function(require, exports, module) {

  /**
   * @Author: 左盐 <zuoyan>
   * @Date:   2017-10-03 21:49:53
   * @Email:  huabinglan@163.com
   * @Project: xxxx
   * @Last modified by:   左盐
   * @Last modified time: 2017-17-03 09:40:59
   */
  
  'use strict';
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _vue = require('node_modules/vue/dist/vue');
  
  var _vue2 = _interopRequireDefault(_vue);
  
  var _AppVue = require('site/touch/App.vue');
  
  var _AppVue2 = _interopRequireDefault(_AppVue);
  
  var _vueRouter = require('node_modules/vue-router/dist/vue-router.min');
  
  var _vueRouter2 = _interopRequireDefault(_vueRouter);
  
  var _vueYdui = require('vue-ydui');
  
  var _vueYdui2 = _interopRequireDefault(_vueYdui);
  
  '';
  
  require('/node_modules/vue-ydui/dist/ydui.rem.css');
  
  var _routerJs = require('touch/router');
  
  var _routerJs2 = _interopRequireDefault(_routerJs);
  
  var _pizzatools = require('pizzatools');
  
  var _pizzatools2 = _interopRequireDefault(_pizzatools);
  
  _vue2['default'].use(_vueRouter2['default']);
  _vue2['default'].use(_vueYdui2['default']);
  _vue2['default'].prototype.$tools = _pizzatools2['default'];
  
  var router = new _vueRouter2['default']({
      mode: 'history',
      routes: _routerJs2['default']
  });
  
  router.afterEach(function (to) {
      //添加访问统计代码的执行,详见百度统计api
      if (_hmt) {
          var currentUrl = document.location.href;
          _hmt.push(['_trackPageview', currentUrl]);
      }
  });
  
  var app = new _vue2['default']({
      el: '#app',
      render: function render(h) {
          return h(_AppVue2['default']);
      },
      router: router //使用路由器
  });

});

