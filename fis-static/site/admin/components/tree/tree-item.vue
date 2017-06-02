<style lang="css">
</style>

<template lang="html">

<div>
    <li  :id="items.id" :path="items.path">
        <b class="indent" v-for="a in (items.path.length-3)"></b>
        <i class="pzicon-add" @click="click"></i>
        <em>{{items.name}}</em>
        <span>
          <router-link :to="'/tree/edit/'+items.id">编辑</router-link>
          <router-link :to="'/tree/add/'+items.id">添加子节点</router-link>
          <i class="ishide" @click="hideNode(items.id, $event)" v-if="items.ishide == 0">隐藏</i>
          <i class="ishide" @click="hideNode(items.id, $event)" v-if="items.ishide == 1">取消隐藏</i>
      </span>
    </li>
    <treeitem v-for="doc in items.children" :items="doc" :handle="handle"></treeitem>
</div>

</template>

<script>
export default {
  name: "treeitem",
  props: {
    items: {
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
  methods: {
    click: function (event) {
      let target = event.target;
      if (target.tagName != "I") {
        return;
      }
      let parent = target.parentNode;
      let id = parent.getAttribute("id");
      let path = parent.getAttribute("path");
      target.className = "pzicon-sub";
      this.handle["fold"](id, path);
    },
    hideNode: async function (nodeid, event) {
      let o = event.target;
      let ishide = o.innerHTML == '隐藏' ? 1 : 0;
      let doc = await this.$tools.httpAgent('/admin/tree/ishide', 'post', 'id=' + nodeid + '&ishide=' + ishide);
      event.target.innerHTML = (ishide == 1 ? '取消隐藏' : '隐藏');
    }
  }
}
</script>
