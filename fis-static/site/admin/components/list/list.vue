<style lang="css">

</style>

<template lang="html">

<div>
    <div class="menu">
        <pzcheckbox name="list" :change="checkAll">全选</pzcheckbox>|
        <template v-for="b in docs.more">
          <router-link :to="b.link" v-if="b.link && b.link != ''">{{b.text}}</router-link>
          <em v-else :class="b.cls"  @click="click">{{b.text}}</em> |
        </template>
        <el-input type="search" id="searchkw" @keyup.native.enter="enter" v-model="kw" ></el-input>
    </div>
    <ul class="list" id="list">
        <li v-for="doc in docs.rows">
          <pzcheckbox name="list" :checked="checked" :change="change" :value="doc.id"></pzcheckbox>
          <a :href="doc.link" target="_blank">
              <template v-for="(item, key) in doc">
                {{(key != "link" && key != "button") ? item : ""}}
              </template>
            </a>
            <span @click="click" :id="doc.id">
              <template v-for="b in docs.button">
                <router-link :to="b.link +'/' + doc.id" v-if="b.link && b.link != ''">{{b.text}}</router-link>
                <i :class="b.cls" v-if="!b.link || b.link == ''">{{b.text}}</i>
             </template>
              <template v-for="b in doc.button">
                <router-link :to="b.link +'/' + doc.id" v-if="b.link && b.link != ''">{{b.text}}</router-link>
                <i :class="b.cls" v-if="!b.link || b.link == ''">{{b.text}}</i>
              </template>
            </span>
        </li>
    </ul>
</div>

</template>

<script>
// import $ from 'jquery';
import pzcheckbox from 'pzvue-checkbox';
export default {
  data() {
    return {
      ids: [], //全选获取选中的id，
      checked: false,
      cp: 1,
      mp: 50,
      kw: "",
      scroll: true, //滚动可以加载
      lastScrollBottom: 0,
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
    },
  },
  mounted() {
    document.getElementById("main").style.minHeight = (document.documentElement.clientHeight - 50) + "px";
    let self = this;
    document.addEventListener('scroll', function () {
      let docHeight = document.body.scrollHeight;
      let scrollTop = 0; //滚动条高度
      if (document.documentElement && document.documentElement.scrollTop) {
        scrollTop = document.documentElement.scrollTop;
      } else if (document.body) {
        scrollTop = document.body.scrollTop;
      }
      let bottomHeight = docHeight - scrollTop - window.screen.availHeight;
      if (self.lastScrollBottom < bottomHeight) {
        self.lastScrollBottom = bottomHeight;
        return;
      }
      self.lastScrollBottom = bottomHeight;
      if (bottomHeight <= 10 && bottomHeight >= 5 && self.scroll) {
        self.scroll = false;
        self.cp++;
        self.$parent.$emit("list-page", {
          kw: self.kw,
          cp: self.cp,
          mp: self.mp
        });
        setTimeout(function () {
          self.scroll = true;
        }, 500);
      }
    }, false);
  },
  methods: {
    enter: function (event) {
      this.cp = 1;
      this.$parent.$emit("list-page", {
        kw: event.target.value.trim(),
        cp: 1,
        mp: this.mp
      });
    },
    checkAll: function (value, ischecked) { //全选
      this.checked = ischecked;
    },
    change: function (value, ischecked) { //checkbox change事件
      var index = this.ids.indexOf(value);
      if (ischecked) { //true
        if (index === -1) {
          this.ids.push(value);
        }
      } else {
        this.ids.splice(index, 1);
      }
    },
    click: function (event) {
      let target = event.target;
      let cls = target.className;
      let targetParent = target.parentNode;
      if (target.tagName == "A") { //a标签则返回，不执行任何操作
        return;
      }
      let id = "";
      if (targetParent.className == "menu") {
        id = this.ids.join(",");
      } else {
        id = targetParent.getAttribute("id");
      }
      if (id.length == 0) {
        return;
      }
      this.handle[event.target.className](id, target.innerText);
    }
  },
  components: {
    pzcheckbox
  }
}
</script>
