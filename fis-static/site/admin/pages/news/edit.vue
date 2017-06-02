<style lang="css">
  #content{
     /*width:1000px;*/
     height:500px;
  }
</style>

<template lang="html">

<div id="main">
    <div class="menu">
        <a href="javascript:history.back();">返回</a>
    </div>
    <el-form ref="form" :model="form" :rules="rules" label-width="100px">
        <el-form-item label="标题" prop="title">
            <el-input v-model.trim="form.title" placeholder="请输入活文章标题"></el-input>
        </el-form-item>
        <el-form-item label="节点">
            <el-select v-model.trim="form.nodeid">
                <el-option v-for="item in nodeOptions" :label="item.text" :value="item.value"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="标题图片" prop="timg">
            <el-input v-model.trim="form.timg" id="timg" style="width:592px;display:inline-block;"></el-input>
            <el-button id="timgup">上传</el-button>
        </el-form-item>
        <el-form-item label="文章连接" prop="link">
            <el-input v-model.trim="form.link"></el-input>
        </el-form-item>
        <el-form-item label="文章来源" prop="source">
            <el-input v-model.trim="form.source"></el-input>
        </el-form-item>
        <el-form-item label="描述" prop="brief">
            <el-input type="textarea" v-model.trim="form.brief" :rows="4"></el-input>
        </el-form-item>
        <el-form-item label="正文">
            <textarea id="content"></textarea>
        </el-form-item>
        <el-form-item label="标签" prop="tags">
            <el-input v-model.trim="form.tags"></el-input>
        </el-form-item>
        <el-form-item label="附加" prop="xs">
            <el-select v-model.trim="form.pass">
                <el-option v-for="item in passOption" :label="item.text" :value="item.value"></el-option>
            </el-select>
            <el-select  v-model.trim="form.reco">
              <el-option v-for="item in recoOption" :label="item.text" :value="item.value"></el-option>
            </el-select>
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
        nodeid: 1,
        timg: "",
        link: "",
        source: "",
        brief: "",
        content: "",
        tags: "",
        pass: 1,
        reco: 1
      },
      nodeOptions: [{
        text: '首页',
        value: 1
      }],
      passOption: [{
        text: '审核',
        value: 1
      }, {
        text: '未审核',
        value: 0
      }],
      recoOption: [{
        text: '不推荐',
        value: 0
      }, {
        text: '1级推荐',
        value: 1
      }],
      rules: {
        title: [{
          required: true,
          message: "请填写1-60位的标题",
          trigger: 'blur'
        }, {
          min: 1,
          max: 60,
          message: '长度在 1 到 60 个字符',
          trigger: 'blur'
        }],
        timg: [{
          min: 1,
          max: 100,
          message: '长度在 1 到 100 个字符',
          trigger: 'blur'
        }],
        link: [{
          min: 5,
          max: 100,
          message: '长度在 5 到 100 个字符',
          trigger: 'blur'
        }],
        source: [{
          min: 3,
          max: 100,
          message: '长度在 3 到 100 个字符',
          trigger: 'blur'
        }],
        breif: [{
          min: 3,
          max: 500,
          message: '长度在 3 到 500 个字符',
          trigger: 'blur'
        }],
        tags: [{
          min: 1,
          max: 100,
          message: '长度在 1 到 100 个字符',
          trigger: 'blur'
        }],
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
          let id = self.$route.params.id;
          let op = id ? "update" : "create";
          self.form.content = escape(editor.html());
          await tools.httpAgent("/admin/article/" + op, "post", self.form);
          history.back();
        } else {
          console.log("数据验证失败");
          let id = self.$layer.alert("this is demo", {
            title: "警告"
          });
        }
      });
    },
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

  },
  async mounted() {
    let self = this;
    window.editor = KindEditor.create('#content', {
      uploadJson: '/admin/upfile/local',
      allowFileManager: false,
      minWidth: 888,
      cssData: "p{font-size:14px;}"
    });
    KindEditor('#timgup').click(function () {
      editor.loadPlugin('image', function () {
        editor.plugin.imageDialog({
          imageUrl: self.form.timg,
          clickFn: function (url, title, width, height, border, align) {
            self.form.timg = url;
            editor.hideDialog();
          }
        });
      });
    });
    //获取node
    let nodes = await tools.httpAgent("/admin/tree/pageall", "post");
    let nodesArray = [{
      text: "首页",
      value: 1
    }];

    this.formatNodeList(1, nodes.msg, nodesArray);
    this.nodeOptions = nodesArray;
    //获取article
    let id = this.$route.params.id;
    if (id) {
      let article = await tools.httpAgent("/admin/article/get", "post", {
        id: id
      });
      this.form = article.msg;
      this.nodeDefault = article.msg.nodeid;
      this.recoDefault = article.msg.reco;
      this.passDefault = article.msg.pass;
      editor.html(article.msg.content);
    }
  },
}
</script>
