<template>
  <div class="">
    <div class="row">
      <div class="col-md-12">
        <h3 class="header smaller lighter blue" style="text-align: left">租赁管理列表</h3>
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
    <revamp :modifyData="modifyData" v-on:dataInteractTrue="dataInteractTrue"></revamp>
    <add  v-on:dataInteractTrue="dataInteractTrue"></add>
  </div>
</template>

<script>
  import revamp from '../revmap/RevampLease'
  import add from '../add/AddLease'

  export default {
    name: "Rent",
    components: {revamp: revamp, add: add},
    data() {
      return {
        cityList: [],
        all: '',
        cur: 1,
        allElement: '',
        table: '',
        modifyData: '',
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
      _this.table = $('table').DataTable({
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
            url: _this.HOME + '/lease/list',
            type: 'get',
            data: {
              "page": _this.cur,
              "type": '0',
              "size": '',
            },
            success: function (data) {
              var returnData = {};
              _this.cityList = data.data.content;
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
            targets: 9,
            data: "",
            title: "操作",
            render: function (data, type, row, meta) {
              let div = "<div class=\"\">\n" +
                "<a class=\"\" href=\"#\">\n" +
                "<i class=\"fa fa-search-plus bigger-130\"></i>\n" +
                "</a>\n" +
                "<a class=\"green\" href=\"#\" data-toggle=\"modal\" data-target=\"#revampLease\">\n" +
                "<i class=\"fa fa-pencil bigger-130\"></i>\n" +
                "</a>\n" +
                "<a class=\"red\" href=\"#\">\n" +
                "<i class=\"fa fa-trash bigger-130\"><span style='display: none'>" + row.leaseId + "</span></i>\n" +
                "</a>\n" +
                "</div>";
              return div;
            }
          },
          {
            targets: 8,
            data: "leaseInfoSourceCode",
            title: "信息来源",
            render: function (data, type, row, meta) {
              let leaseInfoSourceCode = row.leaseInfoSourceCode;
              if (Math.ceil(leaseInfoSourceCode) === 1) return "个人";
              else if (Math.ceil(leaseInfoSourceCode) === 2) return "公司";
            }
          },
          {
            targets: 7,
            data: "publishDate",
            title: "发布日期",
          },
          {
            targets: 6,
            data: "leaseCode",
            title: "租赁编号",
          },
          {
            targets: 5,
            data: "title",
            title: "标题",
          },
          {
            targets: 4,
            data: "price",
            title: "价格",
          },
          {
            targets: 3,
            data: "acreage",
            title: "面积",
          },
          {
            targets: 2,
            data: "leaseType",
            title: "租赁类型",
          },
          {
            targets: 1,
            data: "leaseId",
            title: "Id",
          },
          {
            targets: 0,
            data: null,
            title: "<input type='checkbox'>",
            render: function (data, type, row, meta) {
              return "<label><input type='checkbox' value=" + data.leaseId + "><span></span></label>"
            }
          },
        ],
        buttons: [
          'copy', 'excel', 'pdf'
        ],
        initComplete: function () {
          //手动添加按钮到表格上
          $("#toolbar").css("float", "left").css("display", "inline").css("margin-left", "10px");
          $("#toolbar").append("<input type='button' value='新建' class='btn-purple' style='color: #fff; margin-right: 5px;' data-toggle=\"modal\" data-target=\"#AddLease\"/>");
          // $("#toolbar").append("<input type='button' value='修改' class='btn-success'/>");
          $("#toolbar").append("<input type='button' value='删除' class='btn-pink' style='margin: 0 5px 0 0;color: #fff;'/>");
          $("#toolbar").append("<input type='button' value='全部删除' class='btn-info'/>");
          $("#toolbar input[class='btn-yellow']").click(_this.deleteData);
          let deleteButton = $("tr").children('td').children("div").children('a[class="red"]');
          $(deleteButton).click(_this.deleteData)
          $("tr").children('td').children("div").children('a[class="green"]').click(_this.toModify);
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
            url: delete_this.HOME + '/lease/delete?id=' + index,
          }).then(function (response) {
            if (response.status === 200) {
              delete_this.people.splice(index, 1);
              delete_this.btnClick(1);
              this.table.draw(false);
            }
          }).catch(function (error) {
            console.log(error);
          })
        }
      },
      toModify: function (e) {
        this.modifyData = this.cityList[$(e.target).parent().parent().parent().parent().index()];
        console.log(this.modifyData);
      },
      dataInteractTrue: function (e) {
        this.table.draw(false);
      }

    }
  }
</script>

<style scoped>
  table {
    font-size: 14px;
    font-family: 微软雅黑;
    border: 1px solid #ddd;
    padding: 0;
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
