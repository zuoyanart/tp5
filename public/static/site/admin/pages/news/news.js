define('site/admin/pages/news/news.vue', function(require, exports, module) {

  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  
  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
      value: true
  });
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _componentsListListVue = require('site/admin/components/list/list.vue');
  
  var _componentsListListVue2 = _interopRequireDefault(_componentsListListVue);
  
  var _pizzatools = require('pizzatools');
  
  var _pizzatools2 = _interopRequireDefault(_pizzatools);
  
  exports['default'] = {
      data: function data() {
          return {
              nodeid: 1,
              kw: "",
              nodeOptions: [],
              datalist: {
                  options: {},
                  more: [{
                      text: "添加",
                      link: "/news/create"
                  }, {
                      text: "审核",
                      cls: "pass"
                  }, {
                      text: "删除",
                      cls: "del"
                  }],
                  rows: [],
                  button: [{
                      text: "编辑",
                      link: "/news/edit"
                  }, {
                      text: "删除",
                      cls: "del"
                  }, {
                      text: "评论",
                      link: "/news/comment"
                  }]
              },
              handle: {} };
      },
      //传递方法
      mounted: function mounted() {
          var nodes, nodesArray;
          return regeneratorRuntime.async(function mounted$(context$1$0) {
              while (1) switch (context$1$0.prev = context$1$0.next) {
                  case 0:
                      this.$on('list-page', this.page);
                      //获取数据
                      context$1$0.next = 3;
                      return regeneratorRuntime.awrap(this.page({
                          kw: "",
                          nodeid: 1,
                          cp: 1
                      }));
  
                  case 3:
                      //设置方法
                      this.handle = {
                          "pass": this.pass,
                          "del": this.del
                      };
                      //获取node
                      context$1$0.next = 6;
                      return regeneratorRuntime.awrap(_pizzatools2['default'].httpAgent("/admin/tree/pageall", "post"));
  
                  case 6:
                      nodes = context$1$0.sent;
                      nodesArray = [{
                          text: "首页",
                          value: 1
                      }];
  
                      // for (let i = 0; i < nodes.msg.length; i++) {
                      this.formatNodeList(1, nodes.msg, nodesArray);
                      // }
                      this.nodeOptions = nodesArray;
  
                  case 10:
                  case 'end':
                      return context$1$0.stop();
              }
          }, null, this);
      },
      methods: {
          /**
           * 递归格式化nodelist
           * @method fomatNodeList
           * @param  {[type]}      pid  [description]
           * @param  {[type]}      data [description]
           * @return {[type]}           [description]
           */
          formatNodeList: function formatNodeList(pid, data, na) {
              var s = '';
              for (var i = 0, len = data.length; i < len; i++) {
                  if (data[i].pid == pid + "") {
                      na.push({
                          text: this.setNodeListGap(data[i].nodepath) + data[i].name,
                          value: data[i].id
                      });
                      // s += '<option value="' + data[i].id + '">' + setNodeListGap(data[i].nodepath) + data[i].name + '</option>';
                      this.formatNodeList(data[i].id, data, na);
                  }
              }
              return s;
          },
          /**
           * fomat nodelist 添加制表符
           * @method setNodeListGap
           * @param  {[type]}       nodepath [description]
           */
          setNodeListGap: function setNodeListGap(nodepath) {
              var l = nodepath.split(',').length - 3;
              var s = '';
              if (l == 0) {
                  return s;
              } else {
                  s += '├';
                  for (var i = 0; i < l; i++) {
                      s += '─ ';
                  }
                  return s;
              }
          },
          nodeSelect: function nodeSelect(nodeid) {
              return regeneratorRuntime.async(function nodeSelect$(context$1$0) {
                  while (1) switch (context$1$0.prev = context$1$0.next) {
                      case 0:
                          context$1$0.next = 2;
                          return regeneratorRuntime.awrap(this.page({
                              nodeid: nodeid,
                              cp: 1
                          }));
  
                      case 2:
                      case 'end':
                          return context$1$0.stop();
                  }
              }, null, this);
          },
          page: function page(option) {
              var doc, data, i, l;
              return regeneratorRuntime.async(function page$(context$1$0) {
                  while (1) switch (context$1$0.prev = context$1$0.next) {
                      case 0:
                          //kw, nodeid, cp, mp
                          if (option.cp == 1) {
                              this.datalist.rows = [];
                          }
                          if (option.kw != undefined) {
                              this.kw = option.kw;
                          }
                          context$1$0.next = 4;
                          return regeneratorRuntime.awrap(_pizzatools2['default'].httpAgent("/admin/article/page", "post", {
                              cp: option.cp,
                              mp: 50,
                              kw: this.kw,
                              nodeid: option.nodeid ? option.nodeid : this.nodeid
                          }));
  
                      case 4:
                          doc = context$1$0.sent;
                          data = doc.msg;
  
                          for (i = 0, l = data.length; i < l; i++) {
                              this.datalist.rows.push({
                                  id: data[i].id,
                                  nodename: "[" + data[i].nodename + "]",
                                  title: data[i].title,
                                  link: '/content/' + data[i].id + '?preview=true',
                                  count: "点击:" + data[i].count,
                                  button: [{
                                      text: data[i].pass == 0 ? "审核" : "取消审核",
                                      cls: "pass"
                                  }]
                              });
                          }
  
                      case 7:
                      case 'end':
                          return context$1$0.stop();
                  }
              }, null, this);
          },
          pass: function pass(id, node) {
              var passState, res, ids, self, _loop, i, l;
  
              return regeneratorRuntime.async(function pass$(context$1$0) {
                  var _this = this;
  
                  while (1) switch (context$1$0.prev = context$1$0.next) {
                      case 0:
                          passState = node == "取消审核" ? "false" : "true";
                          context$1$0.next = 3;
                          return regeneratorRuntime.awrap(_pizzatools2['default'].httpAgent("/admin/article/pass", "post", { //审核
                              id: id,
                              ispass: passState
                          }));
  
                      case 3:
                          res = context$1$0.sent;
                          ids = id.split(',');
                          self = this;
  
                          _loop = function (i, l) {
                              _this.datalist.rows.find(function (value, index) {
                                  if (value.id == ids[i]) {
                                      self.datalist.rows[index].button[0].text = node == "取消审核" ? "审核" : "取消审核";
                                      return true;
                                  }
                              });
                          };
  
                          for (i = 0, l = ids.length; i < l; i++) {
                              _loop(i, l);
                          }
  
                      case 8:
                      case 'end':
                          return context$1$0.stop();
                  }
              }, null, this);
          },
          del: function del(id) {
              var res, ids, self, _loop2, i, l;
  
              return regeneratorRuntime.async(function del$(context$1$0) {
                  var _this2 = this;
  
                  while (1) switch (context$1$0.prev = context$1$0.next) {
                      case 0:
                          context$1$0.next = 2;
                          return regeneratorRuntime.awrap(_pizzatools2['default'].httpAgent("/admin/article/remove", "post", {
                              id: id
                          }));
  
                      case 2:
                          res = context$1$0.sent;
                          ids = id.split(',');
                          self = this;
  
                          _loop2 = function (i, l) {
                              _this2.datalist.rows.find(function (value, index) {
                                  if (value.id == ids[i]) {
                                      self.datalist.rows.splice(index, 1);
                                      return true;
                                  }
                              });
                          };
  
                          for (i = 0, l = ids.length; i < l; i++) {
                              _loop2(i, l);
                          }
  
                      case 7:
                      case 'end':
                          return context$1$0.stop();
                  }
              }, null, this);
          }
      },
      components: {
          pzlist: _componentsListListVue2['default']
      }
  };
  module.exports = exports['default'];
  //删除
  var __vue__options__;
  if(exports && exports.__esModule && exports.default){
    __vue__options__ = exports.default;
  }else{
    __vue__options__ = module.exports;
  }
  __vue__options__.template = "\n<div id=\"main\">\n   <pzlist :docs=\"datalist\" :handle=\"handle\"></pzlist>\n   <div class=\"node-select\">\n     <el-select class=\"node-select\" @change=\"nodeSelect\" v-model=\"nodeid\">\n         <el-option v-for=\"item in nodeOptions\" :label=\"item.text\" :value=\"item.value\"></el-option>\n     </el-select>\n   </div>\n</div>\n"
  

});
