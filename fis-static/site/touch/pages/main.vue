<style lang="less">
  @import "../assets/less/index.less";
  </style>
<template lang="html">

  <yd-layout>
      <yd-navbar slot="navbar">
          <router-link replace to="#" slot="left" @click.native="goback">
              <yd-navbar-back-icon></yd-navbar-back-icon>
          </router-link>
          <router-link to="/" slot="center">OPPP手机</router-link>
          <router-link to="#" slot="right" @click.native="menuSwitch">
            <yd-icon name="type" size="25px" color="#777"></yd-icon>
        </router-link>
      </yd-navbar>
      <ul v-show="isMenuShow" class="menu-menu" @click="menuSwitch">
        <li><router-link to="/anlizhanshi-9-20img">企业建站</router-link></li>
        <li><router-link to="/news-4-20list">微开发</router-link></li>
        <li><router-link to="/anlizhanshi-14-10img">大型平台</router-link></li>
        <li><router-link to="/team">关于我们</router-link></li>
        <li><router-link to="/seo-16node">运营服务</router-link></li>
      </ul>
      <router-view></router-view>
      <div class="footer">
            <span>售前：<a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=490526801&site=qq&menu=yes"><img src="http://wpa.qq.com/pa?p=2:490526801:51" alt="点击这里给我发消息" title="点击这里给我发消息"/></a></span>
            <span>售前：<a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=490526801&site=qq&menu=yes"><img src="http://wpa.qq.com/pa?p=2:490526801:51" alt="点击这里给我发消息" title="点击这里给我发消息"/></a></span><br/><br/>
            <span>售后：<a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=490526801&site=qq&menu=yes"><img src="http://wpa.qq.com/pa?p=2:490526801:51" alt="点击这里给我发消息" title="点击这里给我发消息"/></a></span>
            <span>售后：<a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=490526801&site=qq&menu=yes"><img src="http://wpa.qq.com/pa?p=2:490526801:51" alt="点击这里给我发消息" title="点击这里给我发消息"/></a></span>
      </div>
  </yd-layout>

</template>

<script>
// let jQuery = require("jquery");
// let $ = jQuery;
import tools from 'pizzatools';
export default {
  data() {
    return {
      isMenuShow: false,
    }
  },
  methods: {
    menuSwitch() { //菜单开关
      this.isMenuShow = !this.isMenuShow;
    },
    goback() {
      console.log("asd55a4sd45");
      this.$router.go(-1);
    }
  },
  mounted() {

  }
}
</script>
