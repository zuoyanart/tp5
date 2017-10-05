define('site/admin/App.vue', function(require, exports, module) {

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
        show: {
          news: false,
          hudong: false,
          system: false
        },
        username: ""
      };
    },
    methods: {
      slider: function slider(event) {
        var o = event.target;
        var style = o.getAttribute("class");
        if (style.indexOf("submenu") > -1) {
          //带子菜单的父对象
          var data = o.getAttribute("data");
          this.$data.show[data] = !this.$data.show[data];
        } else {}
      },
      loginout: function loginout() {
        return regeneratorRuntime.async(function loginout$(context$1$0) {
          while (1) switch (context$1$0.prev = context$1$0.next) {
            case 0:
              context$1$0.next = 2;
              return regeneratorRuntime.awrap(this.$tools.httpAgent("/admin/login/loginout", "post", {}));
  
            case 2:
              document.location.href = "/admin/login";
  
            case 3:
            case "end":
              return context$1$0.stop();
          }
        }, null, this);
      }
    },
    mounted: function mounted() {
      this.username = this.$tools.getCookie("username");
    }
  };
  module.exports = exports["default"];
  var __vue__options__;
  if(exports && exports.__esModule && exports.default){
    __vue__options__ = exports.default;
  }else{
    __vue__options__ = module.exports;
  }
  __vue__options__.template = "\r\n\r\n<div id=\"app1\">\r\n    <div id=\"header\">\r\n        <h1><i class=\"pzicon-pizza\"></i>Pizza Admin</h1>\r\n        <div id=\"user-nav\">\r\n            <ul>\r\n                <li><i class=\"pzicon-accountfilling\"></i><span id=\"userinfo\">{{username}}</span></li>\r\n                <li><a href=\"javascript:void(0);\" id=\"loginout\" @click=\"loginout\"><i class=\"icon-loginout\"></i>退出</a></li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n    <!-- <div id=\"search\">\r\n        <input type=\"search\" id=\"searchkw\">\r\n    </div> -->\r\n    <div id=\"main-parent\">\r\n      <div id=\"sidebar\" @click=\"slider\">\r\n          <ul>\r\n              <li>\r\n                  <router-link to=\"/\"><i class=\"pzicon-home\"></i>主页</router-link>\r\n              </li>\r\n              <li>\r\n                  <a class=\"submenu\" data=\"news\"><i class=\"pzicon-liebiao\"></i>信息管理</a>\r\n                  <ul v-show=\"show.news\">\r\n                      <li>\r\n                          <router-link to=\"/tree\" class=\"tree\">节点管理</router-link>\r\n                      </li>\r\n                      <li>\r\n                          <router-link to=\"/news\" class=\"news\">文章管理</router-link>\r\n                      </li>\r\n                      <li>\r\n                          <router-link to=\"/block\" class=\"block\">模块管理</router-link>\r\n                          </a>\r\n                      </li>\r\n                  </ul>\r\n              </li>\r\n              <li>\r\n                  <a class=\"submenu\" data=\"hudong\"><i class=\"pzicon-hudong\"></i>互动管理</a>\r\n                  <ul v-show=\"show.hudong\">\r\n                      <li>\r\n                          <router-link to=\"/guestbook\">留言板管理</router-link>\r\n                          </a>\r\n                      </li>\r\n                  </ul>\r\n              </li>\r\n              <li>\r\n                  <a class=\"submenu\" data=\"system\"><i class=\"pzicon-setting\"></i>系统管理</a>\r\n                  <ul v-show=\"show.system\">\r\n                      <li>\r\n                          <router-link to=\"/user\">管理员管理</router-link>\r\n                          </a>\r\n                      </li>\r\n                  </ul>\r\n              </li>\r\n          </ul>\r\n      </div>\r\n      <router-view></router-view>\r\n    </div>\r\n    <div class=\"row-fluid\"></div>\r\n</div>\r\n\r\n"
  

});

