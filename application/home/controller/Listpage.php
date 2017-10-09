<?php
namespace app\home\controller;

use app\home\model\Article as ArticleModel;
use app\home\model\Tree as TreeModel;
class Listpage extends Base {

  public function index(ArticleModel $amodel, TreeModel $treeModel) {
       $param = input('param.');
       if(!array_key_exists('page', $param)) {//是否存在key
          $param['page'] = 1;
       }
       $articleData = $amodel->page('', $param['nodeid'], $param['page'], $param['mp']);
       $treeData = $treeModel->pageSister($param['nodeid']);
       $this->assign([
         "article"=>$articleData,
         "tree"=>$treeData,
       ]);
      return $this->fetch();
    }



}
