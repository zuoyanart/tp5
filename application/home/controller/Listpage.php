<?php
namespace app\home\controller;

use app\home\model\Article as ArticleModel;
class Listpage extends Base {

  public function index(ArticleModel $amodel) {
       $param = input('param.');
       if(!array_key_exists('page', $param)) {//是否存在key
          $param['page'] = 1;
       }
       $articleData = $amodel->page('', $param['nodeid'], $param['page'], $param['mp']);
       $this->assign([
         "article"=>$articleData,
       ]);
      return $this->fetch();
    }



}
