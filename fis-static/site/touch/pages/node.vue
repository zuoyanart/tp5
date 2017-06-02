
<template lang="html">

<div id="main">
   <yd-flexbox class="submenu">
    <yd-flexbox-item v-for="n in sisterNode">
      <router-link :to="n.link">{{n.name}}</router-link>
    </yd-flexbox-item>
  </yd-flexbox>
    <div class="" v-html="tree.brief">

    </div>
</div>

</template>

<script>
export default {
  data() {
    return {
      sisterNode: [],
      tree:{}
    }
  },
  async mounted() {
    let param = this.$route.params;
    let nodeid = param.nodeid;
    this.getNodeData(nodeid);
    this.getSister(nodeid);
  },
  watch: {
    '$route': function() {
      let param = this.$route.params;
      let nodeid = param.nodeid;
      let cp = param.cp ? param.cp : 1;
      this.getNodeData(nodeid);
      this.getSister(nodeid);
    }
  },
  methods: {
    async getNodeData(nodeid) {
      let content = await this.$tools.httpAgent("/ajax/tree/get", 'post', 'id=' + nodeid);
      this.tree = content.msg;
    },
    getSister: async function (nodeid) {
      let doc = await this.$tools.httpAgent("/ajax/tree/sister", "post", {
        nodeid: nodeid
      });
      this.sisterNode = doc.nodelist;
    },
  },
  components: {}
}
</script>
