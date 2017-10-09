<?php
namespace app\home\controller;
use app\home\model\Article as ArticleModel;

class Index extends Base {

    public function index(ArticleModel $artModel) {
      $data = $artModel->pageList('',1, 1, 5);
      $this->assign([
        "article" => $data
      ]);
      return $this->fetch();
    }


}
