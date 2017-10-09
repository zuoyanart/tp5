<?php
   namespace app\home\model;
   use think\Model;

   class Article extends Model {

     public function tree() {
        return $this->belongsTo('Tree', 'nodeid', 'id');
     }
      /**
       * 获取简单列表
       * @param  [type] $kw     [description]
       * @param  [type] $nodeid [description]
       * @param  [type] $cp     [description]
       * @param  [type] $mp     [description]
       * @return [type]         [description]
       */
      public function pageList($kw,$nodeid, $cp, $mp) {
        $article = $this->hasWhere('tree', function($query) use ($nodeid) {
            $query
            ->where('nodepath', 'like', '%,'.$nodeid.',%');
        })
        ->where('title','like', '%'.$kw.'%')
        ->field('tree.name as nodename')
        ->select();

        return $article;
      }
      /**
       * 获取列表，带分页
       * @param  [type] $kw     [description]
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
        ->paginate($mp, false, [
          'page'=>$cp
        ]);

        return $article;
      }


      public function read($id) {
        $data = $this->find($id);
        return $data;
      }



   }
