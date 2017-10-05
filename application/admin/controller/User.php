<?php

namespace app\admin\controller;

use app\admin\model\UserAdmin as UserAdminModel;

class User extends Base
{
    /**
     * 显示资源列表
     *
     * @return \think\Response
     */
    public function index()
    {
        //
    }

    public function page(UserAdminModel $UserAdmin) {
      $param  = input('post.');
        $data = $UserAdmin->page($param['kw'], $param['cp'], $param['mp']);
        return json($data);
    }
    /**
     * 显示创建资源表单页.
     *
     * @return \think\Response
     */
    public function create(UserAdminModel $userAdmin)
    {
        $data = $userAdmin->saveData(input('post.'));
        return json($data);
    }

    /**
     * 保存新建的资源
     *
     * @param  \think\Request  $request
     * @return \think\Response
     */
    public function save(Request $request)
    {
        //
    }

    /**
     * 显示指定的资源
     *
     * @param  int  $id
     * @return \think\Response
     */
    public function get(UserAdminModel $UserAdmin)
    {
        $data = $UserAdmin->read(input('post.')['id']);
        return json($data);
    }

    /**
     * 显示编辑资源表单页.
     *
     * @param  int  $id
     * @return \think\Response
     */
    public function update(UserAdminModel $UserAdmin)
    {
        $data = $UserAdmin->editData(input('post.'));
        return json($data);
    }

    /**
     * 删除指定资源
     *
     * @param  int  $id
     * @return \think\Response
     */
    public function remove(UserAdminModel $UserAdmin)
    {
        $data = $UserAdmin->remove(input('post.')['id']);
        return json($data);
    }
}
