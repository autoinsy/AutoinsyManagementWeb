<template>
  <div class="modal fade" id="addVitae" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <!--背景over-->
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-title" id="myModalLabel">
          <button type="button" id="addClose" class="close myclose" data-dismiss="modal" aria-hidden="true">&times;
          </button>
          <p class="myshow">添加招聘信息</p>
        </div>
        <!--弹出标头over-->
        <div class="modal-body">
          <form class="form-horizontal">

            <div class="form-group row">
              <label for="addWantedPosition" class="col-3 control-label">
                <span>求职职位类别</span>
              </label>
              <input id="addWantedPosition" type="text" class="col-7 form-control"/>
            </div>

            <div class="form-group row">
              <label for="addSalary" class="col-3 control-label">
                <span>期望薪资</span>
              </label>
              <div id="addSalary" class="col-7 row">
                <input id="addStartSalary" type="text" class="form-control col-5" title="最低薪资"/>
                ———
                <input id="addEndSalary" type="text" class="form-control col-5" title="最高薪资"/>
              </div>
            </div>

            <div class="form-group row">
              <label for="addName" class="col-3 control-label">
                <span>求职者姓名</span>
              </label>
              <input id="addName" type="text" class="col-7 form-control"/>
            </div>

            <div class="form-group row">
              <label for="addSex" class="col-3 control-label">
                <span>性别</span>
              </label>
              <select id="addSex" class="col-7 form-control">
                <option value="1">男</option>
                <option value="2">女</option>
              </select>
            </div>

            <div class="form-group row">
              <label for="addBirthday" class="col-3 control-label">
                <span>出生年月</span>
              </label>
              <input id="addBirthday" type="date" class="col-7 form-control"/>
            </div>

            <div class="form-group row">
              <label for="addWorkingLife" class="col-3 control-label">
                <span>工作年限</span>
              </label>
              <input id="addWorkingLife" type="text" class="col-7 form-control"/>
            </div>

            <div class="form-group row">
              <label for="addEducation" class="col-3 control-label">
                <span>学历</span>
              </label>
              <input id="addEducation" type="text" class="col-7 form-control"/>
            </div>

            <div class="form-group row">
              <label for="addMobilePhoneNum" class="col-3 control-label">
                <span>手机号</span>
              </label>
              <input id="addMobilePhoneNum" type="text" class="col-7 form-control"/>
            </div>

          </form>
          <!--表单over-->
        </div>
        <div class="modal-footer" style="margin: 0 auto; width:240px;border:none;">
          <input type="button" value="返回" class="subBtns btn-return" data-dismiss="modal"/>
          <input type="button" value="确认" class="subBtns btn-return" @click="AddData"/>
        </div>
        <!--弹出 over-->
      </div>
    </div>
    <!--弹出 over-->
  </div>
</template>

<script>
  export default {
    name: "AddResume",
    mounted: function () {
      this.$('[data-toggle="popover"]').popover();
    },
    methods: {
      AddData: function () {
        let edit_this = this;
        let salary = $('#addStartSalary').val() + '——' +$('#addEndSalary').val();
        this.$axios({
          method: 'post',
          url: this.HOME + '/vitae/add',
          data: edit_this.qs.stringify({
            "id": 0,
            "wantedPosition": $('#addWantedPosition').val(),
            "salary": salary,
            "name": $('#addName').val(),
            "sex": $('#addSex').val(),
            "birthday": $('#addBirthday').val(),
            "workingLife": $('#addWorkingLife').val(),
            "education": $('#addEducation').val(),
            "mobilePhoneNum": $('#addMobilePhoneNum').val(),
            "cvCode": '',
          })
        }).then(function (response) {
          alert(response.data.message);
          if (Math.ceil(response.data.code)) {
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
