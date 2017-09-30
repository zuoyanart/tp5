<?php
namespace app\admin\controller;
use think\Db;

class Index extends Base {
  protected $abc = "abc";

    public function index() {
      return $this->fetch();
    }


    public function find() {
      $articleM = model("Article");
      $articles = $articleM->page(3,1,10);
      $article = $articleM->find(14);

      $this->assign(["article"=>$articles,
        "a"=>$article,
        "abc"=>$this->abc,
        "aa"=> get_ip(),
        "len"=> sub_str("xxxx我们的x", 4),
      ]);

      return $this->fetch();
    }
}
