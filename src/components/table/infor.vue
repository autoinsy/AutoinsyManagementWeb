<template>
  <div class="row">
    <div class="space-6"></div>
    <div class="col-sm-7 infobox-container">
      <div class="infobox infobox-green  ">
        <div class="infobox-icon">
          <i class="icon-comments-o fa fa-comments-o"></i>
        </div>
        <div class="infobox-data">
          <span class="infobox-data-number">32</span>
          <div class="infobox-content">2个评论</div>
        </div>
        <div class="stat stat-success">8%</div>
      </div>
      <div class="infobox infobox-blue  ">
        <div class="infobox-icon">
          <i class="icon-twitter fa fa-twitter"></i>
        </div>
        <div class="infobox-data">
          <span class="infobox-data-number">11</span>
          <div class="infobox-content">新粉丝</div>
        </div>
        <div class="badge badge-success">
          +32%
          <i class="fa fa-arrow-up"></i>
        </div>
      </div>
      <div class="infobox infobox-pink  ">
        <div class="infobox-icon">
          <i class="icon-shopping-cart fa fa-shopping-cart"></i>
        </div>
        <div class="infobox-data">
          <span class="infobox-data-number">8</span>
          <div class="infobox-content">新订单</div>
        </div>
        <div class="stat stat-important">4%</div>
      </div>
      <div class="infobox infobox-red  ">
        <div class="infobox-icon">
          <i class="icon-flask fa fa-flask"></i>
        </div>
        <div class="infobox-data">
          <span class="infobox-data-number">7</span>
          <div class="infobox-content">调查</div>
        </div>
      </div>
      <div class="infobox infobox-orange2  ">
        <div class="infobox-icon">
          <i class="icon-line-chart fa fa-line-chart"></i>
        </div>
        <div class="infobox-data">
          <span class="infobox-data-number">6,251</span>
          <div class="infobox-content">页面查看次数</div>
        </div>
        <div class="badge badge-success">
          7.2%
          <i class="icon-bar-chart-o fa fa-bar-chart-o"></i>
        </div>
      </div>
      <div class="infobox infobox-blue2  ">
        <div class="infobox-icon">
          <i class="icon-bar-chart fa fa-bar-chart"></i>
        </div>
        <div class="infobox-data">
          <span class="infobox-text">交易使用</span>
          <div class="infobox-content">
            <span class="bigger-110">~</span>
            剩余58GB
          </div>
        </div>
      </div>
      <div class="space-6"></div>
      <div class="infobox infobox-green infobox-small infobox-dark">
        <div class="infobox-icon">
          <i class="icon-pie-chart fa fa-pie-chart"></i>
        </div>
        <div class="infobox-data">
          <div class="infobox-content">任务</div>
          <div class="infobox-content">完成</div>
        </div>
      </div>
      <div class="infobox infobox-blue infobox-small infobox-dark">
        <div class="infobox-icon">
          <i class="icon-area-chart fa fa-area-chart"></i>
        </div>
        <div class="infobox-data">
          <div class="infobox-content">获得</div>
          <div class="infobox-content">$32,000</div>
        </div>
      </div>
      <div class="infobox infobox-grey infobox-small infobox-dark">
        <div class="infobox-icon">
          <i class="icon-download fa fa-download"></i>
        </div>
        <div class="infobox-data">
          <div class="infobox-content">下载次数</div>
          <div class="infobox-content">1,205</div>
        </div>
      </div>
    </div>
    <div class="vspace-sm"></div>
    <div class="col-sm-5">
      <div class="widget-box">
        <div class="widget-header widget-header-flat widget-header-small" style="text-align: left;">
          <h5>
            <i class="fa fa-signal"></i>
            访问来源
          </h5>
          <div class="widget-toolbar no-border">
            <button class="btn btn-minier btn-primary dropdown-toggle" data-toggle="dropdown">
              本周
              <i class="fa fa-angle-down fa fa-on-right bigger-110"></i>
            </button>
            <ul class="dropdown-menu pull-right dropdown-125 dropdown-lighter dropdown-caret">
              <li class="active">
                <a href="#" class="blue">
                  <i class="fa fa-caret-right bigger-110">&nbsp;</i>
                  本周
                </a>
              </li>
              <li>
                <a href="javascript:">
                  <i class="fa fa-caret-right bigger-110 invisible">&nbsp;</i>
                  上周
                </a>
              </li>
              <li>
                <a href="javascript:">
                  <i class="fa fa-caret-right bigger-110 invisible">&nbsp;</i>
                  本月
                </a>
              </li>
              <li>
                <a href="javascript:">
                  <i class="fa fa-caret-right bigger-110 invisible">&nbsp;</i>
                  上月
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="widget-body">
          <div class="widget-main">
            <div id="piechart-placeholder" style="width: 90%; min-height: 150px; padding: 0px; position: relative;"><canvas class="flot-base" width="384" height="150" style="direction: ltr; position: absolute; left: 0px; top: 0px; width: 384px; height: 150px;"></canvas><canvas class="flot-overlay" width="384" height="150" style="direction: ltr; position: absolute; left: 0px; top: 0px; width: 384px; height: 150px;"></canvas><div class="legend"><div style="position: absolute; width: 48px; height: 100px; top: 15px; right: -30px; background-color: rgb(255, 255, 255); opacity: 0.85;"> </div><table style="position:absolute;top:15px;right:-30px;;font-size:smaller;color:#545454"><tbody><tr><td class="legendColorBox"><div style="border:1px solid null;padding:1px"><div style="width:4px;height:0;border:5px solid #68BC31;overflow:hidden"></div></div></td><td class="legendLabel">分类1</td></tr><tr><td class="legendColorBox"><div style="border:1px solid null;padding:1px"><div style="width:4px;height:0;border:5px solid #2091CF;overflow:hidden"></div></div></td><td class="legendLabel">分类2</td></tr><tr><td class="legendColorBox"><div style="border:1px solid null;padding:1px"><div style="width:4px;height:0;border:5px solid #AF4E96;overflow:hidden"></div></div></td><td class="legendLabel">分类3</td></tr><tr><td class="legendColorBox"><div style="border:1px solid null;padding:1px"><div style="width:4px;height:0;border:5px solid #DA5430;overflow:hidden"></div></div></td><td class="legendLabel">分类4</td></tr><tr><td class="legendColorBox"><div style="border:1px solid null;padding:1px"><div style="width:4px;height:0;border:5px solid #FEE074;overflow:hidden"></div></div></td><td class="legendLabel">分类5</td></tr></tbody></table></div></div>
            <div class="hr hr8 hr-double"></div>
            <div class="clearfix">
              <div class="grid3">
	<span class="grey">
	<i class="fa fa-facebook-sign fa fa-2x blue"></i>
	&nbsp; 类别
	</span>
                <h4 class="bigger pull-right">1,255</h4>
              </div>
              <div class="grid3">
	<span class="grey">
	<i class="fa fa-twitter-sign fa fa-2x purple"></i>
	&nbsp; 微博
	</span>
                <h4 class="bigger pull-right">941</h4>
              </div>
              <div class="grid3">
	<span class="grey">
	<i class="fa fa-pinterest-sign fa fa-2x red"></i>
	&nbsp; 推广
	</span>
                <h4 class="bigger pull-right">1,050</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "infor"
  }
</script>

<style>

</style>
