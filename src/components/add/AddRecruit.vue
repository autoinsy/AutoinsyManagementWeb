<template>
  <div class="modal fade" id="addRecruit" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <!--背景over-->
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-title" id="myModalLabel">
          <button type="button" id="addClose" class="close myclose" data-dismiss="modal" aria-hidden="true">&times;
          </button>
          <p class="myshow">添加简历信息</p>
        </div>
        <!--弹出标头over-->
        <div class="modal-body">
          <form class="form-horizontal">

            <div class="form-group row">
              <label for="addTitle" class="col-3 control-label">
                <span>招聘标题</span>
              </label>
              <input id="addTitle" type="text" class="col-7 form-control"/>
            </div>

            <div class="form-group row">
              <label for="addCompanyName" class="col-3 control-label">
                <span>公司名称</span>
              </label>
              <input id="addCompanyName" type="text" class="col-7 form-control"/>
            </div>

            <div class="form-group row">
              <label for="salary" class="col-3 control-label">
                <span>薪资范围</span>
              </label>
              <div id="salary" class="col-7 row">
                <input id="addStartSalary" type="text" class="form-control col-5" title="最低薪资"/>
                ———
                <input id="addEndSalary" type="text" class="form-control col-5" title="最高薪资"/>
              </div>
            </div>

            <div class="form-group row">
              <label for="addSellerAddress" class="col-3 control-label">
                <span>商家地址</span>
              </label>
              <input id="addSellerAddress" type="text" class="col-7 form-control"/>
            </div>

            <div class="form-group row">
              <label for="addRecruitPersonNumber" class="col-3 control-label">
                <span>招聘人数</span>
              </label>
              <input id="addRecruitPersonNumber" type="text" class="col-7 form-control"/>
            </div>

            <div class="form-group row">
              <label for="addEducationRequirement" class="col-3 control-label">
                <span>学历要求</span>
              </label>
              <select id="addEducationRequirement" class="col-7 form-control">
                <option value="1">高中</option>
                <option value="2">大专</option>
                <option value="3">本科</option>
                <option value="4">硕士</option>
                <option value="5">博士</option>
                <option value="6">博士后</option>
              </select>
            </div>

            <div class="form-group row">
              <label for="addExperience" class="col-3 control-label">
                <span>工作经验</span>
              </label>
              <input id="addExperience" type="text" class="col-7 form-control"/>
            </div>

            <div class="form-group row">
              <label for="addPositionRequirement" class="col-3 control-label">
                <span>职位要求</span>
              </label>
              <input id="addPositionRequirement" type="text" class="col-7 form-control"/>
            </div>

            <div class="form-group row">
              <label for="addTakeOfficeRequirement" class="col-3 control-label">
                <span>任职要求</span>
              </label>
              <input id="addTakeOfficeRequirement" type="text" class="col-7 form-control"/>
            </div>

            <div class="form-group row">
              <label for="addContactPhoneNum" class="col-3 control-label">
                <span>联系电话</span>
              </label>
              <input id="addContactPhoneNum" type="text" class="col-7 form-control"/>
            </div>

            <div class="form-group row">
              <label for="addPublishTime" class="col-3 control-label">
                <span>发布时间</span>
              </label>
              <input id="addPublishTime" type="text" class="col-7 form-control"/>
            </div>


            <div class="form-group row">
              <label for="addMobilePhoneNum" class="col-3 control-label">
                <span>手机号码</span>
              </label>
              <input id="addMobilePhoneNum" type="text" class="col-7 form-control"/>
            </div>

          </form>
          <!--表单over-->
        </div>
        <div class="modal-footer" style="margin: 0 auto; width:240px;border:none;">
          <input type="button" value="返回" class="btn btn-return" data-dismiss="modal"/>
          <input type="button" value="确认" class="btn btn-return" @click="AddData"/>
        </div>
        <!--弹出 over-->
      </div>
    </div>
    <!--弹出 over-->
  </div>
</template>

<script>
  export default {
    name: "AddRecruit",
    mounted: function () {
      this.$('[data-toggle="popover"]').popover();
    },
    methods: {
      AddData: function () {
        let edit_this = this;
        this.$axios({
          method: 'post',
          url: this.HOME + '/recuit/add',
          data: edit_this.qs.stringify({
            "title": $('#addTitle').val(),
            "company_name": $('#addCompanyName').val(),
            "start_salary": $('#addStartSalary').val(),
            "seller_address": $('#addSellerAddress').val(),
            "recruit_person_number": $('#addRecruitPersonNumber').val(),
            "education_requirement": $('#addEducationRequirement').val(),
            "experience": $('#addExperience').val(),
            "position_requirement": $('#addPositionRequirement').val(),
            "take_office_requirement": $('#addTakeOfficeRequirement').val(),
            "contact_phone_num": $('#addContactPhoneNum').val(),
            "publish_time": $('#addPublishTime').val(),
            "end_salary": $('#addEndSalary').val(),
            "mobile_phone_num": $('#addMobilePhoneNum').val()
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
