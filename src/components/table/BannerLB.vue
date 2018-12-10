<template>
  <div class="">
    <div class="row">
      <div class="col-xs-12">
        <h3 class="header smaller lighter blue" style="text-align: left">轮播广告管理列表</h3>
        <div class="row">
          <div class="col-xs-12">

            <div class="row-fluid">
              <ul class="ace-thumbnails">
                <li>
                  <a href="javascript:" title="Photo Title" data-rel="colorbox" class="cboxElement">
                    <img alt="150x150" src="../../assets/picture/thumb-1.jpg">
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
    name: "Banner"
  }
</script>

<style>
.label-holder span{
  color: #fff;
  padding: 5px 10px;
  text-align: center;
}
  .label-holder-file{
    width: 150px;
    height: 150px;
    opacity: 0;
  }
  .label-holder-file-box{
    /*background: url("../../assets/picture/add.png") no-repeat;*/
  }
</style>
