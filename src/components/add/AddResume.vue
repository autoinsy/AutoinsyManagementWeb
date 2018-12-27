<template>
  <div class="modal fade" id="addVitae" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <!--背景over-->
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-title" id="myModalLabel">
          <button type="button" id="addClose" class="close myclose" data-dismiss="modal" aria-hidden="true">&times;
          </button>
          <p class="myshow">添加法律信息</p>
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
          <input type="button" value="返回" class="subBtns" data-dismiss="modal"/>
          <input type="button" value="确认" class="subBtns" @click="AddData"/>
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

<style scoped>

</style>
