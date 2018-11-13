<template>
  <div class=""  style="background-color: #fff;">
    <div class="main-content"><a href="#" class="dropdown-toggle">
    </a>
      <div class="breadcrumbs" id="breadcrumbs" style="text-align: left;">
        <a href="#" class="dropdown-toggle"></a>
        <ul class="breadcrumb">
          <a href="#" class="dropdown-toggle"></a>
          <li>
            <a href="#" class="dropdown-toggle">
              <i class="icon-home home-icon"></i>
            </a>
            <a href="#">首页</a>
          </li>
          <li class="active">控制台</li>
        </ul>
        <div class="nav-search" id="nav-search">
          <form class="form-search">
            <input type="text" placeholder="Search ..." class="nav-search-input" id="nav-search-input"
                   autocomplete="off">
            <i class="icon-search nav-search-icon"></i>
          </form>
        </div>
      </div>
      <div class="page-content">
        <div class="page-header" style="text-align: left;">
          <h1>
            控制台
            <small>
              <i class="icon-double-angle-right"></i>
              查看
            </small>
          </h1>
        </div>
        <div class="row">
          <div class="col-xs-12">
            <div class="alert alert-block alert-success" style=" text-align: left;">
              <button type="button" class="close" data-dismiss="alert">
                <i class="icon-remove"></i>
              </button>
              <i class="icon-ok green"></i>
              欢迎使用
              <strong class="green">
                英沈汽配商城后台管理系统
                <small>(v1.2)</small>
              </strong>
            </div>
            <div class="row">
              <div class="space-6"></div>
              <number-box></number-box>
              <div class="vspace-sm"></div>
              <infor></infor>
            </div>
          </div>
        </div>
      </div>
      <div class="hr hr32 hr-dotted"></div>
      <middle></middle>
      <div class="hr hr32 hr-dotted"></div>
      <last-index></last-index>
    </div>
  </div>
</template>

<script>
  import infor from './infor'
  import numberBox from './NumberBox'
  import middle from'./middle'
  // import lastIndex from'./lastindex'

  export default {
    name: "index",
    components: {
      infor: infor,
      numberBox: numberBox,
      middle: middle,
      // lastIndex: lastIndex
    },
    created: function () {
      ace.settings.check('breadcrumbs', 'fixed')
    }
  }
</script>

<style scoped>
.breadcrumb li{
  list-style-type: none;
  float: left;
}
</style>
