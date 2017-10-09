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

  public function pageSister($nodeid) {
    $parentNode = $this->where('id', $nodeid)->field('pid')->find();
    trace($parentNode->pid, 'a5s4d5a4sd64646');
    $data = $this->where([
      'pid'=>$parentNode['pid'],
      'ishide'=>0
      ])->field('id,name,link')->order('id asc')->select();
    return $data;
  }

}
