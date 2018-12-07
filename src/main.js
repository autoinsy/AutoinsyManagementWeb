// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import $ from 'jquery/dist/jquery'
import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap-editable/css/bootstrap-editable.css'
// import 'bootstrap-timepicker/css/bootstrap-timepicker.css'
// import 'chosen/main'
import 'daterangepicker/daterangepicker.css'
import 'dropzone/dist/dropzone.css'
import 'font-awesome/css/font-awesome.css'
import 'fullcalendar/dist/fullcalendar.css'
// import 'select2/dist/css/select2.css'
import './assets/css/ace.min.css'
// import './assets/css/ace-ie.min.css'
// import './assets/css/ace-rtl.min.css'
// import './assets/css/ace-skins.min.css'
import './assets/css/colorbox.css'
import './assets/css/colorpicker.css'
// import './assets/css/datepicker.css'
import './assets/css/font-awesome-ie7.min.css'
import './assets/css/jquery-ui-1.10.3.custom.min.css'
import './assets/css/jquery-ui-1.10.3.full.min.css'
import './assets/css/jquery.gritter.css'
import './assets/css/ui.jqgrid.css'
import './assets/css/prettify.css'

import 'bootstrap/dist/js/bootstrap.js'
//
// import ace from './assets/js/ace.min.js'
// import './assets/js/ace-extra.min.js'
//
// import './assets/fonts/fontawesome-webfont.eot'
// import './assets/fonts/fontawesome-webfont.svg'
// import './assets/fonts/fontawesome-webfont.ttf'
// import './assets/fonts/fontawesome-webfont.woff'

Vue.config.productionTip = false;
Vue.prototype.$ = $;

//    "ace": "^1.3.0",
//    "ajv": "^6.5.5",
//    "bootstrap-editable": "^1.0.1",
//    "bootstrap-timepicker": "^0.5.2",
//    "chosen": "0.0.2",
//    "select2": "^4.0 1.7",
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
