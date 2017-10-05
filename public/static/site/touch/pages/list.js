define('site/touch/pages/list.vue', function(require, exports, module) {

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
  
  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports["default"] = {
    data: function data() {
      return {
        sisterNode: [],
        list: [],
        cp: 1,
        mp: 10
      };
    },
    mounted: function mounted() {
      var param, nodeid, cp;
      return regeneratorRuntime.async(function mounted$(context$1$0) {
        while (1) switch (context$1$0.prev = context$1$0.next) {
          case 0:
            param = this.$route.params;
            nodeid = param.nodeid;
            cp = param.cp ? param.cp : 1;
  
            this.getData(nodeid);
            this.getSister(nodeid);
  
          case 5:
          case "end":
            return context$1$0.stop();
        }
      }, null, this);
    },
    watch: {
      '$route': function $route() {
        this.list = [];
        var param = this.$route.params;
        var nodeid = param.nodeid;
        var cp = param.cp ? param.cp : 1;
        this.getData(nodeid);
        this.getSister(nodeid);
      }
    },
    methods: {
      getData: function getData(nodeid) {
        var doc;
        return regeneratorRuntime.async(function getData$(context$1$0) {
          while (1) switch (context$1$0.prev = context$1$0.next) {
            case 0:
              context$1$0.next = 2;
              return regeneratorRuntime.awrap(this.$tools.httpAgent("/ajax/article/page", "post", {
                nodeid: nodeid,
                cp: this.cp,
                mp: this.mp
              }));
  
            case 2:
              doc = context$1$0.sent;
  
              this.list = this.list.concat(doc.msg);
              console.log(JSON.stringify(this.list));
  
              if (!(doc.msg.length < this.mp)) {
                context$1$0.next = 8;
                break;
              }
  
              this.$refs.infinitescrollDemo.$emit('ydui.infinitescroll.loadedDone');
              return context$1$0.abrupt("return");
  
            case 8:
              /* 单次请求数据完毕 */
              this.$refs.infinitescrollDemo.$emit('ydui.infinitescroll.finishLoad');
              this.cp++;
  
            case 10:
            case "end":
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
            case "end":
              return context$1$0.stop();
          }
        }, null, this);
      },
      formatTime: function formatTime(time) {
        return this.$tools.formatTime(time);
      }
    },
    components: {}
  };
  module.exports = exports["default"];
  var __vue__options__;
  if(exports && exports.__esModule && exports.default){
    __vue__options__ = exports.default;
  }else{
    __vue__options__ = module.exports;
  }
  __vue__options__.template = "\r\n\r\n<div id=\"main\">\r\n   <yd-flexbox class=\"submenu\">\r\n    <yd-flexbox-item v-for=\"n in sisterNode\">\r\n      <router-link :to=\"n.link\">{{n.name}}</router-link>\r\n    </yd-flexbox-item>\r\n  </yd-flexbox>\r\n   <yd-infinitescroll :on-infinite=\"getData\" ref=\"infinitescrollDemo\">\r\n      <yd-list theme=\"1\" slot=\"list\">\r\n          <yd-list-item v-for=\"item in list\">\r\n              <img slot=\"img\" :src=\"item.timg\">\r\n              <span slot=\"title\">{{item.title}}</span>\r\n          </yd-list-item>\r\n      </yd-list>\r\n    </yd-infinitescroll>\r\n</div>\r\n\r\n"
  

});
