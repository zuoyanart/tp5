<style lang="css">



</style>

<template lang="html">

<div id="main">
    <div class="menu">
        <a href="javascript:history.back();">返回</a>
    </div>
    <el-form ref="form" :model="form" :rules="rules" label-width="100px">
        <el-form-item label="用户名" prop="username">
            <el-input v-model="form.username" placeholder=""></el-input>
        </el-form-item>
        <el-form-item label="昵称" prop="nickname">
            <el-input v-model="form.nickname" placeholder=""></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
            <el-input type="password" v-model="form.password" placeholder=""></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submitHandle">提交</el-button>
        </el-form-item>
    </el-form>
</div>

</template>

<script>

import tools from 'pizzatools';

export default {
    data() {
            return {
                form: {
                    username: '',
                    nickname: '',
                    password: '',
                },
                rules: {
                    username: [{
                        required:true,
                        message: "请填写1-20位的用户名",
                        trigger: 'blur'
                    },{
                      min:4,
                      max:20,
                      message:'长度在 4 到 20 个字符',
                      trigger: 'blur'
                    }],
                    nickname:  [{
                        required:true,
                        message: "请填写4-20位的昵称",
                        trigger: 'blur'
                    },{
                      min:4,
                      max:20,
                      message:'长度在 4 到 20 个字符',
                      trigger: 'blur'
                    }],
                    password:  [{
                      min:6,
                      max:20,
                      message:'长度在 6 到 20 个字符',
                      trigger: 'blur'
                    }],
                }
            }
        },
        components: {

        },
        methods: {
            submitHandle: async function() {
              let self = this;
               this.$refs.form.validate(async (valid) => {
                 if (valid) { //通过验证
                     let id = self.$route.params.id;
                     let op = id ? "update" : "create";
                     self.form.id = id;
                     await tools.httpAgent("/admin/user/" + op, "post", self.form);
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
            //获取block
            let id = this.$route.params.id;
            if (id) {
                let article = await tools.httpAgent("/admin/user/get", "post", {
                    id: id
                });
                this.form = article.msg;
            }
        },
}

</script>
