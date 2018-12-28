<template>
  <div class="modal fade" id="revampLaw" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
       aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-title" id="myModalLabel">
          <button type="button" id="revampClose" class="close" data-dismiss="modal" aria-hidden="true">&times;
          </button>
          <h1 class="modal-header">修改法律声明信息<span id="revampStatementId" style="display: none">{{modifyData.statementId}}</span></h1>
        </div>
        <div class="modal-body">
          <form class="form-horizontal">
            <div class="form-group">
              <label for="revampStatementName" class="col-2 control-label">
                <i>法律声明标题</i>
              </label>
              <input id="revampStatementName" type="text" class="form-control col-10" name="statement_name"
                     v-bind:value="modifyData.statementName">
            </div>
            <div class="form-group">
              <label for="revampStatementDate">
                <i>发布日期</i>
              </label>
              <input id="revampStatementDate" type="text" class="form-control" name="statement_date"
                     v-bind:value="modifyData.statementDate">
            </div>
            <div class="form-group">
              <label for="revampStatement">
                <i>法律声明</i>
              </label>
              <textarea id="revampStatement" rows="3" class="form-control" name="statement">{{modifyData.statement}}</textarea>
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
          url: _this.HOME + '/lawstatement/modify',
          method: 'POST',
          headers: {'content-type': 'application/x-www-form-urlencoded'},
          data: _this.qs.stringify({
            "law_statement_id": $('#revampStatementId').text(),
            "statement": $('#revampStatement').val(),
            "statement_date": $('#revampStatementDate').val(),
            "statement_name": $('#revampStatementName').val(),
          })
        }).then(res => {
          alert(res.data.message);
          $('#revampClose').click();
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
