define('site/home/pages/node.vue', function(require, exports, module) {

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
  exports['default'] = {
    data: function data() {
      return {
        tree: {},
        crumbs: [],
        data: [],
        param: {}
      };
    },
    methods: {
      getNodeData: function getNodeData(nodeid) {
        var content;
        return regeneratorRuntime.async(function getNodeData$(context$1$0) {
          while (1) switch (context$1$0.prev = context$1$0.next) {
            case 0:
              context$1$0.next = 2;
              return regeneratorRuntime.awrap(this.$tools.httpAgent("/ajax/tree/get", 'post', 'id=' + nodeid));
  
            case 2:
              content = context$1$0.sent;
  
              this.tree = content.msg;
              this.$parent.$emit('checkMenu', content.msg.pid);
  
            case 5:
            case 'end':
              return context$1$0.stop();
          }
        }, null, this);
      },
      getSister: function getSister(nodeid) {
        var sister;
        return regeneratorRuntime.async(function getSister$(context$1$0) {
          while (1) switch (context$1$0.prev = context$1$0.next) {
            case 0:
              context$1$0.next = 2;
              return regeneratorRuntime.awrap(this.$tools.httpAgent("/ajax/tree/sister", "post", {
                nodeid: nodeid
              }));
  
            case 2:
              sister = context$1$0.sent;
  
              this.data = sister.msg;
              this.$parent.$emit('checkMenu', this.data[0].pid);
  
            case 5:
            case 'end':
              return context$1$0.stop();
          }
        }, null, this);
      }
    },
    mounted: function mounted() {
      var param, nodeid;
      return regeneratorRuntime.async(function mounted$(context$1$0) {
        while (1) switch (context$1$0.prev = context$1$0.next) {
          case 0:
            param = this.$route.params;
            nodeid = param.nodeid;
  
            this.getSister(nodeid);
            this.getNodeData(nodeid);
  
          case 4:
          case 'end':
            return context$1$0.stop();
        }
      }, null, this);
    },
    watch: {
      '$route': function $route() {
        var param, nodeid;
        return regeneratorRuntime.async(function $route$(context$1$0) {
          while (1) switch (context$1$0.prev = context$1$0.next) {
            case 0:
              param = this.$route.params;
              nodeid = param.nodeid;
  
              this.getSister(nodeid);
              this.getNodeData(nodeid);
  
            case 4:
            case 'end':
              return context$1$0.stop();
          }
        }, null, this);
      }
    }
  };
  module.exports = exports['default'];
  var __vue__options__;
  if(exports && exports.__esModule && exports.default){
    __vue__options__ = exports.default;
  }else{
    __vue__options__ = module.exports;
  }
  __vue__options__.template = "\n<div id=\"main\">\n  <div class=\"list-left\">\n       <el-menu class=\"el-menu-vertical-demo\" :router=\"true\" theme=\"dark\">\n          <el-menu-item :index=\"n.link\" v-for=\"(n,index) in data\"><router-link :to=\"n.link\">{{n.name}}</a></el-menu-item>\n      </el-menu>\n  </div>\n  <div class=\"list-right\">\n    <div class=\"\" v-html=\"tree.brief\"></div>\n  </div>\n  <div style=\"clear:both;\"></div>\n</div>\n\n"
  

});
