<template>
  <div class='contrast-red  myall' id="show">
    <top-nav></top-nav>
    <div id=''>
      <left-nav></left-nav>
      <index></index>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
  import TopNav from '@/components/TopHeader'
  import LeftNav from '@/components/LeftNav'
  import index from '@/components/table/index.vue'
    export default {
      name: "Home",
      components: {
        LeftNav: LeftNav,
        TopNav: TopNav,
        index: index,
      },
    }
</script>
