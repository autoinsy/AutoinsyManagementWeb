<template>
  <div class="">
    <div class="row">
      <div class="col-xs-12">
        <h3 class="header smaller lighter blue" style="text-align: left">角色管理列表</h3>
        <div class="table-header" style="text-align: left">
          “最新注册用户”的结果
        </div>
        <div class="table-responsive">
          <div id="sample-table-2_wrapper" class="dataTables_wrapper" role="grid">
            <div class="row">
              <div class="col-sm-6">
                <div class="dataTables_filter" id="sample-table-2_filter" style="text-align: left;">
                  <label style="float: left">查询: <input type="text" aria-controls="sample-table-2"></label>
                  <div class="sidebar-shortcuts-large" style="float: left">
                    <button class="btn btn-primary ">
                      <i class="fa fa-search"></i>
                    </button>
                  </div>
                </div>
              </div>
              <div class="col-sm-6">
                <div style="text-align: right;">
                  <div class="sidebar-shortcuts-large" id="sidebar-shortcuts-large">
                    <button class="btn btn-success">
                      新建
                    </button>
                    <button class="btn btn-info">
                      修改
                    </button>
                    <button class="btn btn-warning">
                      删除
                    </button>
                    <button class="btn btn-danger">
                      返回
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <table id="sample-table-2" class="table table-striped table-bordered table-hover dataTable"
                   aria-describedby="sample-table-2_info">
              <thead>
              <tr role="row">
                <th class="center sorting_disabled" role="columnheader" rowspan="1" colspan="1" aria-label=""
                    style="width: 100px;">
                  <label>
                    <input type="checkbox" class="ace">
                    <span class="lbl"></span>
                  </label>
                </th>
                <th class="sorting" role="columnheader" tabindex="0" aria-controls="sample-table-2" rowspan="1"
                    colspan="1" style="width:168px;">Id
                </th>
                <th class="sorting" role="columnheader" tabindex="0" aria-controls="sample-table-2" rowspan="1"
                    colspan="1"style="width: 200px;">角色名称
                </th>
                <th class="hidden-480 sorting" role="columnheader" tabindex="0" aria-controls="sample-table-2"
                    rowspan="1" colspan="1"style="width: 200px;">权限描述
                </th>
                <th class="sorting_disabled" role="columnheader" rowspan="1" colspan="1" aria-label=""
                    style="width: 278px;">操作</th>
              </tr>
              </thead>

              <tbody role="alert" aria-live="polite" aria-relevant="all">
              <tr class="odd">
                <td class="center  sorting_1">
                  <label>
                    <input type="checkbox" class="ace">
                    <span class="lbl"></span>
                  </label>
                </td>
                <td class=" "></td>
                <td class=" "></td>
                <td class="hidden-480 "></td>
                <td class=" ">
                  <div class="visible-md visible-lg hidden-sm hidden-xs action-buttons">
                    <a class="blue" href="#">
                      <i class="fa fa-search-plus bigger-130"></i>
                    </a>
                    <a class="green" href="#">
                      <i class="fa fa-pencil bigger-130"></i>
                    </a>
                    <a class="red" href="#">
                      <i class="fa fa-trash bigger-130"></i>
                    </a>
                  </div>
                </td>
              </tr>
              <tr class="even">
                <td class="center  sorting_1">
                  <label>
                    <input type="checkbox" class="ace">
                    <span class="lbl"></span>
                  </label>
                </td>
                <td class=" "></td>
                <td class=" "></td>
                <td class="hidden-480 "></td>
                <td class=" ">
                  <div class="visible-md visible-lg hidden-sm hidden-xs action-buttons">
                    <a class="blue" href="#">
                      <i class="fa fa-search-plus bigger-130"></i>
                    </a>
                    <a class="green" href="#">
                      <i class="fa fa-pencil bigger-130"></i>
                    </a>
                    <a class="red" href="#">
                      <i class="fa fa-trash bigger-130"></i>
                    </a>
                  </div>
                </td>
              </tr>
              <tr class="odd">
                <td class="center  sorting_1">
                  <label>
                    <input type="checkbox" class="ace">
                    <span class="lbl"></span>
                  </label>
                </td>
                <td class=" "></td>
                <td class=" "></td>
                <td class="hidden-480 "></td>
                <td class=" ">
                  <div class="visible-md visible-lg hidden-sm hidden-xs action-buttons">
                    <a class="blue" href="#">
                      <i class="fa fa-search-plus bigger-130"></i>
                    </a>
                    <a class="green" href="#">
                      <i class="fa fa-pencil bigger-130"></i>
                    </a>
                    <a class="red" href="#">
                      <i class="fa fa-trash bigger-130"></i>
                    </a>
                  </div>
                </td>
              </tr>
              </tbody>
            </table>
            <div class="row">
              <div class="col-sm-6">
                <div class="dataTables_info" id="sample-table-2_info" style="text-align: left">显示23个条目中的1到10个</div>
              </div>
              <div class="col-sm-6">
                <div class="dataTables_paginate paging_bootstrap" >
                  <ul class="pagination" style="float: right;">
                    <li class="prev disabled"><a href="javascript:"><i class="fa fa-double-angle-left"></i></a></li>
                    <li class="active"><a href="javascript:">1</a></li>
                    <li><a href="javascript:">2</a></li>
                    <li><a href="javascript:">3</a></li>
                    <li class="next"><a href="javascript:"><i class="fa fa-double-angle-right"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "TableUserJS"
    }
</script>

<style scoped>

</style>
