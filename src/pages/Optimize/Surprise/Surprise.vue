<template>
  <a class="surprise">
    <div class="imgWarp">
      <div class="left-img" style="background-image:url(//yanxuan.nosdn.127.net/ba3d89c57b8267f3564429e0b173f305.jpg?imageView&quality=75);background-size:cover;-webkit-background-size:cover;-o-background-size:cover;-ms-background-size:cover;-moz-background-size:cover;background-position:center;background-repeat:no-repeat;display: none" ></div>
      <div class="right-img" style="display: none">
        <div class="up" style="background-image:url(//yanxuan.nosdn.127.net/9325ccc8a1507ac60a13481681cfd88a.png?imageView&quality=75);background-size:cover;-webkit-background-size:cover;-o-background-size:cover;-ms-background-size:cover;-moz-background-size:cover;background-position:center;background-repeat:no-repeat;"></div>
        <div class="down" style="background-image:url(//yanxuan.nosdn.127.net/9325ccc8a1507ac60a13481681cfd88a.png?imageView&quality=75);background-size:cover;-webkit-background-size:cover;-o-background-size:cover;-ms-background-size:cover;-moz-background-size:cover;background-position:center;background-repeat:no-repeat;"></div>
      </div>
      <div class="one-img" style="background-image:url(//yanxuan.nosdn.127.net/9325ccc8a1507ac60a13481681cfd88a.png?imageView&quality=75);background-size:cover;-webkit-background-size:cover;-o-background-size:cover;-ms-background-size:cover;-moz-background-size:cover;background-position:center;background-repeat:no-repeat;"></div>
    </div>
    <div class="desc">买一次还想买一次</div>
  </a>
</template>

<script>
  export default {
    data() {
      return {}
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../common/stylus/mixins.styl"
  .surprise
    display: block;
    padding: .32rem;
    margin-bottom: .4rem;
    background-color: #fff;
    color: #333
    box-sizing border-box
    >.imgWarp
      overflow: hidden
      >.left-img
        float: left;
        width: 6.13333rem;
        height: 4.8rem;
        margin-right: .05333rem
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat
      >.right-img
        float: right;
        width: 2.37333rem
        >.up
          width: 2.37333rem
          height: 2.37333rem;
          background-size 100% 100%
          background-position: center;
          background-repeat: no-repeat
          margin-bottom: .05333rem
        >.down
          width: 2.37333rem
          height: 2.37333rem
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat
      >.one-img
        width 642*$rem
        height 360*$rem
        display block
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat
    >.desc
      background-color: #fff;
      font-size: .37333rem;
      padding-top: .38667rem;
      padding-bottom: .37333rem;
      line-height: 1.2;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden
</style>
