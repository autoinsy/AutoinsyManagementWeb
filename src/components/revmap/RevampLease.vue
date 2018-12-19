<template>
  <div class="modal fade" id="revampLease" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
       aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-title" id="myModalLabel">
          <button type="button" id="close" class="close" data-dismiss="modal" aria-hidden="true">&times;
          </button>
          <h1 class="modal-header">修改租赁信息<span id="leaseId" style="display: none">{{modifyData.leaseId}}</span></h1>
        </div>
        <div class="modal-body">
          <form class="form-horizontal">
            <!--商铺位置-->
            <div class="form-group">
              <label for="stallPosition" class="col-2 control-label">
                <i>商铺位</i>
              </label>
              <input id="stallPosition" class="form-control" v-bind:value="modifyData.stallPosition"/>
            </div>
            <!--价格-->
            <div class="form-group">
              <label for="price" class="col-2 control-label">
                <i>价格</i>
              </label>
              <input id="price" class="form-control" v-bind:value="modifyData.price"/>
            </div>
            <!--租期-->
            <div class="form-group">
              <label for="leaseTerm" class="col-2 control-label">
                <i>租期</i>
              </label>
              <input id="leaseTerm" class="form-control" v-bind:value="modifyData.leaseTerm"/>
            </div>
            <!--标题-->
            <div class="form-group">
              <label for="title" class="col-2 control-label">
                <i>标题</i>
              </label>
              <input id="title" class="form-control" v-bind:value="modifyData.title"/>
            </div>
            <!--描述-->
            <div class="form-group">
              <label for="descript" class="col-2 control-label">
                <i>描述</i>
              </label>
              <input id="descript" class="form-control" v-bind:value="modifyData.descript"/>
            </div>
            <!--联系人-->
            <div class="form-group">
              <label for="contacts" class="col-2 control-label">
                <i>联系人</i>
              </label>
              <input id="contacts" class="form-control" v-bind:value="modifyData.contacts"/>
            </div>
            <!--手机号-->
            <div class="form-group">
              <label for="mobile_phone_num" class="col-2 control-label">
                <i>手机号</i>
              </label>
              <input id="mobile_phone_num" class="form-control" v-bind:value="modifyData.mobile_phone_num"/>
            </div>
            <!--档口编号-->
            <div class="form-group">
              <label for="stallCode" class="col-2 control-label">
                <i>档口编</i>
              </label>
              <input id="stallCode" class="form-control" v-bind:value="modifyData.stallCode"/>
            </div>
            <!--租赁编号-->
            <div class="form-group">
              <label for="leaseCode" class="col-2 control-label">
                <i>租赁编号</i>
              </label>
              <input id="leaseCode" class="form-control" v-bind:value="modifyData.leaseCode"/>
            </div>
            <!--发的帖子数量-->
            <div class="form-group">
              <label for="watchNumber" class="col-2 control-label">
                <i>发的帖子数量</i>
              </label>
              <input id="watchNumber" class="form-control" v-bind:value="modifyData.watchNumber"/>
            </div>
            <!--租赁信息来源-->
            <div class="form-group">
              <label for="leaseInfoSource" class="col-2 control-label">
                <i>租赁信息来源</i>
              </label>
              <input id="leaseInfoSource" class="form-control" v-bind:value="modifyData.leaseInfoSource"/>
            </div>
            <!--租赁类型,1代表店铺，2代表库房，3代表写字间-->
            <div class="form-group">
              <label for="leaseType" class="col-2 control-label">
                <i>租赁类型,1代表店铺，2代表库房，3代表写字间</i>
              </label>
              <select id="leaseType" class="form-control" v-bind:value="modifyData.leaseType">
                <option v-bind:value="modifyData.leaseType">{{leaseTypeOption[modifyData.leaseType-1]}}
                <option v-for="(leaseType, index) in leaseTypeOption"
                        v-if="(index+1) !== Math.ceil(modifyData.leaseType)" v-bind:value="index+1">
                  {{leaseType}}
                </option>
              </select>
            </div>
            <!--面积种类编号 1：5平以下，2：5-10ping，3：10-50平，4：50-100平，5：100平以上-->
            <div class="form-group">
              <label for="acreageTypeCode" class="col-2 control-label">
                <i>面积种类编号 1：5平以下，2：5-10ping，3：10-50平，4：50-100平，5：100平以上</i>
              </label>
              <select id="acreageTypeCode" class="form-control" v-bind:value="modifyData.acreageTypeCode">
                <option v-bind:value="modifyData.acreageTypeCode">{{acreageTypeCodeOption[modifyData.acreageTypeCode-1]}}
                <option v-for="(acreageTypeCode, index) in acreageTypeCodeOption"
                        v-if="(index+1) !== Math.ceil(modifyData.acreageTypeCode)" v-bind:value="index+1">
                  {{acreageTypeCode}}
                </option>
              </select>
            </div>
            <!--信息来源，1-代表个人，2-公司-->
            <div class="form-group">
              <label for="leaseInfoSourceCode" class="col-2 control-label">
                <i>信息来源，1-代表个人，2-公司</i>
              </label>
              <select id="leaseInfoSourceCode" class="form-control" v-bind:value="modifyData.leaseInfoSourceCode">
                <option v-bind:value="modifyData.leaseInfoSourceCode">{{leaseInfoSourceCodeOption[modifyData.leaseInfoSourceCode-1]}}
                <option v-for="(leaseInfoSourceCode, index) in leaseInfoSourceCodeOption"
                        v-if="(index+1) !== Math.ceil(modifyData.leaseInfoSourceCode)" v-bind:value="index+1">
                  {{leaseInfoSourceCode}}
                </option>
              </select>
            </div>
            <!--1代表店铺，2代表库房，3代表写字间，4代表转让-->
            <div class="form-group">
              <label for="leaseTypeCode" class="col-2 control-label">
                <i>1代表店铺，2代表库房，3代表写字间，4代表转让</i>
              </label>
              <select id="leaseTypeCode" class="form-control" v-bind:value="modifyData.leaseTypeCode">
                <option v-bind:value="modifyData.leaseTypeCode">{{leaseTypeCodeOption[modifyData.leaseTypeCode-1]}}
                </option>
                <option v-for="(leaseTypeCode, index) in leaseTypeCodeOption"
                        v-if="(index+1) !== Math.ceil(modifyData.leaseTypeCode)" v-bind:value="index+1">
                  {{leaseTypeCode}}
                </option>
              </select>
            </div>
            <!--图片-->
            <div class="form-group">
              <label for="leaseImageSet" class="col-2 control-label">
                <i>图片</i>
              </label>
              <input id="leaseImageSet" type="file" class="form-control" v-bind:value="modifyData.leaseImageSet"/>
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
        leaseTypeOption: ['店铺', '库房', '写字间'],
        acreageTypeCodeOption: ['5平以下', '5-10平', '10-50平', '50-100平', '100平以上'],
        leaseInfoSourceCodeOption: ['个人', '公司'],
        leaseTypeCodeOption: ['店铺', '库房', '写字间', '转让'],
      }
    },
    methods: {
      revampData: function () {
        let _this = this;
        this.$axios({
          url: _this.HOME + '/lease/modify',
          method: 'POST',
          headers: {'content-type': 'application/x-www-form-urlencoded'},
          data: _this.qs.stringify({
            "leaseId": $('#leaseId').text(),
            "leaseType": $('#leaseType').val(),
            "acreage": $('#acreage').val(),
            "stallPosition": $('#stallPosition').val(),
            "price": $('#price').val(),
            "leaseTerm": $('#leaseTerm').val(),
            "title": $('#title').val(),
            "descript": $('#descript').val(),
            "contacts": $('#contacts').val(),
            "mobile_phone_num": $('#mobile_phone_num').val(),
            "stallCode": $('#stallCode').val(),
            "leaseCode": $('#leaseCode').val(),
            "watchNumber": $('#watchNumber').val(),
            "publishDate": $('#publishDate').val(),
            "leaseInfoSource": $('#leaseInfoSource').val(),
            "acreageTypeCode": $('#acreageTypeCode').val(),
            "leaseInfoSourceCode": $('#leaseInfoSourceCode').val(),
            "leaseTypeCode": $('#leaseTypeCode').val(),
            "leaseImageSet": $('#leaseImageSet').val()
          })
        }).then(res => {
          alert(res.data.message);
        }).catch(e => {
          console.log(e);
        })
      }
    }
  }
</script>

<style scoped>

</style>
