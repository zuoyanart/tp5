
<template lang="html">

<div id="main">
   <yd-flexbox class="submenu">
    <yd-flexbox-item v-for="n in sisterNode">
      <router-link :to="n.link">{{n.name}}</router-link>
    </yd-flexbox-item>
  </yd-flexbox>
   <yd-infinitescroll :on-infinite="getData" ref="infinitescrollDemo">
      <yd-list theme="1" slot="list">
          <yd-list-item v-for="item in list">
              <img slot="img" :src="item.timg">
              <span slot="title">{{item.title}}</span>
          </yd-list-item>
      </yd-list>
    </yd-infinitescroll>
</div>

</template>

<script>
export default {
  data() {
    return {
      sisterNode: [],
      list:[],
      cp:1,
      mp: 10
    }
  },
  async mounted() {
    let param = this.$route.params;
    let nodeid = param.nodeid;
    let cp = param.cp ? param.cp : 1;
    this.getData(nodeid);
    this.getSister(nodeid);
  },
  watch: {
    '$route': function() {
      this.list = [];
      let param = this.$route.params;
      let nodeid = param.nodeid;
      let cp = param.cp ? param.cp : 1;
      this.getData(nodeid);
      this.getSister(nodeid);
    }
  },
  methods: {
    getData: async function (nodeid) {
      let doc = await this.$tools.httpAgent("/ajax/article/page", "post", {
        nodeid: nodeid,
        cp: this.cp,
        mp: this.mp,
      });

      this.list = this.list.concat(doc.msg);
      console.log(JSON.stringify(this.list));
      if(doc.msg.length < this.mp) {
        this.$refs.infinitescrollDemo.$emit('ydui.infinitescroll.loadedDone');
        return;
      }
      /* 单次请求数据完毕 */
      this.$refs.infinitescrollDemo.$emit('ydui.infinitescroll.finishLoad');
      this.cp++;
    },
    getSister: async function (nodeid) {
      let doc = await this.$tools.httpAgent("/ajax/tree/sister", "post", {
        nodeid: nodeid
      });
      this.sisterNode = doc.nodelist;
    },
    formatTime(time) {
      return this.$tools.formatTime(time);
    }
  },
  components: {}
}
</script>
