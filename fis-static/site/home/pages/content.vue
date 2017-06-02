<style lang="less">
  .content-h1title{
    color: #546176;
    margin-top: 20px;
    margin-bottom: 20px;
    font-size: 18px;
  }
  .content-gap{
    border-bottom:1px dashed #dfe1e2;
    font-size: 12px;
    padding-bottom: 10px;
    color: #546176;
  }
  .content-content{
    padding:20px;
    color: #546176;
  }
</style>

<template lang="html">

<div id="main">
    <base-crumb :param="crumbParam"></base-crumb>
    <h1 class="content-h1title">{{article.title}}</h1>
    <div class="content-gap">
        <span>{{article.createtime | formatTime}}</span>
        &nbsp;&nbsp;&nbsp;&nbsp;来源：<span>{{article.source}}</span>
    </div>
    <div class="content-content" v-html="article.content"></div>
</div>

</template>

<script>

import tools from 'pizzatools';

export default {
    data(){
        return{
            article:{},
            crumbParam: {}
        }
    },
    components: {
      // 'base-crumb': crumb
    },
    methods: {

    },
    filters: {
      formatTime: function(time) {
         return tools.formatTime(time);
      }
    },
    computed: {
    },
    async mounted() {
        let param = this.$route.params;
        let content = await this.$tools.httpAgent("/ajax/article/get", 'post', 'id=' + param.id);
        this.article = content.msg;

       this.crumbParam = {
         nodeid: this.article.nodeid
       }

        document.title = this.article.title + "-" + document.title;
        this.$tools.setMetaKey(this.article.title + "-" + document.title);
        this.$tools.setMetaDes(this.article.title + "-" + document.title);
    }
}

</script>
