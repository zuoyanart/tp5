<?php
  namespace app\ajax\model;
  use think\Model;

  class Article extends Model {
    public function tree() {
      return $this->hasOne('Tree', 'nodeid', 'id')->field("name as nodename");
    }

    public function userAdmin() {
      return $this->hasOne('UserAdmin', 'uid', 'id')->field("username");
    }

    /**
     * 获取文章列表操作
     * @method page
     * @param  integer $nodeid [description]
     * @param  integer $cp     [description]
     * @param  integer $mp     [description]
     * @return [type]          [description]
     */
     public function page($nodeid=1, $cp=1, $mp=10, $istp) {
        $articles = $this->alias("article")
                    ->join('node', 'article.nodeid =  node.id')
                    ->join("user_admin user", 'article.uid = user.id')
                    ->where([
                        "node.id"=>$nodeid,
                        "article.pass"=>1
                    ])
                  ->field('article.id,article.title,article.timg,article.brief,article.nodeid,article.source,article.link,article.comment,article.createtime,article.tags, article.mooncount, node.name as nodename, user.username')
                    ->order('createtime desc')
                    ->limit(($cp - 1) * $mp, $mp)
                    ->select();

      $count = ['count'=>0];
      if($istp == true) {
          $count = $this->alias("article")
                      ->join('node', 'article.nodeid =  node.id')
                      ->join("user_admin user", 'article.uid = user.id')
                      ->where([
                          "node.id"=>$nodeid,
                          "article.pass"=>1
                      ])
                ->field('count(article.id) as count')
                ->find();

              }


        return ['msg'=> $articles, 'count'=>$count['count']];
     }

     public function get_data($id) {
       $article = $this->alias("article")
                ->join('node', 'article.nodeid =  node.id')
                ->join("user_admin user", 'article.uid = user.id')
                ->where([
                    "article.id"=>$id,
                    "article.pass"=>1
                ])
                ->field('article.*, node.name as nodename, user.username')
                ->find();

       return $article;
     }
  }
