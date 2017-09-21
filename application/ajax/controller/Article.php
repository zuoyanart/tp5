<?php
  namespace app\ajax\controller;
  use think\Request;

  class Article extends Base {
    /**
     * page
     * @method page
     * @return [type] [description]
     */
      public function page() {
        $defParam = [
          'cp'=>1,
          'mp'=>10,
          'istp'=>false,
          'nodeid'=>1
        ];

        $param = input('post.');//获取所有post参数
        $param = array_merge($defParam, $param);
        $articleM = model("Article");
        $articles = $articleM->page($param['nodeid'], $param['cp'], $param['mp'], $param['istp']);
        return formatJson($articles['msg'], $articles['count']);
      }
      /**
       * get
       * @method get
       * @return [type] [description]
       */
      public function get() {
        $param = input('post.');
        $article = model("Article")->get_data($param['id']);
        return formatJson($article);
      }
  }
