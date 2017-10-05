<?php

namespace app\admin\model;

use think\Model;

class Block extends Model
{
    public function page($kw, $cp, $mp) {
       $data = $this->where('title', 'like', '%'.$kw.'%')->select();
       return ['state'=> true,
        'msg'=>$data
     ];
    }

    public function read($id) {
      $data = $this->find($id);
      return [
        'state'=>true,
        'msg'=>$data
      ];
    }

    public function editData($blockInfo) {
        $data = $this
        ->allowField(true)
        ->save($blockInfo,['id'=>$blockInfo['id']]);
        return [
          'state'=>true,
          'msg'=>$data
        ];
    }

    public function remove($id) {
      $data = $this->where('id', 'in', explode(',', $id))->delete();
      return [
        'state'=>true,
        'msg'=>$data
      ];
    }
}
