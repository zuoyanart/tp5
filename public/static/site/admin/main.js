define('admin/main', function(require, exports, module) {

  /**
   * @Author: 左盐
   * @Date:   2017-16-03 20:54:48
   * @Email:  huabinglan@163.com
   * @Project: xxxx
   * @Last modified by:   左盐
   * @Last modified time: 2017-16-03 21:09:20
   */
  
  'use strict';
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _vue = require('node_modules/vue/dist/vue');
  
  var _vue2 = _interopRequireDefault(_vue);
  
  var _AppVue = require('site/admin/App.vue');
  
  var _AppVue2 = _interopRequireDefault(_AppVue);
  
  var _vueLayer = require('node_modules/vue-layer/dist/vue-layer');
  
  var _vueLayer2 = _interopRequireDefault(_vueLayer);
  
  '';
  
  '';
  
  var _pizzatools = require('pizzatools');
  
  var _pizzatools2 = _interopRequireDefault(_pizzatools);
  
  '';
  
  var _elementUi = require('node_modules/element-ui/lib/element-ui.common');
  
  var _elementUi2 = _interopRequireDefault(_elementUi);
  
  var _vueRouter = require('node_modules/vue-router/dist/vue-router.min');
  
  var _vueRouter2 = _interopRequireDefault(_vueRouter);
  
  var _routerJs = require('admin/router');
  
  var _routerJs2 = _interopRequireDefault(_routerJs);
  
  require('node_modules/babel-polyfill/dist/polyfill.min');
  
  _vue2['default'].use(_elementUi2['default']);
  _vue2['default'].use(_vueRouter2['default']);
  _vue2['default'].prototype.$tools = _pizzatools2['default'];
  
  _vue2['default'].prototype.$layer = (0, _vueLayer2['default'])(_vue2['default']);
  
  var router = new _vueRouter2['default']({
    routes: _routerJs2['default']
  });
  
  var app = new _vue2['default']({
    render: function render(h) {
      return h(_AppVue2['default']);
    },
    router: router
  }).$mount('#app');

});
