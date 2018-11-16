<template>
  <div class="row">
    <div class="col-sm-6">
      <div class="widget-box transparent" id="recent-box">
        <div class="widget-header" style="text-align: left">
          <h4 class="lighter smaller">
            <i class="fa fa-rss orange"></i>
            最近
          </h4>
          <div class="widget-toolbar no-border">
            <ul class="nav nav-tabs" id="recent-tab">
              <li class="active">
                <a data-toggle="tab" href="#task-tab">任务</a>
              </li>
              <li>
                <a data-toggle="tab" href="#member-tab">会员</a>
              </li>
              <li>
                <a data-toggle="tab" href="#comment-tab">评论</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="widget-body">
          <div class="widget-main padding-4" style="text-align: left;">
            <div class="tab-content padding-8 overflow-visible">
              <div id="task-tab" class="tab-pane active">
                <h4 class="smaller lighter green">
                  <i class="fa fa-list"></i>
                  可拖拽排序列表
                </h4>
                <ul id="tasks" class="item-list ui-sortable" style="text-align: left;">
                  <li class="item-orange clearfix" style="text-align: left;">
                    <label class="inline">
                      <input type="checkbox" class="ace">
                      <span class="lbl"> 问答</span>
                    </label>
                    <div class="pull-right easy-pie-chart percentage easyPieChart" data-size="30" data-color="#ECCB71"
                         data-percent="42" style="width: 30px; height: 30px; line-height: 30px;">
                      <span class="percent">42</span>%
                      <canvas width="30" height="30"></canvas>
                    </div>
                  </li>
                  <li class="item-red clearfix" style="text-align: left;">
                    <label class="inline">
                      <input type="checkbox" class="ace">
                      <span class="lbl"> BUG修复</span>
                    </label>
                    <div class="pull-right action-buttons">
                      <a href="#" class="blue">
                        <i class="fa fa-pencil bigger-130"></i>
                      </a>
                      <span class="vbar"></span>
                      <a href="#" class="red">
                        <i class="fa fa-trash bigger-130"></i>
                      </a>
                      <span class="vbar"></span>
                      <a href="#" class="green">
                        <i class="fa fa-flag bigger-130"></i>
                      </a>
                    </div>
                  </li>
                  <li class="item-default clearfix" style="text-align: left;">
                    <label class="inline">
                      <input type="checkbox" class="ace">
                      <span class="lbl">添加新的特征</span>
                    </label>
                    <div class="inline pull-right position-relative dropdown-hover">
                      <button class="btn btn-minier bigger btn-primary">
                        <i class="fa fa-cog fa fa-only bigger-120"></i>
                      </button>
                      <ul
                        class="dropdown-menu dropdown-only-icon dropdown-yellow dropdown-caret dropdown-close pull-right">
                        <li>
                          <a href="#" class="tooltip-success" data-rel="tooltip" title=""
                             data-original-title="Mark&nbsp;as&nbsp;done">
                            <span class="green">
                              <i class="fa fa-ok bigger-110"></i>
                            </span>
                          </a>
                        </li>
                        <li>
                          <a href="#" class="tooltip-error" data-rel="tooltip" title="" data-original-title="Delete">
                            <span class="red">
                              <i class="fa fa-trash bigger-110"></i>
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li class="item-blue clearfix" style="text-align: left;">
                    <label class="inline">
                      <input type="checkbox" class="ace">
                      <span class="lbl"> 更新模版脚本</span>
                    </label>
                  </li>
                  <li class="item-grey clearfix" style="text-align: left;">
                    <label class="inline">
                      <input type="checkbox" class="ace">
                      <span class="lbl"> 添加新皮肤</span>
                    </label>
                  </li>
                  <li class="item-green clearfix" style="text-align: left;">
                    <label class="inline">
                      <input type="checkbox" class="ace">
                      <span class="lbl"> 升级服务端</span>
                    </label>
                  </li>
                  <li class="item-pink clearfix" style="text-align: left;">
                    <label class="inline">
                      <input type="checkbox" class="ace">
                      <span class="lbl"> 清理垃圾</span>
                    </label>
                  </li>
                </ul>
              </div>
              <div id="member-tab" class="tab-pane" style="text-align: left;">
                <div class="clearfix">
                  <div class="itemdiv memberdiv">
                    <div class="user">
                      <img alt="Bob Doe's avatar" src="../../assets/picture/user.jpg">
                    </div>
                    <div class="body" style="text-align: left;">
                      <div class="name">
                        <a href="#">Bob Doe</a>
                      </div>
                      <div class="time">
                        <i class="fa fa-time"></i>
                        <span class="green">20 min</span>
                      </div>
                      <div>
                        <span class="label label-warning label-sm">以待</span>
                        <div class="inline position-relative">
                          <button class="btn btn-minier bigger btn-yellow btn-no-border dropdown-toggle"
                                  data-toggle="dropdown">
                            <i class="fa fa-angle-down fa fa-only bigger-120"></i>
                          </button>
                          <ul
                            class="dropdown-menu dropdown-only-icon dropdown-yellow pull-right dropdown-caret dropdown-close">
                            <li>
                              <a href="#" class="tooltip-success" data-rel="tooltip" title=""
                                 data-original-title="Approve">
                              <span class="green">
                                <i class="fa fa-ok bigger-110"></i>
                              </span>
                              </a>
                            </li>
                            <li>
                              <a href="#" class="tooltip-warning" data-rel="tooltip" title=""
                                 data-original-title="Reject">
                              <span class="orange">
                                <i class="fa fa-remove bigger-110"></i>
                              </span>
                              </a>
                            </li>
                            <li>
                              <a href="#" class="tooltip-error" data-rel="tooltip" title=""
                                 data-original-title="Delete">
                              <span class="red">
                                <i class="fa fa-trash bigger-110"></i>
                              </span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="itemdiv memberdiv">
                    <div class="user">
                      <img alt="Joe Doe's avatar" src="../../assets/picture/avatar2.png">
                    </div>
                    <div class="body" style="text-align: left;">
                      <div class="name">
                        <a href="#">Joe Doe</a>
                      </div>
                      <div class="time">
                        <i class="fa fa-time"></i>
                        <span class="green">1 hour</span>
                      </div>
                      <div>
                        <span class="label label-warning label-sm">以待</span>
                        <div class="inline position-relative">
                          <button class="btn btn-minier bigger btn-yellow btn-no-border dropdown-toggle"
                                  data-toggle="dropdown">
                            <i class="fa fa-angle-down fa fa-only bigger-120"></i>
                          </button>
                          <ul
                            class="dropdown-menu dropdown-only-icon dropdown-yellow pull-right dropdown-caret dropdown-close">
                            <li>
                              <a href="#" class="tooltip-success" data-rel="tooltip" title=""
                                 data-original-title="Approve">
                              <span class="green">
                                <i class="fa fa-ok bigger-110"></i>
                              </span>
                              </a>
                            </li>
                            <li>
                              <a href="#" class="tooltip-warning" data-rel="tooltip" title=""
                                 data-original-title="Reject">
                              <span class="orange">
                                <i class="fa fa-remove bigger-110"></i>
                              </span>
                              </a>
                            </li>
                            <li>
                              <a href="#" class="tooltip-error" data-rel="tooltip" title=""
                                 data-original-title="Delete">
                              <span class="red">
                                <i class="fa fa-trash bigger-110"></i>
                              </span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="itemdiv memberdiv">
                    <div class="user">
                      <img alt="Jim Doe's avatar" src="../../assets/picture/avatar.png">
                    </div>
                    <div class="body" style="text-align: left;">
                      <div class="name">
                        <a href="#">Jim Doe</a>
                      </div>
                      <div class="time">
                        <i class="fa fa-time"></i>
                        <span class="green">2 hour</span>
                      </div>
                      <div>
                        <span class="label label-warning label-sm">以待</span>
                        <div class="inline position-relative">
                          <button class="btn btn-minier bigger btn-yellow btn-no-border dropdown-toggle"
                                  data-toggle="dropdown">
                            <i class="fa fa-angle-down fa fa-only bigger-120"></i>
                          </button>
                          <ul
                            class="dropdown-menu dropdown-only-icon dropdown-yellow pull-right dropdown-caret dropdown-close">
                            <li>
                              <a href="#" class="tooltip-success" data-rel="tooltip" title=""
                                 data-original-title="Approve">
                              <span class="green">
                                <i class="fa fa-ok bigger-110"></i>
                              </span>
                              </a>
                            </li>
                            <li>
                              <a href="#" class="tooltip-warning" data-rel="tooltip" title=""
                                 data-original-title="Reject">
                              <span class="orange">
                                <i class="fa fa-remove bigger-110"></i>
                              </span>
                              </a>
                            </li>
                            <li>
                              <a href="#" class="tooltip-error" data-rel="tooltip" title=""
                                 data-original-title="Delete">
                              <span class="red">
                                <i class="fa fa-trash bigger-110"></i>
                              </span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="itemdiv memberdiv">
                    <div class="user">
                      <img alt="Alex Doe's avatar" src="../../assets/picture/avatar5.png">
                    </div>
                    <div class="body" style="text-align: left;">
                      <div class="name">
                        <a href="#">Alex Doe</a>
                      </div>
                      <div class="time">
                        <i class="fa fa-time"></i>
                        <span class="green">3 hour</span>
                      </div>
                      <div>
                        <span class="label label-danger label-sm">阻塞</span>
                      </div>
                    </div>
                  </div>
                  <div class="itemdiv memberdiv">
                    <div class="user">
                      <img alt="Bob Doe's avatar" src="../../assets/picture/avatar2.png">
                    </div>
                    <div class="body" style="text-align: left;">
                      <div class="name">
                        <a href="#">Bob Doe</a>
                      </div>
                      <div class="time">
                        <i class="fa fa-time"></i>
                        <span class="green">6 hour</span>
                      </div>
                      <div>
                        <span class="label label-success label-sm arrowed-in">批准</span>
                      </div>
                    </div>
                  </div>
                  <div class="itemdiv memberdiv">
                    <div class="user">
                      <img alt="Susan's avatar" src="../../assets/picture/avatar3.png">
                    </div>
                    <div class="body" style="text-align: left;">
                      <div class="name">
                        <a href="#">Susan</a>
                      </div>
                      <div class="time">
                        <i class="fa fa-time"></i>
                        <span class="green">yesterday</span>
                      </div>
                      <div>
                        <span class="label label-success label-sm arrowed-in">批准</span>
                      </div>
                    </div>
                  </div>
                  <div class="itemdiv memberdiv">
                    <div class="user">
                      <img alt="Phil Doe's avatar" src="../../assets/picture/avatar4.png">
                    </div>
                    <div class="body" style="text-align: left;">
                      <div class="name">
                        <a href="#">Phil Doe</a>
                      </div>
                      <div class="time">
                        <i class="fa fa-time"></i>
                        <span class="green">2 days ago</span>
                      </div>
                      <div>
                        <span class="label label-info label-sm arrowed-in arrowed-in-right">在线</span>
                      </div>
                    </div>
                  </div>
                  <div class="itemdiv memberdiv">
                    <div class="user">
                      <img alt="Alexa Doe's avatar" src="../../assets/picture/avatar1.png">
                    </div>
                    <div class="body" style="text-align: left;">
                      <div class="name">
                        <a href="#">Alexa Doe</a>
                      </div>
                      <div class="time">
                        <i class="fa fa-time"></i>
                        <span class="green">3天以前</span>
                      </div>
                      <div>
                        <span class="label label-success label-sm arrowed-in">批准</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="center">
                  <i class="fa fa-group fa fa-2x green"></i>
                  &nbsp;
                  <a href="#">
                    查看所有会员 &nbsp;
                    <i class="fa fa-arrow-right"></i>
                  </a>
                </div>
                <div class="hr hr-double hr8"></div>
              </div>
              <div id="comment-tab" class="tab-pane">
                <div class="slimScrollDiv" style="position: relative; overflow: hidden; width: auto; height: 300px;">
                  <div class="comments" style="overflow: hidden; width: auto; height: 300px;">
                    <div class="itemdiv commentdiv">
                      <div class="user">
                        <img alt="Bob Doe's Avatar" src="../../assets/picture/avatar.png">
                      </div>
                      <div class="body" style="text-align: left;">
                        <div class="name">
                          <a href="#">Bob Doe</a>
                        </div>
                        <div class="time">
                          <i class="fa fa-time"></i>
                          <span class="green">6 min</span>
                        </div>
                        <div class="text">
                          <i class="fa fa-quote-left"></i>
                          洛瑞姆伊普杜尔或多或多或多或多或多或多或多或多或多或多或多或多或多或多或多或多或多或多或多或多或多或多。Quisque
                          com莫多马加的一项服务 …
                        </div>
                      </div>
                      <div class="tools">
                        <div class="inline position-relative">
                          <button class="btn btn-minier bigger btn-yellow dropdown-toggle" data-toggle="dropdown">
                            <i class="fa fa-angle-down fa fa-only bigger-120"></i>
                          </button>
                          <ul
                            class="dropdown-menu dropdown-only-icon dropdown-yellow pull-right dropdown-caret dropdown-close">
                            <li>
                              <a href="#" class="tooltip-success" data-rel="tooltip" title=""
                                 data-original-title="Approve">
                              <span class="green">
                                <i class="fa fa-ok bigger-110"></i>
                              </span>
                              </a>
                            </li>

                            <li>
                              <a href="#" class="tooltip-warning" data-rel="tooltip" title=""
                                 data-original-title="Reject">
                              <span class="orange">
                                <i class="fa fa-remove bigger-110"></i>
                              </span>
                              </a>
                            </li>
                            <li>
                              <a href="#" class="tooltip-error" data-rel="tooltip" title=""
                                 data-original-title="Delete">
                              <span class="red">
                                <i class="fa fa-trash bigger-110"></i>
                              </span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div class="itemdiv commentdiv">
                      <div class="user">
                        <img alt="Jennifer's Avatar" src="../../assets/picture/avatar1.png">
                      </div>
                      <div class="body" style="text-align: left;">
                        <div class="name">
                          <a href="#">Jennifer</a>
                        </div>
                        <div class="time">
                          <i class="fa fa-time"></i>
                          <span class="blue">15 min</span>
                        </div>
                        <div class="text">
                          <i class="fa fa-quote-left"></i>
                          洛瑞姆伊普杜尔或多或多或多或多或多或多或多或多或多或多或多或多或多或多或多或多或多或多或多或多或多或多。Quisque
                          com莫多马加的一项服务…
                        </div>
                      </div>
                      <div class="tools">
                        <div class="action-buttons bigger-125">
                          <a href="#">
                            <i class="fa fa-pencil blue"></i>
                          </a>
                          <a href="#">
                            <i class="fa fa-trash red"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="itemdiv commentdiv">
                      <div class="user">
                        <img alt="Joe's Avatar" src="../../assets/picture/avatar2.png">
                      </div>
                      <div class="body" style="text-align: left;">
                        <div class="name">
                          <a href="#">Joe</a>
                        </div>
                        <div class="time">
                          <i class="fa fa-time"></i>
                          <span class="orange">22 min</span>
                        </div>
                        <div class="text">
                          <i class="fa fa-quote-left"></i>
                          洛瑞姆伊普杜尔或多或多或多或多或多或多或多或多或多或多或多或多或多或多或多或多或多或多或多或多或多或多。Quisque
                          com莫多马加的一项服务 …
                        </div>
                      </div>
                      <div class="tools">
                        <div class="action-buttons bigger-125">
                          <a href="#">
                            <i class="fa fa-pencil blue"></i>
                          </a>
                          <a href="#">
                            <i class="fa fa-trash red"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="itemdiv commentdiv">
                      <div class="user">
                        <img alt="Rita's Avatar" src="../../assets/picture/avatar3.png">
                      </div>
                      <div class="body" style="text-align: left;">
                        <div class="name">
                          <a href="#">Rita</a>
                        </div>
                        <div class="time">
                          <i class="fa fa-time"></i>
                          <span class="red">50 min</span>
                        </div>
                        <div class="text">
                          <i class="fa fa-quote-left"></i>
                          洛瑞姆伊普杜尔或多或多或多或多或多或多或多或多或多或多或多或多或多或多或多或多或多或多或多或多或多或多。Quisque
                          com莫多马加的一项服务 …
                        </div>
                      </div>

                      <div class="tools">
                        <div class="action-buttons bigger-125">
                          <a href="#">
                            <i class="fa fa-pencil blue"></i>
                          </a>
                          <a href="#">
                            <i class="fa fa-trash red"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="slimScrollBar ui-draggable"
                       style="background: rgb(0, 0, 0); width: 7px; position: absolute; top: 0px; opacity: 0.4; display: block; border-radius: 7px; z-index: 99; right: 1px;"></div>
                  <div class="slimScrollRail"
                       style="width: 7px; height: 100%; position: absolute; top: 0px; display: none; border-radius: 7px; background: rgb(51, 51, 51); opacity: 0.2; z-index: 90; right: 1px;"></div>
                </div>
                <div class="hr hr8"></div>
                <div class="center">
                  <i class="fa fa-comments-alt fa fa-2x green"></i>
                  &nbsp;
                  <a href="#">
                    See all comments &nbsp;
                    <i class="fa fa-arrow-right"></i>
                  </a>
                </div>
                <div class="hr hr-double hr8"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-sm-6">
      <div class="widget-box ">
        <div class="widget-header" style="text-align: left;">
          <h4 class="lighter smaller">
            <i class="fa fa-comment blue"></i>
            会话
          </h4>
        </div>
        <div class="widget-body">
          <div class="widget-main no-padding">
            <div class="slimScrollDiv" style="position: relative; overflow: hidden; width: auto; height: 300px;">
              <div class="dialogs" style="overflow: hidden; width: auto; height: 300px;">
                <div class="itemdiv dialogdiv">
                  <div class="user">
                    <img alt="Alexa's Avatar" src="../../assets/picture/avatar1.png">
                  </div>
                  <div class="body">
                    <div class="time">
                      <i class="fa fa-time"></i>
                      <span class="green">4秒钟前</span>
                    </div>
                    <div class="name" style="text-align: left;">
                      <a href="#">Alexa</a>
                    </div>
                    <div class="text" style="text-align: left;">大家好啊</div>
                    <div class="tools">
                      <a href="#" class="btn btn-minier btn-info">
                        <i class="fa fa-only fa fa-share-alt"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="itemdiv dialogdiv">
                  <div class="user">
                    <img alt="John's Avatar" src="../../assets/picture/avatar.png">
                  </div>
                  <div class="body">
                    <div class="time">
                      <i class="fa fa-time"></i>
                      <span class="blue">38秒以前</span>
                    </div>
                    <div class="name" style="text-align: left;">
                      <a href="#">John</a>
                    </div>
                    <div class="text" style="text-align: left;">框架很好用嘛</div>
                    <div class="tools">
                      <a href="#" class="btn btn-minier btn-info">
                        <i class="fa fa-only fa fa-share-alt"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="itemdiv dialogdiv">
                  <div class="user">
                    <img alt="Bob's Avatar" src="../../assets/picture/user.jpg">
                  </div>
                  <div class="body">
                    <div class="time">
                      <i class="fa fa-time"></i>
                      <span class="orange">2分钟以前</span>
                    </div>
                    <div class="name" style="text-align: left;">
                      <a href="#">Bob</a>
                      <span class="label label-info arrowed arrowed-in-right">admin</span>
                    </div>
                    <div class="text" style="text-align: left;">欢迎大家使用英沈汽配商城后台管理系统.</div>
                    <div class="tools">
                      <a href="#" class="btn btn-minier btn-info">
                        <i class="fa fa-only fa fa-share-alt"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="itemdiv dialogdiv">
                  <div class="user">
                    <img alt="Jim's Avatar" src="../../assets/picture/avatar4.png">
                  </div>
                  <div class="body">
                    <div class="time">
                      <i class="fa fa-time"></i>
                      <span class="grey">3分钟以前</span>
                    </div>
                    <div class="name" style="text-align: left;">
                      <a href="#">Jim</a>
                    </div>
                    <div class="text" style="text-align: left;">大家多提提BUG</div>
                    <div class="tools">
                      <a href="#" class="btn btn-minier btn-info">
                        <i class="fa fa-only fa fa-share-alt"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="itemdiv dialogdiv">
                  <div class="user">
                    <img alt="Alexa's Avatar" src="../../assets/picture/avatar1.png">
                  </div>
                  <div class="body">
                    <div class="time">
                      <i class="fa fa-time"></i>
                      <span class="green">4分钟以前</span>
                    </div>
                    <div class="name" style="text-align: left;">
                      <a href="#">Alexa</a>
                    </div>
                    <div class="text" style="text-align: left;">继续支持ACE后台系统</div>
                    <div class="tools">
                      <a href="#" class="btn btn-minier btn-info">
                        <i class="fa fa-only fa fa-share-alt"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="slimScrollBar ui-draggable"
                   style="background: rgb(0, 0, 0); width: 7px; position: absolute; top: 0px; opacity: 0.4; display: block; border-radius: 7px; z-index: 99; right: 1px; height: 252.101px;"></div>
              <div class="slimScrollRail"
                   style="width: 7px; height: 100%; position: absolute; top: 0px; display: none; border-radius: 7px; background: rgb(51, 51, 51); opacity: 0.2; z-index: 90; right: 1px;"></div>
            </div>
            <form>
              <div class="form-actions">
                <div class="input-group">
                  <input placeholder="输入信息 ..." type="text" class="form-control" name="message">
                  <span class="input-group-btn">
                    <button class="btn btn-sm btn-info no-radius" type="button">
                    <i class="fa fa-share-alt"></i>
                    发送
                    </button>
                  </span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "lastindex"
  }
</script>

<style scoped>

</style>