define('node_modules/process/browser', function(require, exports, module) {

  // shim for using process in browser
  var process = module.exports = {};
  
  // cached from whatever global is present so that test runners that stub it
  // don't break things.  But we need to wrap it in a try catch in case it is
  // wrapped in strict mode code which doesn't define any globals.  It's inside a
  // function because try/catches deoptimize in certain engines.
  
  var cachedSetTimeout;
  var cachedClearTimeout;
  
  function defaultSetTimout() {
      throw new Error('setTimeout has not been defined');
  }
  function defaultClearTimeout () {
      throw new Error('clearTimeout has not been defined');
  }
  (function () {
      try {
          if (typeof setTimeout === 'function') {
              cachedSetTimeout = setTimeout;
          } else {
              cachedSetTimeout = defaultSetTimout;
          }
      } catch (e) {
          cachedSetTimeout = defaultSetTimout;
      }
      try {
          if (typeof clearTimeout === 'function') {
              cachedClearTimeout = clearTimeout;
          } else {
              cachedClearTimeout = defaultClearTimeout;
          }
      } catch (e) {
          cachedClearTimeout = defaultClearTimeout;
      }
  } ())
  function runTimeout(fun) {
      if (cachedSetTimeout === setTimeout) {
          //normal enviroments in sane situations
          return setTimeout(fun, 0);
      }
      // if setTimeout wasn't available but was latter defined
      if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
          cachedSetTimeout = setTimeout;
          return setTimeout(fun, 0);
      }
      try {
          // when when somebody has screwed with setTimeout but no I.E. maddness
          return cachedSetTimeout(fun, 0);
      } catch(e){
          try {
              // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
              return cachedSetTimeout.call(null, fun, 0);
          } catch(e){
              // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
              return cachedSetTimeout.call(this, fun, 0);
          }
      }
  
  
  }
  function runClearTimeout(marker) {
      if (cachedClearTimeout === clearTimeout) {
          //normal enviroments in sane situations
          return clearTimeout(marker);
      }
      // if clearTimeout wasn't available but was latter defined
      if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
          cachedClearTimeout = clearTimeout;
          return clearTimeout(marker);
      }
      try {
          // when when somebody has screwed with setTimeout but no I.E. maddness
          return cachedClearTimeout(marker);
      } catch (e){
          try {
              // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
              return cachedClearTimeout.call(null, marker);
          } catch (e){
              // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
              // Some versions of I.E. have different rules for clearTimeout vs setTimeout
              return cachedClearTimeout.call(this, marker);
          }
      }
  
  
  
  }
  var queue = [];
  var draining = false;
  var currentQueue;
  var queueIndex = -1;
  
  function cleanUpNextTick() {
      if (!draining || !currentQueue) {
          return;
      }
      draining = false;
      if (currentQueue.length) {
          queue = currentQueue.concat(queue);
      } else {
          queueIndex = -1;
      }
      if (queue.length) {
          drainQueue();
      }
  }
  
  function drainQueue() {
      if (draining) {
          return;
      }
      var timeout = runTimeout(cleanUpNextTick);
      draining = true;
  
      var len = queue.length;
      while(len) {
          currentQueue = queue;
          queue = [];
          while (++queueIndex < len) {
              if (currentQueue) {
                  currentQueue[queueIndex].run();
              }
          }
          queueIndex = -1;
          len = queue.length;
      }
      currentQueue = null;
      draining = false;
      runClearTimeout(timeout);
  }
  
  process.nextTick = function (fun) {
      var args = new Array(arguments.length - 1);
      if (arguments.length > 1) {
          for (var i = 1; i < arguments.length; i++) {
              args[i - 1] = arguments[i];
          }
      }
      queue.push(new Item(fun, args));
      if (queue.length === 1 && !draining) {
          runTimeout(drainQueue);
      }
  };
  
  // v8 likes predictible objects
  function Item(fun, array) {
      this.fun = fun;
      this.array = array;
  }
  Item.prototype.run = function () {
      this.fun.apply(null, this.array);
  };
  process.title = 'browser';
  process.browser = true;
  process.env = {};
  process.argv = [];
  process.version = ''; // empty string to avoid regexp issues
  process.versions = {};
  
  function noop() {}
  
  process.on = noop;
  process.addListener = noop;
  process.once = noop;
  process.off = noop;
  process.removeListener = noop;
  process.removeAllListeners = noop;
  process.emit = noop;
  process.prependListener = noop;
  process.prependOnceListener = noop;
  
  process.listeners = function (name) { return [] }
  
  process.binding = function (name) {
      throw new Error('process.binding is not supported');
  };
  
  process.cwd = function () { return '/' };
  process.chdir = function (dir) {
      throw new Error('process.chdir is not supported');
  };
  process.umask = function() { return 0; };
  

});

