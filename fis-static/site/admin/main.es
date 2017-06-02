/**
* @Author: 左盐
* @Date:   2017-16-03 20:54:48
* @Email:  huabinglan@163.com
* @Project: xxxx
* @Last modified by:   左盐
* @Last modified time: 2017-16-03 21:09:20
*/


import App from './App.vue';
import layer from 'vue-layer';
import '../../assets/css/reset.css';
import './assets/base.less';
import tools from 'pizzatools';


Vue.use(VueRouter);
Vue.prototype.$tools = tools;


Vue.prototype.$layer = layer(Vue);

const tree = resolve => require(['./pages/tree/tree.vue'], resolve);
const treeedit = resolve => require(['./pages/tree/edit.vue'], resolve);
const news = resolve => require(['./pages/news/news.vue'], resolve); //实现懒加载
const newsedit = resolve => require(['./pages/news/edit.vue'], resolve);
const block = resolve => require(['./pages/block/block.vue'], resolve);
const blockedit = resolve => require(['./pages/block/edit.vue'], resolve);
const guestbook = resolve => require(['./pages/guestbook/guestbook.vue'], resolve);
const guestbookEdit = resolve => require(['./pages/guestbook/edit.vue'], resolve);
const user = resolve => require(['./pages/user/user.vue'], resolve);
const useredit = resolve => require(['./pages/user/edit.vue'], resolve);

const routes = [{
    path: '/',
    component: require('./pages/index.vue')
}, {
    path: '/news',
    component: news,
}, {
    path: '/news/edit/:id',
    component: newsedit
}, {
    path: '/news/create',
    component: newsedit
}, {
    path: '/block',
    component: block
}, {
    path: '/block/edit/:id',
    component: blockedit
}, {
    path: '/block/edit',
    component: blockedit
}, {
    path: '/guestbook',
    component: guestbook
}, {
    path: '/user',
    component: user
}, {
    path: '/user/edit/:id',
    component: useredit
}, {
    path: '/user/edit',
    component: useredit
}, {
    path: '/tree',
    component: tree
}, {
    path: '/tree/add/:id',
    component: treeedit
}, {
    path: '/tree/edit/:id',
    component: treeedit
}, ];


const router = new VueRouter({
    routes
});

const app = new Vue({
    // el: '#app',
    render: h => h(App),
    router //使用路由器
}).$mount('#app');
