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
