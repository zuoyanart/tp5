<style lang="less">
.list-tp {
    margin-top: 50px;
}
</style>
<template lang="html">
    <div :class="cls" :id="id">
      <ul >
          <li v-for="a in articles">
              <router-link :to="a.link">
                <img :src="a.timg"  style="width:291px;height:194px;">
                <p>{{subStr(a.title,100)}}</p>
              </router-link>
          </li>
      </ul>
      <el-pagination class="list-tp" :class="cls + '-tp'" :id="id + '-tp'" :current-page="param.cp" :page-size="param.mp" layout="prev, pager, next, jumper" :total="total" v-if="total > 0">
      </el-pagination>
    </div>
</template>

<script>
import tools from 'pizzatools';
export default {
  data() {
    return {
      articles: [],
      total: 0
    }
  },
  props: {
    id: {
      type: String,
      default: ''
    },
    cls: {
      type: String,
      default: ''
    },
    param: {
      type: Object,
      default () {
        return {
          nodeid: 0,
          cp: 1,
          mp: 10,
          istp: false
        }
      }
    }
  },
  methods: {
    async getArticles() {
      if (this.param.nodeid && this.param.nodeid != 0) {
        let article = await tools.httpAgent("/ajax/article/page", "post", this.param);
        this.total = article.count ? article.count : 0;
        this.articles = article.msg;
        return this.articles;
      }
    },
    subStr: function (str) {
      return this.$tools.subStr(str, 30);
    }
  },
  computed: {

  },
  async mounted() {
    this.getArticles();
  },
  watch: {
    param: async function () {
      this.getArticles();
    }
  },
}
</script>

<style lang="css">
</style>
