<template>
  <div class='contrast-red  myall' id="show">
    <top-nav></top-nav>
    <left-nav></left-nav>
    <div id=''>
      <div class="breadcrumbs" id="breadcrumbs" style="text-align: left;margin-left: 190px">
        <ul class="breadcrumb" style="padding-top: 10px !important;">
          <li>
            <a href="#" class="dropdown-toggle">
              <i class="fa fa-home home-icon"></i>
            </a>
            <a href="javascript:">首页</a>
          </li>
          <li class="active">控制台</li>
        </ul>
        <div class="nav-search" id="nav-search">
          <form class="form-search">
            <input type="text" placeholder="搜索 ..." class="nav-search-input" id="nav-search-input"
                   autocomplete="off">
            <i class="fa fa-search nav-search-icon"></i>
          </form>
        </div>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
  import TopNav from '@/components/TopHeader'
  import LeftNav from '@/components/LeftNav'
  import index from '@/components/table/index.vue'

  export default {
    name: "Home",
    components: {
      LeftNav: LeftNav,
      TopNav: TopNav,
      index: index,
    },
  }
</script>
<style>
  .breadcrumb li{
    float: left;
  }
</style>
