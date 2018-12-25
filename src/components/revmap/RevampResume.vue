<template>
  <div class="modal fade" id="revampVitae" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
       aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-title" id="myModalLabel">
          <button type="button" id="close" class="close" data-dismiss="modal" aria-hidden="true">&times;
          </button>
          <h1 class="modal-header">修改简历信息<span id="id" style="display: none">{{modifyData.id}}</span></h1>
        </div>
        <div class="modal-body">
          <form class="form-horizontal">
            <!--求职职位类别-->
            <div class="form-group row">
              <label for="wantedPosition" class="col-3 control-label">
                <i>求职职位类别</i>
              </label>
              <input id="wantedPosition" type="text" class="form-control col-7 " name="parts_city_title"
                     v-bind:value="modifyData.wantedPosition">
            </div>
            <!--期望薪资-->
            <div class="form-group row">
              <label for="salary" class="col-3 control-label">
                <i>期望薪资</i>
              </label>
              <input id="salary" type="text" class="form-control col-7" name="parts_city_name"
                     v-bind:value="modifyData.salary">
            </div>
            <!--求职者姓名-->
            <div class="form-group row">
              <label for="name" class="col-3 control-label">
                <i>求职者姓名</i>
              </label>
              <input id="name" type="text" class="form-control col-7" name="parts_city_address"
                     v-bind:value="modifyData.name">
            </div>
            <!--性别-->
            <div class="form-group row">
              <label for="sex" class="col-3 control-label">
                <i>性别</i>
              </label>
              <input id="sex" class="form-control col-7" name="parts_city_content" v-bind:value="modifyData.sex">
            </div>
            <!--出生年月-->
            <div class="form-group row">
              <label for="birthday" class="col-3 control-label">
                <i>出生年月</i>
              </label>
              <input id="birthday" type="date" class="form-control col-7" name="parts_city_img_url"
                     v-bind:value="modifyData.birthday">
            </div>
            <!--工作年限-->
            <div class="form-group row">
              <label for="workingLife" class="col-3 control-label">
                <i>工作年限</i>
              </label>
              <input id="workingLife" type="text" class="form-control col-7" name="parts_city_img_url"
                     v-bind:value="modifyData.workingLife">
            </div>
            <!--学历-->
            <div class="form-group row">
              <label for="education" class="col-3 control-label">
                <i>学历</i>
              </label>
              <select id="education" class="form-control col-7" name="parts_city_img_url"
                      v-bind:value="modifyData.education">
                <option selected>{{educationOption[modifyData.education-1]}}</option>
                <option v-for="(education, index) in educationOption"
                        v-if="(index+1) !== Math.ceil(modifyData.education)">{{education}}
                </option>
              </select>
            </div>
            <!--手机号-->
            <div class="form-group row">
              <label for="mobilePhoneNum" class="col-3 control-label">
                <i>手机号</i>
              </label>
              <input id="mobilePhoneNum" type="text" class="form-control col-7" name="parts_city_img_url" readonly
                     v-bind:value="modifyData.mobilePhoneNum">
            </div>
          </form>
        </div>
        <div class="modal-footer" style="">
          <button type="button" value="" class="btn btn-sm btn-secondary" data-dismiss="modal">返回</button>
          <button type="button" value="" class="btn btn-sm btn-primary" @click="revampData">确认</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "RevampCity",
    props: ['modifyData'],
    data() {
      return {
        educationOption: ['高中', '大专', '本科', '硕士', '博士', '博士后'],
      }
    },
    methods: {
      revampData: function () {
        let _this = this;
        this.$axios({
          url: _this.HOME + '/vitae/modify',
          method: 'POST',
          headers: {'content-type': 'application/x-www-form-urlencoded'},
          data: _this.qs.stringify({
            "id": $('#id').text(),
            "wantedPosition": $('#wantedPosition').val(),
            "salary": $('#salary').val(),
            "name": $('#name').val(),
            "sex": $('#sex').val(),
            "birthday": $('#birthday').val(),
            "workingLife": $('#workingLife').val(),
            "education": $('#education').val(),
            "mobilePhoneNum": $('#mobilePhoneNum').val(),
            "cvCode": _this.modifyData.cvCode,
          })
        }).then(res => {
          alert(res.data.message);
          if (res.data.data.code) {
            $('#close').click();
            _this.$emit('dataInteractTrue');
          }
        }).catch(e => {
          console.log(e);
        })
      }
    }
  }
</script>

<style scoped>

</style>
