<?php
namespace app\admin\controller;
use app\admin\model\Block as BlockModel;

class Block extends Base {

    public function page(BlockModel $block) {
        $param = input('post.');
        $json = $block->page($param['kw'], $param['cp'], $param['mp']);
        return json($json);
    }

    public function get(BlockModel $block) {
      $param = input('post.');
      $json = $block->read($param['id']);
      return json($json);
    }

    public function update(BlockModel $block) {
      $param = input('post.');
      $json = $block->editData($param);
      return json($json);
    }

    public function remove(BlockModel $block) {
      $param = input('post.');
      $json = $block->remove($param['id']);
      return json($json);
    }

}
