<template>
  <div class='contrast-red  myall' id="show">
    <top-nav></top-nav>
    <div id=''>
      <left-nav></left-nav>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
  // import TopNav from '@/components/TopNav'
  import LeftNav from '@/components/LeftNav'
  import index from '@/components/table/index.vue'
    export default {
      name: "Home",
      //等这个好了  就差不多了， 还有别的问题么？
      components: {
        LeftNav: LeftNav,
        // TopNav: TopNav,
        index: index,
      },
    }
</script>

<style src="../assets/css/ace.min.css"></style>
<style src="../assets/css/ace-ie.min.css"></style>
<style src="../assets/css/ace-rtl.min.css"></style>
<style src="../assets/css/ace-skins.min.css"></style>
<style src="../assets/css/bootstrap.min.css"></style>
<style src="../assets/css/bootstrap-editable.css"></style>
<style src="../assets/css/bootstrap-timepicker.css"></style>
<style src="../assets/css/chosen.css"></style>
<style src="../assets/css/colorbox.css"></style>
<style src="../assets/css/colorpicker.css"></style>
<style src="../assets/css/datepicker.css"></style>
<style src="../assets/css/daterangepicker.css"></style>
<style src="../assets/css/dropzone.css"></style>
<!--<style src="../assets/css/font-awesome-ie7.min.css"></style>-->
<style src="../assets/css/font-awesome.min.css"></style>
<style src="../assets/css/fullcalendar.css"></style>
<style src="../assets/css/jquery-ui-1.10.3.custom.min.css"></style>
<style src="../assets/css/jquery-ui-1.10.3.full.min.css"></style>
<style src="../assets/css/jquery.gritter.css"></style>
<style src="../assets/css/ui.jqgrid.css"></style>
<!--<style src="../assets/css/prettify.css"></style>-->
<style src="../assets/css/select2.css"></style>
