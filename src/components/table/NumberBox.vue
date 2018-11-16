<template>
  <div class="col-sm-7 infobox-container">
    <div class="infobox infobox-green  ">
      <div class="infobox-icon">
        <i class="fa fa-comments"></i>
      </div>
      <div class="infobox-data">
        <span class="infobox-data-number">32</span>
        <div class="infobox-content">2个评论</div>
      </div>
      <div class="stat stat-success">8%</div>
    </div>
    <div class="infobox infobox-blue  ">
      <div class="infobox-icon">
        <i class="fa fa-twitter"></i>
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
        <i class="fa fa-shopping-cart"></i>
      </div>
      <div class="infobox-data">
        <span class="infobox-data-number">8</span>
        <div class="infobox-content">新订单</div>
      </div>
      <div class="stat stat-important">4%</div>
    </div>
    <div class="infobox infobox-red  ">
      <div class="infobox-icon">
        <i class="fa fa-beaker"></i>
      </div>
      <div class="infobox-data">
        <span class="infobox-data-number">7</span>
        <div class="infobox-content">调查</div>
      </div>
    </div>
    <div class="infobox infobox-orange2  ">
      <div class="infobox-chart">
                    <span class="sparkline" data-values="196,128,202,177,154,94,100,170,224"><canvas width="44"
                                                                                                     height="31"
                                                                                                     style="display: inline-block; width: 44px; height: 31px; vertical-align: top;"></canvas></span>
      </div>
      <div class="infobox-data">
        <span class="infobox-data-number">6,251</span>
        <div class="infobox-content">页面查看次数</div>
      </div>
      <div class="badge badge-success">
        7.2%
        <i class="fa fa-arrow-up"></i>
      </div>
    </div>
    <div class="infobox infobox-blue2  ">
      <div class="infobox-progress">
        <div class="easy-pie-chart percentage easyPieChart" data-percent="42" data-size="46"
             style="width: 46px; height: 46px; line-height: 46px;">
          <span class="percent">42</span>%
          <canvas width="46" height="46"></canvas>
        </div>
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
      <div class="infobox-progress">
        <div class="easy-pie-chart percentage easyPieChart" data-percent="61" data-size="39"
             style="width: 39px; height: 39px; line-height: 39px;">
          <span class="percent">61</span>%
          <canvas width="39" height="39"></canvas>
        </div>
      </div>
      <div class="infobox-data">
        <div class="infobox-content">任务</div>
        <div class="infobox-content">完成</div>
      </div>
    </div>
    <div class="infobox infobox-blue infobox-small infobox-dark">
      <div class="infobox-chart">
                    <span class="sparkline" data-values="3,4,2,3,4,4,2,2"><canvas width="39" height="19"
                                                                                  style="display: inline-block; width: 39px; height: 19px; vertical-align: top;"></canvas></span>
      </div>
      <div class="infobox-data">
        <div class="infobox-content">获得</div>
        <div class="infobox-content">$32,000</div>
      </div>
    </div>
    <div class="infobox infobox-grey infobox-small infobox-dark">
      <div class="infobox-icon">
        <i class="fa fa-download-alt"></i>
      </div>
      <div class="infobox-data">
        <div class="infobox-content">下载次数</div>
        <div class="infobox-content">1,205</div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "NumberBox"
    }
</script>

<style scoped>

</style>
