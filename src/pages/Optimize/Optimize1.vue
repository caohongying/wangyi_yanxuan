<template>
  <div class="shiwuContiner">
    <HeaderGuide/>
    <div id="scrollBox">
      <section class="contentWarp">
        <div class="swiper">
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <a class="swiper-slide" v-for="(bannerList,index) in optimize_data.banner" :key="index">
                <img v-lazy="bannerList.picUrl">
                <div class="content">
                  <div class="subTitle">{{bannerList.subTitle}}</div>
                  <div class="title">{{bannerList.title}}</div>
                  <div class="desc">{{bannerList.desc}}</div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div class="article">
          <div id="article-scroll">
            <ul class="article-list">
              <li v-for="(column,index) in optimize_data.column" :key="index">
                <div class="img-container" :style="{backgroundImage:`url(${column.picUrl})`}"></div>
                <div class="article-count">
                  <div>{{column.articleCount}}</div>
                </div>
                <div class="title">{{column.title}}</div>
              </li>
            </ul>
          </div>
        </div>
        <div class="recommends">
          <div class="contentContiner">
            <div class="commonTitle">为你推荐</div>
            <MainPosItem :main="optimize_data.recommendOne"/>
            <MinorPosItem :minor="optimize_data.recommendTwo"/>
            <MinorPosItem :minor="optimize_data.recommendThree"/>
          </div>
        </div>
        <div class="tenFifteen">
          <div class="inner">
            <div class="title">十点一刻</div>
            <div id="tenFifteenBS">
              <div class="list" >
                <a class="main" href="javascript:;" v-for="(topic,index) in optimize_data.tenfifteen" :key="index">
                  <div class="line-title">
                    <span>今日话题</span>
                  </div>
                  <div class="title">{{topic.title}}</div>
                  <div class="desc">{{topic.desc}}</div>
                  <div class="joinInfo" >
                    <div class="joininner">
                      <div class="avatars" v-if="topic.participantAvatar">
                        <div class="avatar" v-for="(url,index) in topic.participantAvatar" :key="index">
                          <img :src="url" alt="">
                        </div>
                      </div>
                      <div class="joincount">
                        {{topic.participantNum}}人参与话题
                      </div>
                    </div>
                  </div>
                </a>
                <a class="more" href="javascript:;">
                  <div class="inner">
                    <div class="text">查看全部话题</div>
                    <i class="right-icon"></i>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="commonTitle">严选臻品</div>
        <MainPosItem :main="optimize_data.zhenOne" />
        <MinorPosItem :minor="optimize_data.zhenTwo"/>
        <MinorPosItem :minor="optimize_data.zhenThree"/>
        <div class="exploreLook" v-if="optimize_data.yxLook">
          <div class="commonTitle">严选LOOK</div>
          <div class="imgWarp">
            <img :src="optimize_data.yxLook.picUrl" alt="">
          </div>
          <div class="topicInfo">
            <div class="author">
              <div class="avatar">
                <img :src="optimize_data.yxLook.avatar" alt="">
              </div>
              <div class="nickname">{{optimize_data.yxLook.nickname}}</div>
            </div>
            <div class="desc">
              {{optimize_data.yxLook.content}}
            </div>
          </div>
        </div>
        <div class="moreSurprises">
          <div class="lineTitle">
            <div>
              更多精彩
            </div>
          </div>
          <Surprise v-if="optimize_data.findMore.length" v-for="(surprise,index) in optimize_data.findMore" :key="index" :surprise="surprise"/>
        </div>
      </section>
    </div>
    <i class="gotoTop" @click = 'gotoTop' v-show="isShowGotoTop"></i>
  </div>
</template>

