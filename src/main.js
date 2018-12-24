// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import $ from 'jquery/dist/jquery'
import $axios from 'axios'
import qs from 'qs'
import 'bootstrap/dist/css/bootstrap.css'
import 'daterangepicker/daterangepicker.css'
import 'dropzone/dist/dropzone.css'
import 'font-awesome/css/font-awesome.css'
import 'fullcalendar/dist/fullcalendar.css'
import 'bootstrap/dist/js/bootstrap.js'
import 'popper.js'
import 'datatables.net-dt'
import 'datatables.net-dt/css/jquery.dataTables.css'
import 'bootstrap-fileinput/js/fileinput'
import 'bootstrap-fileinput/css/fileinput.css'
import './assets/js/ace.min'
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
Vue.prototype.qs = qs;
$.fn.fileinputLocales['zh'] = {
  fileSingle: '文件',
  filePlural: '个文件',
  browseLabel: '选择 &hellip;',
  removeLabel: '移除',
  removeTitle: '清除选中文件',
  cancelLabel: '取消',
  cancelTitle: '取消进行中的上传',
  uploadLabel: '上传',
  uploadTitle: '上传选中文件',
  msgNo: '没有',
  msgNoFilesSelected: '未选择文件',
  msgCancelled: '取消',
  msgPlaceholder: '选择 {files}...',
  msgZoomModalHeading: '详细预览',
  msgFileRequired: '必须选择一个文件上传.',
  msgSizeTooSmall: '文件 "{name}" (<b>{size} KB</b>) 必须大于限定大小 <b>{minSize} KB</b>.',
  msgSizeTooLarge: '文件 "{name}" (<b>{size} KB</b>) 超过了允许大小 <b>{maxSize} KB</b>.',
  msgFilesTooLess: '你必须选择最少 <b>{n}</b> {files} 来上传. ',
  msgFilesTooMany: '选择的上传文件个数 <b>({n})</b> 超出最大文件的限制个数 <b>{m}</b>.',
  msgFileNotFound: '文件 "{name}" 未找到!',
  msgFileSecured: '安全限制，为了防止读取文件 "{name}".',
  msgFileNotReadable: '文件 "{name}" 不可读.',
  msgFilePreviewAborted: '取消 "{name}" 的预览.',
  msgFilePreviewError: '读取 "{name}" 时出现了一个错误.',
  msgInvalidFileName: '文件名 "{name}" 包含非法字符.',
  msgInvalidFileType: '不正确的类型 "{name}". 只支持 "{types}" 类型的文件.',
  msgInvalidFileExtension: '不正确的文件扩展名 "{name}". 只支持 "{extensions}" 的文件扩展名.',
  msgFileTypes: {
    'image': 'image',
    'html': 'HTML',
    'text': 'text',
    'video': 'video',
    'audio': 'audio',
    'flash': 'flash',
    'pdf': 'PDF',
    'object': 'object'
  },
  msgUploadAborted: '该文件上传被中止',
  msgUploadThreshold: '处理中...',
  msgUploadBegin: '正在初始化...',
  msgUploadEnd: '完成',
  msgUploadEmpty: '无效的文件上传.',
  msgUploadError: '上传出错',
  msgValidationError: '验证错误',
  msgLoading: '加载第 {index} 文件 共 {files} &hellip;',
  msgProgress: '加载第 {index} 文件 共 {files} - {name} - {percent}% 完成.',
  msgSelected: '{n} {files} 选中',
  msgFoldersNotAllowed: '只支持拖拽文件! 跳过 {n} 拖拽的文件夹.',
  msgImageWidthSmall: '图像文件的"{name}"的宽度必须是至少{size}像素.',
  msgImageHeightSmall: '图像文件的"{name}"的高度必须至少为{size}像素.',
  msgImageWidthLarge: '图像文件"{name}"的宽度不能超过{size}像素.',
  msgImageHeightLarge: '图像文件"{name}"的高度不能超过{size}像素.',
  msgImageResizeError: '无法获取的图像尺寸调整。',
  msgImageResizeException: '调整图像大小时发生错误。<pre>{errors}</pre>',
  msgAjaxError: '{operation} 发生错误. 请重试!',
  msgAjaxProgressError: '{operation} 失败',
  ajaxOperations: {
    deleteThumb: '删除文件',
    uploadThumb: '上传文件',
    uploadBatch: '批量上传',
    uploadExtra: '表单数据上传'
  },
  dropZoneTitle: '',
  dropZoneClickTitle: '(点击{files}按钮选择文件)',
  fileActionSettings: {
    removeTitle: '删除文件',
    uploadTitle: '上传文件',
    uploadRetryTitle: '重试',
    zoomTitle: '查看详情',
    dragTitle: '移动 / 重置',
    indicatorNewTitle: '没有上传',
    indicatorSuccessTitle: '上传',
    indicatorErrorTitle: '上传错误',
    indicatorLoadingTitle: '上传 ...'
  },
  previewZoomButtonTitles: {
    prev: '预览上一个文件',
    next: '预览下一个文件',
    toggleheader: '缩放',
    fullscreen: '全屏',
    borderless: '无边界模式',
    close: '关闭当前预览'
  }
};
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
