<template>
  <div class="cateListContainer">
    <h3 class="title">{{item.name}}好物</h3>
    <div class="cateList">
      <ul class="goodList">
        <li v-for="(prod,index) in item.itemList" :key="index">
          <a href="javascript:;">
            <div class="cate-header">
              <div class="img-warp">
                <img :src="prod.listPicUrl">
              </div>
              <p class="cate-info">{{prod.simpleDesc}}</p>
            </div>
            <div class="support" v-if="prod.promTag">
              <p>{{prod.promTag}}</p>
            </div>
            <div class="cate-name">
              <span>{{prod.name}}</span>
            </div>
            <div class="price">
              <span>￥{{prod.retailPrice}}</span>
            </div>
          </a>
        </li>
        <li class="cate-more" :key='8'>
          <a href="javascript:;">
            <p>更多{{item.name}}好物</p>
            <i class="right-icon"></i>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    props:{
      item:Object
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../common/stylus/mixins.styl"
  .cateListContainer
    margin-bottom: .26667rem;
    background-color: #f4f4f4
    >.title
      line-height: 1.6rem;
      text-align: center;
      font-size: .37333rem;
      color: #333;
      background-color: #fff
    >.cateList
      background-color: #fff
      .goodList
        position: relative;
        z-index: 0;
        overflow: hidden;
        >li
          z-index: 7;
          padding: 0 0.13333333333333333rem 0.44rem 0.26666666666666666rem
          float: left;
          position: relative;
          width: 50%;
          height 552*$rem
          overflow: hidden;
          background-color: #fff
          box-sizing border-box
          &.cate-more
            z-index: 1;
            padding-bottom: 0;
            padding-right: .26667rem;
            padding-left: .13333rem;
            height: 5.52rem;
            >a
              border-radius: .05333rem;
              background-color: #f4f4f4;
              padding-top: 1.70667rem;
              padding-bottom: 1.72rem;
              width: 100%;
              display: block;
              text-align center
              justify-content: center;
              >p
                color: #333;
                font-size: .42667rem;
                line-height: 1;
                margin-bottom: .18rem;
                display block
              >.right-icon
                display: inline-block;
                vertical-align: middle;
                background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/goodGridMore-233aaf669a.png);
                background-repeat: no-repeat;
                background-size: 100% 100%;
                width: .89333rem;
                height: .89333rem;
          a
            .cate-header
              position relative
              >.img-warp
                position: relative;
                padding-bottom: 110%
                >img
                  position: absolute;
                  display: block;
                  width: 100%;
                  height: 4.6rem;
                  border-radius: .05333rem .05333rem 0 0;
                  background-color: #f4f4f4;
              >.cate-info
                position: absolute;
                bottom: 0;
                width: 100%;
                background: #F1ECE2;
                border-radius: 0 0 .05333rem .05333rem;
                font-size: .32rem;
                color: #9F8A60;
                letter-spacing: 0;
                line-height: .38667rem;
                padding: .26667rem .13333rem;
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
                box-sizing border-box
            .support
              width: 100%;
              z-index: 1;
              padding-left: .13333rem;
              margin: .26667rem 0 0 .05333rem;
              height: .4rem;
              overflow: hidden
              box-sizing border-box
              >p
                margin-bottom: 1.01333rem;
                height: .4rem;
                padding: .06667rem .21333rem;
                line-height: .26667rem;
                text-align: center;
                color: #fff;
                font-size: .26667rem;
                border-radius: .02667rem;
                display: inline-block;
                vertical-align: middle;
                background-color: #f48f18

            .cate-name
              margin-top: .13333rem;
              padding: 0 .13333rem;
              line-height: .64rem;
              text-align: left;
              font-size: .37333rem;
              text-overflow: ellipsis;
              overflow: hidden;
              white-space: nowrap;
              color: #333;
            .price
              line-height: 1;
              font-size: .42667rem;
              text-align: left;
              color: #b4282d;
              padding: 0 .13333rem
</style>
