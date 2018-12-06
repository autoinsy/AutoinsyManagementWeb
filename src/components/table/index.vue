<template>
  <div class="" style="background-color: #fff;">
    <div class="main-content">
      <div class="page-content">
        <div class="page-header" style="text-align: left;">
          <h1>
            控制台
            <small>
              <i class="fa fa-double-angle-right"></i>
              查看
            </small>
          </h1>
        </div>
        <div class="row">
          <div class="col-xs-12" style=" text-align: left;width: 100%;">
            <div class="alert alert-block alert-success" style=" text-align: left;width: 100%;">
              <button type="button" class="close" data-dismiss="alert">
                <i class="fa fa-remove"></i>
              </button>
              <i class="fa fa-ok green"></i>
              欢迎使用
              <strong class="green">
                英沈汽配商城后台管理系统
                <small>(v1.2)</small>
              </strong>
            </div>
            <div class="row">
              <div class="space-6"></div>
              <div class="vspace-sm"></div>
            </div>
          </div>
        </div>
      </div>
      <infor></infor>
      <div class="hr hr32 hr-dotted"></div>
      <middle></middle>
      <div class="hr hr32 hr-dotted"></div>
      <!--<last-index></last-index>-->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import infor from './infor'
  import numberBox from './NumberBox'
  import middle from './middle'
  // import lastIndex from './lastindex'

  export default {
    name: "index",
    components: {
      infor: infor,
      numberBox: numberBox,
      middle: middle,
      // lastIndex: lastIndex
    },
    data() {
      return {
        path: ''
      }
    },
    watch: {
      $router: function (n, o) {
        console.log(n)
        console.log(o)
      }
    },
    created: function () {
      ace.settings.check('breadcrumbs', 'fixed')
    }
  }
</script>

<style scoped>
  .breadcrumb li {
    list-style-type: none;
    float: left;
  }
</style>
