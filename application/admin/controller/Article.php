<?php
namespace app\admin\controller;
use app\admin\model\Article as ArticleModel;

class Article extends Base {

    public function page(ArticleModel $article) {
        $param = input('post.');
        $json = $article->page($param['kw'],$param['nodeid'], $param['cp'], $param['mp']);
        return json($json);
    }

    public function get(ArticleModel $article) {
      $param = input('post.');
      $json = $article->read($param['id']);
      return json($json);
    }

    public function update(ArticleModel $article) {
      $param = input('post.');
      $json = $article->editData($param);
      return json($json);
    }

    public function remove(ArticleModel $article) {
      $param = input('post.');
      $json = $article->remove($param['id']);
      return json($json);
    }
    public function pass(ArticleModel $article) {
      $param = input('post.');
      $json = $article->pass($param['id']);
      return json($json);
    }
}
