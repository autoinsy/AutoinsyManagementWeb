<template>
  <div class="">
    <div class="main-content">
      <div class="breadcrumbs" id="breadcrumbs">
        <ul class="breadcrumb">
          <li>
            <i class="icon-home home-icon"></i>
            <a href="#">主页</a>
          </li>
          <li class="active">
            <a href="#">商户管理</a>
          </li>
        </ul>
        <div class="nav-search" id="nav-search">
          <form class="form-search">
            <span class="input-icon">

            <input type="text" placeholder="搜索 ..." class="nav-search-input" id="nav-search-input" autocomplete="off">
            <i class="icon-search nav-search-icon"></i>
            </span>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "table",
    created: function () {
      try {
        ace.settings.check('breadcrumbs', 'fixed')
      } catch (e) {
      }
    }
  }
</script>

<style scoped>

</style>
