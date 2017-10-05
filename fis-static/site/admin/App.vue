<style lang="css">
  /*@import "../../assets/css/pizza.css";*/
  [class^="pzicon-"],
  [class*="pzicon-"] {
      font-family:"pzcms" !important;
      font-weight: normal;
      font-style: normal;
      text-decoration: inherit;
      -webkit-font-smoothing: antialiased;
      *margin-right: .3em;
      font-size: 16px;
      -webkit-font-smoothing: antialiased;
      -webkit-text-stroke-width: 0.2px;
      -moz-osx-font-smoothing: grayscale;
  }

  [class^="pzicon-"]:before,
  [class*="pzicon-"]:before {
      text-decoration: inherit;
      display: inline-block;
      speak: none;
  }
</style>
<style lang="less">
// @import "./assets/base.less";
</style>

<template lang="html">

<div id="app1">
    <div id="header">
        <h1><i class="pzicon-pizza"></i>Pizza Admin</h1>
        <div id="user-nav">
            <ul>
                <li><i class="pzicon-accountfilling"></i><span id="userinfo">{{username}}</span></li>
                <li><a href="javascript:void(0);" id="loginout" @click="loginout"><i class="icon-loginout"></i>退出</a></li>
            </ul>
        </div>
    </div>
    <!-- <div id="search">
        <input type="search" id="searchkw">
    </div> -->
    <div id="main-parent">
      <div id="sidebar" @click="slider">
          <ul>
              <li>
                  <router-link to="/"><i class="pzicon-home"></i>主页</router-link>
              </li>
              <li>
                  <a class="submenu" data="news"><i class="pzicon-liebiao"></i>信息管理</a>
                  <ul v-show="show.news">
                      <li>
                          <router-link to="/tree" class="tree">节点管理</router-link>
                      </li>
                      <li>
                          <router-link to="/news" class="news">文章管理</router-link>
                      </li>
                      <li>
                          <router-link to="/block" class="block">模块管理</router-link>
                          </a>
                      </li>
                  </ul>
              </li>
              <li>
                  <a class="submenu" data="hudong"><i class="pzicon-hudong"></i>互动管理</a>
                  <ul v-show="show.hudong">
                      <li>
                          <router-link to="/guestbook">留言板管理</router-link>
                          </a>
                      </li>
                  </ul>
              </li>
              <li>
                  <a class="submenu" data="system"><i class="pzicon-setting"></i>系统管理</a>
                  <ul v-show="show.system">
                      <li>
                          <router-link to="/user">管理员管理</router-link>
                          </a>
                      </li>
                  </ul>
              </li>
          </ul>
      </div>
      <router-view></router-view>
    </div>
    <div class="row-fluid"></div>
</div>

</template>

<script>
export default {
  data() {
    return {
      show: {
        news: false,
        hudong: false,
        system: false,
      },
      username: ""
    }
  },
  methods: {
    slider: function (event) {
      let o = event.target;
      let style = o.getAttribute("class");
      if (style.indexOf("submenu") > -1) { //带子菜单的父对象
        let data = o.getAttribute("data");
        this.$data.show[data] = !this.$data.show[data];
      } else {

      }
    },
    loginout: async function () {
      await this.$tools.httpAgent("/admin/login/loginout", "post", {});
      document.location.href = "/admin/login";
    }
  },
  mounted() {
    this.username = this.$tools.getCookie("username");
  }
}
</script>
