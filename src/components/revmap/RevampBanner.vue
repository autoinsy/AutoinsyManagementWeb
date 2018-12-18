<template>
  <div class="modal fade" id="revampCity" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
       aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-title" id="myModalLabel">
          <button type="button" id="close" class="close" data-dismiss="modal" aria-hidden="true">&times;
          </button>
          <h1 class="modal-header">修改汽配城信息<span id="advertisementId" style="display: none">{{modifyData.advertisement_id}}</span>
          </h1>
        </div>
        <div class="modal-body">
          <form class="form-horizontal">
            <div class="form-group">
              <label for="name" class="col-2 control-label">
                <i>广告名称</i>
              </label>
              <input id="name" type="text" class="form-control col-10" name="advertisement_name"
                     v-bind:value="modifyData.advertisementName">
            </div>
            <div class="form-group">
              <label for="hreUrl">
                <i>子广告url</i>
              </label>
              <input id="hreUrl" type="text" class="form-control" name="advertisement_hreUrl"
                     v-bind:value="modifyData.advertisementHrefName">
            </div>
            <div class="form-group">
              <label for="url">
                <i>顶部广告url</i>
              </label>
              <input id="url" type="text" class="form-control" name="advertisement_url" v-bind:value="modifyData.advertisementUrl"/>
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
          url: _this.HOME + '/advertisement/modify',
          method: 'POST',
          headers: {'content-type': 'application/x-www-form-urlencoded'},
          data: _this.qs.stringify({
            "advertisement_id": $('#advertisementId').text(),
            "advertisement_name": $('#name').val(),
            "advertisement_url": $('#hreUrl').val(),
            "advertisement_hreUrl": $('#url').val(),
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
