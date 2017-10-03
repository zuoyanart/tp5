import Vue from 'vue';
import layer from 'vue-layer';
import '../../assets/css/reset.css';
import './assets/base.less';
import tools from 'pizzatools';
import '/node_modules/element-ui/lib/theme-default/index.css';
import ElementUI from 'element-ui';
import login from 'site/admin/pages/login/login.vue';
require('babel-polyfill');


Vue.use(ElementUI);
Vue.prototype.$tools = tools;


Vue.prototype.$layer = layer(Vue);

const app = new Vue({
  render: h => h(login),
}).$mount('#app');
