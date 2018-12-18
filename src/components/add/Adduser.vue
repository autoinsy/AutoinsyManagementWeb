<template>
  <div class="modal fade" id="addUser" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <!--背景over-->
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-title" id="myModalLabel">
          <button type="button" id="close" class="close myclose" data-dismiss="modal" aria-hidden="true">&times;
          </button>
          <p class="myshow">添加角色信息</p>
        </div>
        <!--弹出标头over-->
        <div class="modal-body">
          <form class="">
            <fieldset style="border:none;">
              <legend style="display:none"></legend>
              <p class="from-p">
                <label for="" class="from-left"><em>*</em>用户编号</label>
                <input type="text" id="" v-model="" class="from-right from-input"
                       placeholder="请输入用户编号"/>
              </p>
              <div class="clear"></div>
              <!--part one-->
              <p class="from-p">
                <label for="" class="from-left"><em>*</em>用户名</label>
                <input type="text" id="" v-model="" class="from-right from-input"
                       placeholder="请输入用户名"/>
              </p>
              <div class="clear"></div>
              <!--part one-->
              <p class="from-p">
                <label for="" class="from-left"><em>*</em>密码</label>
                <input type="text" id="" v-model="" class="from-right from-input"
                       placeholder="请输入密码"/>
              </p>
              <div class="clear"></div>
              <!--part one-->
              <p class="from-p">
                <label for="" class="from-left"><em>*</em>手机号</label>
                <input type="text" id="" v-model="" class="from-right from-input"
                       placeholder="请输入手机号"/>
              </p>
              <div class="clear"></div>
              <!--part one-->
              <p class="from-p">
                <label for="" class="from-left"><em>*</em>用户种类</label>
                <select id="" v-model="" class="from-input">
                  <option value="1">商户</option>
                  <option value="2">个人</option>
                </select>
              </p>
              <div class="clear"></div>
              <!--part one-->
            </fieldset>
          </form>
          <!--表单over-->
        </div>
        <div class="modal-footer" style="margin: 0 auto; width:240px;border:none;">
          <input type="button" value="返回" class="subBtns" data-dismiss="modal"/>
          <input type="button" value="确认" class="subBtns" @click="addUser"/>
        </div>
        <!--弹出 over-->
      </div>
    </div>
    <!--弹出 over-->
  </div>
</template>

<script>
  export default {

    mounted: function () {
      this.$('[data-toggle="popover"]').popover();
    },

    props: ['className'],

    name: 'Adduse',

    data() {
      return {
        studentName: '',
        studentSex: '',
        studentNum: '',
        birthday: '',
        account: '',
        householdRegistration: '',
        matriculationTime: '',
        graduationTime: '',
        result: '',
        studentClassroom: ''
      }
    },

    methods: {

      addStudent: function () {
        let edit_this = this;
        let param = new URLSearchParams();
        let checkInput = this.checkInput();
        param.append('studentName', this.$('#studentName').val());
        param.append('studentSex', this.$('#studentSex :selected').val());
        param.append('studentNum', this.$('#studentNum').val());
        param.append('birthday', this.$('#birthday').val());
        param.append('account', this.$('#account :selected').val());
        param.append('householdRegistration', this.$('#householdRegistration').val());
        param.append('matriculationTime', this.$('#matriculationTime').val());
        param.append('graduationTime', this.$('#graduationTime').val());
        param.append('studentClassroom', this.className);
        if (checkInput % 2 == 0 && checkInput != 0) {
          this.$axios({
            method: 'post',
            url: this.HOME + '/school/class/addStudent',
            data: param
          }).then(function (response) {
            if (response.data.code == 200) {
              alert("添加成功！");
              edit_this.result = 1;
              $('#addStudent button').click();
              edit_this.$emit('modifyTrue');
            }
          }).catch(function (error) {
            console.log(error);
          })
        } else {
          alert("您输入的内容有误，请核对信息是否正确。")
        }
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

</style>
