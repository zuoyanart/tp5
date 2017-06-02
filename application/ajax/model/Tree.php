<?php
 namespace app\ajax\model;
 use think\Model;

 class Tree extends Model {
   protected $table = "pz_node";

    public function page($pid) {
      return $this->where([
        "pid"=> $pid,
        'ishide'=>0
        ])->select();
    }
 }
