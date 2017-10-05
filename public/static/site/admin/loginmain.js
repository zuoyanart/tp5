define('admin/loginmain', function(require, exports, module) {

  'use strict';
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _vue = require('node_modules/vue/dist/vue');
  
  var _vue2 = _interopRequireDefault(_vue);
  
  var _vueLayer = require('node_modules/vue-layer/dist/vue-layer');
  
  var _vueLayer2 = _interopRequireDefault(_vueLayer);
  
  ''/*@require /static/assets/css/reset.css*/;
  
  ''/*@require /static/site/admin/assets/base.css*/;
  
  var _pizzatools = require('pizzatools');
  
  var _pizzatools2 = _interopRequireDefault(_pizzatools);
  
  ''/*@require /static/node_modules/element-ui/lib/theme-default/index.css*/;
  
  var _elementUi = require('node_modules/element-ui/lib/element-ui.common');
  
  var _elementUi2 = _interopRequireDefault(_elementUi);
  
  var _siteAdminPagesLoginLoginVue = require('site/admin/pages/login/login.vue');
  
  var _siteAdminPagesLoginLoginVue2 = _interopRequireDefault(_siteAdminPagesLoginLoginVue);
  
  require('node_modules/babel-polyfill/lib/index');
  
  _vue2['default'].use(_elementUi2['default']);
  _vue2['default'].prototype.$tools = _pizzatools2['default'];
  
  _vue2['default'].prototype.$layer = (0, _vueLayer2['default'])(_vue2['default']);
  
  var app = new _vue2['default']({
    render: function render(h) {
      return h(_siteAdminPagesLoginLoginVue2['default']);
    }
  }).$mount('#app');

});
