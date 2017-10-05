<style lang="css">

</style>

<template lang="html">
<div id="main">
    <!-- <router-link to="/tree/add/1">编辑</router-link> -->
    <pztree :docs="datalist" :handle="handle"></pztree>
</div>

</template>

<script>
import pztree from '../../components/tree/tree.vue';

export default {
  data() {
    return {
      datalist: {
        options: {},
        more: [],
        rows: {},
        button: [],
      },
      handle: {}, //传递方法
    };
  },
  async mounted() {
    //获取数据
    let doc = await this.$tools.httpAgent("/admin/tree/page", "post", {
      pid: 1
    });
    let data = doc.msg;
    let level1 = {};
    for (var i = 0, l = data.length; i < l; i++) {
      level1[data[i].id] = {
        id: data[i].id,
        pid: data[i].pid,
        name: data[i].name,
        path: data[i].nodepath.split(','),
        ishide: data[i].ishide,
        fold: false, //是否展开
      };
    }
    this.datalist.rows = level1;
    this.handle = {
      fold: this.fold,
    }
  },
  methods: {
    fold: async function (id, nodepath) {
      let doc = await this.$tools.httpAgent("/admin/tree/page", "post", {
        pid: id
      });
      let data = doc.msg;
      if (data.length == 0) {
        return;
      }
      let level = {};
      for (var i = 0, l = data.length; i < l; i++) {
        level[data[i].id] = {
          id: data[i].id,
          name: data[i].name,
          pid: data[i].pid,
          path: (data[i].nodepath).split(','),
          ishide: data[i].ishide,
          fold: false, //是否展开
        };
      }
      let path = (",0" + nodepath + "0,").replace(/,0,/g, "").split(",");
      let key = this.datalist.rows[path[1]];
      for (var i = 2, l = path.length; i < l; i++) {
        key = key.children[path[i]];
      }
      this.$set(key, "children", level);
    },
  },
  components: {
    pztree
  }
}
</script>
