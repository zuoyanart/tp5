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
    width: 980px;
    float: left;
    margin-left: 20px;
    ul {
        clear: both;
        li {
            position: relative;
            float: left;
            width: 291px;
            height: 238px;
        }
        a {
            color: #000;
            display: inline-block;
            width: 100%;
            height: 100%;
            &:hover {
                p {
                    bottom: 30px;
                    background-color: rgb(54,54,54);
                    color: #fff;
                }
            }
        }
        p {
            position: absolute;
            bottom: 0;
            background-color: #f2efef;
            height: 45px;
            text-align: center;
            line-height: 45px;
            width: 100%;
            -webkit-transition: all ease 0.3s;
        }
    }
}
</style>

<template lang="html">
<div id="main-p">
   <div class="bannerimg" :style="{'background-image':'url(' + node.timg +')'}"></div>
   <div id="main">
    <div class="list-left">
         <el-menu class="el-menu-vertical-demo" :router="true" theme="dark">
            <el-menu-item :index="n.link" v-for="(n,index) in data"><router-link :to="n.link">{{n.name}}</a></el-menu-item>
        </el-menu>
    </div>
    <!-- <router-view></router-view> -->
    <list-text :param="param" cls="list-right"></list-text>
    <div style="clear:both;"></div>
  </div>
</div>

</template>

<script>
import listText from '../components/list-img/list.vue';

export default {
  data() {
    return {
      data: [],
      node: {},
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
    };
  },
  watch: {
    '$route': async function () {
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
