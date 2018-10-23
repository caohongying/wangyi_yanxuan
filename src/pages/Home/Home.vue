<template>
  <div class="homeContiner">
    <!--头部-->
    <header>
      <div class="logo-search">
        <span class="logo"></span>
        <div class="search">
          <i class="search-icon"></i>
          <span>搜索商品，共16706款好物</span>
        </div>
      </div>
      <!--头部导航-->
      <div class="nav">
        <ul class="navList">
          <li class="active">推荐</li>
          <li>推荐</li>
          <li>鞋包配饰</li>
          <li>推荐</li>
          <li>推荐</li>
          <li>推荐</li>
        </ul>

      </div>
    </header>
    <!--主体-->
    <section>
      <div class="swiper">
        <!--轮播-->
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <img src="./images/a.jpeg">
            </div>
            <div class="swiper-slide">
              <img src="./images/b.jpeg">
            </div>
            <div class="swiper-slide">
              <img src="./images/c.jpeg">
            </div>
          </div>
          <div class="swiper-pagination"></div>
        </div>
        <!--品牌-->
        <div class="supports">
          <ul>
            <li>
              <a href="javascript:;">
                <i class="iconImg"></i>
                <span>网易自营品牌</span>
              </a>
              <a href="javascript:;">
                <i class="iconImg"></i>
                <span>30天无忧退货</span>
              </a>
              <a href="javascript:;">
                <i class="iconImg"></i>
                <span>48小时快速退换</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <!--制造商直供-->
      <div class="brand">
        <header class="brand-header">
          <a>
            <span>品牌制造商直供</span>
            <i class="right-icon"></i>
          </a>
        </header>
        <div class="brand-goods">
          <ul>
            <li class="goods">
              <a>
                <div class="content-goods">
                  <h4>品牌直供</h4>
                  <div class="price">
                    <span class="price1">25</span>
                    <span class="price2">元起</span>
                  </div>
                  <i class="shangxin-icon"></i>
                </div>
                <img src="http://yanxuan.nosdn.127.net/8d670dfdf89315316160266b9a81f68a.png?imageView&thumbnail=355x0&quality=65">
              </a>
            </li>
            <li class="goods">
              <a>
                <div class="content-goods">
                  <h4>品牌直供</h4>
                  <div class="price">
                    <span class="price1">25</span>
                    <span class="price2">元起</span>
                  </div>
                  <i class="shangxin-icon"></i>
                </div>
                <img src="http://yanxuan.nosdn.127.net/8d670dfdf89315316160266b9a81f68a.png?imageView&thumbnail=355x0&quality=65">
              </a>
            </li>
            <li class="goods">
              <a>
                <div class="content-goods">
                  <h4>品牌直供</h4>
                  <div class="price">
                    <span class="price1">25</span>
                    <span class="price2">元起</span>
                  </div>
                  <i class="shangxin-icon"></i>
                </div>
                <img src="http://yanxuan.nosdn.127.net/8d670dfdf89315316160266b9a81f68a.png?imageView&thumbnail=355x0&quality=65">
              </a>
            </li>
            <li class="goods">
              <a>
                <div class="content-goods">
                  <h4>品牌直供</h4>
                  <div class="price">
                    <span class="price1">25</span>
                    <span class="price2">元起</span>
                  </div>
                  <i class="shangxin-icon"></i>
                </div>
                <img src="http://yanxuan.nosdn.127.net/8d670dfdf89315316160266b9a81f68a.png?imageView&thumbnail=355x0&quality=65">
              </a>
            </li>
          </ul>
        </div>
      </div>
      <Items />
      <Items />
      <!--限时购-->
      <div class="limitTime">
        <a>
          <div class="limitTime-warp">
            <div class="left-item">
              <div class="title">严选限时购</div>
              <div class="countdown">
                <span class="hours time" >03</span>
                <span class="colon" >:</span>
                <span class="mins time" >11</span>
                <span class="colon" >:</span>
                <span class="secs time" >59</span>
              </div>
              <div class="next-title">
                <span>下一场</span>
                <span >18:00</span>
                <span>开始</span>
              </div>
            </div>
            <div class="right-item">
              <div class="imgWarp">
                <img src="http://yanxuan.nosdn.127.net/3c9cd99a3ff0e5f216ce597913533332.png" alt="">
              </div>
              <div class="price">
                <div class="nowPrice">
                  <span class="rmb">￥</span>
                  <span>306</span>
                </div>
                <div class="originPrice">
                  <span class="rmb">￥</span>
                  <span>359</span>
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
      <!--福利社-->
      <div class="fuli">
        <a>
        </a>
      </div>
      <!--专题-->
      <div class="topicList">
        <header class="topic-title">
          <a>
            <span>专题精选</span>
            <i class="icon-right"></i>
          </a>
        </header>
        <div class="topic-items">
          <div class="topicScrollBox">
            <ul >
              <li >
                <a href="javascript:;">
                  <img src="https://yanxuan.nosdn.127.net/22c06cba5722e5fd0e9561cf5b7b1800.jpg">
                </a>
                <div class="item-price">
                  <h4>深度清洁</h4>
                  <span>
                      100元起
                    </span>
                </div>
                <div class="item-info">洁面仪</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!--居家好物等-->
      <CateListContainer />
      <!--底部-->
      <div class="downLoad-copyright">
        <div>
          <div class="downLoad">
            <a href="javascript:;">下载APP</a>
            <a href="javascript:;">电脑版</a>
          </div>
          <p class="copyright">
            <span>网易公司版权所有 © 1997-2018</span>
            <span>食品经营许可证：JY13301080111719</span>
          </p>
        </div>
      </div>
    </section>

  </div>
