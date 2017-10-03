<?php
namespace app\admin\controller;
use app\admin\model\Tree as TreeModel;

class Tree extends Base {

    public function page(TreeModel $tree, $pid=1) {
        $param = input('post.');
        $json = $tree->pageByPid($pid);
        return json($json);
    }

    public function pageall(TreeModel $tree) {
      $json = $tree->pageall();
      return json($json);
    }
}
