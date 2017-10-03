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
      public function page($nodeid, $cp, $mp) {
        $article = $this->hasWhere('tree', function($query) use ($nodeid) {
            $query
            ->where('nodepath', 'like', '%,'.$nodeid.',%');
        })
        ->field('tree.name as nodename')
        ->select();

        return [
          'state'=>true,
          'msg'=>$article
        ];
      }
   }
