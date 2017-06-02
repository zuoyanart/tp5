<style lang="less">
@import "../assets/less/list.less";
</style>

<template lang="html">
<div id="main">
    <div class="list-left">
         <el-menu class="el-menu-vertical-demo" :router="true" theme="dark">
            <el-menu-item :index="n.link" v-for="(n,index) in data"><router-link :to="n.link">{{n.name}}</a></el-menu-item>
        </el-menu>
    </div>
    <list-text :param="param" cls="list-right"></list-text>
    <div style="clear:both;"></div>
</div>

</template>

<script>
import listText from '../components/list-text/list.vue';

export default {
  data() {
    return {
      data: [],
      param: {

      }
    }
  },
  methods: {
    getSister: async function (nodeid) {
      let sister = await this.$tools.httpAgent("/ajax/tree/sister", "post", {
        nodeid: nodeid
      });
      this.data = sister.nodelist;
      this.$parent.$emit('checkMenu', this.data[0].pid);
    },
    async getNode(nodeid) {
      let doc = await this.$tools.httpAgent('/ajax/tree/get', 'post', 'id=' + nodeid);
      this.node = doc.msg;
      this.$tools.setSeo(doc.msg.name, doc.msg.keyword, doc.msg.seodes);
    },
    getDataEvent: function (index) {
      let item = index.split('-');
      this.param = {
        cp: 1,
        mp: item[2].replace('list', ''),
        nodeid: item[1]
      }
    }
  },
  components: {
    'list-text': listText
  },
  async mounted() {
    let param = this.$route.params;
    let nodeid = param.nodeid;
    let cp = param.cp ? param.cp : 1;
    this.getSister(nodeid);
    this.getNode(nodeid);
    this.param = {
      cp: cp,
      mp: 10,
      nodeid: nodeid
    }
  },
  watch: {
    '$route': function () {
      let param = this.$route.params;
      let nodeid = param.nodeid;
      let cp = 1;
      this.getSister(nodeid);
      this.getNode(nodeid);
      this.param = {
        cp: cp,
        mp: 10,
        nodeid: nodeid
      }
    }
  }
}
</script>
