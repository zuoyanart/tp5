/**
 * @Author: 左盐 <zuoyan>
 * @Date:   2017-10-03 21:49:53
 * @Email:  huabinglan@163.com
 * @Project: xxxx
 * @Last modified by:   左盐
 * @Last modified time: 2017-16-03 16:13:20
 */


// import Vue from 'vue';
import App from './App.vue';
// import VueRouter from 'vue-router';
import layer from 'vue-layer';
// import ElementUI from 'element-ui';
import '../../assets/css/reset.css';
// import '/node_modules/element-ui/lib/theme-default/index.css';
import routes from './router.js';
import tools from 'pizzatools';

//self components
import baseCrumb from './components/base-crumb/crumb.vue';
import baseBlock from './components/base-block/block.vue';


Vue.use(VueRouter);
// Vue.use(ElementUI);
Vue.prototype.$layer = layer(Vue);
Vue.prototype.$tools = tools;

Vue.component(baseCrumb.name, baseCrumb);
Vue.component(baseBlock.name, baseBlock);

const router = new VueRouter({
  mode: 'history',
  routes
});



router.beforeEach((to, from, next) => {
  let title = to.meta.title;
  document.title = title ? title : '河南左盐网络科技有限公司';
  next()
});

router.afterEach(function() { //添加访问统计代码的执行,详见百度统计api
  //  window.document.title = transition.to.title || 'Default page title';
  // window.prerenderReady = false;
  if (_hmt) {
    let currentUrl = document.location.href;
    _hmt.push(['_trackPageview', currentUrl]);
  }
});




const app = new Vue({
  el: '#app',
  render: h => h(App),
  router //使用路由器
});
