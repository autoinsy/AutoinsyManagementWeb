// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import $ from 'jquery/dist/jquery'
import $axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'daterangepicker/daterangepicker.css'
import 'dropzone/dist/dropzone.css'
import 'font-awesome/css/font-awesome.css'
import 'fullcalendar/dist/fullcalendar.css'
import 'bootstrap/dist/js/bootstrap.js'
import 'datatables.net-dt'
import 'datatables.net-dt/css/jquery.dataTables.css'
import './assets/js/ace.min'
// import './assets/js/ace-elements.min'
// import './assets/js/ace-extra.min'
import './assets/css/ace.min.css'
import './assets/css/colorbox.css'
import './assets/css/colorpicker.css'
import './assets/css/font-awesome-ie7.min.css'
import './assets/css/jquery-ui-1.10.3.custom.min.css'
import './assets/css/jquery-ui-1.10.3.full.min.css'
import './assets/css/jquery.gritter.css'
import './assets/css/ui.jqgrid.css'
import './assets/css/prettify.css'

// import 'bootstrap-editable/css/bootstrap-editable.css'
// import 'bootstrap-timepicker/css/bootstrap-timepicker.css'
// import 'chosen/main'
// import 'select2/dist/css/select2.css'
// import './assets/css/ace-ie.min.css'
// import './assets/css/ace-rtl.min.css'
// import './assets/css/ace-skins.min.css'
// import './assets/css/datepicker.css'
// import ace from './assets/js/ace.min.js'
// import './assets/js/ace-extra.min.js'
// import './assets/fonts/fontawesome-webfont.eot'
// import './assets/fonts/fontawesome-webfont.svg'
// import './assets/fonts/fontawesome-webfont.ttf'
// import './assets/fonts/fontawesome-webfont.woff'

Vue.config.productionTip = false;
Vue.prototype.$ = $;
Vue.prototype.$axios = $axios;
Vue.prototype.HOME = '/manager';
Date.prototype.Format = function (fmt) { //author: meizz
  var o = {
    "M+": this.getMonth() + 1,
    //月份
    "d+": this.getDate(),
    //日
    "h+": this.getHours(),
    //小时
    "m+": this.getMinutes(),
    //分
    "s+": this.getSeconds(),
    //秒
    "q+": Math.floor((this.getMonth() + 3) / 3),
    //季度
    "S": this.getMilliseconds() //毫秒
  };
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
  }
  for (var k in o) {
    if (new RegExp("(" + k + ")").test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    }
  }
  return fmt;
};
$axios.create({
  // baseURL: 'http://47.93.195.248:8083/api'
  baseURL: 'http://192.168.1.229:8083/api'
  // baseURL: 'http://localhost:8083/api'
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
