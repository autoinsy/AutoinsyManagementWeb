<template>
  <div class="">
    <div class="row">
      <div class="col-sm-6">
        <div class="dataTables_filter" id="sample-table-2_filter" style="text-align: left;">
          <label style="float: left">查询: <input type="text" aria-controls="sample-table-2"></label>
          <div class="sidebar-shortcuts-large" style="float: left">
            <button class="btn btn-primary ">
              <i class="fa fa-search"></i>
            </button>
          </div>
        </div>
      </div>
      <div class="col-sm-6">
        <div style="text-align: right;">
          <div class="sidebar-shortcuts-large" id="sidebar-shortcuts-large">
            <button class="btn btn-success">
              新建
            </button>

            <button class="btn btn-warning">
              删除
            </button>
            <button class="btn btn-danger">
              返回
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12">
        <h3 class="header smaller lighter blue" style="text-align: left">轮播广告管理列表</h3>
        <div class="row">
          <div class="col-xs-12">

            <div class="row-fluid">
              <ul class="ace-thumbnails">
                <li v-for="bannerImg in bannerList">
                  <a href="javascript:" title="Photo Title" data-rel="colorbox" class="cboxElement">
                    <img alt="150x150" v-bind:src="bannerImg.advertisementUrl">
                    <div class="tags">
                      <span class="label-holder">
                        <span class="label label-info">breakfast</span>
                      </span>
                      <span class="label-holder">
                        <span class="label label-danger">fruits</span>
                      </span>
                      <span class="label-holder">
                        <span class="label label-success">toast</span>
                      </span>
                      <span class="label-holder">
                        <span class="label label-warning arrowed-in">diet</span>
                      </span>
                    </div>
                  </a>
                  <div class="tools">
                    <a href="#">
                      <i class="fa fa-link"></i>
                    </a>
                    <a href="#">
                      <i class="fa fa-paper-clip"></i>
                    </a>
                    <a href="#">
                      <i class="fa fa-pencil"></i>
                    </a>
                    <a href="#">
                      <i class="fa fa-remove red"></i>
                    </a>
                  </div>
                </li>
                <li>
                  <a href="javascript:" data-rel="colorbox" class="cboxElement">
                    <img alt="150x150" src="../../assets/picture/thumb-2.jpg">
                    <div class="text">
                      <div class="inner">Sample Caption on Hover</div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="javascript:" title="Photo Title" data-rel="colorbox" class="cboxElement">
                    <img alt="150x150" src="../../assets/picture/thumb-1.jpg">
                    <div class="text">
                      <div class="inner">Sample Caption on Hover</div>
                    </div>
                  </a>
                  <div class="tools tools-bottom">
                    <a href="#">
                      <i class="icon-link"></i>
                    </a>
                    <a href="#">
                      <i class="icon-paper-clip"></i>
                    </a>
                    <a href="#">
                      <i class="icon-pencil"></i>
                    </a>
                    <a href="#">
                      <i class="icon-remove red"></i>
                    </a>
                  </div>
                </li>
                <li>
                  <div class="label-holder-file-box"><input type="file" class="label-holder-file"/></div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Banner",
    data() {
      return {
        bannerList: [],
      }
    },
    mounted: function () {
      let _this = this;
      this.$axios({
        url: _this.HOME + '/advertisement/getFiveList'
      }).then(res => {
        _this.bannerList = res.data.data.content
      })
    }
  }
</script>

<style>
  .label-holder span {
    color: #fff;
    padding: 5px 10px;
    text-align: center;
  }

  .label-holder-file {
    width: 150px;
    height: 150px;
    opacity: 0;
  }

  .label-holder-file-box {
    background: url("../../assets/picture/add.png") no-repeat;
  }
</style>