<script>
  import Swiper from 'swiper'
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'
  import HeaderGuide from '../../components/HeaderGuide/HeaderGuide.vue'
  import MainPosItem from './MainPosItem/MainPosItem.vue'
  import MinorPosItem from './MinorPosItem/MinorPosItem.vue'
  import Surprise from './Surprise/Surprise.vue'
  export default {
    data(){
      return{
        showSurprise:0,
        isShowGotoTop:false,
      }
    },
    computed:{
      ...mapState(['optimize_data']),
    },
    mounted(){
      this.$store.dispatch('getOptimizeData',()=>{
        this.$nextTick(()=>{
          this._initOptimize()

        })
      })
    },
    methods:{
      _initOptimize(){
        this.scrollBox=new BScroll('#scrollBox',{
          click:true,
          probeType:1
        });
        this.scrollBox.on('scroll',({x,y})=>{
          if(Math.abs(y)>document.body.clientHeight){
            this.isShowGotoTop=true
          }else {
            this.isShowGotoTop=false
          }
        });

        this.articleScroll=new BScroll('#article-scroll',{
          click:true,
          scrollX:true
        });
        this.tenFifteen=new BScroll('#tenFifteenBS',{
          click:true,
          scrollX:true
        });

        this.swiper=new Swiper('.swiper-container',{
          centeredSlides: true,
          slidesPerView: 'auto',
          spaceBetween: -5,
         /* autoplay: {
            delay: 2500,
            disableOnInteraction: false,
          },*/
          loop:true
        });
      },
      gotoTop(){
        this.scrollBox.scrollTo(0,0,1000)
        this.isShowGotoTop=false;
      }
    },
    components:{
      MainPosItem,
      MinorPosItem,
      Surprise,
      HeaderGuide
    }

  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .commonTitle
    background-color: #fff;
    text-align: center;
    font-size: .42667rem;
    height: 1.6rem;
    line-height: 1.6rem
  .lineTitle
    height: 1.86667rem;
    display: flex;
    align-items: center;
    justify-content center
    &::before,&::after
      content: ' ';
      display: block;
      width: 3.52rem;
      height: 1*$rem;
      background-color: #d9d9d9
    >div
      margin: 0 .32rem;
      font-size: .37333rem;
      color: #333
  .shiwuContiner
    width 100%
    height 100%
    padding-top 1.16rem
    >#scrollBox
      width 100%
      height 100%
      overflow hidden
      >.contentWarp
        width 100%
        >.swiper
          width 100%
          overflow hidden
          margin-bottom: .26667rem;
          background-color: #fff
          >.swiper-container
            height 4.93333rem
            position relative
            >.swiper-wrapper
              position absolute
              left 0
              top 0
              display flex
              flex 1
              >.swiper-slide
                position: relative;
                display: block;
                width: 690*$rem
                padding: 0 .13333rem;
                >img
                  width 100%
                  display: block;
                  height: 5.13333rem;
                  border-radius: .10667rem

                >.content
                  position: absolute;
                  top: 0;
                  left: 0;
                  right: 0;
                  bottom: 0;
                  margin: auto;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  flex-direction: column;
                  width: 6.21333rem;
                  height: 2.64rem;
                  background-color: rgba(255,255,255,.9);
                  >.subTitle
                    position: relative;
                    font-size: .26667rem;
                    color: #7f7f7f;
                    line-height: .4rem;
                    padding: 0 .10667rem
                    &::before
                      content: ' ';
                      position: absolute;
                      top: 0;
                      left: -.32rem
                      bottom: 0;
                      margin: auto;
                      width: .32rem;
                      height: 1px;
                      background-color: #999;
                    &::after
                      content: ' ';
                      position: absolute;
                      top: 0;
                      right: -.32rem
                      bottom: 0;
                      margin: auto;
                      width: .32rem;
                      height: 1px;
                      background-color: #999
                  >.title
                    font-size: .42667rem;
                    line-height: .64rem;
                    color: #333;
                    margin-top: .21333rem;
                    font-weight: 700;
                  >.desc
                    font-size: .32rem;
                    color: #333;
                    line-height: .48rem;
                    margin-top: .05333rem
        >.article
          overflow: hidden;
          padding: .42667rem .4rem .37333rem;
          /*height: 3.81333rem;*/
          background-color: #fff;
          margin-bottom: .26667rem
          >#article-scroll
            margin-left: auto;
            margin-right: auto;
            position: relative;
            z-index: 1;
            display flex
            >.article-list
              flex 1
              display flex
              >li
                position: relative;
                width: 2.18667rem;
                height: 2.8rem;
                margin-right: .32rem
                >.img-container
                  width: 2.18667rem;
                  height: 2.18667rem;
                  margin-bottom: .29333rem;
                  border-radius: .05333rem
                  background-size: cover;
                  background-position: center;
                  background-repeat: no-repeat
                >.article-count
                  position: absolute;
                  top: 0;
                  right: 0;
                  color: #fff;
                  width: 1.54667rem;
                  height: .42667rem;
                  border-radius: 0 .05333rem 0 0;
                  >div
                    position: absolute;
                    top: 0;
                    right: .10667rem;
                    width: 2rem;
                    height: .42667rem;
                    line-height: .42667rem;
                    text-align: right
                    font-size 24*$rem
                >.title
                  color: #333;
                  font-size: .32rem;
                  line-height: 1;
                  text-align: center;
                  width: 2.45333rem;
                  margin-left: -.13333rem
        >.recommends
          padding: 0 .4rem .53333rem;
          background-color: #fff;
        >.tenFifteen
          overflow: hidden;
          padding: 0 .4rem .53333rem;
          height: 7.61333rem;
          background-color: #fff;
          margin-bottom: .26667rem
          .inner
            >.title
              background-color: #fff;
              text-align: center;
              font-size: .42667rem;
              height: 1.6rem;
              line-height: 1.6rem
            #tenFifteenBS
              display flex
              .list
                flex 1
                display flex
                a
                  position: relative;
                  width: 7.73333rem;
                  height: 5.48rem;
                  padding: .50667rem .53333rem 1.05333rem;
                  margin-right: .4rem;
                  text-align: center;
                  color: #333
                  box-sizing border-box
                  display: inline-block;
                  vertical-align: middle;
                  &.main
                    position relative
                    background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/tenFifteen-2a1d0ea11b.png);
                    background-repeat: no-repeat;
                    background-size: 100% 100%
                    >.line-title
                      display: flex;
                      align-items: center;
                      justify-content: center;
                      margin-bottom: .53333rem
                      &::before,&::after
                        content: ' ';
                        display: block;
                        width: .32rem;
                        height: 1px;
                        background-color: #7f7f7f
                      span
                        margin: 0 .10667rem;
                        font-size: .32rem;
                        color: #7f7f7f

                    >.title
                      font-size: .48rem;
                      font-weight: 700;
                      margin-bottom: .18667rem
                    >.desc
                      font-size: .37333rem;
                      line-height: 1.5;
                      display: block;
                      text-align center
                      overflow: hidden;
                      text-overflow: ellipsis

                    >.joinInfo
                      position: absolute;
                      bottom: 1.05333rem;
                      width: 6.66667rem;
                      text-align: center
                      >.joininner
                        display: inline-block;
                        overflow: hidden
                        >.avatars
                          float: left;
                          margin-right: .21333rem
                          >.avatar
                            position: relative;
                            float: left;
                            height: .64rem;
                            width: .64rem;
                            overflow: hidden;
                            border: 1px solid #fff;
                            border-radius: 50%
                        >.joincount
                          float: left;
                          text-align: left;
                          line-height: .64rem;
                          font-size: .32rem;
                          color: #7f7f7f
                  &.more
                    position: relative;
                    height: 5.12rem;
                    border: 10*$rem solid #e6e6e6;
                    padding: 0;
                    margin-right: 0;
                    background-color: #fafafa
                    >.inner
                      position: absolute;
                      top: 0;
                      bottom: 0;
                      left: 0;
                      right: 0;
                      margin: auto;
                      width: 3.2rem;
                      height: .50667rem;
                      display: flex;
                      align-items: center
                      >.text
                        color: #7f7f7f;
                        font-size: .42667rem;
                        line-height: .50667rem;
                        margin-right: .22667rem
                      >.right-icon
                        display: inline-block;
                        vertical-align: middle;
                        background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/circle-right-arrow-3d59025cb6.png);
                        background-repeat: no-repeat;
                        background-size: 100% 100%;
                        width: .4rem;
                        height: .4rem
        >.exploreLook
          position: relative;
          display: block;
          color: #333
          >.imgWarp
            width 100%
            position relative
            >img
              width 100%
              display block
          >.topicInfo
            overflow: hidden;
            position: relative;
            padding: .32rem .4rem .61333rem;
            background-color: #fff
            >.author
              height: 0.64rem;
              font-size: 0.32rem
              margin-bottom: .32rem
              display flex
              line-height 100%
              >.nickname
                padding-top 10*$rem
              >.avatar
                img
                  width 40*$rem
                  height 40*$rem
            >.desc
              font-size: .37333rem;
              line-height: 1.6;
              color: #7f7f7f
        >.moreSurprises
          margin: 0 .4rem .4rem
    >.gotoTop
      position: absolute;
      right: .30667rem;
      bottom: 1.6rem;
      vertical-align: middle;
      width: 1.09333rem;
      height: 1.09333rem;
      background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/goToTop-7a19216f77.png);
      background-size: 1.09333rem 1.09333rem;
      z-index: 2;

</style>
