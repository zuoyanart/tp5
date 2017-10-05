<?php
   namespace app\admin\model;
   use think\Model;

   class Article extends Model {

     public function tree() {
        return $this->belongsTo('Tree', 'nodeid', 'id');
     }
/**
 * [page description]
 * @param  [type] $nodeid [description]
 * @param  [type] $cp     [description]
 * @param  [type] $mp     [description]
 * @return [type]         [description]
 */
      public function page($kw,$nodeid, $cp, $mp) {
        $article = $this->hasWhere('tree', function($query) use ($nodeid) {
            $query
            ->where('nodepath', 'like', '%,'.$nodeid.',%');
        })
        ->where('title','like', '%'.$kw.'%')
        ->field('tree.name as nodename')
        ->select();

        return [
          'state'=>true,
          'msg'=>$article
        ];
      }

      public function read($id) {
        $data = $this->find($id);
        return [
          'state'=>true,
          'msg'=>$data
        ];
      }

      public function editData($articleInfo) {
          $data = $this->allowField(true)->save($articleInfo, ['id'=>$articleInfo['id']]);
          return [
            'state'=>true,
            'msg'=>$data
          ];
      }

      public function remove($id) {
        $data=$this->where('id','in', expload(',', $id))->delete();
        return [
          'state'=>true,
          'msg'=>$data
        ];
      }

      public function pass($id, $pass) {
        $data = $this->where('id','in', expload(',', $id))->update(['pass'=>$pass]);
        return [
          'state'=>true,
          'msg'=>$data
        ];
      }


   }
