<?php
  namespace app\plugin\controller;
  use think\Controller;
  /**
   *  base操作类，用户控制权限等操作，控制器中的其他类继承Base
   */
  class Captcha extends Controller {
     public function index() {
       $u = captcha();
       return $u;
     }
  }
