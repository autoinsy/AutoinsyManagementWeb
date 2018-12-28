<template>
  <div id="showSellerInfo" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="infoModal"
       aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-title" id="infoModal">
          <button type="button" id="infoClose" class="close" data-dismiss="modal" aria-hidden="true">&times;
          </button>
          <h1>查看商家详情</h1>
        </div>
        <div class="modal-body">
          <div>
            <button @click="toCheck">
              复制营业执照号， 去验证营业执照是否已经注册。
            </button>
          </div>
          <div>
            <label class="col-12">身份证号：
              <span id="identifyCardNum">{{modifyData.sellerAuthentication.identifyCardNum}}</span>
            </label>
            <label class="col-12">营业执照号：
              <span id="businessLicenceNumber">{{modifyData.sellerAuthentication.businessLicenceNumber}}</span>
            </label>
          </div>
          <div class="row">
            <div class="col col-6 row">
              <img class="col-10" v-bind:src="modifyData.sellerAuthentication.identifyCardImageFrontUrl"/>
            </div>
            <div class="col col-6 row">
              <img class="col-10" v-bind:src="modifyData.sellerAuthentication.identifyCardImageBackUrl"/>
            </div>
          </div>
          <!--{{modifyData}}-->
          <!--{{modifyData}}-->
        </div>
        <div class="modal-footer" style="">
          <button type="button" value="" class="btn btn-sm btn-secondary" data-dismiss="modal">返回</button>
          <button type="button" value="" class="btn btn-sm btn-primary" @click="revampData">认证</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "SellerInfo",
    props: ['modifyData'],
    watch: {
      modifyData: function (n, o) {
        $('#businessLicenceNumber').attr("data-clipboard-text", n.sellerAuthentication.businessLicenceNumber)
      }
    },
    methods: {
      revampData: function () {
        let _this = this;
        this.$axios({
          url: this.HOME+ '/user/modifySeller?sellerCode=' + _this.modifyData.sellerCode,
          method: 'POST'
        }).then(res => {
          if (res.data.code) {
            $('#infoClose').click();
            _this.$emit("dataInteractTrue")
          }
        })
      },
      toCheck: function () {
        $('#businessLicenceNumber').attr("data-clipboard-text");
        this.clipboard.on('success', e => {
          console.log('复制成功');
          window.open("http://www.gsxt.gov.cn/index.html");
          this.clipboard.destroy();
        });
        this.clipboard.on('error', e => {
          console.log('该浏览器不支持自动复制');
          this.clipboard.destroy()
        });
      }
    }
  }
</script>

<style scoped>

</style>
