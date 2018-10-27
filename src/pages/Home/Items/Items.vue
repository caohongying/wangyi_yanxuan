<template>
  <div class="ItemWarp">
    <header class="header" :class='className' >
      <a :class="{optimize:className!=='newItemList'}">
        <span v-if="className==='newItemList'">新品首发</span>
        <span v-else="">人气推荐·好物精选</span>
        <div>
          <span>
            <span>查看全部</span>
          </span>
        </div>
      </a>
    </header>
    <div :id ="className" class="ItemList">
      <ul>
        <li v-for="(item,index) in ItemList" :key="index">
          <a>
            <div class="img-warp">
              <img :src="item.listPicUrl">
            </div>
            <div class="item-name">
              <span>
                {{item.name}}
              </span>
            </div>
            <div class="item-desc">
              {{item.simpleDesc}}
            </div>
            <div class="item-price">￥{{item.retailPrice}}</div>
          </a>
        </li>
        <li class="item-more">
          查看全部
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    mounted(){
      const BSbox =document.getElementById(this.className);
      this.newAndP=new BScroll(BSbox,{
        click: true,
        scrollX:true,
      });
    },
    props:{
      className:String,
      ItemList:Array
    },
    data() {
      return {}
    }

  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .ItemWarp
    margin-bottom: .26667rem;
    background-color: #fff;
    >.header
      background-size: 10rem 3.46667rem;
      height: 3.46667rem;
      margin-bottom: .42667rem;
      position: relative;
      display: flex;
      flex-flow: row nowrap;
      align-items: center
      justify-content: center;
      font-size: .42667rem;
      &.newItemList
        background: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/bitmap-d4f7b37e32.png)
      &.popularItemList
        background: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/bitmap2-d626e0b52a.png)
      >a
        display: block;
        text-align: center;
        font-size: .48rem;
        color: #8BA0B6;
        flex-flow: row nowrap;
        align-items: center
        >div
          position: relative;
          margin: .21333rem auto 0;
          width: 3.2rem;
          height: .74667rem;
          font-size: .37333rem;
          line-height: .74667rem;
          background: #D8E5F1;
        &.optimize
          color: #B4A078;
          >div
            background-color  #F4E9CB
    >.ItemList
      height: 6.4rem
      background-color: #fff;
      display flex
      >ul
        display flex
        >li
          margin-left: .4rem;
          width: 3.73333rem
          height 100%
          float: left;
          position: relative
          overflow: hidden
          background-color #fff
          &.item-more
            display: block;
            border: .10667rem solid #F4F4F4;
            width: 3.73333rem;
            height: 3.73333rem;
            margin: 0 .4rem;
            line-height: 3.73333rem;
            text-align: center;
            font-size: .37333rem;
            color: #666
          >a
            width 100%
            .img-warp
              width 100%
              background-color #f4f4f4
              margin-bottom: .26667rem
              img
                width 100%
                display block
            >.item-name
              margin-top: .13333rem;
              padding: 0 .13333rem;
              line-height: .64rem;
              text-align: left;
              font-size: .37333rem;
              text-overflow: ellipsis;
              overflow: hidden;
              white-space: nowrap;
              color: #333;
            >.item-desc
              display: block;
              margin-bottom: .18667rem;
              font-size: .32rem;
              color: #7f7f7f;
              line-height: .4rem;
              white-space: nowrap;
              text-overflow: ellipsis;
              overflow: hidden;
              padding: 0 .13333rem
            >.item-price
              padding: 0 .13333rem;
              font-size: .37333rem
              line-height: 1;
              text-align: left;
              color: #b4282d;
</style>
