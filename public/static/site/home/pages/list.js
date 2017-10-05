define('site/home/pages/list.vue', function(require, exports, module) {

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
  
  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
  
  var _componentsListTextListVue = require('site/home/components/list-text/list.vue');
  
  var _componentsListTextListVue2 = _interopRequireDefault(_componentsListTextListVue);
  
  exports["default"] = {
    data: function data() {
      return {
        data: [],
        param: {}
      };
    },
    methods: {
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
  
              this.data = sister.nodelist;
              this.$parent.$emit('checkMenu', this.data[0].pid);
  
            case 5:
            case "end":
              return context$1$0.stop();
          }
        }, null, this);
      },
      getNode: function getNode(nodeid) {
        var doc;
        return regeneratorRuntime.async(function getNode$(context$1$0) {
          while (1) switch (context$1$0.prev = context$1$0.next) {
            case 0:
              context$1$0.next = 2;
              return regeneratorRuntime.awrap(this.$tools.httpAgent('/ajax/tree/get', 'post', 'id=' + nodeid));
  
            case 2:
              doc = context$1$0.sent;
  
              this.node = doc.msg;
              this.$tools.setSeo(doc.msg.name, doc.msg.keyword, doc.msg.seodes);
  
            case 5:
            case "end":
              return context$1$0.stop();
          }
        }, null, this);
      },
      getDataEvent: function getDataEvent(index) {
        var item = index.split('-');
        this.param = {
          cp: 1,
          mp: item[2].replace('list', ''),
          nodeid: item[1]
        };
      }
    },
    components: {
      'list-text': _componentsListTextListVue2["default"]
    },
    mounted: function mounted() {
      var param, nodeid, cp;
      return regeneratorRuntime.async(function mounted$(context$1$0) {
        while (1) switch (context$1$0.prev = context$1$0.next) {
          case 0:
            param = this.$route.params;
            nodeid = param.nodeid;
            cp = param.cp ? param.cp : 1;
  
            this.getSister(nodeid);
            this.getNode(nodeid);
            this.param = {
              cp: cp,
              mp: 10,
              nodeid: nodeid
            };
  
          case 6:
          case "end":
            return context$1$0.stop();
        }
      }, null, this);
    },
    watch: {
      '$route': function $route() {
        var param = this.$route.params;
        var nodeid = param.nodeid;
        var cp = 1;
        this.getSister(nodeid);
        this.getNode(nodeid);
        this.param = {
          cp: cp,
          mp: 10,
          nodeid: nodeid
        };
      }
    }
  };
  module.exports = exports["default"];
  var __vue__options__;
  if(exports && exports.__esModule && exports.default){
    __vue__options__ = exports.default;
  }else{
    __vue__options__ = module.exports;
  }
  __vue__options__.template = "\r\n<div id=\"main\">\r\n    <div class=\"list-left\">\r\n         <el-menu class=\"el-menu-vertical-demo\" :router=\"true\" theme=\"dark\">\r\n            <el-menu-item :index=\"n.link\" v-for=\"(n,index) in data\"><router-link :to=\"n.link\">{{n.name}}</a></el-menu-item>\r\n        </el-menu>\r\n    </div>\r\n    <list-text :param=\"param\" cls=\"list-right\"></list-text>\r\n    <div style=\"clear:both;\"></div>\r\n</div>\r\n\r\n"
  

});
