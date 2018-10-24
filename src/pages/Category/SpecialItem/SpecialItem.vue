<template>
  <ul class="cateListL2">
    <li class="cateItem" >
      <a href="javascript:;">
        <div class="imgWarp">
          <img src="http://yanxuan.nosdn.127.net/5efcbeecb663e629c1bb309c7b356f60.png?imageView&quality=85&thumbnail=144x144">
        </div>
        <div class="name">行李箱</div>
      </a>
    </li>
  </ul>
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
  .cateListL2
    display flex
    flex-wrap: wrap
    >.cateItem
      display: inline-block;
      margin-right: 0.23133rem;
      font-size: 0;
      width: 1.92rem;
      vertical-align: top
      .imgWarp
        width: 1.92rem;
        height: 1.92rem;
        background: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/water-d839a69b0d.png) center no-repeat
        >img
          display: block;
          width: 100%;
          background: #fff;
          height: 100%
      .name
        height: .96rem;
        font-size: .32rem;
        text-align: center;
        line-height: .48rem;
        display: block;
        color: #333;
        overflow: hidden;
        text-overflow: ellipsis
</style>
