<style lang="less">
@import "./tree.less";
</style>

<template lang="html">
<ul class="treelist" id="treelist">
    <li id="1" path="path,1,"><b class="pzicon-setting"></b>&nbsp;&nbsp;<em>首页</em><span><router-link to="/tree/edit/1">编辑</router-link><router-link to="/tree/add/1">添加子节点</router-link></span></li>
    <treeitem v-for="doc in docs.rows" :items="doc" :handle="handle"></treeitem>
</ul>

</template>

<script>
import treeitem from "./tree-item.vue";
export default {
  data() {
    return {
      nodepath: []
    }
  },
  props: {
    docs: {
      type: Object,
      default: function () {
        return {};
      }
    },
    handle: {
      type: Object,
      default: function () {
        return {};
      }
    }
  },
  method: {

  },
  components: {
    treeitem
  }
}
</script>
