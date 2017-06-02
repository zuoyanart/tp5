<style lang="css">



</style>

<template lang="html">

<div id="main">
    <div class="menu">
        <a href="javascript:history.back();">返回</a>
    </div>
    <el-form ref="form" :model="form" :rules="rules" label-width="130px">
        <el-form-item label="标题" prop="name">
            <el-input v-model.trim="form.name" placeholder="请输入节点名称"></el-input>
        </el-form-item>
        <el-form-item label="标题图" prop="timg">
            <el-input v-model.trim="form.timg" placeholder="请输入图片路径" style="width:804px;"></el-input>
            <el-button id="timgup" type="primary">上传</el-button>
        </el-form-item>
        <el-form-item label="连接地址" prop="link">
            <el-input v-model.trim="form.link" placeholder="请输入节点名称"></el-input>
        </el-form-item>
        <el-form-item label="正文类型" prop="article_type">
            <el-select v-model.trim="form.article_type">
              <el-option v-for="item in articleTypeOption" :label="item.label" :value="item.value"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="SEO keyword" prop="keyword">
            <el-input v-model.trim="form.keyword" placeholder="请输入keyword"></el-input>
        </el-form-item>
        <el-form-item label="SEO des" prop="seodes">
            <el-input type="textarea" :rows="4" v-model.trim="form.seodes" placeholder="请输入description"></el-input>
        </el-form-item>
        <el-form-item label="正文" prop="brief">
            <textarea id="brief" v-model.trim="form.brief" style="width:888px;height:500px;"></textarea>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submitHandle">提交</el-button>
        </el-form-item>
    </el-form>
</div>
</template>

<script>
import kindeditor from 'kindeditor';
import tools from 'pizzatools';

export default {
  data() {
    return {
      form: {
        'link': '',
        'timg': ''
      },
      articleTypeOption: [{
        label: '普通',
        value: ""
      }, {
        label: '组图',
        value: "photo"
      }, {
        label: "视频",
        value: "video"
      }],
      rules: {
        name: [{
          required: true,
          message: "请填写1-20位的标题",
          trigger: 'blur'
        }, {
          min: 1,
          max: 20,
          message: '长度在 1 到 20 个字符',
          trigger: 'blur'
        }],
        timg: [{
          required: false,
          min: 3,
          max: 300,
          message: "请上传图片",
          trigger: 'blur'
        }],
        link: [{
          min: 1,
          max: 100,
          message: '长度在 1 到 100 个字符',
          trigger: 'blur'
        }],
        keyword: [{
          min: 3,
          max: 100,
          message: '长度在 3 到 100 个字符',
          trigger: 'blur'
        }],
        seodes: [{
          min: 3,
          max: 500,
          message: '长度在 3 到 500 个字符',
          trigger: 'blur'
        }],
        brief: [{
          min: 1,
          max: 3000,
          message: '长度在 3 到 3000 个字符',
          trigger: 'blur'
        }]
      }
    }
  },
  components: {

  },
  methods: {
    submitHandle: async function () {
      let self = this;
      this.$refs.form.validate(async(valid) => {
        if (valid) { //通过验证
          let url = document.location.href;
          let id = self.$route.params.id;
          let op = (url.indexOf("/tree/add/") == -1) ? "update" : "create";
          self.form.brief = escape(editor.html());
          if (op == 'create') {
            self.form.pid = id;
          }
          await tools.httpAgent("/admin/tree/" + op, "post", self.form);
          history.back();
        } else {
          let id = self.$layer.alert("数据格式不合法", {
            title: "警告"
          });
        }
      });
    },
  },
  async mounted() {
    let self = this;
    window.editor = KindEditor.create('#brief', {
      uploadJson: '/admin/upfile/local',
      allowFileManager: false,
      cssData: "p{font-size:14px;}"
    });
    KindEditor('#timgup').click(function () {
      editor.loadPlugin('image', function () {
        editor.plugin.imageDialog({
          imageUrl: self.form.timg,
          clickFn: function (url, title, width, height, border, align) {
            console.log(url);
            self.form.timg = url;
            editor.hideDialog();
          }
        });
      });
    });
    //获取
    let url = document.location.href;
    let id = this.$route.params.id;
    if (url.indexOf("/tree/add/") == -1) {
      let article = await tools.httpAgent("/admin/tree/get", "post", {
        id: id
      });
      this.form = article.msg;
      editor.html(article.msg.brief);
    }
  },
}
</script>
