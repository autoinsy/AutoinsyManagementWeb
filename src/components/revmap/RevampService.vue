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
            <div class="form-group">
              <label for="title" class="col-2 control-label">
                <i>服务名称</i>
              </label>
              <input id="title" type="text" class="form-control col-10" name="parts_city_title"
                     v-bind:value="modifyData.title">
            </div>
            <div class="form-group">
              <label for="publishTime" class="col-2 control-label">
                <i>发布时间</i>
              </label>
              <input id="publishTime" type="text" class="form-control col-10" name="parts_city_title"
                     v-bind:value="modifyData.publishTime">
            </div>
            <div class="form-group">
              <label for="serviceArea" class="col-2 control-label">
                <i>服务区域</i>
              </label>
              <input id="serviceArea" type="text" class="form-control col-10" name="parts_city_title"
                     v-bind:value="modifyData.serviceArea">
            </div>
            <div class="form-group">
              <label for="contacts" class="col-2 control-label">
                <i>联系人</i>
              </label>
              <input id="contacts" type="text" class="form-control col-10" name="parts_city_title"
                     v-bind:value="modifyData.contacts">
            </div>
            <div class="form-group">
              <label for="address" class="col-2 control-label">
                <i>商家地址</i>
              </label>
              <input id="address" type="text" class="form-control col-10" name="parts_city_title"
                     v-bind:value="modifyData.address">
            </div>
            <div class="form-group">
              <label for="storeName" class="col-2 control-label">
                <i>商家名称</i>
              </label>
              <input id="storeName" type="text" class="form-control col-10" name="parts_city_title"
                     v-bind:value="modifyData.storeName">
            </div>
            <div class="form-group">
              <label for="serviceType" class="col-2 control-label">
                <i>服务类型</i>
              </label>
              <input id="serviceType" type="text" class="form-control col-10" name="parts_city_title"
                     v-bind:value="modifyData.serviceType">
            </div>
            <div class="form-group">
              <label for="descript" class="col-2 control-label">
                <i>描述</i>
              </label>
              <input id="descript" type="text" class="form-control col-10" name="parts_city_title"
                     v-bind:value="modifyData.descript">
            </div>
            <div class="form-group">
              <label for="mobilePhoneNo" class="col-2 control-label">
                <i>手机号</i>
              </label>
              <input id="mobilePhoneNo" type="text" class="form-control col-10" name="parts_city_title"
                     v-bind:value="modifyData.mobilePhoneNo">
            </div>
            <div class="form-group">
              <label for="qrCode" class="col-2 control-label">
                <i>二维码地址</i>
              </label>
              <input id="qrCode" type="text" class="form-control col-10" name="parts_city_title"
                     v-bind:value="modifyData.qrCode">
            </div>
            <div class="form-group">
              <label for="serviceCode" class="col-2 control-label">
                <i>服务编号</i>
              </label>
              <input id="serviceCode" type="text" class="form-control col-10"
                     name="parts_city_title"
                     v-bind:value="modifyData.serviceCode">
            </div>
            <div class="form-group">
              <label for="serviceImagesSet" class="col-2 control-label">
                <i>图片</i>
              </label>
              <input id="serviceImagesSet" type="text" class="form-control col-10"
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
          url: _this.HOME + '/autoinsyCity/modify',
          method: 'POST',
          headers: {'content-type': 'application/x-www-form-urlencoded'},
          data: _this.qs.stringify({
            "serviceID": $('#serviceID').text(),
            "title": $('#title').val(),
            "publishTime": $('#publishTime').val(),
            "serviceArea": $('#serviceArea').val(),
            "contacts": $('#contacts').val(),
            "address": $('#address').val(),
            "storeName": $('#storeName').val(),
            "serviceType": $('#serviceType').val(),
            "descript": $('#descript').val(),
            "mobilePhoneNo": $('#mobilePhoneNo').val(),
            "qrCode": $('#qrCode').val(),
            "serviceCode": $('#serviceCode').val(),
            "serviceImagesSet": $('#serviceImagesSet').val(),
          })
        }).then(res => {
          alert(res.data.message);
          $('#close').click();
          _this.$emit('dataInteractTrue');
        }).catch(e => {
          console.log(e);
        })
      }
    }
  }
</script>

<style scoped>

</style>
