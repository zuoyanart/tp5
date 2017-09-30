<?php
  namespace app\admin\controller;

  use think\Controller;
  use think\Cookie;
  /**
   *  base操作类，用户控制权限等操作，控制器中的其他类继承Base
   */
  class Base extends Controller {
     public function _initialize() {
       $key = Cookie::get("key");
       $username = Cookie::get("username");
       $id = Cookie::get("id");
       if($key != md5($username . $id)) {
         return $this->error('操作失败','/admin/login');
      }
     }
  }
