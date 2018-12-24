<template>
  <div class="modal fade" id="revampGoods" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
       aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-title" id="myModalLabel">
          <button type="button" id="close" class="close" data-dismiss="modal" aria-hidden="true">&times;
          </button>
          <h1 class="modal-header">修改汽配城信息<span id="goodsId" style="display: none">{{modifyData.goodsId}}</span></h1>
        </div>
        <div class="modal-body">
          <form class="form-horizontal">
            <div class="form-group">
              <label for="title" class="col-2 control-label">
                <i>标题</i>
              </label>
              <input id="title" type="text" class="form-control col-10" name="parts_city_title"
                     v-bind:value="modifyData.cityTitle">
            </div>
            <!--
            brand: "MATEGO"
            deliverySpeedScore: "5"
            describe: "车载手机支架"
            describeScore: "5"
            goodsCode: "01104"
            goodsId: 7
            goodsImagesList:
            goodsPic: "https://img.alicdn.com/imgextra/i4/630917116/TB24.nzrYxmpuFjSZJiXXXauVXa_!!630917116.jpg_430x430q90.jpg"
            isInStock: "1"
            mainType: "汽车装饰"
            mainTypeCode: "4"
            name: "车载手机支架"
            price: "20"
            productPlace: "德国"
            publishTime: "2018-09-23"
            qrCode: "fewfwef"
            quantity: "100"
            sellerCode: null
            sellerName: null
            serviceMannerScore: "5"
            subType: "车载支架"
            subTypeCode: "45"
            videoUrl: null
            -->
            <div class="form-group">
              <label for="name">
                <i>汽配城名称</i>
              </label>
              <input id="name" type="text" class="form-control" name="parts_city_name"
                     v-bind:value="modifyData.cityName">
            </div>
            <div class="form-group">
              <label for="address">
                <i>汽配城地址</i>
              </label>
              <input id="address" type="text" class="form-control" name="parts_city_address"
                     v-bind:value="modifyData.cityAddress">
            </div>
            <div class="form-group">
              <label for="content">
                <i>汽配城简介</i>
              </label>
              <textarea id="content" rows="3" class="form-control" name="parts_city_content">
                {{modifyData.cityContent}}
              </textarea>
            </div>
            <div class="form-group">
              <label for="imgUrl">
                <i>汽配城图片</i>
              </label>
              <input id="imgUrl" type="file" class="form-control" name="parts_city_img_url"/>
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
    methods: {
      revampData: function () {
        let _this = this;
        this.$axios({
          url: _this.HOME + '/autoinsyCity/modify',
          method: 'POST',
          headers: {'content-type': 'application/x-www-form-urlencoded'},
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
          $('#close').click();
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
