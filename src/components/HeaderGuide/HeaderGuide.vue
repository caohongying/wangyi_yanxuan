<template>
  <div class="headerContiner">
    <div class="headerWarp">
      <a class="home-icon" href="javascript:;" @click="$router.history.replace('/home')"></a>
      <a class="logoWarp" href="javascript:;" @click="$router.history.replace('/home')">
        <i class="logo-icon"></i>
      </a>
      <div class="rightWarp">
        <a class="searchWarp" href="javascript:;" >
          <i class="search-icon"></i>
        </a>
        <a class="shopcarWarp" href="javascript:;" @click="$router.history.replace('/shopchart')">
          <i class="shop-icon"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {}
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .headerContiner
    position absolute
    top 0
    left 0
    width 100%
    height: 1.16rem;
    background-color: #fafafa
    &:after
      content ''
      position: absolute;
      background-color: #d9d9d9;
      width: 100%;
      height: 1px;
      transform-origin: 50% 100% 0;
      bottom: 0
    >.headerWarp
      z-index: 1;
      width: 100%;
      margin: auto;
      overflow: hidden;
      position: relative;
      box-sizing border-box
      padding: 0 .21333rem 0 .32rem;
      height: 1.17333rem;
      display: flex;
      justify-content: space-between;
      >.home-icon
        width: .64rem;
        height: .58667rem;
        background-position: 0 -.98667rem;
        display: inline-block;
        vertical-align: middle;
        transform translateY(50%)
        background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s28ce1ea0be-3d137edb2d.png);
        background-repeat: no-repeat;
        background-size: 2.29333rem 4.96rem
      .logo-icon
        width: 2.29333rem;
        height: .72rem;
        background-position: 0 -1.70667rem;
        display: inline-block;
        vertical-align: middle;
        background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s28ce1ea0be-3d137edb2d.png);
        background-repeat: no-repeat;
        background-size: 2.29333rem 4.96rem
      >rightWarp
        margin-left: auto;
        margin-right: .06667rem
      .searchWarp
        margin-right: .26667rem;
        .search-icon
          width: .85333rem;
          height: .85333rem;
          background-position: 0 -4.10667rem
          display: inline-block;
          vertical-align: middle;
          background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s28ce1ea0be-3d137edb2d.png);
          background-repeat: no-repeat;
          background-size: 2.29333rem 4.96rem
      .shop-icon
        width: .85333rem;
        height: .85333rem;
        background-position: 0 0
        display: inline-block;
        vertical-align: middle;
        background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s28ce1ea0be-3d137edb2d.png);
        background-repeat: no-repeat;
        background-size: 2.29333rem 4.96rem
</style>
