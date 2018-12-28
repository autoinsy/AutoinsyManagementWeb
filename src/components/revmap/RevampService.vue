<template>
  <div class="modal fade" id="revampService" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
       aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-title" id="myModalLabel">
          <button type="button" id="close" class="close" data-dismiss="modal" aria-hidden="true">&times;
          </button>
          <h1 class="modal-header">修改服务信息<span id="serviceID" style="display: none">{{modifyData.serviceID}}</span>
          </h1>
        </div>
        <div class="modal-body">
          <form class="form-horizontal">
            <div class="form-group row">
              <label for="title" class="col-3 control-label">
                <i>服务名称</i>
              </label>
              <input id="title" type="text" class="form-control col-7" name="parts_city_title"
                     v-bind:value="modifyData.title">
            </div>
            <div class="form-group row">
              <label for="serviceArea" class="col-3 control-label">
                <i>服务区域</i>
              </label>
              <input id="serviceArea" type="text" class="form-control col-7" name="parts_city_title"
                     v-bind:value="modifyData.serviceArea">
            </div>
            <div class="form-group row">
              <label for="contacts" class="col-3 control-label">
                <i>联系人</i>
              </label>
              <input id="contacts" type="text" class="form-control col-7" name="parts_city_title"
                     v-bind:value="modifyData.contacts">
            </div>
            <div class="form-group row">
              <label for="address" class="col-3 control-label">
                <i>商家地址</i>
              </label>
              <input id="address" type="text" class="form-control col-7" name="parts_city_title"
                     v-bind:value="modifyData.address">
            </div>
            <div class="form-group row">
              <label for="storeName" class="col-3 control-label">
                <i>商家名称</i>
              </label>
              <input id="storeName" type="text" class="form-control col-7" name="parts_city_title"
                     v-bind:value="modifyData.storeName">
            </div>
            <div class="form-group row">
              <label for="serviceType" class="col-3 control-label">
                <i>服务类型</i>
              </label>
              <input id="serviceType" type="text" class="form-control col-7" name="parts_city_title"
                     v-bind:value="modifyData.serviceType">
            </div>
            <div class="form-group row">
              <label for="descript" class="col-3 control-label">
                <i>描述</i>
              </label>
              <input id="descript" type="text" class="form-control col-7" name="parts_city_title"
                     v-bind:value="modifyData.descript">
            </div>
            <div class="form-group row">
              <label for="mobilePhoneNo" class="col-3 control-label">
                <i>手机号</i>
              </label>
              <input id="mobilePhoneNo" type="text" class="form-control col-7" name="parts_city_title"
                     v-bind:value="modifyData.mobilePhoneNo">
            </div>
            <div class="form-group row">
              <label for="serviceImagesSet" class="col-3 control-label">
                <i>图片</i>
              </label>
              <input id="serviceImagesSet" type="text" class="form-control col-7"
                     name="parts_city_title"
                     v-bind:value="modifyData.serviceImagesSet">
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
          url: _this.HOME + '/service/modify',
          method: 'POST',
          headers: {'content-type': 'application/x-www-form-urlencoded'},
          data: _this.qs.stringify({
            "serviceID": $('#serviceID').text(),
            "title": $('#title').val(),
            "serviceArea": $('#serviceArea').val(),
            "contacts": $('#contacts').val(),
            "address": $('#address').val(),
            "storeName": $('#storeName').val(),
            "serviceType": $('#serviceType').val(),
            "descript": $('#descript').val(),
            "mobilePhoneNo": $('#mobilePhoneNo').val(),
            "serviceImagesSet": $('#serviceImagesSet').val(),
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
