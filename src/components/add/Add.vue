<template>
  <div>
    <form role="form">
      <div class="form-group">
        <label for="realName">
          <input id="realName" type="text" class="form-control" placeholder="真实姓名......"/>
        </label>
      </div>
      <div class="form-group">
        <label for="userName">
          <input id="userName" type="text" class="form-control" placeholder="用户名......"/>
        </label>
      </div>
      <div class="form-group">
        <label for="userPassword">
          <input id="userPassword" type="password" class="form-control" placeholder="密码......"/>
        </label>
      </div>
      <div class="form-group">
        <label for="userEmail">
          <input id="userEmail" type="email" class="form-control" placeholder="邮箱......"/>
        </label>
      </div>
      <div class="form-group">
        <label for="telephone">
          <input id="telephone" type="text" class="form-control" placeholder="座机......"/>
        </label>
      </div>
      <div class="form-group" id="img">
        <div>
          <label for="img">
            <input type="file" class="form-control" placeholder="上传图片......"/>
          </label>
          <div v-for="base in base64">
            <img id="showImg" v-bind:src="base"/>
          </div>
        </div>
        <div>
          <label for="img">
            <input type="file" class="form-control" placeholder="上传图片......"/>
          </label>
          <div v-for="base in base64">
            <img id="showImg1" v-bind:src="base"/>
          </div>
        </div>
      </div>
      <div class="form-group">
        <label for="mobilePhone">
          <input id="mobilePhone" type="text" class="form-control" placeholder="手机......"/>
        </label>
      </div>
      <div class="form-group">
        <label for="permission">
          <select id="permission" class="form-control">
            <option value="">请选择职位</option>
            <option v-for="permission in permissions" v-bind:value="permission.perId">{{ permission.perName }}</option>
          </select>
        </label>
      </div>
      <div class="form-group">
        <label for="submit">
          <input id="submit" type="button" value="提交......" data-toggle="modal" data-target="#myModal"
                 class="btn btn-primary" @click="submit"/>
        </label>
      </div>
    </form>
  </div>
</template>

<script>
  export default {

    name: "Add",

    data() {
      return {
        perName: '',
        permissions: [],
        roles: [],
        base64: ''
      }
    },

    methods: {

      submit() {
        let _this = this;
        let img = _this.$('#img input');
        for (let i = 0; i < img.length; i++) {
          let imgData = new FileReader();
          let file = img[i].value.split('\\');
          imgData.readAsDataURL(img[i].files[0]);
          imgData.onload = function () {
            let base64 = this.result;
            let param = new URLSearchParams();
            base64 = base64.split(",")[1];
            param.append('img', base64);
            param.append('fileName', file[file.length - 1]);
            _this.$axios({
              url: _this.HOME + '/school/albums/uploadPhoto',
              method: 'put',
              data: param
            }).then(res => {
              _this.base64 = res.data.data;
            }).catch(error => {
              console.log(error)
            })
          }
        }
      },

    }

  }
</script>

<style scoped>

</style>
