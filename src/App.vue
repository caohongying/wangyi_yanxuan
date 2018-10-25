<template>
  <div class="app">
    <router-view/>
    <FooterGuide v-if="$route.meta.showFooter"/>
  </div>
</template>

<script>
  import FooterGuide from './components/FooterGuide/FooterGuide.vue'
  export default {
    components: {
      FooterGuide
    }
  }

</script>

<style lang="stylus" rel="stylesheet/stylus">
  html,body
    height 100%
    overflow hidden
  .app
    height 100%
    /*width 100%*/
    background #f4f4f4
</style>

