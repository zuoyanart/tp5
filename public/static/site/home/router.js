define('home/router', function(require, exports, module) {

  /**
   * @Author: 左盐 <zuoyan>
   * @Date:   2017-12-03 19:33:24
   * @Email:  huabinglan@163.com
   * @Project: xxxx
  * @Last modified by:   zuoyan
  * @Last modified time: 2017-12-03 19:39:27
   */
  
  'use strict';
  
  var node = function node(resolve) {
      return require(['site/home/pages/node.vue'], resolve);
  };
  var list = function list(resolve) {
      return require(['site/home/pages/list.vue'], resolve);
  };
  var listImg = function listImg(resolve) {
      return require(['site/home/pages/list-img.vue'], resolve);
  };
  var content = function content(resolve) {
      return require(['site/home/pages/content.vue'], resolve);
  };
  var team = function team(resolve) {
      return require(['site/home/pages/team.vue'], resolve);
  };
  
  var routes = [{
      path: '/',
      component: require('site/home/pages/main.vue'),
      meta: {
          title: 'asdasd'
      },
      children: [{ //空路由，什么都没匹配到的时候执行
          path: '',
          component: require('site/home/pages/index.vue')
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
          component: listImg
      }, {
          path: '/:path-:nodeid(\\d+)-:mp(\\d+)img/:cp(\\d+)', //图片列表页
          component: listImg
      }, {
          path: '/content/:id(\\d+)', //正文页
          component: content
      }, {
          path: '/content_photo/:id(\\d+)', //正文页
          component: content
      }, {
          path: '/team',
          component: team
      }]
  }];
  
  module.exports = routes;

});
