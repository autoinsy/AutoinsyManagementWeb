<template>
  <div class="modal fade" id="AddNews" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <!--背景over-->
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-title" id="myModalLabel">
          <button type="button" id="addClose" class="close myclose" data-dismiss="modal" aria-hidden="true">&times;
          </button>
          <p class="myshow">添加法律信息</p>
        </div>
        <!--弹出标头over-->
        <div class="modal-body">
          <form class="form-horizontal">
            <div class="form-group row">
              <label for="addTitle" class="col-3 control-label">
                <span>新闻标题</span>
              </label>
              <input id="addTitle" type="text" class="col-7 form-control"/>
            </div>
            <div class="form-group row">
              <label for="addTime" class="col-3 control-label">
                <span>发布时间</span>
              </label>
              <input id="addTime" type="datetime-local" class="col-7 form-control"/>
            </div>
            <div class="form-group row">
              <label for="addContent" class="col-3 control-label">
                <span>新闻内容</span>
              </label>
              <textarea id="addContent" rows="5" class="col-7 form-control"></textarea>
            </div>
          </form>
          <!--表单over-->
        </div>
        <div class="modal-footer" style="margin: 0 auto; width:240px;border:none;">
          <input type="button" value="返回" class="subBtns" data-dismiss="modal"/>
          <input type="button" value="确认" class="subBtns" @click="AddData"/>
        </div>
        <!--弹出 over-->
      </div>
    </div>
    <!--弹出 over-->
  </div>
</template>

<script>
  export default {
    name: "AddNews",
    mounted: function () {
      this.$('[data-toggle="popover"]').popover();
    },
    methods: {
      AddData: function () {
        let edit_this = this;
        this.$axios({
          method: 'post',
          url: this.HOME + '/news/add',
          data: edit_this.qs.stringify({
            'news_title': $('#addTitle').val(),
            'publish_time': $('#addTime').val(),
            'news_content': $('#addContent').val(),
          })
        }).then(function (response) {
          alert(response.data.message);
          if (Math.ceil(response.data.code) === 200) {
            $('#addClose').click();
            edit_this.$emit('dataInteractTrue');
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
