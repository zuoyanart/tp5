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

    public function page($kw, $cp, $mp) {
       $data = $this->where('username', 'like', '%'.$kw.'%')->select();
       return [
          'state'=>true,
          'msg'=>$data
       ];
    }

    public function read($id) {
      $data = $this->find($id);
      $data->password = '';
      $data->salt = '';
      return [
        'state'=>true,
        'msg'=>$data
      ];
    }

    public function saveData($userInfo) {
      $salt = random_char(10);
      $userInfo['salt']=$salt;
      $userInfo['password']=md5($userInfo['password'].$salt);
      $data = $this->allowField(true)->save($userInfo);
      return ['state'=>true,
        'msg'=>$data
      ];

    }

    public function editData($userInfo) {
      $data = '';
      if($userInfo['password'] == '') {
          $data = $this->allowField(true)->update([
            'nickname'=>$userInfo['nickname'],
            'username'=>$userInfo['username']
          ],['id'=>$userInfo['id']]);
      } else {
        $salt = random_char(10);
        $userInfo['salt']=$salt;
        $userInfo['password']=md5($userInfo['password'].$salt);
        $data = $this->allowField(true)->update([
          'nickname'=>$userInfo['nickname'],
          'username'=>$userInfo['username'],
          'password'=>$userInfo['password'],
          'salt'=>$userInfo['salt'],
        ],['id'=>$userInfo['id']]);
      }
      return ['state'=>true,
        'msg'=>$data
      ];
    }

    public function remove($id) {
      $data = $this->where('id','in',explode(',',$id))->delete();
      return ['state'=>true,
        'msg'=>$data
      ];
    }
}
