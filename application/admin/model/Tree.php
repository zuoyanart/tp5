<?php

namespace app\admin\model;

use think\Model;
use Overtrue\Pinyin\Pinyin;

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

  public function read($id) {
      $data = $this->find($id);
      return [
        'state'=> true,
        'msg'=>$data
      ];
  }

  public function edit($treeInfo) {
    $data = $this
    ->allowField(true)
    ->save($treeInfo, ['id'=>3]);
    return [
      'state'=>true,
      'msg'=>$data
    ];
  }

  public function saveData($treeInfo) {
    try{
    $this->startTrans();
    $parent = $this->where('id', $treeInfo['pid'])->find();

     $id = $this
     ->strict(false)
     ->insertGetId($treeInfo);

     if(strrpos($treeInfo['link'], 'http') == false) {
       $pinyin = new Pinyin(); // 默认
       $py = $pinyin->convert($treeInfo['name']);
       $py = join('', $py);
       $treeInfo['link'] = $py . '_' . $id . 'm' . $treeInfo['link'];
     }

     $data = $this
     ->update([
       'nodepath'=>$parent->nodepath . $id . ',',
       'link'=> $treeInfo['link'],
     ], ['id'=>$id]);

     $this->commit();
     return [
       'state'=>true,
       'msg'=> $data
     ];

   } catch(Exception $e) {
     $this.rollback();
     return [
       'state'=>false,
       'msg'=> $e
     ];
   }

  }

}
