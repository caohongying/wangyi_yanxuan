<template>
  <div class="wrap">
    <header class="headerTop">
      <div class="logo-search">
        <span class="logo"></span>
        <div class="search">
          <i class="search-icon"></i>
          <span>搜索商品，共16706款好物</span>
        </div>
      </div>
      <!--头部导航-->
      <div class="nav">
        <ul class="navList" ref="typesUl">
          <li :class="{active:currentIndex===index}" @click="selectItem(index)" v-for="(item,index) in home_data.cateList" :key="index">{{item.name}}</li>
        </ul>
      </div>
    </header>
    <div class="homeContiner">
      <!--头部-->

      <!--主体-->
      <section class="content">
        <div class="swiper">
          <!--轮播-->
          <div class="swiper-container">
            <div class="swiper-wrapper" >
              <div class="swiper-slide" v-for="(slideItem,index) in home_data.focusList" :key="index">
                <img v-lazy="slideItem.picUrl">
              </div>
            </div>
            <div class="swiper-pagination"></div>
          </div>
          <!--品牌-->
          <div class="supports">
            <ul>
              <li>
                <a href="javascript:;" v-for="(Desc,index) in home_data.policyDescList" :key="index">
                  <i class="iconImg"></i>
                  <span>{{Desc.desc}}</span>
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
              <li class="goods" v-for="(tag,index) in tagData" :key="index">
                <a>
                  <div class="content-goods">
                    <h4>{{tag.name}}</h4>
                    <div class="price">
                      <span class="price1">{{tag.floorPrice}}</span>
                      <span class="price2">元起</span>
                    </div>
                    <i class="shangxin-icon"></i>
                  </div>
                  <img v-lazy="tag.picUrl">
                </a>
              </li>
            </ul>
          </div>
        </div>
        <Items :className = '"newItemList"' :ItemList = 'home_data.newItemList' v-if="home_data.newItemList"/>
        <Items :className = '"popularItemList"' :ItemList = 'home_data.popularItemList' v-if="home_data.popularItemList"/>
        <!--限时购-->
        <div class="limitTime" v-if="home_data.flashSaleIndexVO">
          <a>
            <div class="limitTime-warp">
              <div class="left-item">
                <div class="title">严选限时购</div>
                <div class="countdown">
                  <span class="hours time" >{{time.hour}}</span>
                  <span class="colon" >:</span>
                  <span class="mins time" >{{time.mins}}</span>
                  <span class="colon" >:</span>
                  <span class="secs time" >{{time.secs}}</span>
                </div>
                <div class="next-title">
                  <span>下一场</span>
                  <span >{{home_data.flashSaleIndexVO.nextStartTime|format-date("HH:mm")}}</span>
                  <span>开始</span>
                </div>
              </div>
              <div class="right-item">
                <div class="imgWarp">
                  <img :src="home_data.flashSaleIndexVO.primaryPicUrl" alt="">
                </div>
                <div class="price">
                  <div class="nowPrice">
                    <span class="rmb">￥</span>
                    <span>{{home_data.flashSaleIndexVO.activityPrice}}</span>
                  </div>
                  <div class="originPrice">
                    <span class="rmb">￥</span>
                    <span>{{home_data.flashSaleIndexVO.originPrice}}</span>
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
          <div class="topic-title">
            <a>
              <span>专题精选</span>
              <i class="icon-right"></i>
            </a>
          </div>
          <div class="topic-items">
            <div class="topicScrollBox" ref="scroll">
              <ul >
                <li v-for="(topic,index) in home_data.topicList" :key="index">
                  <a href="javascript:;">
                    <img :src="topic.itemPicUrl">
                  </a>
                  <div class="item-price">
                    <h4>{{topic.title}}</h4>
                    <span>
                      {{topic.priceInfo}}元起
                    </span>
                  </div>
                  <div class="item-info">{{topic.subtitle}}</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!--居家好物等-->
        <CateListContainer v-for="(item,index) in home_data.cateList" :key="index" :item="item" />
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
      <i class="gotoTop" @click = 'gotoTop' v-show="isShowGotoTop"></i>
      <div class="newsWarp" v-if="isShowNews">
        <div class="mask"></div>
        <i class="close-button" @click = 'isShowNews = false'></i>
        <div class="modal" style="backgroundImage:url(https://yanxuan.nosdn.127.net/3296fd0c446376e1ec5f76a4f8062aa1.png?imageView&quality=85&thumbnail=630x804)" >
          <a class="linkBtn" href="javascript:void(0);" data-reactid=".1.2.0.0">立即去领取</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import Swiper from 'swiper';
  import 'swiper/dist/css/swiper.min.css'

  import Items from './Items/Items.vue'
  import CateListContainer from './CateListContainer/CateListContainer.vue'
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'
  export default {
    data(){
      return{
        currentIndex:0,
        countdownTime:0,
        isShowGotoTop:false,
        isShowNews:true
      }
    },
    computed:{
      ...mapState(['home_data']),
      tagData(){
        if(this.home_data.tagList){
          const tagData=this.home_data.tagList.splice(0,4);
          return tagData
        }else {
          return;
        }
      },
      time(){
        const time={}
        const hour = Math.floor(this.countdownTime/(1000*60*60));
        time.hour= hour>10? hour : '0'+hour;
        const mins = Math.floor(this.countdownTime/(1000*60)%60);
        time.mins=mins>10? mins : '0'+mins;
        const secs = Math.floor(this.countdownTime/1000%60);
        time.secs=secs>10? secs : '0'+secs;
        return time;
      }
    },
    components:{
      Items,
      CateListContainer
    },
    mounted(){


      const timer = setInterval(()=>{
        this.countdownTime -= 1000
      },1000);
      const result=this.$store.dispatch('getHomeData',()=>{
        this.countdownTime = this.home_data.flashSaleIndexVO.remainTime;

        this.$nextTick(() => {
          this._initScroll()
        })
      });
    },
    methods:{
      _initScroll(){
        new Swiper('.swiper-container',{
          initialSlide :0,
          observer:true,//修改swiper自己或子元素时，自动初始化swiper
          observeParents:true,
          loop: true, // 循环模式选项
          // 如果需要分页器
          autoplay: {
            delay: 2500,
            disableOnInteraction: false,
          },
          pagination: {
            el: '.swiper-pagination',
          }
        });
        this.homeScroll=new BScroll('.homeContiner',{
          click: true,
          scrollX:false,
          probeType:1
        });
        this.homeScroll.on('scroll',({x,y})=>{
          if(Math.abs(y)>document.body.clientHeight){
            this.isShowGotoTop=true
          }else {
            this.isShowGotoTop=false
          }
        });
        this.navBar=new BScroll('.nav',{
          click: true,
          scrollX:true,
        });


        this.topicScroll = new BScroll('.topicScrollBox',{
          click: true,
          scrollX:true,
        });
      },
      selectItem(index){
        this.currentIndex=index;
        this.navBar.scrollToElement(this.$refs.typesUl.children[index],1000);
      },
      gotoTop(){
        this.homeScroll.scrollTo(0,0,1000)
        this.isShowGotoTop=false;
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>


  @import "../../common/stylus/mixins.styl"
  .wrap
    width 100%
    height 100%
    overflow hidden

    .headerTop
      position fixed
      z-index 10
      top 0
      left 0
      background #fff
      width 100%
      padding: 0 .4rem;
      height 148 *$rem
      box-sizing border-box
      overflow hidden
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
          width 1350*$rem
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
    .homeContiner
      width 100%
      position absolute
      top 0
      left 0
      bottom 0
      background #f4f4f4
      margin auto 0
      margin-bottom 3.3rem;
      section
        /*margin: .48rem 0;*/
        margin-top 150*$rem;
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
          height 563*$rem
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
                flex 1
                width 1800*$rem
                flex-shrink: 0
                display flex
                width
                >li
                  display flex
                  flex-flow: row nowrap
                  flex-direction column
                  margin-right: 20.8444* $rem;
                  >a
                    display: block;
                    width: 7.66667rem;
                    margin-bottom: .21333rem;
                    border-radius: 8* $rem;
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


      >.gotoTop
        position: absolute;
        right: .30667rem;
        bottom: 0rem;
        vertical-align: middle;
        width: 1.09333rem;
        height: 1.09333rem;
        background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/goToTop-7a19216f77.png);
        background-size: 1.09333rem 1.09333rem;
        z-index: 2;
      .newsWarp
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 9999;
        >.mask
          position: absolute;
          top: 0;
          left: 0;
          z-index: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0,0,0,.5);
        >.close-button
          position: fixed;
          right: .4rem;
          top: .8rem;
          z-index: 2;
          display: inline-block;
          vertical-align: middle;
          background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/modalClose-9365f12572.png);
          background-repeat: no-repeat;
          background-size: 100% 100%;
          width: .85333rem;
          height: .85333rem;
        .modal
          transform: translate(-50%,-50%);
          position: absolute;
          top: 50%;
          left: 50%;
          z-index: 1;
          width: 8.4rem;
          height: 10.72rem;
          background-size 100%
          .linkBtn
            display: block;
            position: absolute;
            left: .53333rem;
            bottom: .64rem;
            width: 7.33333rem;
            height: 1.06667rem;
            border-radius: .05333rem;
            background: #B4282D;
            text-align: center;
            line-height: 1.06667rem;
            font-size: .37333rem;
            font-family: PingFangSC-Regular;
            color: #fff;
</style>
