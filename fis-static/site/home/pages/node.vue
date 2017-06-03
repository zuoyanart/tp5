<style lang="less">
#main {
    margin-top: 20px;
}
#main-p {
    width: 100%;
    .bannerimg {
        width: 100%;
        height: 265px;
        background-color: #ccc;
        background-repeat: no-repeat;
        background-position: center center;
        margin-bottom: 30px;
    }
}

.list-right {
    width: 1000px;
    float: left;
    margin-left: 20px;
}
.list-left {
    width: 100px;
    float: left;
}
</style>

<template lang="html">
    <div id="main">
      <div class="list-left">
           <el-menu class="el-menu-vertical-demo" :router="true" theme="dark">
              <el-menu-item :index="n.link" v-for="(n,index) in data"><router-link :to="n.link">{{n.name}}</a></el-menu-item>
          </el-menu>
      </div>
      <div class="list-right">
        <div class="" v-html="tree.brief"></div>
      </div>
      <div style="clear:both;"></div>
    </div>

</template>

<script>
export default {
  data() {
    return {
      tree: {},
      crumbs: [],
      data: [],
      param: {

      }
    }
  },
  methods: {
    async getNodeData(nodeid) {
      let content = await this.$tools.httpAgent("/ajax/tree/get", 'post', 'id=' + nodeid);
      this.tree = content.msg;
      this.$parent.$emit('checkMenu', content.msg.pid);
    },
    getSister: async function (nodeid) {
      let sister = await this.$tools.httpAgent("/ajax/tree/sister", "post", {
        nodeid: nodeid
      });
      this.data = sister.msg;
      this.$parent.$emit('checkMenu', this.data[0].pid);
    },
  },
  async mounted() {
    let param = this.$route.params;
    let nodeid = param.nodeid;
    this.getSister(nodeid);
    this.getNodeData(nodeid);
  },
  watch: {
    '$route': async function () {
      let param = this.$route.params;
      let nodeid = param.nodeid;
      this.getSister(nodeid);
      this.getNodeData(nodeid);
    }
  }
}
</script>
