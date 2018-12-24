<template>
  <div class="modal fade" id="revampLease" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
       aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-title" id="myModalLabel">
          <button type="button" id="close" class="close" data-dismiss="modal" aria-hidden="true">&times;
          </button>
          <h1 class="modal-header">
            修改租赁信息
            <span id="leaseId" style="display: none">{{modifyData.leaseId}}</span>
          </h1>
        </div>

        <div class="modal-body">
          <form class="form-horizontal">
            <!--商铺位置-->
            <div class="form-group">
              <label for="stallPosition" class="col-2 control-label">
                <i>商铺位置</i>
              </label>
              <input id="stallPosition" type="text" class="form-control" v-bind:value="modifyData.stallPosition"/>
            </div>
            <!--价格-->
            <div class="form-group">
              <label for="price" class="col-2 control-label">
                <i>价格</i>
              </label>
              <input id="price" class="form-control" type="text" v-bind:value="modifyData.price"/>
            </div>
            <!--租期-->
            <div class="form-group">
              <label for="leaseTerm" class="col-2 control-label">
                <i>租期</i>
              </label>
              <input id="leaseTerm" class="form-control" type="text" v-bind:value="modifyData.leaseTerm"/>
            </div>
            <!--标题-->
            <div class="form-group">
              <label for="title" class="col-2 control-label">
                <i>标题</i>
              </label>
              <input id="title" class="form-control" type="text" v-bind:value="modifyData.title"/>
            </div>
            <!--描述-->
            <div class="form-group">
              <label for="descript" class="col-2 control-label">
                <i>描述</i>
              </label>
              <textarea id="descript" class="form-control">
                {{modifyData.descript}}
              </textarea>
            </div>
            <!--租赁类型,1代表店铺，2代表库房，3代表写字间-->
            <div class="form-group">
              <label for="leaseTypeCode" class="col-2 control-label">
                <i>租赁类型</i>
              </label>
              <select id="leaseTypeCode" class="form-control" v-bind:value="modifyData.leaseTypeCode">
                <option v-bind:value="modifyData.leaseTypeCode">
                  {{leaseTypeCodeOption[modifyData.leaseTypeCode-1]}}
                </option>
                <option v-for="(leaseType, index) in leaseTypeCodeOption"
                        v-if="(index+1) !== Math.ceil(modifyData.leaseType)" v-bind:value="index+1">
                  {{leaseType}}
                </option>
              </select>
            </div>
            <!--面积种类编号 1：5平以下，2：5-10ping，3：10-50平，4：50-100平，5：100平以上-->
            <div class="form-group">
              <label for="acreageTypeCode" class="col-2 control-label">
                <i>面积种类</i>
              </label>
              <select id="acreageTypeCode" class="form-control" v-bind:value="modifyData.acreageTypeCode">
                <option v-bind:value="modifyData.acreageTypeCode">
                  {{acreageTypeCodeOption[modifyData.acreageTypeCode-1]}}
                </option>
                <option v-for="(acreageTypeCode, index) in acreageTypeCodeOption"
                        v-if="(index+1) !== Math.ceil(modifyData.acreageTypeCode)" v-bind:value="index+1">
                  {{acreageTypeCode}}
                </option>
              </select>
            </div>
            <!--信息来源，1-代表个人，2-公司-->
            <div class="form-group">
              <label for="leaseInfoSourceCode" class="col-2 control-label">
                <i>信息来源</i>
              </label>
              <select id="leaseInfoSourceCode" class="form-control" v-bind:value="modifyData.leaseInfoSourceCode">
                <option v-bind:value="modifyData.leaseInfoSourceCode">
                  {{leaseInfoSourceCodeOption[modifyData.leaseInfoSourceCode-1]}}
                </option>
                <option v-for="(leaseInfoSourceCode, index) in leaseInfoSourceCodeOption"
                        v-if="(index+1) !== Math.ceil(modifyData.leaseInfoSourceCode)" v-bind:value="index+1">
                  {{leaseInfoSourceCode}}
                </option>
              </select>
            </div>
            <!--图片-->
            <div class="form-group">
              <label for="leaseImageSet" class="col-2 control-label">
                <i>图片</i>
              </label>
              <input id="leaseImageSet" type="file" class="form-control"/>
              <div class="row">
                <img class="col col-4" v-for="(img, index) in modifyData.leaseImageSet" v-bind:src="img.leaseImageUrl"
                     style="height: 20%"/>
              </div>
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
        acreageTypeCodeOption: ['5平以下', '5-10平', '10-50平', '50-100平', '100平以上'],
        leaseInfoSourceCodeOption: ['个人', '公司'],
        leaseTypeCodeOption: ['店铺', '库房', '写字间', '转让'],
        imgUrlList: []
      }
    },
    watch: {
      modifyData: function (n, o) {
        let _this = this;
        for (let i = 0; i < n.leaseImageSet.length; i++) {
          _this.imgUrlList[i] = n.leaseImageSet[i].leaseImageUrl;
        }
        console.log(_this.imgUrlList);
      },
    },
    mounted: function () {
      let _this = this;
      this.$('input[type="file"]').fileinput({
        language: 'zh',
        showCancel: false,
        showBrowse: false,
        showPreview: true,
        showCaption: false,
        browseOnZoneClick: true,
        dropZoneTitleClass: 'drop_zone_title',
        fileActionSettings: {
          showUpload: false,
          showDownload: false,
          showRemove: false,
          showZoom: false,
          showDrag: false,
        },
        previewZoomButtonIcons: {
          prev: '<i class="glyphicon glyphicon-triangle-left"></i>',
          next: '<i class="glyphicon glyphicon-triangle-right"></i>',
          toggleheader: '<i class="glyphicon glyphicon-resize-vertical"></i>',
          fullscreen: '<i class="glyphicon glyphicon-fullscreen"></i>',
          borderless: '<i class="glyphicon glyphicon-resize-full"></i>',
          close: '<i class="glyphicon glyphicon-remove"></i>'
        },
        initialPreview: _this.imgUrlList
      }).on("fileuploaded", function (event, data, previewId, index) {
        let successData = data.response.data;
        let elementId = event.currentTarget.id;
        let imgElements = $('#' + elementId).parent().parent().children('img');
        $(imgElements).attr("src", successData);
      })
    },
    methods: {
      revampData: function () {
        let _this = this;
        // console.log(JSON.parse(_this.modifyData.leaseImageSet));
        this.$axios({
          url: _this.HOME + '/lease/modify',
          method: 'POST',
          headers: {'content-type': 'application/x-www-form-urlencoded'},
          data: _this.qs.stringify({
            "leaseId": $('#leaseId').text(),
            "stallPosition": $('#stallPosition').val(),
            "price": $('#price').val(),
            "leaseTerm": $('#leaseTerm').val(),
            "title": $('#title').val(),
            "descript": $('#descript').val(),
            "acreageTypeCode": $('#acreageTypeCode').val(),
            "leaseInfoSourceCode": $('#leaseInfoSourceCode').val(),
            "leaseTypeCode": $('#leaseTypeCode').val(),
            "leaseType": _this.leaseTypeCodeOption[$('#leaseTypeCode').val() - 1],
            "acreage": _this.acreageTypeCodeOption[$('#acreageTypeCode').val() - 1],
            "leaseInfoSource": _this.leaseInfoSourceCodeOption[$('#leaseInfoSourceCode').val() - 1],
            "contacts": _this.modifyData.contacts,
            "mobile_phone_num": _this.modifyData.mobile_phone_num,
            "stallCode": _this.modifyData.stallCode,
            "leaseCode": _this.modifyData.leaseCode,
            "watchNumber": _this.modifyData.watchNumber,
            "leaseImageSet": _this.modifyData.leaseImageSet,
          })
        }).then(res => {
          alert(res.data.message);
          $('#close').click();
          _this.$emit('dataInteractTrue');
        }).catch(e => {
          console.log(e);
        })
      },
    }
  }
</script>

<style scoped>

</style>
