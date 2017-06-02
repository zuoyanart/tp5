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
        $param = input('post.');
        $articleM = model("Article");
        $articles = $articleM->page($param['nodeid'], $param['cp'], $param['mp']);
        return formatJson($articles);
      }
      /**
       * get
       * @method get
       * @return [type] [description]
       */
      public function get() {
        $param = input('post.');
        $article = model("Article")->find($param['id']);
        return formatJson($article);
      }
  }
