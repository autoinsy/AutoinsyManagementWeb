<template>
    <div class="">
      <div class="sidebar" id="sidebar">
        <script type="text/javascript"> try {
          ace.settings.check('sidebar', 'fixed')
        } catch (e) {
        } </script>
        <div class="sidebar-shortcuts" id="sidebar-shortcuts">
          <div class="sidebar-shortcuts-large" id="sidebar-shortcuts-large">
            <button class="btn btn-success">
              <i class="icon-signal"></i>
            </button>
            <button class="btn btn-info">
              <i class="icon-pencil"></i>
            </button>
            <button class="btn btn-warning">
              <i class="icon-group"></i>
            </button>
            <button class="btn btn-danger">
              <i class="icon-cogs"></i>
            </button>
          </div>
          <div class="sidebar-shortcuts-mini" id="sidebar-shortcuts-mini">
            <span class="btn btn-success"></span>
            <span class="btn btn-info"></span>
            <span class="btn btn-warning"></span>
            <span class="btn btn-danger"></span>
          </div>
        </div>
        <ul class="nav nav-list">
          <li class="active">
            <a href="">
              <i class="icon-dashboard"></i>
              <span class="menu-text"> 控制台 </span>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="icon-text-width"></i>
              <span class="menu-text"> 超级管理员 </span>
            </a>
          </li>
          <li>
            <a href="" class="dropdown-toggle">
              <i class="icon-desktop"></i>
              <span class="menu-text"> 商户管理 </span>
              <!--<b class="arrow icon-angle-down"></b>-->
            </a>
            <!--<ul class="submenu">-->
            <!--<li>-->
            <!--<a href="#">-->
            <!--<i class="icon-double-angle-right"></i>-->
            <!--关闭商户-->
            <!--</a>-->
            <!--</li>-->
            <!--<li>-->
            <!--<a href="#">-->
            <!--<i class="icon-double-angle-right"></i>-->
            <!--下架商品-->
            <!--</a>-->
            <!--</li>-->
            <!--<li>-->
            <!--<a href="#">-->
            <!--<i class="icon-double-angle-right"></i>-->
            <!--商户评分-->
            <!--</a>-->
            <!--</li>-->
            <!--<li>-->
            <!--<a href="#">-->
            <!--<i class="icon-double-angle-right"></i>-->
            <!--黑名单-->
            <!--</a>-->
            <!--</li>-->
            <!--<li>-->
            <!--<a href="#">-->
            <!--<i class="icon-double-angle-right"></i>-->
            <!--注册添加-->
            <!--</a>-->
            <!--</li>-->
            <!--</ul>-->
          </li>
          <li>
            <a href="#" class="dropdown-toggle">
              <i class="icon-list"></i>
              <span class="menu-text"> 上传汽配城信息 </span>
              <!--<b class="arrow icon-angle-down"></b>-->
            </a>
            <!--<ul class="submenu">-->
            <!--<li>-->
            <!--<a href="#">-->
            <!--<i class="icon-double-angle-right"></i>-->
            <!--注册添加-->
            <!--</a>-->
            <!--</li>-->
            <!--<li>-->
            <!--<a href="#">-->
            <!--<i class="icon-double-angle-right"></i>-->
            <!--关闭用户-->
            <!--</a>-->
            <!--</li>-->
            <!--<li>-->
            <!--<a href="#">-->
            <!--<i class="icon-double-angle-right"></i>-->
            <!--用户黑名单-->
            <!--</a>-->
            <!--</li>-->
            <!--</ul>-->
          </li>
          <li>
            <a href="#" class="dropdown-toggle">
              <i class="icon-edit"></i>
              <span class="menu-text"> 产品销售 </span>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="icon-list-alt"></i>
              <span class="menu-text"> 消息管理 </span>
              <b class="arrow icon-angle-down"></b>
            </a>
            <ul class="submenu">
              <li>
                <a href="#">
                  <i class="icon-double-angle-right"></i>
                  新闻管理
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="icon-double-angle-right"></i>
                  通知管理
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="">
              <i class="icon-calendar"></i>
              <span class="menu-text">
								日历
								<span class="badge badge-transparent tooltip-error" title="" data-original-title="2&nbsp;Important&nbsp;Events">
									<i class="icon-warning-sign red bigger-130"></i>
								</span>
							</span>
            </a>
          </li>
          <li>
            <a href="">
              <i class="icon-picture"></i>
              <span class="menu-text"> 上传广告 </span>
            </a>
          </li>
          <li>
            <a href="#" class="dropdown-toggle">
              <i class="icon-tag"></i>
              <span class="menu-text"> 租售商铺 </span>
              <b class="arrow icon-angle-down"></b>
            </a>
            <ul class="submenu">
              <li>
                <a href="#">
                  <i class="icon-double-angle-right"></i>
                  发布信息
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="icon-double-angle-right"></i>
                  管理信息
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#" class="dropdown-toggle">
              <i class="icon-file-alt"></i>
              <span class="menu-text">
								招聘管理
								<span class="badge badge-primary ">5</span>
							</span>
              <b class="arrow icon-angle-down"></b>
            </a>
            <ul class="submenu">
              <li>
                <a href="#">
                  <i class="icon-double-angle-right"></i>
                  发布招聘
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="icon-double-angle-right"></i>
                  管理招聘
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#" class="dropdown-toggle">
              <i class="icon-file-alt"></i>
              <span class="menu-text">
								用户管理
							</span>
            </a></li><a href="#" class="dropdown-toggle">
        </a></ul><a href="#" class="dropdown-toggle">
        <div class="sidebar-collapse" id="sidebar-collapse">
          <i class="icon-double-angle-left" data-icon1="icon-double-angle-left" data-icon2="icon-double-angle-right"></i>
        </div>
        <script type="text/javascript"> try {
          ace.settings.check('sidebar', 'collapsed')
        } catch (e) {
        } </script>
      </a></div>
    </div>
</template>

<script>
    export default {
        name: "LeftNav"
    }
</script>

<style scoped>

</style>
