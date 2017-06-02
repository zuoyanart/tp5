<style lang="css">



</style>

<template lang="html">
  <div id="main">
        <pzlist :docs="datalist" :handle="handle"></pzlist>
  </div>
</template>

<script>
import pzlist from '../../components/list/list.vue';
import tools from 'pizzatools';

export default {
    data() {
        return {
            kw: "",
            datalist: {
                options: {},
                more: [{
                    text: "添加",
                    link: "/block/edit",
                }, {
                    text: "删除",
                    cls: "del"
                }],
                rows: [],
                button: [{
                    text: "编辑",
                    link: "/block/edit",
                }, {
                    text: "删除",
                    cls: "del"
                }],
            },
            handle: {}, //传递方法
        };
    },
    async mounted() {
        this.$on('list-page', this.page);
        this.page({
            kw: "",
            cp: 1
        });
        this.handle = {
            "del": this.del
        }
    },
    methods: {
        page: async function(option) { //kw, cp, mp
            if (option.cp == 1) {
                this.datalist.rows = [];
            }
            let doc = await tools.httpAgent("/admin/block/page", "post", { //获取数据
                cp: option.cp,
                mp: 50,
                kw: option.kw,
            });
            let data = doc.msg;
            for (var i = 0, l = data.length; i < l; i++) {
                this.datalist.rows.push({
                    id: data[i].id,
                    title: data[i].title
                });
            }
        },
        del: async function(id) {
            await tools.httpAgent("/admin/block/remove", "post", {
                id: id
            });
            let ids = id.split(',');
            let self = this;
            for (let i = 0, l = ids.length; i < l; i++) {
                this.datalist.rows.find(function(value, index) {
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
