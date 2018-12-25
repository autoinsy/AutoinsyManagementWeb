<template>
  <div class="modal fade" id="revampRecruit" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
       aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-title" id="myModalLabel">
          <button type="button" id="close" class="close" data-dismiss="modal" aria-hidden="true">&times;
          </button>
          <h1 class="modal-header">修改招聘信息<span id="recruitId" style="display: none">{{modifyData.recruitID}}</span></h1>
        </div>
        <div class="modal-body">
          <form class="form-horizontal">
            <!--招聘标题-->
            <div class="form-group row">
              <label for="title" class="col-3 control-label">
                <i>招聘标题</i>
              </label>
              <input id="title" type="text" class="form-control col-7" name="parts_city_title"
                     v-bind:value="modifyData.title">
            </div>
            <!--最低薪资-->
            <!--最高薪资-->
            <div class="form-group row">
              <label for="address" class="col-3 control-label">
                <i>汽配城地址</i>
              </label>
              <div class="row col-7">
                <input id="startSalary" type="text" class="form-control col col-5" name="parts_city_address"
                       v-bind:value="modifyData.startSalary"/>
                ——
                <input id="endSalary" type="text" class="form-control col col-5" name="parts_city_address"
                       v-bind:value="modifyData.endSalary"/>
              </div>
            </div>
            <!--公司名称-->
            <div class="form-group row">
              <label for="companyName" class="col-3 control-label">
                <i>公司名称</i>
              </label>
              <input id="companyName" type="text" class="form-control col-7" name="parts_city_name"
                     v-bind:value="modifyData.companyName">
            </div>
            <!--商家地址-->
            <div class="form-group row">
              <label for="sellerAddress" class="col-3 control-label">
                <i>商家地址</i>
              </label>
              <input id="sellerAddress" type="text" class="form-control col-7" name="parts_city_name"
                     v-bind:value="modifyData.sellerAddress">
            </div>
            <!--招聘人数-->
            <div class="form-group row">
              <label for="recruitPersonNumber" class="col-3 control-label">
                <i>招聘人数</i>
              </label>
              <input id="recruitPersonNumber" type="text" class="form-control col-7" name="parts_city_name"
                     v-bind:value="modifyData.recruitPersonNumber">
            </div>
            <!--学历要求-->
            <div class="form-group row">
              <label for="educationRequirement" class="col-3 control-label">
                <i>学历要求</i>
              </label>
              <input id="educationRequirement" type="text" class="form-control col-7" name="parts_city_name"
                     v-bind:value="modifyData.educationRequirement">
            </div>
            <!--工作经验-->
            <div class="form-group row">
              <label for="experience" class="col-3 control-label">
                <i>工作经验</i>
              </label>
              <input id="experience" type="text" class="form-control col-7" name="parts_city_name"
                     v-bind:value="modifyData.experience">
            </div>
            <!--职位要求-->
            <div class="form-group row">
              <label for="positionRequirement" class="col-3 control-label">
                <i>职位要求</i>
              </label>
              <input id="positionRequirement" type="text" class="form-control col-7" name="parts_city_name"
                     v-bind:value="modifyData.positionRequirement">
            </div>
            <!--任职要求-->
            <div class="form-group row">
              <label for="takeOfficeRequirement" class="col-3 control-label">
                <i>任职要求</i>
              </label>
              <input id="takeOfficeRequirement" type="text" class="form-control col-7" name="parts_city_name"
                     v-bind:value="modifyData.takeOfficeRequirement">
            </div>
            <!--联系电话-->
            <div class="form-group row">
              <label for="contactPhoneNum" class="col-3 control-label">
                <i>联系电话</i>
              </label>
              <input id="contactPhoneNum" type="text" class="form-control col-7" name="parts_city_name"
                     v-bind:value="modifyData.contactPhoneNum">
            </div>
            <!--发布时间-->
            <div class="form-group row">
              <label for="publishTime" class="col-3 control-label">
                <i>发布时间</i>
              </label>
              <input id="publishTime" type="text" class="form-control col-7" name="parts_city_name"
                     v-bind:value="modifyData.publishTime">
            </div>
            <!--手机号码-->
            <div class="form-group row">
              <label for="mobilePhoneNum" class="col-3 control-label">
                <i>手机号码</i>
              </label>
              <input id="mobilePhoneNum" type="text" class="form-control col-7" name="parts_city_title"
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
    methods: {
      revampData: function () {
        let _this = this;
        this.$axios({
          url: _this.HOME + '/recuit/modify',
          method: 'POST',
          headers: {'content-type': 'application/x-www-form-urlencoded'},
          data: _this.qs.stringify({
            "recruit_id": $('#recruitId').text(),
            "title": $('#title').val(),
            "company_name": $('#companyName').val(),
            "start_salary": $('#startSalary').val(),
            "seller_address": $('#sellerAddress').val(),
            "recruit_person_number": $('#recruitPersonNumber').val(),
            "education_requirement": $('#educationRequirement').val(),
            "experience": $('#experience').val(),
            "position_requirement": $('#positionRequirement').val(),
            "take_office_requirement": $('#takeOfficeRequirement').val(),
            "contact_phone_num": $('#contactPhoneNum').val(),
            "weichat": $('#weichat').val(),
            "publish_time": $('#publishTime').val(),
            "end_salary": $('#endSalary').val(),
            "mobile_phone_num": $('#mobilePhoneNum').val(),
          })
        }).then(res => {
          alert(res.data.message);
          if (Math.ceil(res.data.code) === 200) {
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
