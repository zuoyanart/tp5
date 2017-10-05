<?php

namespace app\admin\controller;
use think\File;

class Upfile extends Base
{
    public function local() {
        $file = request()->file('imgFile');// 获取表单提交过来的文件

        trace($file,'asdasdasdasdasdasd');
        $info = $file->move( '../public/uploads');
        if($info){
          return json([
            'error'=>0,
            'url'=> str_replace('\\', '/','/uploads/' . $info->getSaveName())
          ]);
        } else {
          return json([
            'error'=>1,
            'message'=> $file->getError()
          ]);
        }
    }
}
