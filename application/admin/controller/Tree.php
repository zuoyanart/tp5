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

    public function get(TreeModel $tree){
      $param = input('post.');
      $data = $tree->read($param['id']);
      return json($data);
    }

    public function del(TreeModel $tree) {

    }

    public function update(TreeModel $tree) {
      $param = input('post.');
      $data = $tree->edit($param);
      // $data = TreeModel::update($param);
      return json($data);
    }

    public function create(TreeModel $tree) {
        $data = $tree->saveData(input('post.'));
        return json($data);
    }

}
