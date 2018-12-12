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
        <!--<li class="nav nav-item">-->
          <!--<router-link to='/TableUser'>-->
            <!--<i class="fa fa-user"></i>-->
            <!--<span class="menu-text">用户管理</span>-->
          <!--</router-link>-->
        <!--</li>-->
        <li class="nav nav-item">
          <router-link to='/TableUser'>
            <i class="fa fa-user"></i>
            <span class="menu-text">用户管理</span>
            <b class="arrow fa fa-angle-down"></b>
          </router-link>
          <ul class="submenu">
            <li>
              <router-link to='/TableUserJS'>
                <i class="fa fa-user-circle-o"></i>
                角色管理
              </router-link>
            </li>
            <li>
              <router-link to='/TableUserSJ'>
                <i class="fa fa-user-circle"></i>
                商家管理
              </router-link>
            </li>
          </ul>
        </li>
        <li class="nav nav-item">
          <router-link to='/Banner'>
            <i class="fa fa-diamond"></i>
            <span class="menu-text">广告管理</span>
            <b class="arrow fa fa-angle-down"></b>
          </router-link>
          <ul class="submenu">
            <li>
              <router-link to='/BannerLB'>
                <i class="fa fa-image"></i>
                轮播广告管理
              </router-link>
            </li>
          </ul>
        </li>
        <li>
          <router-link to='/AutoinsyManagement'>
            <i class="fa fa-automobile"></i>
            <span class="menu-text">汽配城管理</span>
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
          <router-link to='/Law'>
            <i class="fa fa-file-text-o"></i>
            <span class="menu-text"> 法律条文 </span>
            <!--<b class="arrow fa fa-angle-down"></b>-->
          </router-link>
        </li>
        <li class="nav nav-item">
          <router-link to='/Rent'>
            <i class="fa fa-tag"></i>
            <span class="menu-text"> 租赁 </span>
            <!--<b class="arrow fa fa-angle-down"></b>-->
          </router-link>
        </li>
        <li class="nav nav-item">
          <router-link to='/News'>
            <i class="fa fa-bell"></i>
            <span class="menu-text"> 新闻 </span>
            <!--<b class="arrow fa fa-angle-down"></b>-->
          </router-link>
        </li>
        <li class="nav nav-item">
          <router-link to='/Notification'>
            <i class="fa fa-bell-o"></i>
            <span class="menu-text"> 通知 </span>
            <!--<b class="arrow fa fa-angle-down"></b>-->
          </router-link>
        </li>
        <li class="nav nav-item">
          <router-link to='/Recruit'>
            <i class="fa fa-envelope-open"></i>
            <span class="menu-text">
								招聘管理
						</span>
          </router-link>
        </li>
        <li class="nav nav-item">
          <router-link to='/Resume'>
            <i class="fa fa-id-card"></i>
            <span class="menu-text">
								简历管理
						</span>
          </router-link>
        </li>
        <li class="nav nav-item">
          <router-link to='/Service'>
            <i class="fa fa-archive"></i>
            <span class="menu-text">
								服务管理
						</span>
          </router-link>
        </li>
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
      // this.ace.settings.check('sidebar', 'fixed')
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
