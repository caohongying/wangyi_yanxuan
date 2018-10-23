<template>
  <a class="surprise">
    <div class="imgWarp">
      <div class="left-img" :style="{backgroundImage:`url(${surpise.picList[0]})`}"  v-if="surpise.picList"></div>
      <div class="right-img" v-if="surpise.picList">
        <div class="up" :style="{backgroundImage:`url(${surpise.picList[1]})`}"></div>
        <div class="down" :style="{backgroundImage:`url(${surpise.picList[2]})`}"></div>
      </div>
      <div class="one-img" :style="{backgroundImage:`url(${surpise.itemPicUrl})`}" v-else></div>
    </div>
    <div class="desc">{{surpise.content? surpise.content:surpise.title}}</div>
  </a>
</template>

<script>
  export default {
    props:{
      surpise:Object
    },
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
        width 642*$rpx
        height 360*$rpx
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
