<template>
  <div class="modal fade" id="revampUser" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
       aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-title" id="myModalLabel">
          <button type="button" id="close" class="close" data-dismiss="modal" aria-hidden="true">&times;
          </button>
          <h1 class="modal-header">修改&nbsp;&nbsp;{{modifyData.userName}}&nbsp;&nbsp;信息
            <span id="userId" style="display: none">{{modifyData.userId}}</span>
          </h1>
        </div>
        <div class="modal-body">
          <form class="form-horizontal">
            <div class="form-group row">
              <label for="permission" class="col-3 control-label">
                <i>用户角色</i>
              </label>
              <input id="permission" type="text" class="form-control col-7" name="parts_city_title"
                     v-bind:value="modifyData.permission.permissionName" v-if="modifyData.permission">
            </div>
            <div class="form-group row">
              <label for="name" class="col-3 control-label">
                <i>汽配城名称</i>
              </label>
              <div id="name" class="form-control col-7" >
                <input v-if="modifyData.permission" v-for="(role, index) in modifyData.permission.roles" :title="role.roleName" type="checkbox" v-bind:value="role.roleId"/>{{role.roleName}}
              </div>
            </div>
            <div class="form-group row">
              <label for="address" class="col-3 control-label">
                <i>汽配城地址</i>
              </label>
              <input id="address" type="text" class="form-control col-7" name="parts_city_address"
                     v-bind:value="modifyData.cityAddress">
            </div>
            <div class="form-group row">
              <label for="content" class="col-3 control-label">
                <i>汽配城简介</i>
              </label>
              <textarea id="content" rows="3" class="form-control col-7" name="parts_city_content">
                {{modifyData.cityContent}}
              </textarea>
            </div>
            <div class="form-group row">
              <label for="imgUrl" class="col-3 control-label">
                <i>汽配城图片</i>
              </label>
              <input id="imgUrl" type="file" class="form-control col-7" name="parts_city_img_url"/>
              <!--v-bind:value="modifyData.cityImgUrl">-->
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
        roleList: []
      }
    },
    mounted: function() {
      let _this = this;
      this.$axios({
        url: _this.HOME + '/user/listRoles'
      }).then(res => {
        _this.roleList = res.data.data;
      })
    },
    methods: {
      revampData: function () {
        let _this = this;
        this.$axios({
          url: _this.HOME + '/user/modify',
          method: 'POST',
          headers: { 'content-type': 'application/x-www-form-urlencoded' },
          data: _this.qs.stringify({
            "parts_city_id": $('#cityId').text(),
            "parts_city_name": $('#name').val(),
            "parts_city_address": $('#address').val(),
            "parts_city_img_url": $('#imgUrl').val(),
            "parts_city_title": $('#title').val(),
            "parts_city_content": $('#content').val()
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
