<?php
  namespace app\admin\controller;
  use think\Controller;
  use app\admin\model\UserAdmin;
  /**
   *  base操作类，用户控制权限等操作，控制器中的其他类继承Base
   */
  class login extends Controller {

     public function index() {
			  return $this->fetch();
     }

     public function login(UserAdmin $userAdmin) {
       $param = input('post.');//获取所有post参数
       $state = $userAdmin->checkLogin($param['name'], $param['password']);
       if($state['state']) {
         $user = $state['msg'];
         cookie('id', $user->id);
         cookie('username', $user->username);
         cookie('key', md5($user->username . $user->id));
         $state = ['state'=>true];
       }
       return json($state);
     }
  }
