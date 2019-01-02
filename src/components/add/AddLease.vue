<template>
  <div class="modal fade" id="AddLease" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <!--背景over-->
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-title" id="myModalLabel">
          <button type="button" id="addClose" class="close myclose" data-dismiss="modal" aria-hidden="true">&times;
          </button>
          <p class="myshow">添加租赁信息</p>
        </div>
        <div class="modal-body">
          <form class="form-horizontal">

            <div class="form-group row">
              <label for="addTitle" class="col-3 control-label">
                <span>标题</span>
              </label>
              <input id="addTitle" type="text" class="col-7 form-control"/>
            </div>

            <div class="form-group row">
              <label for="addStallPosition" class="col-3 control-label">
                <span>商铺位置</span>
              </label>
              <input id="addStallPosition" type="text" class="col-7 form-control"/>
            </div>

            <div class="form-group row">
              <label for="addPrice" class="col-3 control-label">
                <span>价格</span>
              </label>
              <input id="addPrice" type="text" class="col-7 form-control"/>
            </div>

            <div class="form-group row">
              <label for="addLeaseTerm" class="col-3 control-label">
                <span>租期</span>
              </label>
              <input id="addLeaseTerm" type="text" class="col-7 form-control"/>
            </div>

            <div class="form-group row">
              <label for="addAcreageTypeCode" class="col-3 control-label">
                <span>面积种类</span>
              </label>
              <select id="addAcreageTypeCode" class="col-7 form-control">
                <option value="0">请选择面积种类</option>
                <option value="1">5平以下</option>
                <option value="2">5-10平</option>
                <option value="3">10-50平</option>
                <option value="4">50-100平</option>
                <option value="5">100平以上</option>
              </select>
            </div>

            <div class="form-group row">
              <label for="addLeaseInfoSourceCode" class="col-3 control-label">
                <span>信息来源</span>
              </label>
              <select id="addLeaseInfoSourceCode" class="col-7 form-control">
                <option value="0">请选择您要添加的信息来源的种类</option>
                <option value="1">个人</option>
                <option value="2">公司</option>
              </select>
            </div>

            <div class=" form-group row">
              <label for="addLeaseTypeCode" class="col-3 control-label">
                <span>租赁类型</span>
              </label>
              <select id="addLeaseTypeCode" class="col-7 form-control">
                <option value="0">请选择租赁类型</option>
                <option value="1">店铺</option>
                <option value="2">库房</option>
                <option value="3">写字间</option>
                <option value="4">转让</option>
              </select>
            </div>

            <div class=" form-group row">
              <label for="addContacts" class="col-3 control-label">
                <span>联系人</span>
              </label>
              <input id="addContacts" type="text" class="col-7 form-control"/>
            </div>

            <div class="form-group row">
              <label for="addMobilePhoneNum" class="col-3 control-label">
                <span>手机号</span>
              </label>
              <input id="addMobilePhoneNum" type="text" class="col-7 form-control"/>
            </div>

            <div class="form-group row">
              <label for="addDescript" class="col-3 control-label">
                <span>描述</span>
              </label>
              <textarea id="addDescript" rows="5" class="col-7 form-control"></textarea>
            </div>

          </form>
        </div>
        <div class="modal-footer" style="margin: 0 auto; width:240px;border:none;">
          <input type="button" value="返回" class="subBtns btn-return" data-dismiss="modal"/>
          <input type="button" value="确认" class="subBtns btn-return" @click="AddData"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "AddLease",
    mounted: function () {
      this.$('[data-toggle="popover"]').popover();
    },
    methods: {
      AddData: function () {
        let edit_this = this;
        this.$axios({
          method: 'post',
          url: this.HOME + '/lease/add',
          data: edit_this.qs.stringify({
            "leaseTypeCode": $('#addLeaseTypeCode').val(),
            "stallPosition": $('#addStallPosition').val(),
            "price": $('#addPrice').val(),
            "leaseTerm": $('#addLeaseTerm').val(),
            "title": $('#addTitle').val(),
            "descript": $('#addDescript').val(),
            "contacts": $('#addContacts').val(),
            "mobile_phone_num": $('#addMobilePhoneNum').val(),
            "acreageTypeCode": $('#addAcreageTypeCode').val(),
            "leaseInfoSourceCode": $('#addLeaseInfoSourceCode').val(),
            "leaseInfoSource": $('#addLeaseInfoSource').val(),
          })
        }).then(function (response) {
          alert(response.data.message);
          if (Math.ceil(response.data.code) === 200) {
            $('#addClose').click();
            edit_this.$emit('dataInteractTrue');
          }
        }).catch(function (error) {
          console.log(error);
        })
      },

      checkInput: function () {
        let checkResult = 0;
        let birthday = $('#birthday').val();
        let matriculationTime = $('#matriculationTime').val();
        let graduationTime = $('#graduationTime').val();
        if (new Date(graduationTime).getTime() > new Date(matriculationTime).getTime()) {
          checkResult++;
        }
        if ((new Date().getFullYear() - new Date(birthday).getFullYear()) >= 14) {
          checkResult++;
        }
        return checkResult;
      }

    }
  }
</script>

<style>
  .btn-return{
    background-color: #ff6e00;
  }
  .modal-content p{
    text-align: left;
  }
  .textareastyles {
    height: 150px
  }
  .myshow{
    font-size: 24px;
    color:#000;
    line-height: 45px;
    padding-left: 10px;
    background-color: #ededed;
    border-radius: .3rem;
  }
  .myclose{
    line-height: 45px;
    margin-right: 10px;
  }
  .nav-stacked li{
    width:100%;
    display: block;
  }
  .from-p {
    clear: both
  }

  .from-left {
    float: left;
    font-size: 18px;
    color: #535353;
    margin-right: 25px;
    text-align: right;
    width: 100px;
    height: 18px
  }

  .from-right {
    float: right;
    margin-bottom: 28px
  }

  .from-input {
    width: 340px;
    margin-bottom: 28px !important;
    padding-left: 10px
  }

  .ejcet-from textarea {
    width: 700px;
    height: 375px;
    margin-bottom: 28px
  }

  .subBtns {
    color: #fff;
    border: none;
    width: 60px !important;
    height: 30px;
    line-height: 30px;
    text-align: center;
    margin: 10px 30px;
    float: left;
    border-radius: 5px
  }
  .modal-footer {
    padding: 14px 15px 15px;
    margin-bottom: 0;
    text-align: right;
    background-color: #fff !important;
    border-top: 1px solid #ddd;
    -webkit-border-radius: 0 0 6px 6px;
    -moz-border-radius: 0 0 6px 6px;
    border-radius: 0 0 6px 6px;
    *zoom: 1;
    -webkit-box-shadow: inset 0 1px 0 #ffffff;
    -moz-box-shadow: inset 0 1px 0 #ffffff;
    box-shadow: inset 0 1px 0 #ffffff;
  }

  .modal-footer:before,
  .modal-footer:after {
    display: table;
    line-height: 0;
    content: "";
  }

  .modal-footer:after {
    clear: both;
  }

  .modal-footer .btn + .btn {
    margin-bottom: 0;
    margin-left: 5px;
  }

  .modal-footer .btn-group .btn + .btn {
    margin-left: -1px;
  }

  .modal-footer .btn-block + .btn-block {
    margin-left: 0;
  }
  em{
    color:#ff6e00;
    margin: 10px 5px 0 0;
  }
</style>
