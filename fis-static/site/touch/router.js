/**
 * @Author: 左盐 <zuoyan>
 * @Date:   2017-12-03 19:33:24
 * @Email:  huabinglan@163.com
 * @Project: xxxx
 * @Last modified by:   左盐
 * @Last modified time: 2017-16-03 17:09:09
 */

const node = resolve => require(['./pages/node.vue'], resolve);
const list = resolve => require(['./pages/list.vue'], resolve); //实现懒加载
const content = resolve => require(['./pages/content.vue'], resolve); //实现懒加载
const team = resolve => require(['./pages/team.vue'], resolve); //实现懒加载


const routes = [{
    path: '/',
    component: require("./pages/main.vue"),
    children: [{ //空路由，什么都没匹配到的时候执行
        path: '',
        component: require('./pages/index.vue')
    }, {
        path: ':path-:nodeid(\\d+)-:mp(\\d+)list', //普通列表页
        component: list
    }, {
        path: '/:path-:nodeid(\\d+)-:mp(\\d+)list/:cp(\\d+)', //普通列表页
        component: list
    }, {
        path: ':path-:nodeid(\\d+)node', //节点型列表页
        component: node
    }, {
        path: '/:path-:nodeid(\\d+)-:mp(\\d+)img', //图片列表页
        component: list
    }, {
        path: '/:path-:nodeid(\\d+)-:mp(\\d+)img\:cp(\\d+)', //图片列表页
        component: list
    }, {
        path: '/content/:id(\\d+)', //正文页
        component: content
    },{
      path: 'team',
      component: team
    }]
}];



module.exports = routes;
