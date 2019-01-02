<template>
  <div class="modal fade" id="AddData" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
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
          <form class="">
            <fieldset style="border:none;">
              <legend style="display:none"></legend>
              <p class="from-p">
                <label for="statement_name" class="from-left"><em>*</em>标题</label>
                <input type="text" id="statement_name" v-model="statement_name" class="from-right from-input"
                       placeholder="请输入标题"/>
              </p>
              <div class="clear"></div>
              <!--part one-->
              <p class="from-p">
                <label for="statement" class="from-left"><em>*</em>法律声明</label>
                <textarea id="statement" v-model="statement" class="from-right from-input textareastyles"
                          placeholder="请输入法律声明"></textarea>
              </p>
              <div class="clear"></div>
              <!--part one-->
              <p class="from-p">
                <label for="statement_date" class="from-left"><em>*</em>发布日期</label>
                <input type="date" id="statement_date" v-model="statement_date" class="from-right from-input"/>
              </p>
              <div class="clear"></div>
              <!--part one-->
            </fieldset>
          </form>
          <!--表单over-->
        </div>
        <div class="modal-footer" style="margin: 0 auto; width:240px;border:none;">
          <input type="button" value="返回" class="subBtns btn-return" data-dismiss="modal"/>
          <input type="button" value="确认" class="subBtns btn-return" @click="AddData"/>
        </div>
        <!--弹出 over-->
      </div>
    </div>
    <!--弹出 over-->
  </div>
</template>

<script>
  export default {

    mounted: function () {
      this.$('[data-toggle="popover"]').popover();
    },
    name: 'AddData',
    data() {
      return {
        statement_name:'',
        statement_date:'',
        statement:'',
      }
    },
    methods: {
      AddData: function () {
        let _this = this;
        this.$axios({
          method: 'post',
          url: this.HOME + '/lawstatement/add',
          data: _this.qs.stringify({
           'statement_name': _this.$('#statement_name').val(),
           'statement_date': _this.$('#statement_date').val(),
           'statement': _this.$('#statement').val()
          })
        }).then(function (response) {
          alert(response.data.message);
          if (Math.ceil(response.data.code) === 200) {
            $('#addClose').click();
            _this.$emit('dataInteractTrue');
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

<style>
  .btn-return{
    background-color: #ff6e00;
  }
  .modal-content p{
    text-align: left;
  }
  .textareastyles {
    height: 150px
  }
  .myshow{
    font-size: 24px;
    color:#000;
    line-height: 45px;
    padding-left: 10px;
    background-color: #ededed;
    border-radius: .3rem;
  }
  .myclose{
    line-height: 45px;
    margin-right: 10px;
  }
  .nav-stacked li{
    width:100%;
    display: block;
  }
  .from-p {
    clear: both
  }

  .from-left {
    float: left;
    font-size: 18px;
    color: #535353;
    margin-right: 25px;
    text-align: right;
    width: 100px;
    height: 18px
  }

  .from-right {
    float: right;
    margin-bottom: 28px
  }

  .from-input {
    width: 340px;
    margin-bottom: 28px !important;
    padding-left: 10px
  }

  .ejcet-from textarea {
    width: 700px;
    height: 375px;
    margin-bottom: 28px
  }

  .subBtns {
    color: #fff;
    border: none;
    width: 60px !important;
    height: 30px;
    line-height: 30px;
    text-align: center;
    margin: 10px 30px;
    float: left;
    border-radius: 5px
  }
  .modal-footer {
    padding: 14px 15px 15px;
    margin-bottom: 0;
    text-align: right;
    background-color: #fff !important;
    border-top: 1px solid #ddd;
    -webkit-border-radius: 0 0 6px 6px;
    -moz-border-radius: 0 0 6px 6px;
    border-radius: 0 0 6px 6px;
    *zoom: 1;
    -webkit-box-shadow: inset 0 1px 0 #ffffff;
    -moz-box-shadow: inset 0 1px 0 #ffffff;
    box-shadow: inset 0 1px 0 #ffffff;
  }

  .modal-footer:before,
  .modal-footer:after {
    display: table;
    line-height: 0;
    content: "";
  }

  .modal-footer:after {
    clear: both;
  }

  .modal-footer .btn + .btn {
    margin-bottom: 0;
    margin-left: 5px;
  }

  .modal-footer .btn-group .btn + .btn {
    margin-left: -1px;
  }

  .modal-footer .btn-block + .btn-block {
    margin-left: 0;
  }
  em{
    color:#ff6e00;
    margin: 10px 5px 0 0;
  }
</style>
