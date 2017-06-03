<?php
 namespace app\ajax\controller;

 class Tree extends Base {
    public function page() {
        $treeM = model("Tree");
        $trees = $treeM->page(1);
        return formatJson($trees);
    }
    /**
     * get
     * @method get
     * @return [type] [description]
     */
    public function get() {
      $param = input('post.');
      $article = model("Tree")->find($param['id']);
      return formatJson($article);
    }

    public function sister() {
      $param = input('post.');
      $nodes = model("Tree")->pageSister($param['nodeid']);
      return formatJson($nodes);
    }

    public function crumb() {
      $param = input('post.');
      $nodes = model("Tree")->crumb($param['nodeid']);
      return formatJson($nodes);
    }
 }
