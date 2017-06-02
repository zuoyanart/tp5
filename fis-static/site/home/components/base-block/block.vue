<template lang="html">
  <div :class="cls" v-html="blockContent"></div>
</template>

<script>
import tools from 'pizzatools';

export default {
    name: "base-block",
    data() {
        return {
            blockContent: '', //正文内容
        }
    },
    props: {
        cls: {
            type: String,
            default: ''
        },
        blockid: {
            type: Number,
            default: 0
        }
    },
    methods: {
        async getBlock() {
            if (this.blockid > 0) {
                let block = await tools.httpAgent('/ajax/block/get', 'post', 'id=' + this.blockid);
                if (block.state) {
                    this.blockContent = block.msg.content;
                }
            }
        },
    },
    async mounted() {
       await this.getBlock();
    },
    async watch: {
        blockid: async function() {
            await this.getBlock();
        }
    }
}
</script>

<style lang="css">
</style>
