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

module.exports = routes;
