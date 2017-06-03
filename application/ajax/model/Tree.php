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

    public function pageSister($nodeid) {
       $node = $this->find($nodeid);
       return $this->page($node['pid']);
    }
    /**
     * 获取面包屑
     * @param  [type] $nodeid [description]
     * @return [type]         [description]
     */
    public function crumb($nodeid) {
      $node = $this->find($nodeid);
      $ids = ',0'.$node['nodepath'].'0,';
      $ids = str_replace(',0,', '', $ids);
      $crumb = $this->where([
        'id'=>['in', explode(',', $ids)],
        'ishide'=> 0
      ])
      ->order("nodepath asc,weight desc")
      ->field('id,name,link')
      ->select();
      return $crumb;

    }

 }
