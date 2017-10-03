<?php

namespace app\admin\model;

use think\Model;

class Tree extends Model
{
  protected $name = 'node';
  public function pageByPid($pid=1) {
    $data = $this->where('pid', $pid)->select();
    return [
      'state'=>true,
      'msg'=>$data
    ];
  }

  public function pageAll() {
    $data = $this->field('id,name,pid,nodepath')->order('id asc')->select();
    return [
      'state'=>true,
      'msg'=>$data
    ];
  }

}
