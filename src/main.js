// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/css/ace.min.css'
import './assets/css/ace-ie.min.css'
import './assets/css/ace-rtl.min.css'
import './assets/css/ace-skins.min.css'
import './assets/css/bootstrap.min.css'
import './assets/css/bootstrap-editable.css'
import './assets/css/bootstrap-timepicker.css'
import './assets/css/chosen.css'
import './assets/css/colorbox.css'
import './assets/css/colorpicker.css'
import './assets/css/datepicker.css'
import './assets/css/daterangepicker.css'
import './assets/css/dropzone.css'
import './assets/css/font-awesome.min.css'
import './assets/css/font-awesome-ie7.min.css'
import './assets/css/fullcalendar.css'
import './assets/css/jquery-ui-1.10.3.custom.min.css'
import './assets/css/jquery-ui-1.10.3.full.min.css'
import './assets/css/jquery.gritter.css'
import './assets/css/ui.jqgrid.css'
import './assets/css/prettify.css'
import './assets/css/select2.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
