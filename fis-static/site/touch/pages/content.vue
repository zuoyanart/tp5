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
  <el-breadcrumb separator="/" class="crumb">
    <el-breadcrumb-item :to="{ path: c.link }" v-for="c in nodelist">{{c.name}}</el-breadcrumb-item>
  </el-breadcrumb>
    <h1 class="content-h1title">{{article.title}}</h1>
    <div class="content-gap">
        <span>{{formatTime}}</span>
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
            nodelist:[]
        }
    },
    components: {
    },
    motheds: {

    },
    computed: {
        getArticle: function() {
            return this.article;
        },
        formatTime: function(time) {
          return tools.formatTime(this.article.createtime);
        }
    },
    async mounted() {
        let param = this.$route.params;
        let content = await tools.httpAgent("/ajax/article/get", 'post', 'id=' + param.id);
        this.article = content.article;
        this.nodelist = content.nodelist;
        document.title = this.article.title + "-" + document.title;
        tools.setMetaKey(this.article.title + "-" + document.title);
        tools.setMetaDes(this.article.title + "-" + document.title);
    }
}

</script>
