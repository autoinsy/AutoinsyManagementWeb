<template>
  <div class="modal fade" id="revampNotice" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
       aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-title" id="myModalLabel">
          <button type="button" id="close" class="close" data-dismiss="modal" aria-hidden="true">&times;
          </button>
          <h1 class="modal-header">修改通知信息<span id="noticeId" style="display: none">{{modifyData.noticeId}}</span></h1>
        </div>
        <div class="modal-body">
          <form class="form-horizontal">
            <div class="form-group">
              <label for="noticeTime" class="col-2 control-label">
                <i>通知时间</i>
              </label>
              <input id="noticeTime" type="text" class="form-control col-10" name="parts_city_title"
                     v-bind:value="modifyData.noticeTime">
            </div>
            <div class="form-group">
              <label for="noticeLevel">
                <i>通知等级</i>
              </label>
              <input id="noticeLevel" type="text" class="form-control" name="parts_city_name"
                     v-bind:value="modifyData.noticeLevel">
            </div>
            <div class="form-group">
              <label for="noticeSource">
                <i>通知来源</i>
              </label>
              <input id="noticeSource" type="text" class="form-control" name="parts_city_address"
                     v-bind:value="modifyData.noticeSource">
            </div>
            <div class="form-group">
              <label for="noticeContent">
                <i>通知内容</i>
              </label>
              <textarea id="noticeContent" rows="3" class="form-control" name="parts_city_content">
                {{modifyData.noticeContent}}
              </textarea>
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
    name: "RevampNotice",
    props: ['modifyData'],
    methods: {
      revampData: function () {
        let _this = this;
        this.$axios({
          url: _this.HOME + '/notice/updateNotice',
          method: 'POST',
          headers: {'content-type': 'application/x-www-form-urlencoded'},
          data: _this.qs.stringify({
            "noticeId": $('#noticeId').text(),
            "noticeTime": $('#noticeTime').val(),
            "noticeLevel": $('#noticeLevel').val(),
            "noticeContent": $('#noticeContent').val(),
            "noticeSource": $('#noticeSource').val(),
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
