<template lang="html">
  <el-breadcrumb separator="/" :class="cls">
    <el-breadcrumb-item :to="{ path: c.link }" v-for="c in nodepath">{{c.name}}</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
import tools from 'pizzatools';

export default {
  name: 'base-crumb',
  data() {
    return {
      nodepath:[]
    }
  },
  props: {
    cls: {
      type: String,
      default:''
    },
    param: {
      type: Object,
      default() {
        return {
          separator: '/',
          nodeid: 0
        }
      }
    }
  },
  methods: {
    async getData() {
      if(this.param.nodeid > 0) {
         let doc = await tools.httpAgent('/ajax/tree/crumb','post', 'nodeid=' + this.param.nodeid);
         this.nodepath = doc.msg;
      }
    }
  },
  async mounted() {
    await this.getData();
  },
  watch: {
    param: async function() {
      await this.getData();
    }
  }
}
</script>

<style lang="css">
</style>
