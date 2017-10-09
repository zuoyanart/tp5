<?php

namespace app\home\model;

use think\Model;

class Tree extends Model
{
  protected $name = 'node';

  public function pageByPid($pid=1) {
    $data = $this->where('pid', $pid)->select();
    return $data;
  }

  public function pageAll() {
    $data = $this->field('id,name,pid,nodepath')->order('id asc')->select();
    return $data;
  }

  public function read($id) {
      $data = $this->find($id);
      return $data;
  }


}
