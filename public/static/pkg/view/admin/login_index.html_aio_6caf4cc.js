define("pizzatools",function(require,exports,module){"use strict";function a(a){return a&&a.__esModule?a:{"default":a}}var g=require("node_modules/vue-layer/dist/vue-layer"),c=a(g),h=c["default"](Vue),v=function(){var a={};return a.extendJson=function(a,g){for(var c in a)g[c]=a[c];return g},a.formatParams=function(a){if("string"!=typeof a){var g=[];for(var c in a)g.push(encodeURIComponent(c)+"="+encodeURIComponent(a[c]));return g.push(("v="+Math.random()).replace(".")),g.join("&")}return a},a.httpAgent=function(g){var c=arguments.length<=1||void 0===arguments[1]?"get":arguments[1],v=arguments.length<=2||void 0===arguments[2]?"":arguments[2],M=arguments.length<=3||void 0===arguments[3]?{}:arguments[3];c=c.toUpperCase();var w={dataType:"json"};return M=a.extendJson(M,w),new Promise(function(w,y){var b=h.loading(1),R=new XMLHttpRequest;R.onreadystatechange=function(){if(h.close(b),4===R.readyState){var a=R.status;a>=200&&300>a?w("json"===M.dataType.toLowerCase()?JSON.parse(R.responseText):R.responseText):y(a)}};var T=a.formatParams(v);"GET"===c?(R.open(c,g+"?"+T,!0),R.send(null)):(R.open(c,g,!0),R.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),R.send(T))})},a.randomChar=function(l){for(var a=1e8,x="0123456789qwertyioplkjhgfsazxcvbnm",g="",i=0;l>i;i++)g+=x.charAt(Math.ceil(Math.random()*a)%x.length);return g},a.getCharLen=function(a){return a.replace(/[^\x00-\xff]/g,"rr").length},a.subStr=function(s,l,a){var g=!1,r="";if(v.getCharLen(s)>l){a=a?a:"",l-=v.getCharLen(a);for(var c=escape(s),h=c.length,M=0,i=0;h>i;i++){if(!(l>M)){g=!0;break}var t=c.charAt(i);"%"===t?(t=c.charAt(i+1),"u"===t?(r+=c.substring(i,i+6),M+=2,i+=5):(r+=c.substring(i,i+3),M++,i+=2)):(r+=t,M++)}}return g?unescape(r)+a:s},a.getPara=function(a){var g=new RegExp("(^|&)"+a+"=([^&]*)(&|$)"),r=window.location.search.substr(1).match(g);return null!==r?unescape(r[2]):""},a.subTime=function(a,g){var c=new Date(a),h=void 0;return h=void 0===g?new Date:new Date(g),(h.getTime()-c.getTime())/1e3},a.getUnixTime=function(){return Math.round((new Date).getTime()/1e3)},a.formatTime=function(){var g=arguments.length<=0||void 0===arguments[0]?a.getUnixTime():arguments[0],c=arguments.length<=1||void 0===arguments[1]?"YYYY-MM-DD HH:mm:ss":arguments[1],h=new Date(1e3*g),v=h,o={"M+":v.getMonth()+1,"D+":v.getDate(),"h+":v.getHours()%12===0?12:v.getHours()%12,"H+":v.getHours(),"m+":v.getMinutes(),"s+":v.getSeconds(),"q+":Math.floor((v.getMonth()+3)/3),S:v.getMilliseconds()},M={0:"日",1:"一",2:"二",3:"三",4:"四",5:"五",6:"六"};/(Y+)/.test(c)&&(c=c.replace(RegExp.$1,(v.getFullYear()+"").substr(4-RegExp.$1.length))),/(E+)/.test(c)&&(c=c.replace(RegExp.$1,(RegExp.$1.length>1?RegExp.$1.length>2?"星期":"周":"")+M[v.getDay()+""]));for(var w in o)new RegExp("("+w+")").test(c)&&(c=c.replace(RegExp.$1,1===RegExp.$1.length?o[w]:("00"+o[w]).substr((""+o[w]).length)));return c},a.getCookie=function(a){for(var g="0",t=document.cookie,c=t.split(";"),i=0;i<c.length;i++)if(c[i].split("=")[0].trim()===a){g=decodeURIComponent(c[i].split("=")[1]);break}return g},a.setCookie=function(a,s,d){var g=a+"="+s;g+=d?"; max-age="+24*d*60*60:"",document.cookie=g+";path=/"},a.getMeta=function(a){return document.querySelector('meta[name="'+a+'"]').getAttribute("content")},a.setMeta=function(a,g){document.querySelector('meta[name="'+a+'"]').setAttribute("content",g)},a.setMetaKey=function(a){document.querySelector('meta[name="keywords"]').setAttribute("content",a)},a.setMetaDes=function(a){document.querySelector('meta[name="description"]').setAttribute("content",a.replace(/"/g,"“"))},a.setSeo=function(g,c,h){document.title=g+"-"+document.title,a.setMetaKey(c),a.setMetaDes(h)},a}();module.exports=v});
define('site/admin/pages/login/login.vue', function(require, exports, module) {

  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
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
              src: '/plugin/captcha',
              form: {
                  name: "",
                  password: "",
                  code: ""
              },
              rules: {
                  name: [{
                      validator: this.validateUsername,
                      trigger: 'blur',
                      message: "请填写1-20位的用户名"
                  }],
                  password: [{
                      validator: this.validatePassword,
                      trigger: 'blur',
                      message: "请填写6-20位的密码"
                  }],
                  code: [{
                      validator: this.validateCode,
                      message: "请填写4位的验证码",
                      trigger: 'blur'
                  }]
              }
          };
      },
      methods: {
          validateUsername: function validateUsername(rule, value, callback) {
              var len = value.length;
              console.log(len);
              if (len > 20 || len == 0) {
                  callback(new Error("请填写用户名"));
              } else {
                  callback();
              }
          },
          validatePassword: function validatePassword(rule, value, callback) {
              var len = value.length;
              if (len > 20 || len < 6) {
                  callback(new Error("请填写密码"));
              } else {
                  callback();
              }
          },
          validateCode: function validateCode(rule, value, callback) {
              var len = value.length;
              if (len != 4) {
                  callback(new Error("请填写4位验证码"));
              } else {
                  callback();
              }
          },
          setSrc: function setSrc() {
              this.src = '/plugin/captcha?p=' + new Date().getTime();
              console.log("asd");
          },
          submitHandle: function submitHandle() {
              var self;
              return regeneratorRuntime.async(function submitHandle$(context$1$0) {
                  var _this = this;
  
                  while (1) switch (context$1$0.prev = context$1$0.next) {
                      case 0:
                          self = this;
  
                          this.$refs.form.validate(function callee$1$0(valid) {
                              var doc;
                              return regeneratorRuntime.async(function callee$1$0$(context$2$0) {
                                  while (1) switch (context$2$0.prev = context$2$0.next) {
                                      case 0:
                                          if (!valid) {
                                              context$2$0.next = 5;
                                              break;
                                          }
  
                                          context$2$0.next = 3;
                                          return regeneratorRuntime.awrap(_pizzatools2['default'].httpAgent('/admin/login/login', 'post', self.form));
  
                                      case 3:
                                          doc = context$2$0.sent;
  
                                          if (doc.state) {
                                              document.location.href = "/admin";
                                          } else {
                                              self.$layer.msg("帐号或者密码错误");
                                              this.setSrc();
                                          }
  
                                      case 5:
                                      case 'end':
                                          return context$2$0.stop();
                                  }
                              }, null, _this);
                          });
  
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
  __vue__options__.template = "\r\n\r\n<div class=\"login\">\r\n    <h2>PizzaAdmin</h2>\r\n    <el-form ref=\"form\" class=\"login-content\" :model=\"form\" :rules=\"rules\" label-width=\"0px\">\r\n        <el-form-item prop=\"name\">\r\n            <el-input placeholder=\"用户名\" v-model.trim=\"form.name\"></el-input>\r\n        </el-form-item>\r\n        <el-form-item prop=\"password\">\r\n            <el-input placeholder=\"密码\" v-model.trim=\"form.password\" type=\"password\"></el-input>\r\n        </el-form-item>\r\n        <el-form-item prop=\"code\" class=\"code\">\r\n            <el-input placeholder=\"验证码\" v-model.trim=\"form.code\" @keydown.enter.native=\"submitHandle\"></el-input>\r\n            <img :src=\"src\" @click=\"setSrc\">\r\n        </el-form-item>\r\n        <el-form-item>\r\n            <el-button type=\"primary\" @click=\"submitHandle\">提交</el-button>\r\n        </el-form-item>\r\n    </el-form>\r\n</div>\r\n\r\n"
  

});

