<?php
namespace app\admin\controller;
use app\admin\model\Article as ArticleModel;

class Article extends Base {

    public function page(ArticleModel $article) {
        $param = input('post.');
        $json = $article->page($param['nodeid'], $param['cp'], $param['mp']);
        return json($json);
    }
}
