<template>
  <div class="" >
    <div class="row" >
      <div class="col-md-12">
        <h3 class="header smaller lighter blue" style="text-align: left">用户管理列表</h3>
        <div class="table-responsive">
          <div id="sample-table-2_wrapper" class="dataTables_wrapper" role="grid">
            <table class="table-bordered table-striped">
              <thead>
              <tr>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
              </tr>
              </thead>
              <tbody></tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TableUser",
    data() {
      return {
        cityList: [],
        all: '',
        cur: 1,
        allElement: '',
      }
    },
    created: function () {
      try {
        ace.settings.check('breadcrumbs', 'fixed')
      } catch (e) {
      }
    },
    mounted: function () {
      let _this = this;
      let table = $('table').DataTable({
        language: {
          "processing": "处理中...",
          "lengthMenu": "显示 _MENU_ 项结果",
          "zeroRecords": "没有匹配结果",
          "info": "显示第 _START_ 至 _END_ 项结果，共 _TOTAL_ 项",
          "infoEmpty": "显示第 0 至 0 项结果，共 0 项",
          "infoFiltered": "(由 _MAX_ 项结果过滤)",
          "infoPostFix": "",
          "search": "搜索:",
          "searchPlaceholder": "搜索...",
          "url": "",
          "emptyTable": "表中数据为空",
          "loadingRecords": "载入中...",
          "infoThousands": ",",
          "paginate": {
            "first": "首页",
            "previous": "上页",
            "next": "下页",
            "last": "末页"
          },
          "aria": {
            "paginate": {
              "first": "首页",
              "previous": "上页",
              "next": "下页",
              "last": "末页"
            },
            "sortAscending": "以升序排列此列",
            "sortDescending": "以降序排列此列"
          },
          "thousands": "."
        },
        serverSide: true,
        deferRender: true,
        paging: true,
        info: false,
        pageLength: 10,
        ajax: function (data, callback, settings) {
          $.ajax({
            url: _this.HOME + '/user/list',
            type: 'get',
            data: {
              "page": _this.cur,
              "type": '0',
              "size": '',
            },
            success: function (data) {
              var returnData = {};
              returnData.recordsTotal = data.data.totalPages;
              returnData.recordsFiltered = data.data.totalElements;
              returnData.data = data.data.content;
              callback(returnData);
            },
          })
        },
        dom: "<'row'<'col-md-6'l<'#toolbar'>><'col-md-6'f>r>t<'row'<'col-md-5 sm-center'i><'col-md-7 text-right sm-center'p>>",
        columnDefs: [
          {
            targets: 7,
            data: "",
            title: "操作",
            render: function (data, type, row, meta) {
              let div = "<div class=\"\">\n" +
                "<a class=\"\" href=\"#\">\n" +
                "<i class=\"fa fa-search-plus bigger-130\"></i>\n" +
                "</a>\n" +
                "<a class=\"green\" href=\"#\">\n" +
                "<i class=\"fa fa-pencil bigger-130\"></i>\n" +
                "</a>\n" +
                "<a class=\"red\" href=\"#\">\n" +
                "<i class=\"fa fa-trash bigger-130\"><span style='display: none'>" + row.id + "</span></i>\n" +
                "</a>\n" +
                "</div>";
              return div;
            }
          },
          {
            targets: 6,
            data: "businessLicenceNum",
            title: "用户种类",
          },
          {
            targets: 5,
            data: "mobileNumber",
            title: "手机号",
          },
          {
            targets: 4,
            data: "password",
            title: "密码",
          },
          {
            targets: 3,
            data: "userName",
            title: "用户名",
          },
          {
            targets: 2,
            data: "userCode",
            title: "用户编号",
          },
          {
            targets: 0,
            data: null,
            title: "<input type='checkbox'>",
            render: function (data, type, row, meta) {
              return "<label><input type='checkbox' value=" + data.id + "><span></span></label>"
            }
          },
          {
            targets: 1,
            data: "id",
            title: "Id",
          }
        ],
        buttons: [
          'copy', 'excel', 'pdf'
        ],
        initComplete: function () {
          //手动添加按钮到表格上
          $("#toolbar").css("float", "left").css("display", "inline").css("margin-left", "10px");
          $("#toolbar").append("<input type='button' value='修改' class='btn-success'/>");
          $("#toolbar").append("<input type='button' value='删除' class='btn-pink' style='margin: 0 5px;color: #fff;'/>");
          $("#toolbar").append("<input type='button' value='全部删除' class='btn-info'/>");
          $("#toolbar input[class='btn-yellow']").click(_this.deleteData);
          let deleteButton = $("tr").children('td').children("div").children('a[class="red"]');
          $(deleteButton).click(_this.deleteData)
        },
      });
    },
    methods: {
      deleteData: function (e) {
        let index = $(e.target).children().text();
        let delete_this = this;
        if (confirm('确定删除？')) {
          this.$axios({
            method: 'post',
            url: delete_this.HOME + '/user/delete?id=' + index,
          }).then(function (response) {
            if (response.status === 200) {
              delete_this.people.splice(index, 1);
              delete_this.btnClick(1);
            }
          }).catch(function (error) {
            console.log(error);
          })
        }
      },

    }
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
  table {
    font-size: 14px;
    font-family: 微软雅黑;
    border: 1px solid #ddd;
    padding: 0;
    width: 100%;
    margin-left: 0 !important;
    margin-right: 0 !important;
  }

  table thead {
    background: #1a89ed;
    color: #ffffff;
    font-size: 18px;
  }

  .table-bordered > thead > tr > td, .table-bordered > thead > tr > th {
    border-bottom-width: 2px !important;
  }

  table.table-bordered tbody th, table.table-bordered tbody td {
    border-left-width: 0 !important;
    border-bottom-width: 0 !important;
  }

  .table-striped > tbody > tr:nth-of-type(odd) {
    background-color: #f9f9f9 !important;
  }

  .dataTable th[class*=sorting_] {
    color: #ffffff !important;
  }

  .dataTable th[class*=sort]:hover {
    color: #ffffff !important;
  }

  .table-bordered {
    border: 1px solid #ddd;
  }
</style>
