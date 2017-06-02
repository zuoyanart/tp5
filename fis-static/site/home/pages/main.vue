<style lang="less">
@import "../assets/less/index.less";
</style>
<template lang="html">

<div id="app">
    <div class="header-menu">
        <div class="header-menu-c">
            <a href="/"><img src="../assets/img/logo.png" alt=""></a>
            <div>
                 <router-link to="/" exact>首页</router-link>
                 <template v-for="node in menuList">
                   <router-link :to="node.link" class="menutop" :id="'node' + node.id" v-if="node.link.indexOf('http')== -1">{{node.name}}</router-link>
                   <a :href="node.link"  v-else>{{node.name}}</a>
               </template>
            </div>
        </div>
    </div>
     <router-view></router-view>
    <div class="footer">
      <div class="footer-c">
        © 2005 - 2017 河南左盐网络科技有限公司 版权所有 粤ICP备08130115号-1 联系方式：4001-666-888
      </div>
    </div>
    <div class="online-cus">
         <div class="online-cus-check">
           在线客服
         </div>
         <div class="online-cus-bh">
           <h2>在线咨询</h2>
           <ul>
             <li>售前：<a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=490526801&site=qq&menu=yes"><img src="http://wpa.qq.com/pa?p=2:490526801:51" alt="点击这里给我发消息" title="点击这里给我发消息"/></a></li>
             <li>售前：<a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=490526801&site=qq&menu=yes"><img src="http://wpa.qq.com/pa?p=2:490526801:51" alt="点击这里给我发消息" title="点击这里给我发消息"/></a></li>
             <li>售后：<a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=490526801&site=qq&menu=yes"><img src="http://wpa.qq.com/pa?p=2:490526801:51" alt="点击这里给我发消息" title="点击这里给我发消息"/></a></li>
             <li>售后：<a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=490526801&site=qq&menu=yes"><img src="http://wpa.qq.com/pa?p=2:490526801:51" alt="点击这里给我发消息" title="点击这里给我发消息"/></a></li>
           </ul>
         </div>
    </div>
</div>

</template>

<script>
export default {
  data() {
    return {
      menuList: []
    }
  },
  methods: {
    async getMenu() {
      let doc = await this.$tools.httpAgent('/ajax/tree/page', 'post', 'pid=1');
      this.menuList = doc.msg;
    },
    async setMenu(pid) {
      let doms = document.getElementsByClassName('menutop');
      for (let i = 0; i < doms.length; i++) {
        doms[i].setAttribute("class", doms[i].getAttribute('class').replace('router-link-active', ''));
      }
      let nodeDom = document.getElementById('node' + pid);
      if (nodeDom) {
        nodeDom.setAttribute('class', nodeDom.getAttribute('class') + ' router-link-active');
      }
    },
  },
  mounted() {
    let self = this;
    this.getMenu();
    this.$on('checkMenu', this.setMenu);
  },
  watch: {
    '$route': function () {
      this.setMenu(0);
    }
  }
}
</script>
