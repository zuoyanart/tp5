<?php
  namespace app\admin\controller;

  use think\Controller;
  use think\Cookie;
  /**
   *  base操作类，用户控制权限等操作，控制器中的其他类继承Base
   */
  class Base extends Controller {
     public function _initializa() {
      //  $key = Cookie::get("key");
      //  $username = Cookie::get("username");
      //  $id = Cookie::get("id");
       $this.redirect("/admin/login");
     }
  }
