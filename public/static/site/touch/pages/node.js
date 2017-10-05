define('site/touch/pages/node.vue', function(require, exports, module) {

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
        sisterNode: [],
        tree: {}
      };
    },
    mounted: function mounted() {
      var param, nodeid;
      return regeneratorRuntime.async(function mounted$(context$1$0) {
        while (1) switch (context$1$0.prev = context$1$0.next) {
          case 0:
            param = this.$route.params;
            nodeid = param.nodeid;
  
            this.getNodeData(nodeid);
            this.getSister(nodeid);
  
          case 4:
          case 'end':
            return context$1$0.stop();
        }
      }, null, this);
    },
    watch: {
      '$route': function $route() {
        var param = this.$route.params;
        var nodeid = param.nodeid;
        var cp = param.cp ? param.cp : 1;
        this.getNodeData(nodeid);
        this.getSister(nodeid);
      }
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
  
            case 4:
            case 'end':
              return context$1$0.stop();
          }
        }, null, this);
      },
      getSister: function getSister(nodeid) {
        var doc;
        return regeneratorRuntime.async(function getSister$(context$1$0) {
          while (1) switch (context$1$0.prev = context$1$0.next) {
            case 0:
              context$1$0.next = 2;
              return regeneratorRuntime.awrap(this.$tools.httpAgent("/ajax/tree/sister", "post", {
                nodeid: nodeid
              }));
  
            case 2:
              doc = context$1$0.sent;
  
              this.sisterNode = doc.nodelist;
  
            case 4:
            case 'end':
              return context$1$0.stop();
          }
        }, null, this);
      }
    },
    components: {}
  };
  module.exports = exports['default'];
  var __vue__options__;
  if(exports && exports.__esModule && exports.default){
    __vue__options__ = exports.default;
  }else{
    __vue__options__ = module.exports;
  }
  __vue__options__.template = "\r\n\r\n<div id=\"main\">\r\n   <yd-flexbox class=\"submenu\">\r\n    <yd-flexbox-item v-for=\"n in sisterNode\">\r\n      <router-link :to=\"n.link\">{{n.name}}</router-link>\r\n    </yd-flexbox-item>\r\n  </yd-flexbox>\r\n    <div class=\"\" v-html=\"tree.brief\">\r\n\r\n    </div>\r\n</div>\r\n\r\n"
  

});
