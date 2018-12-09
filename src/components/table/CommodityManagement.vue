<template>
  <div class="">
    <div class="row">
      <div class="col-xs-12">
        <h3 class="header smaller lighter blue" style="text-align: left">商品管理列表</h3>
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
                    colspan="1" aria-label="域名: activate to sort column ascending" style="width: 273px;">域名
                </th>
                <th class="sorting" role="columnheader" tabindex="0" aria-controls="sample-table-2" rowspan="1"
                    colspan="1" aria-label="价格: activate to sort column ascending" style="width: 168px;">价格
                </th>
                <th class="hidden-480 sorting" role="columnheader" tabindex="0" aria-controls="sample-table-2"
                    rowspan="1" colspan="1" aria-label="点击数: activate to sort column ascending" style="width: 213px;">
                  点击数
                </th>
                <th class="sorting" role="columnheader" tabindex="0" aria-controls="sample-table-2" rowspan="1"
                    colspan="1" aria-label="更新: activate to sort column ascending" style="width: 230px;">
                  <i class="fa fa-time bigger-110 hidden-480"></i>
                  更新
                </th>
                <th class="hidden-480 sorting" role="columnheader" tabindex="0" aria-controls="sample-table-2"
                    rowspan="1" colspan="1" aria-label="状况: activate to sort column ascending" style="width: 284px;">状况
                </th>
                <th class="sorting_disabled" role="columnheader" rowspan="1" colspan="1" aria-label=""
                    style="width: 278px;"></th>
              </tr>
              </thead>

              <tbody role="alert" aria-live="polite" aria-relevant="all">
              <tr class="odd" v-for="(good, index) in goodList">
                <td class="center  sorting_1">
                  <label>
                    <input type="checkbox" class="ace" v-bind:value="good.goodsId">
                    <span class="lbl"></span>
                  </label>
                </td>
                <td class=" ">
                  <a v-bind:href="good.goodUrl">{{good.name}}</a>
                </td>
                <td class=" ">${{good.price}}</td>
                <td class="hidden-480 ">{{good.lookAtTimes}}</td>
                <td class=" ">{{good.countTime}}</td>
                <td class="hidden-480 ">
                  <span class="label label-sm label-warning" style="color: #fff;">到期</span>
                </td>
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
                <div class="dataTables_info" id="sample-table-2_info" style="text-align: left">
                  显示{{allElement}}个条目中的1到
                  <span v-if="allElement<=10">{{allElement}}</span>
                  <span v-else>10</span>
                  个
                </div>
              </div>
              <div class="col-sm-6">
                <div class="dataTables_paginate paging_bootstrap">
                  <ul class="pagination" style="float: right;">
                    <li class="prev disabled"><a href="javascript:"><i class="fa fa-double-angle-left"></i></a></li>
                    <li v-for="(cur, index) in all" v-if="index===0" class="active">
                      <a href="javascript:">{{cur}}</a>
                    </li>
                    <li v-else>
                      <a href="javascript:">{{cur}}</a>
                    </li>
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
    name: "CommodityManagement",
    data() {
      return {
        goodList: [],
        all: '',
        cur: 1,
        allElement: '',
      }
    },
    mounted: function () {
      let _this = this;
      this.$axios({
        url: _this.HOME + '/goods/getLookAtTime?page=' + _this.cur,
        method: 'get'
      }).then(res => {
        console.log(res.data.data);
        _this.goodList = res.data.data.content;
        _this.all = res.data.data.totalPages;
        _this.allElement = res.data.data.totalElements;
      })
    },
  }
</script>

<style scoped>
  table {
    text-align: left;
  }

  .pagination > li.disabled > a, .pagination > li.disabled > a:hover, .pager > li.disabled > a, .pager > li.disabled > a:hover {
    background-color: #f9f9f9;
    border-color: #d9d9d9;
  }

  .pagination > li {
    display: inline;
  }

  .dataTables_paginate .pagination {
    margin: 0 12px;
  }

  .pagination {
    display: inline-block;
    padding-left: 0;
    margin: 20px 0;
    border-radius: 4px;
  }
</style>
