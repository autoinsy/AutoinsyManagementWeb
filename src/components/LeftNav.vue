<template>
  <div class="">
    <div class="sidebar" id="sidebar" style="margin-right: 20px;">
      <div class="sidebar-shortcuts" id="sidebar-shortcuts">
        <!--<div class="sidebar-shortcuts-large" id="sidebar-shortcuts-large">-->
          <!--<button class="btn btn-success">-->
            <!--<i class="fa fa-download"></i>-->
          <!--</button>-->
          <!--<button class="btn btn-info">-->
            <!--<i class="fa fa-pencil"></i>-->
          <!--</button>-->
          <!--<button class="btn btn-warning">-->
            <!--<i class="fa fa-group"></i>-->
          <!--</button>-->
          <!--<button class="btn btn-danger">-->
            <!--<i class="fa fa-cogs"></i>-->
          <!--</button>-->
        <!--</div>-->
        <div class="sidebar-shortcuts-mini" id="sidebar-shortcuts-mini">
          <span class="btn btn-success"></span>
          <span class="btn btn-info"></span>
          <span class="btn btn-warning"></span>
          <span class="btn btn-danger"></span>
        </div>
      </div>
      <ul class="nav nav-list" style="width: 182px;">
        <li class="nav nav-item active">
          <router-link to='/index'>
            <i class="fa fa-dashboard"></i>
            <span class="menu-text"> 控制台 </span>
          </router-link>
        </li>
        <li class="nav nav-item">
          <router-link to='/TableUser'>
            <i class="fa fa-user"></i>
            <span class="menu-text">用户管理</span>
          </router-link>
        </li>
        <li class="nav nav-item">
          <router-link to='/CommodityManagement'>
            <i class="fa fa-desktop"></i>
            <span class="menu-text"> 商品管理 </span>
            <!--<b class="arrow fa fa-angle-down"></b>-->
          </router-link>
        </li>
        <li class="nav nav-item">
          <router-link to='/Notification'>
            <i class="fa fa-bell"></i>
            <span class="menu-text"> 发布通知 </span>
            <!--<b class="arrow fa fa-angle-down"></b>-->
          </router-link>
        </li>
        <li class="nav nav-item">
          <router-link to='/Recruit'>
            <i class="fa fa-id-card"></i>
            <span class="menu-text">
								招聘管理
						</span>
            <b class="arrow fa fa-angle-down"></b>
          </router-link>
          <ul class="submenu">
            <li>
              <a href="javascript:">
                <i class="fa fa-double-angle-right"></i>
                发布招聘
              </a>
            </li>
          </ul>
        </li>
        <li class="nav nav-item">
          <router-link to='/Rent'>
            <i class="fa fa-tag"></i>
            <span class="menu-text"> 发布租赁 </span>
            <!--<b class="arrow fa fa-angle-down"></b>-->
          </router-link>
        </li>
        <li class="nav nav-item">
          <router-link to='/ShopAdministration'>
            <i class="fa fa-edit"></i>
            <span class="menu-text"> 店铺管理 </span>
            <!--<b class="arrow fa fa-angle-down"></b>-->
          </router-link>
        </li>
        <!--<li class="nav nav-item">-->
          <!--<router-link to='/InstantMessaging'>-->
            <!--<i class="fa fa-mobile"></i>-->
            <!--<span class="menu-text"> 即时通讯管理 </span>-->
          <!--</router-link>-->
        <!--</li>-->
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "LeftNav",
    data() {
      return {
        path:''
      }
    },
    watch: {
      $route: function (to, from) {
        this.$('a[href="#'+ to.path + '"]').parent().addClass("active")
        this.$('a[href="#'+ from.path +'"]').parent().removeClass("active")
      }
    },
    created: function () {
      ace.settings.check('sidebar', 'fixed')
    }
  }
</script>

<style scoped>
  .nav-list li {
    width: 182px;
  }

  .sidebar-shortcuts-large button {
    height: 30px;
  }
</style>
