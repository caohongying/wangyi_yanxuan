<template>
  <div class="cateListL2">
    <div class="title">{{category.name}}</div>
    <ul class="list">
      <li class="cateItem" v-for="(subCate,index) in category.subCateList" :key="index">
        <a href="javascript:;">
          <div class="imgWarp">
            <img :src="subCate.wapBannerUrl">
          </div>
          <div class="name">{{subCate.name}}</div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    props:{
      category:Object
    },
    data() {
      return {}
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .cateListL2
    margin-bottom: .16rem
    >.title
      white-space: nowrap;
      max-width: 7.04rem;
      padding-bottom: .2667rem;
      margin-bottom: .32rem;
      text-align: left;
      font-size: .37333rem;
      font-weight: 700;
      border-bottom: 1px solid #d9d9d9
    >.list
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
          width 100%
          font-size: .32rem;
          text-align: center;
          line-height: .48rem;
          display: block;
          color: #333;
          overflow: hidden;
          text-overflow: ellipsis
</style>
