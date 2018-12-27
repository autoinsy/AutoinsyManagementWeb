<template>
  <div class="modal fade" id="AddLease" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <!--背景over-->
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-title" id="myModalLabel">
          <button type="button" id="addClose" class="close myclose" data-dismiss="modal" aria-hidden="true">&times;
          </button>
          <p class="myshow">添加法律信息</p>
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
          <input type="button" value="返回" class="subBtns" data-dismiss="modal"/>
          <input type="button" value="确认" class="subBtns" @click="AddData"/>
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

<style scoped>

</style>
