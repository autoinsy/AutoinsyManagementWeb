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
import 'datatable'
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

$axios.create({
  baseURL: 'http://47.93.195.248:8083/api'
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
