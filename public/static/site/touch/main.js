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
  
  var _vueYdui = require('node_modules/vue-ydui/dist/ydui');
  
  var _vueYdui2 = _interopRequireDefault(_vueYdui);
  
  ''/*@require /static/assets/css/reset.css*/;
  
  ''/*@require /static/node_modules/vue-ydui/dist/ydui.rem.css*/;
  
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
