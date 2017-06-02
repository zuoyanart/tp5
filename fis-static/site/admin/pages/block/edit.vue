<style lang="css">

</style>

<template lang="html">

<div id="main">
    <div class="menu">
        <a href="javascript:history.back();">返回</a>
    </div>
    <el-form  ref="form" :model="form" :rules="rules" label-width="100px">
        <el-form-item label="标题" prop="title">
            <el-input v-model="form.title" placeholder="请输入模块标题"></el-input>
        </el-form-item>
        <el-form-item label="正文" prop="content">
            <textarea id="content" v-model="form.content" style="height:500px;"></textarea>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submitHandle">提交</el-button>
        </el-form-item>
    </el-form>
</div>

</template>

<script>
import kindeditor from "kindeditor";
import tools from 'pizzatools';

export default {
    data() {
        return {
            form: {
                title: '',
                content: "",
            },
            rules: {
                title: [{
                    required: true,
                    message: "请填写1-40位的标题",
                    trigger: 'blur'
                }, {
                    min: 1,
                    max: 40,
                    message: '长度在 1 到 40 个字符',
                    trigger: 'blur'
                }],
                content: {
                    required: false,
                    min: 1,
                    max: 300,
                    message: "请填写1-20位的名称"
                },
            }
        }
    },
    components: {

    },
    methods: {
        submitHandle: async function() {
            let self = this;
            this.$refs.form.validate(async(valid) => {
                if (valid) { //通过验证
                    let id = self.$route.params.id;
                    let op = id ? "update" : "create";
                    self.form.content = escape(editor.html());
                    await tools.httpAgent("/admin/block/" + op, "post", self.form);
                    history.back();
                } else {
                    console.log("数据验证失败");
                    let id = self.$layer.alert("self is demo", {
                        title: "警告"
                    });
                }
            });

        },
    },
    async mounted() {
        window.editor = KindEditor.create('#content', {
            uploadJson: '/admin/upfile/local',
            allowFileManager: false
        });
        KindEditor('#timgup').click(function() {
            editor.loadPlugin('image', function() {
                editor.plugin.imageDialog({
                    imageUrl: KindEditor('#timg').val(),
                    clickFn: function(url, title, width, height, border, align) {
                        KindEditor('#timg').val(url);
                        editor.hideDialog();
                    }
                });
            });
        });
        //获取block
        let id = this.$route.params.id;
        if (id) {
            let article = await tools.httpAgent("/admin/block/get", "post", {
                id: id
            });
            this.form = article.msg;
            this.nodeDefault = article.msg.nodeid;
            editor.html(article.msg.content);
        }
    },
}
</script>
