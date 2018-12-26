<template>
  <div class="modal fade" id="AddLaw" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <!--背景over-->
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-title" id="myModalLabel">
          <button type="button" id="close" class="close myclose" data-dismiss="modal" aria-hidden="true">&times;
          </button>
          <p class="myshow">添加法律信息</p>
        </div>
        <!--弹出标头over-->
        <div class="modal-body">
          <form class="">
            <fieldset style="border:none;">
              <legend style="display:none"></legend>
              <p class="from-p">
                <label for="statement_name" class="from-left"><em>*</em>标题</label>
                <input type="text" id="statement_name" v-model="statement_name" class="from-right from-input"
                       placeholder="请输入标题"/>
              </p>
              <div class="clear"></div>
              <!--part one-->
              <p class="from-p">
                <label for="statement" class="from-left"><em>*</em>法律声明</label>
                <textarea id="statement" v-model="statement" class="from-right from-input textareastyles"
                          placeholder="请输入法律声明"></textarea>
              </p>
              <div class="clear"></div>
              <!--part one-->
              <p class="from-p">
                <label for="statement_date" class="from-left"><em>*</em>发布日期</label>
                <input type="date" id="statement_date" v-model="statement_date" class="from-right from-input"/>
              </p>
              <div class="clear"></div>
              <!--part one-->
            </fieldset>
          </form>
          <!--表单over-->
        </div>
        <div class="modal-footer" style="margin: 0 auto; width:240px;border:none;">
          <input type="button" value="返回" class="subBtns" data-dismiss="modal"/>
          <input type="button" value="确认" class="subBtns" @click="AddLaw"/>
        </div>
        <!--弹出 over-->
      </div>
    </div>
    <!--弹出 over-->
  </div>
</template>

<script>
  export default {
    name: "AddCity",
    mounted: function () {
      this.$('[data-toggle="popover"]').popover();
    },
    methods: {
      AddData: function () {
        let edit_this = this;
        let param = new URLSearchParams();
        let checkInput = this.checkInput();
        param.append('statement_name', this.$('#statement_name').val());
        param.append('statement_date', this.$('#statement_date').val());
        param.append('statement', this.$('#statement').val());
        this.$axios({
          method: 'post',
          url: this.HOME + '/lawstatement/add',
          data: param
        }).then(function (response) {
          if (response.data.code == 200) {
            alert("添加成功！");
            edit_this.result = 1;
            $('#addAttendance button').click();
            edit_this.$emit('modifyTrue');
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
