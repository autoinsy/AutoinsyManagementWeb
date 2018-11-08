<template>
  <div class="">
    <div class="main-content">
      <div class="breadcrumbs" id="breadcrumbs">
        <script type="text/javascript">

          try {
            ace.settings.check('breadcrumbs', 'fixed')
          } catch (e) {
          }

        </script>
        <ul class="breadcrumb">
          <li>
            <i class="icon-home home-icon"></i>
            <a href="#">主页</a>
          </li>
          <li class="active">日历</li>
        </ul>
        <div class="nav-search" id="nav-search">
          <form class="form-search">
<span class="input-icon">
<input type="text" placeholder="Search ..." class="nav-search-input" id="nav-search-input" autocomplete="off">
<i class="icon-search nav-search-icon"></i>
</span>
          </form>
        </div>
      </div>
      <div class="page-content">
        <div class="page-header">
          <h1>
            日历
            <small>
              <i class="icon-double-angle-right"></i>
              具有可拖动和可编辑的事件
            </small>
          </h1>
        </div>
        <div class="row">
          <div class="col-xs-12">

            <div class="row">
              <div class="col-sm-9">
                <div class="space"></div>
                <div id="calendar" class="fc fc-ltr"><table class="fc-header" style="width:100%"><tbody><tr><td class="fc-header-left"><span class="fc-button fc-button-prev fc-state-default fc-corner-left" unselectable="on"><i class="icon-chevron-left"></i></span><span class="fc-button fc-button-next fc-state-default fc-corner-right" unselectable="on"><i class="icon-chevron-right"></i></span><span class="fc-header-space"></span><span class="fc-button fc-button-today fc-state-default fc-corner-left fc-corner-right fc-state-disabled" unselectable="on">today</span></td><td class="fc-header-center"><span class="fc-header-title"><h2>November 2018</h2></span></td><td class="fc-header-right"><span class="fc-button fc-button-month fc-state-default fc-corner-left fc-state-active" unselectable="on">month</span><span class="fc-button fc-button-agendaWeek fc-state-default" unselectable="on">week</span><span class="fc-button fc-button-agendaDay fc-state-default fc-corner-right" unselectable="on">day</span></td></tr></tbody></table><div class="fc-content" style="position: relative;"><div class="fc-view fc-view-month fc-grid" style="position:relative" unselectable="on"><div class="fc-event-container" style="position:absolute;z-index:8;top:0;left:0"><div class="fc-event fc-event-hori fc-event-draggable fc-event-start fc-event-end label-important" style="position: absolute; left: 723px; width: 175px; top: 63px;"><div class="fc-event-inner"><span class="fc-event-title">全天事件</span></div><div class="ui-resizable-handle ui-resizable-e">&nbsp;&nbsp;&nbsp;</div></div><div class="fc-event fc-event-hori fc-event-draggable fc-event-start fc-event-end label-success" style="position: absolute; left: 543px; width: 701px; top: 42px;"><div class="fc-event-inner"><span class="fc-event-title">长距离项目</span></div><div class="ui-resizable-handle ui-resizable-e">&nbsp;&nbsp;&nbsp;</div></div><div class="fc-event fc-event-hori fc-event-draggable fc-event-start fc-event-end" style="position: absolute; left: 903px; width: 175px; top: 63px;"><div class="fc-event-inner"><span class="fc-event-time">4p</span><span class="fc-event-title">有些事件</span></div><div class="ui-resizable-handle ui-resizable-e">&nbsp;&nbsp;&nbsp;</div></div></div><table class="fc-border-separate" style="width:100%" cellspacing="0"><thead><tr class="fc-first fc-last"><th class="fc-day-header fc-sun fc-widget-header fc-first" style="width: 180px;">Sun</th><th class="fc-day-header fc-mon fc-widget-header" style="width: 180px;">Mon</th><th class="fc-day-header fc-tue fc-widget-header" style="width: 180px;">Tue</th><th class="fc-day-header fc-wed fc-widget-header" style="width: 180px;">Wed</th><th class="fc-day-header fc-thu fc-widget-header" style="width: 180px;">Thu</th><th class="fc-day-header fc-fri fc-widget-header" style="width: 180px;">Fri</th><th class="fc-day-header fc-sat fc-widget-header fc-last">Sat</th></tr></thead><tbody><tr class="fc-week fc-first"><td class="fc-day fc-sun fc-widget-content fc-other-month fc-past fc-first" data-date="2018-10-28"><div style="min-height: 152px;"><div class="fc-day-number">28</div><div class="fc-day-content"><div style="position: relative; height: 42px;">&nbsp;</div></div></div></td><td class="fc-day fc-mon fc-widget-content fc-other-month fc-past" data-date="2018-10-29"><div><div class="fc-day-number">29</div><div class="fc-day-content"><div style="position: relative; height: 42px;">&nbsp;</div></div></div></td><td class="fc-day fc-tue fc-widget-content fc-other-month fc-past" data-date="2018-10-30"><div><div class="fc-day-number">30</div><div class="fc-day-content"><div style="position: relative; height: 42px;">&nbsp;</div></div></div></td><td class="fc-day fc-wed fc-widget-content fc-other-month fc-past" data-date="2018-10-31"><div><div class="fc-day-number">31</div><div class="fc-day-content"><div style="position: relative; height: 42px;">&nbsp;</div></div></div></td><td class="fc-day fc-thu fc-widget-content fc-past" data-date="2018-11-01"><div><div class="fc-day-number">1</div><div class="fc-day-content"><div style="position: relative; height: 42px;">&nbsp;</div></div></div></td><td class="fc-day fc-fri fc-widget-content fc-past" data-date="2018-11-02"><div><div class="fc-day-number">2</div><div class="fc-day-content"><div style="position: relative; height: 42px;">&nbsp;</div></div></div></td><td class="fc-day fc-sat fc-widget-content fc-past fc-last" data-date="2018-11-03"><div><div class="fc-day-number">3</div><div class="fc-day-content"><div style="position: relative; height: 42px;">&nbsp;</div></div></div></td></tr><tr class="fc-week"><td class="fc-day fc-sun fc-widget-content fc-past fc-first" data-date="2018-11-04"><div style="min-height: 151px;"><div class="fc-day-number">4</div><div class="fc-day-content"><div style="position: relative; height: 0px;">&nbsp;</div></div></div></td><td class="fc-day fc-mon fc-widget-content fc-today fc-state-highlight" data-date="2018-11-05"><div><div class="fc-day-number">5</div><div class="fc-day-content"><div style="position: relative; height: 0px;">&nbsp;</div></div></div></td><td class="fc-day fc-tue fc-widget-content fc-future" data-date="2018-11-06"><div><div class="fc-day-number">6</div><div class="fc-day-content"><div style="position: relative; height: 0px;">&nbsp;</div></div></div></td><td class="fc-day fc-wed fc-widget-content fc-future" data-date="2018-11-07"><div><div class="fc-day-number">7</div><div class="fc-day-content"><div style="position: relative; height: 0px;">&nbsp;</div></div></div></td><td class="fc-day fc-thu fc-widget-content fc-future" data-date="2018-11-08"><div><div class="fc-day-number">8</div><div class="fc-day-content"><div style="position: relative; height: 0px;">&nbsp;</div></div></div></td><td class="fc-day fc-fri fc-widget-content fc-future" data-date="2018-11-09"><div><div class="fc-day-number">9</div><div class="fc-day-content"><div style="position: relative; height: 0px;">&nbsp;</div></div></div></td><td class="fc-day fc-sat fc-widget-content fc-future fc-last" data-date="2018-11-10"><div><div class="fc-day-number">10</div><div class="fc-day-content"><div style="position: relative; height: 0px;">&nbsp;</div></div></div></td></tr><tr class="fc-week"><td class="fc-day fc-sun fc-widget-content fc-future fc-first" data-date="2018-11-11"><div style="min-height: 151px;"><div class="fc-day-number">11</div><div class="fc-day-content"><div style="position: relative; height: 0px;">&nbsp;</div></div></div></td><td class="fc-day fc-mon fc-widget-content fc-future" data-date="2018-11-12"><div><div class="fc-day-number">12</div><div class="fc-day-content"><div style="position: relative; height: 0px;">&nbsp;</div></div></div></td><td class="fc-day fc-tue fc-widget-content fc-future" data-date="2018-11-13"><div><div class="fc-day-number">13</div><div class="fc-day-content"><div style="position: relative; height: 0px;">&nbsp;</div></div></div></td><td class="fc-day fc-wed fc-widget-content fc-future" data-date="2018-11-14"><div><div class="fc-day-number">14</div><div class="fc-day-content"><div style="position: relative; height: 0px;">&nbsp;</div></div></div></td><td class="fc-day fc-thu fc-widget-content fc-future" data-date="2018-11-15"><div><div class="fc-day-number">15</div><div class="fc-day-content"><div style="position: relative; height: 0px;">&nbsp;</div></div></div></td><td class="fc-day fc-fri fc-widget-content fc-future" data-date="2018-11-16"><div><div class="fc-day-number">16</div><div class="fc-day-content"><div style="position: relative; height: 0px;">&nbsp;</div></div></div></td><td class="fc-day fc-sat fc-widget-content fc-future fc-last" data-date="2018-11-17"><div><div class="fc-day-number">17</div><div class="fc-day-content"><div style="position: relative; height: 0px;">&nbsp;</div></div></div></td></tr><tr class="fc-week"><td class="fc-day fc-sun fc-widget-content fc-future fc-first" data-date="2018-11-18"><div style="min-height: 151px;"><div class="fc-day-number">18</div><div class="fc-day-content"><div style="position: relative; height: 0px;">&nbsp;</div></div></div></td><td class="fc-day fc-mon fc-widget-content fc-future" data-date="2018-11-19"><div><div class="fc-day-number">19</div><div class="fc-day-content"><div style="position: relative; height: 0px;">&nbsp;</div></div></div></td><td class="fc-day fc-tue fc-widget-content fc-future" data-date="2018-11-20"><div><div class="fc-day-number">20</div><div class="fc-day-content"><div style="position: relative; height: 0px;">&nbsp;</div></div></div></td><td class="fc-day fc-wed fc-widget-content fc-future" data-date="2018-11-21"><div><div class="fc-day-number">21</div><div class="fc-day-content"><div style="position: relative; height: 0px;">&nbsp;</div></div></div></td><td class="fc-day fc-thu fc-widget-content fc-future" data-date="2018-11-22"><div><div class="fc-day-number">22</div><div class="fc-day-content"><div style="position: relative; height: 0px;">&nbsp;</div></div></div></td><td class="fc-day fc-fri fc-widget-content fc-future" data-date="2018-11-23"><div><div class="fc-day-number">23</div><div class="fc-day-content"><div style="position: relative; height: 0px;">&nbsp;</div></div></div></td><td class="fc-day fc-sat fc-widget-content fc-future fc-last" data-date="2018-11-24"><div><div class="fc-day-number">24</div><div class="fc-day-content"><div style="position: relative; height: 0px;">&nbsp;</div></div></div></td></tr><tr class="fc-week"><td class="fc-day fc-sun fc-widget-content fc-future fc-first" data-date="2018-11-25"><div style="min-height: 151px;"><div class="fc-day-number">25</div><div class="fc-day-content"><div style="position: relative; height: 0px;">&nbsp;</div></div></div></td><td class="fc-day fc-mon fc-widget-content fc-future" data-date="2018-11-26"><div><div class="fc-day-number">26</div><div class="fc-day-content"><div style="position: relative; height: 0px;">&nbsp;</div></div></div></td><td class="fc-day fc-tue fc-widget-content fc-future" data-date="2018-11-27"><div><div class="fc-day-number">27</div><div class="fc-day-content"><div style="position: relative; height: 0px;">&nbsp;</div></div></div></td><td class="fc-day fc-wed fc-widget-content fc-future" data-date="2018-11-28"><div><div class="fc-day-number">28</div><div class="fc-day-content"><div style="position: relative; height: 0px;">&nbsp;</div></div></div></td><td class="fc-day fc-thu fc-widget-content fc-future" data-date="2018-11-29"><div><div class="fc-day-number">29</div><div class="fc-day-content"><div style="position: relative; height: 0px;">&nbsp;</div></div></div></td><td class="fc-day fc-fri fc-widget-content fc-future" data-date="2018-11-30"><div><div class="fc-day-number">30</div><div class="fc-day-content"><div style="position: relative; height: 0px;">&nbsp;</div></div></div></td><td class="fc-day fc-sat fc-widget-content fc-other-month fc-future fc-last" data-date="2018-12-01"><div><div class="fc-day-number">1</div><div class="fc-day-content"><div style="position: relative; height: 0px;">&nbsp;</div></div></div></td></tr><tr class="fc-week fc-last"><td class="fc-day fc-sun fc-widget-content fc-other-month fc-future fc-first" data-date="2018-12-02"><div style="min-height: 150px;"><div class="fc-day-number">2</div><div class="fc-day-content"><div style="position: relative; height: 0px;">&nbsp;</div></div></div></td><td class="fc-day fc-mon fc-widget-content fc-other-month fc-future" data-date="2018-12-03"><div><div class="fc-day-number">3</div><div class="fc-day-content"><div style="position: relative; height: 0px;">&nbsp;</div></div></div></td><td class="fc-day fc-tue fc-widget-content fc-other-month fc-future" data-date="2018-12-04"><div><div class="fc-day-number">4</div><div class="fc-day-content"><div style="position: relative; height: 0px;">&nbsp;</div></div></div></td><td class="fc-day fc-wed fc-widget-content fc-other-month fc-future" data-date="2018-12-05"><div><div class="fc-day-number">5</div><div class="fc-day-content"><div style="position: relative; height: 0px;">&nbsp;</div></div></div></td><td class="fc-day fc-thu fc-widget-content fc-other-month fc-future" data-date="2018-12-06"><div><div class="fc-day-number">6</div><div class="fc-day-content"><div style="position: relative; height: 0px;">&nbsp;</div></div></div></td><td class="fc-day fc-fri fc-widget-content fc-other-month fc-future" data-date="2018-12-07"><div><div class="fc-day-number">7</div><div class="fc-day-content"><div style="position: relative; height: 0px;">&nbsp;</div></div></div></td><td class="fc-day fc-sat fc-widget-content fc-other-month fc-future fc-last" data-date="2018-12-08"><div><div class="fc-day-number">8</div><div class="fc-day-content"><div style="position: relative; height: 0px;">&nbsp;</div></div></div></td></tr></tbody></table></div></div></div>
              </div>
              <div class="col-sm-3">
                <div class="widget-box transparent">
                  <div class="widget-header">
                    <h4>可拖放事件</h4>
                  </div>
                  <div class="widget-body">
                    <div class="widget-main no-padding">
                      <div id="external-events">
                        <div class="external-event label-grey ui-draggable" data-class="label-grey" style="position: relative;">
                          <i class="icon-move"></i>
                          我的事件1
                        </div>
                        <div class="external-event label-success ui-draggable" data-class="label-success" style="position: relative;">
                          <i class="icon-move"></i>
                          我的事件 2
                        </div>
                        <div class="external-event label-danger ui-draggable" data-class="label-danger" style="position: relative;">
                          <i class="icon-move"></i>
                          我的事件 3
                        </div>
                        <div class="external-event label-purple ui-draggable" data-class="label-purple" style="position: relative;">
                          <i class="icon-move"></i>
                          我的事件 4
                        </div>
                        <div class="external-event label-yellow ui-draggable" data-class="label-yellow" style="position: relative;">
                          <i class="icon-move"></i>
                          我的事件 5
                        </div>
                        <div class="external-event label-pink ui-draggable" data-class="label-pink" style="position: relative;">
                          <i class="icon-move"></i>
                          我的事件 6
                        </div>
                        <div class="external-event label-info ui-draggable" data-class="label-info" style="position: relative;">
                          <i class="icon-move"></i>
                          我的事件 7
                        </div>
                        <label>
                          <input type="checkbox" class="ace ace-checkbox" id="drop-remove">
                          <span class="lbl"> 删除后下降</span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
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
        name: "Calendar"
    }
</script>

<style scoped>

</style>
