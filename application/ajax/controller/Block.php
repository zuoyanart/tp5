<?php
namespace app\ajax\controller;

class Block extends Base {

  public function get() {
    $param = input('post.');
    $block = model("Block")->find($param['id']);
    return formatJson($block);
  }
}
