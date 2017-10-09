<?php
namespace app\home\controller;

use app\home\model\Article as ArticleModel;
class Contentpage extends Base {

  public function index(ArticleModel $amodel) {
       $param = input('param.');
       $articleData = $amodel->read($param['id']);
       $this->assign([
         "article"=>$articleData,
       ]);
      return $this->fetch();
    }
}