</template>
<script>
  import 'swiper/dist/css/swiper.min.css'
  import Swiper from 'swiper';
  import Items from './Items/Items.vue'
  import CateListContainer from './CateListContainer/CateListContainer.vue'


  export default {

    components:{
      Items,
      CateListContainer
    },
    mounted(){
      new Swiper('.swiper-container',{
        loop: true, // 循环模式选项
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
        }
      })
    },
    methods:{

    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">


  @import "../../common/stylus/mixins.styl"
  .homeContiner
    width 100%
    height 100%
    header
      background #fff
      width 100%
      padding: 0 .4rem;
      height 148 *$rem
      box-sizing border-box
      .logo-search
        height 88*$rem
        width 100%
        display flex
        flex-direction row
        align-items center
        .logo
          width: 1.84rem;
          height: .53333rem;
          background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-11d65342f9.png);
          display: inline-block;
          margin-right: .26667rem;
          background-size: cover;
          background-position: center;
        .search
          width 532 *$rem
          height 56 *$rem
          border-radius 0.1rem
          background #ededed
          display flex
          justify-content center
          align-items center
          .search-icon
            display inline-block;
            vertical-align middle;
            background-image url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-2fb94833aa.png);
            background-repeat no-repeat;
            background-size 100% 100%;
            width .37333rem;
            height .37333rem;
            margin-right .13333rem;
          span
            color #666;
            font-size 0.4rem

      .nav
        height 60 *$rem
        width 100%
        overflow hidden
        .navList
          height 100%
          display flex
          align-items center
          flex-wrap wrap
          overflow hidden
          li
            display inline-block;
            padding 0 .21333rem;
            line-height .8rem;
            height 95%
            font-size .37333rem;
            color #333;
            text-align center;
            margin-left: .64rem;
            border-bottom 1.5px solid white
            &.active
              border-bottom 1.5px solid red
              color red
            &:first-child
              margin-left: 0rem;
    section
      /*margin: .48rem 0;*/
      margin-bottom 1.48rem;
      .swiper
        background #fff
        margin-bottom: .26667rem;
        .swiper-container
          width 100%
          height 370 *$rem
          .swiper-wrapper
            width 100%
            height 100%
            .swiper-slide
              display flex
              justify-content center
              align-items flex-start
              flex-wrap wrap
              img
                display inline-block
                width 100%
                height 100%

          .swiper-pagination
            > .swiper-pagination-bullet
              width: .53333rem;
              height: .03333rem;
              display: inline-block;
              background: #fff;
              opacity: .4;
              padding: 0;
              border: 0;
              font-size: 100%;
              font-weight: normal;
              vertical-align: baseline
              &.swiper-pagination-bullet-active
                opacity: 1;
        .supports
          width 100%
          height .96rem
          ul
            width 95%
            height .96rem
            margin 0 auto
            display flex
            justify-content space-around
            li
              flex: 1;
              float: left
              display flex
              align-items center
              justify-content center
              a
                flex 1
                display: flex;
                justify-content center
                vertical-align: middle;
                height: .42667rem
                .iconImg
                  display: inline-block;
                  vertical-align: middle;
                  background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/servicePolicy-index-288c7abfd1.png);
                  background-repeat: no-repeat;
                  background-size: 100% 100%;
                  width: .42667rem;
                  height: .42667rem;
                span
                  font-size: .32rem;
                  color: #333;
                  display inline-block
                  margin-left: .10667rem;
                  line-height: .42667rem;
                  vertical-align: middle;
      .brand
        background-color #fff
        .brand-header
          display flex
          flex-flow: row nowrap;
          align-items center
          justify-content: center;
          height: 1.46667rem;
          font-size: .42667rem;
          >a
            display flex
            flex-flow row nowrap
            color #333
            align-items center
            .right-icon
              display: inline-block;
              vertical-align: middle;
              background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/go2-3e511991d6.png);
              background-repeat: no-repeat;
              background-size: 100% 100%;
              width: .4rem;
              height: .4rem;
              margin-left .13333rem
        .brand-goods
          padding-bottom: .10667rem
          >ul
            position: relative;
            margin: 0 .21333rem;
            height: 6.24rem;
            overflow: hidden;
            >.goods
              display: inline-block;
              float left
              position: relative;
              margin: 2*$rem;
              width: 4.73333rem;
              height: 3.14667rem;
              overflow: hidden;
              background-color: #f4f4f4;
              >a
                width 100%
                height 100%
                >.content-goods
                  position: absolute;
                  left: 0;
                  top: 0;
                  padding: .26667rem 0 0 .26667rem;
                  width: 100%;
                  z-index: 4;
                  >h4
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    overflow: hidden;
                    color: #333;
                    font-size: .37333rem;
                    line-height: .45333rem;
                    margin-bottom: .08rem;
                  >.price
                    display flex
                    >.price1
                      color: #333;
                      font-size: .37333rem;
                      line-height: .45333rem;
                    >.price2
                      color: #333;
                      font-size: .32rem;
                      line-height: .45333rem;
                  >.shangxin-icon
                    background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/new-5e42f2db1f.png);
                    height: .42667rem
                    width: .85333rem;
                    display: inline-block;
                    margin-top -40*$rem
                    vertical-align: middle;
                    background-repeat: no-repeat;
                    background-size: 100% 100%;


                >img
                  width 100%
                  height 100%
      .limitTime
        .limitTime-warp
          padding: .4rem .53333rem .4rem .74667rem;
          margin-bottom: .26667rem;
          height: 5.06667rem;
          background: #fff;
          display: -moz-flex;
          display: flex;
          >.left-item
            flex 1
            display flex
            flex-direction: column;
            padding-top: 1.06667rem;
            >.title
              font-size: .48rem;
              line-height: .48rem;
              margin-bottom: .32rem;
              color: #333;
              letter-spacing: .16rem;
            >.countdown
              display inline
              overflow hidden
              >span
                float left
                vertical-align middle
                line-height: .74667rem;
                display: inline-block;
                text-align: center;
              >.time
                width: .82667rem;
                height: .74667rem;
                font-size: .42667rem;
                color: #fff;
                border-radius: .05333rem;
                background: #444;
              >.colon
                color: #333;
                font-size: .4rem;
                width: .26667rem;
                font-weight: 700;
            >.next-title
              margin-top: .53333rem;
              color: #333;
              font-size: .32rem;
              line-height: .32rem;
              height: .32rem;
          >.right-item
            background: #fff;
            width: 4.26667rem;
            height: 4.26667rem;
            position: relative;
            >.imgWarp
              width 100%
              >img
                width: 100%;
                height: 100%;

            >.price
              height: 1.28rem;
              width: 1.28rem;
              position: absolute;
              right: .26667rem;
              bottom: .48rem;
              background-color: rgba(244,143,24,.95);
              border-radius: 100%;
              color: #fff;
              text-align: center;
              display: flex;
              flex-direction: column;
              justify-content: center;
              >div
                font-size: .37333rem;m
                line-height: .37333rem;
                height: .37333rem;
                >.rmb
                  font-size .32rem
                  margin-right -5*$rem

      .fuli
        width: 10rem;
        height: 4rem;
        margin-bottom: .26667rem
        >a
          width 100%
          height 100%
          display block
          background-image: url(http://yanxuan.nosdn.127.net/a3ea2d1108c94c7dece05eddf95f6df5.jpg);
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
      .topicList
        width 100%
        font-size: .42667rem
        background-color #fff
        >.topic-title
          width 100%
          height: 1.46667rem
          display flex
          color: #333
          align-items center
          justify-content center
          .icon-right
            display: inline-block;
            vertical-align: middle;
            background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/go2-3e511991d6.png);
            background-repeat: no-repeat;
            background-size: 100% 100%;
            width: .4rem;
            height: .4rem;

        >.topic-items
          width 100%
          height 453*$rem
          box-sizing border-box
          padding: 0 .4rem .48rem;
          overflow: hidden
          >.topicScrollBox
            width 100%
            height 100%
            display flex
            >ul
              display flex
              flex 1
              flex-shrink: 0
              >li
                display flex
                flex-flow: row nowrap
                flex-direction column
                margin-right: 20.8444*$rem;
                >a
                  display: block;
                  width: 7.66667rem;
                  margin-bottom: .21333rem;
                  border-radius: 8*$rem;
                  overflow: hidden
                  >img
                    display block
                    width 100%
                    height 100%
                >.item-price
                  height: .54667rem;
                  margin-bottom: .02667rem;
                  zoom: 1;
                  >h4
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    width: 5.46667rem;
                    float: left;
                    font-size: .37333rem;
                  >span
                    float: right;
                    font-size: .37333rem;
                    color: #b4282d;
                >.item-info
                  white-space: nowrap;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  width: 7.66667rem;
                  font-size: .32rem;
                  color: #7F7F7F;
      .downLoad-copyright
        border-top: 1*$rem solid rgba(0,0,0,.15);
        background-color: #414141
        >div
          text-align: center;
          padding: .72rem .26667rem .37333rem
          width: 10rem;
          margin-right: auto;
          margin-left: auto;
          box-sizing border-box
          >.downLoad
            width 90%
            margin-right: auto;
            margin-left: auto;
            display flex
            align-items center
            justify-content center
            >a
              width: 2.29333rem;
              font-size: .32rem;
              color: #fff;
              margin-right: .33333rem
              margin-left: .33333rem
              height: .82667rem;
              line-height: .82667rem
              border: 1*$rem solid #999
              text-align: center;
              background-color: transparent;
              border-radius: 4*$rem;
              overflow: hidden;

          >.copyright
            box-sizing: border-box
            margin-top: .48rem;
            margin-bottom: .48rem;
            display flex
            flex-direction column
            align-items center
            justify-content center
            >span
              font-size: .32rem;
              line-height: .42667rem;
              color: #999;


</style>
