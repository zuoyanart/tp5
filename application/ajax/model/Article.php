<?php
  namespace app\ajax\model;
  use think\Model;

  class Article extends Model {
    /**
     * 获取文章列表操作
     * @method page
     * @param  integer $nodeid [description]
     * @param  integer $cp     [description]
     * @param  integer $mp     [description]
     * @return [type]          [description]
     */
     public function page($nodeid=1, $cp=1, $mp=10) {
        $article = $this->where("nodeid", $nodeid)->select();
        return $article;
     }
  }
