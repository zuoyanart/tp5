/**
 * @Author: 左盐
 * @Date:   2017-16-03 20:54:48
 * @Email:  huabinglan@163.com
 * @Project: xxxx
 * @Last modified by:   左盐
 * @Last modified time: 2017-16-03 21:09:20
 */

import Vue from 'vue';
import App from './App.vue';
import layer from 'vue-layer';
import '../../assets/css/reset.css';
import './assets/base.less';
import tools from 'pizzatools';
import '/node_modules/element-ui/lib/theme-default/index.css';
import ElementUI from 'element-ui';
import VueRouter from 'vue-router';
import routes from './router.js';
require('babel-polyfill');

Vue.use(ElementUI);
Vue.use(VueRouter);
Vue.prototype.$tools = tools;


Vue.prototype.$layer = layer(Vue);



const router = new VueRouter({
  routes,
});

const app = new Vue({
  render: h => h(App),
  router
}).$mount('#app');
