<?php

namespace app\admin\model;

use think\Model;

class UserAdmin extends Model
{
    public function checkLogin($username = '',$password = '') {
      $where['username'] = $username;
      $where['state'] = 0;
      $user = $this->where($where)->find();
      if($user) {
        if(md5($password . $user->salt) != $user->password) {
          return ['state'=> false];
        } else {
          return ['state'=> true, 'msg'=>$user];
        }
      } else {
        return ['state'=>false];
      }
    }
}
