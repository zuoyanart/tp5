<style lang="css">
  .node-select{
    position: absolute!important;
    top:1px;
    width: 200px;
    height:37px;
    left:146px;
  }
</style>

<template lang="html">
   <div id="main">
      <pzlist :docs="datalist" :handle="handle"></pzlist>
      <div class="node-select">
        <el-select class="node-select" @change="nodeSelect" v-model="nodeid">
            <el-option v-for="item in nodeOptions" :label="item.text" :value="item.value"></el-option>
        </el-select>
      </div>
   </div>
</template>

<script>
import pzlist from '../../components/list/list.vue';
import tools from 'pizzatools';

export default {
  data() {
    return {
      nodeid: 1,
      kw: "",
      nodeOptions: [],
      datalist: {
        options: {},
        more: [{
          text: "添加",
          link: "/news/create",
        }, {
          text: "审核",
          cls: "pass"
        }, {
          text: "删除",
          cls: "del"
        }],
        rows: [],
        button: [{
          text: "编辑",
          link: "/news/edit",
        }, {
          text: "删除",
          cls: "del"
        }, {
          text: "评论",
          link: "/news/comment"
        }, ],
      },
      handle: {}, //传递方法
    };
  },
  async mounted() {
    this.$on('list-page', this.page);
    //获取数据
    await this.page({
      kw: "",
      nodeid: 1,
      cp: 1
    });
    //设置方法
    this.handle = {
      "pass": this.pass,
      "del": this.del,
    };
    //获取node
    let nodes = await tools.httpAgent("/admin/tree/pageall", "post");
    let nodesArray = [{
      text: "首页",
      value: 1
    }];
    // for (let i = 0; i < nodes.msg.length; i++) {
    this.formatNodeList(1, nodes.msg, nodesArray);
    // }
    this.nodeOptions = nodesArray;
  },
  methods: {
    /**
     * 递归格式化nodelist
     * @method fomatNodeList
     * @param  {[type]}      pid  [description]
     * @param  {[type]}      data [description]
     * @return {[type]}           [description]
     */
    formatNodeList: function (pid, data, na) {
      let s = '';
      for (let i = 0, len = data.length; i < len; i++) {
        if (data[i].pid == pid + "") {
          na.push({
            text: this.setNodeListGap(data[i].nodepath) + data[i].name,
            value: data[i].id
          })
          // s += '<option value="' + data[i].id + '">' + setNodeListGap(data[i].nodepath) + data[i].name + '</option>';
          this.formatNodeList(data[i].id, data, na);
        }
      }
      return s;
    },
    /**
     * fomat nodelist 添加制表符
     * @method setNodeListGap
     * @param  {[type]}       nodepath [description]
     */
    setNodeListGap: function (nodepath) {
      let l = nodepath.split(',').length - 3;
      let s = '';
      if (l == 0) {
        return s;
      } else {
        s += '├'
        for (let i = 0; i < l; i++) {
          s += '─ ';
        }
        return s;
      }
    },
    async nodeSelect(nodeid) {
      await this.page({
        nodeid: nodeid,
        cp: 1
      });
    },
    page: async function (option) { //kw, nodeid, cp, mp
      if (option.cp == 1) {
        this.datalist.rows = [];
      }
      if (option.kw != undefined) {
        this.kw = option.kw;
      }
      let doc = await tools.httpAgent("/admin/article/page", "post", {
        cp: option.cp,
        mp: 50,
        kw: this.kw,
        nodeid: option.nodeid ? option.nodeid : this.nodeid
      });
      let data = doc.msg;
      for (var i = 0, l = data.length; i < l; i++) {
        this.datalist.rows.push({
          id: data[i].id,
          nodename: "[" + data[i].nodename + "]",
          title: data[i].title,
          link: '/content/' + data[i].id + '?preview=true',
          count: "点击:" + data[i].count,
          button: [{
            text: (data[i].pass == 0 ? "审核" : "取消审核"),
            cls: "pass"
          }],
        });
      }
    },
    pass: async function (id, node) {
      let passState = (node == "取消审核" ? "false" : "true")
      let res = await tools.httpAgent("/admin/article/pass", "post", { //审核
        id: id,
        ispass: passState
      });
      let ids = id.split(',');
      let self = this;
      for (let i = 0, l = ids.length; i < l; i++) {
        this.datalist.rows.find(function (value, index) {
          if (value.id == ids[i]) {
            self.datalist.rows[index].button[0].text = (node == "取消审核" ? "审核" : "取消审核");
            return true;
          }
        });
      }
    },
    del: async function (id) { //删除
      let res = await tools.httpAgent("/admin/article/remove", "post", {
        id: id
      });
      let ids = id.split(',');
      let self = this;
      for (let i = 0, l = ids.length; i < l; i++) {
        this.datalist.rows.find(function (value, index) {
          if (value.id == ids[i]) {
            self.datalist.rows.splice(index, 1);
            return true;
          }
        });
      }
    }
  },
  components: {
    pzlist
  }
}
</script>
