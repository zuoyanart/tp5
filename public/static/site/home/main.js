define('home/main', function(require, exports, module) {

  /**
   * @Author: 左盐 <zuoyan>
   * @Date:   2017-10-03 21:49:53
   * @Email:  huabinglan@163.com
   * @Project: xxxx
   * @Last modified by:   左盐
   * @Last modified time: 2017-16-03 16:13:20
   */
  
  // import Vue from 'vue';
  'use strict';
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _AppVue = require('site/home/App.vue');
  
  var _AppVue2 = _interopRequireDefault(_AppVue);
  
  // import VueRouter from 'vue-router';
  
  var _vueLayer = require('node_modules/vue-layer/dist/vue-layer');
  
  var _vueLayer2 = _interopRequireDefault(_vueLayer);
  
  // import ElementUI from 'element-ui';
  
  '';
  
  // import '/node_modules/element-ui/lib/theme-default/index.css';
  
  var _routerJs = require('home/router');
  
  var _routerJs2 = _interopRequireDefault(_routerJs);
  
  var _pizzatools = require('pizzatools');
  
  var _pizzatools2 = _interopRequireDefault(_pizzatools);
  
  //self components
  
  var _componentsBaseCrumbCrumbVue = require('site/home/components/base-crumb/crumb.vue');
  
  var _componentsBaseCrumbCrumbVue2 = _interopRequireDefault(_componentsBaseCrumbCrumbVue);
  
  var _componentsBaseBlockBlockVue = require('site/home/components/base-block/block.vue');
  
  var _componentsBaseBlockBlockVue2 = _interopRequireDefault(_componentsBaseBlockBlockVue);
  
  Vue.use(VueRouter);
  // Vue.use(ElementUI);
  Vue.prototype.$layer = (0, _vueLayer2['default'])(Vue);
  Vue.prototype.$tools = _pizzatools2['default'];
  
  Vue.component(_componentsBaseCrumbCrumbVue2['default'].name, _componentsBaseCrumbCrumbVue2['default']);
  Vue.component(_componentsBaseBlockBlockVue2['default'].name, _componentsBaseBlockBlockVue2['default']);
  
  var router = new VueRouter({
    mode: 'history',
    routes: _routerJs2['default']
  });
  
  router.beforeEach(function (to, from, next) {
    var title = to.meta.title;
    document.title = title ? title : '河南左盐网络科技有限公司';
    next();
  });
  
  router.afterEach(function () {
    //添加访问统计代码的执行,详见百度统计api
    //  window.document.title = transition.to.title || 'Default page title';
    // window.prerenderReady = false;
    if (_hmt) {
      var currentUrl = document.location.href;
      _hmt.push(['_trackPageview', currentUrl]);
    }
  });
  
  var app = new Vue({
    el: '#app',
    render: function render(h) {
      return h(_AppVue2['default']);
    },
    router: router //使用路由器
  });

});
