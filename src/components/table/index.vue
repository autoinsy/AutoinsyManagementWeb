<template>
  <div class="">
    <div class="main-content"><a href="#" class="dropdown-toggle">
    </a>
      <div class="breadcrumbs" id="breadcrumbs">
        <a href="#" class="dropdown-toggle"></a>
        <ul class="breadcrumb">
          <a href="#" class="dropdown-toggle">
          </a>
          <li><a href="#" class="dropdown-toggle">
            <i class="icon-home home-icon"></i>
          </a><a href="#">首页</a>
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
    </div>
  </div>
</template>

<script>
  export default {
    name: "index",
    created: function () {
      this.ace.settings.check('breadcrumbs', 'fixed')
    }
  }
</script>

<style scoped>

</style>
