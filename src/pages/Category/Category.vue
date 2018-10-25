<template>
  <div class="category">
    <header class="header">
      <div class="search">
        <div class="content">
          <i class="icon"></i>
          搜索商品, 共13230款好物
        </div>
      </div>
    </header>
    <section class="section">
      <div class="navContiner">
        <div class="navScroll">
          <ul class="navList">
            <li :class='{active:index===currentIndex}' v-for="(category,index) in category_data" :key="index" @click="current(index)">
              <a class="txt" href="javascript:;">{{category.name}}</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="cateContiner">
        <div class="catetScroll" v-if="category_data.length">
          <div class="cates" v-for="(category,index) in category_data" v-if="index===currentIndex">
            <div class="banner" :style="{backgroundImage:'url('+category.bannerUrl+')'}"></div>
            <div class="cateList" >
              <SpecialItem v-if="category.type" :subCateList="category.subCateList"/>
              <CategoryItem v-else :category="category"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  import CategoryItem from './CategoryItem/CategoryItem.vue'
  import SpecialItem from './SpecialItem/SpecialItem.vue'
  export default {
    data(){
      return{
        currentIndex:0
      }
    },
    mounted(){
      this.$store.dispatch('getCategoryData',()=>{
        this.$nextTick(()=>{
          this.navScroll=new BScroll('.navScroll',{
            click: true,
            scrollX:false,
          });
          setTimeout(()=>{
            this.catetScroll=new BScroll('.catetScroll',{
              click: true,
              startY: 0
            });
          },1000)
        })
      });

    },
    computed:{
      ...mapState(['category_data']),
    },
    methods:{
      current(index){
        this.currentIndex=index;
      }
    },
    components:{
      CategoryItem,
      SpecialItem
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .category
    width 100%
    height 100%
    >.header
      width 100%
      height: 88*$rem
      position fixed
      top 0
      left 0
      z-index 5
      &::after
        content: '';
        position: absolute;
        background-color: #d9d9d9;
        left: 0;
        width: 100%;
        height: 2*$rem;
        -webkit-transform-origin: 50% 100% 0;
        transform-origin: 50% 100% 0;
        bottom: 0
      >.search
        display: flex;
        align-items: center;
        height: 1.17333rem;
        padding: 0 .4rem;
        background-color: #fff;
        position: relative
        >.content
          width 100%
          display: flex;
          flex-flow: row nowrap;
          align-items: center;
          justify-content: center;
          height: .74667rem;
          font-size: .37333rem;
          background-color: #ededed;
          border-radius: .10667rem;
          >.icon
            display: inline-block;
            vertical-align: middle;
            background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-2fb94833aa.png);
            background-repeat: no-repeat;
            background-size: 100% 100%;
            width: .37333rem;
            height: .37333rem;
            margin-right: .13333rem

    >.section
      position relative
      width 100%
      height 100%
      padding-top 80*$rem
      box-sizing border-box
      background-color: #fff
      >.navContiner
        position: absolute;
        top: 78*$rem
        left: 0;
        bottom: 0;
        z-index: 1;
        width: 2.16rem;
        &::after
          content: '';
          position: absolute;
          background-color: rgba(0,0,0,.15);
          top: 0;
          bottom: 0;
          width: 2*$rem;
          -webkit-transform-origin: 100% 50% 0;
          transform-origin: 100% 50% 0;
          right: 0
        >.navScroll
          width 100%
          height 100%
          overflow hidden
          position: relative
          ul
            li
              position relative
              width: 100%;
              height: .866667rem;
              text-align: center;
              border: none
              margin-top: .53333rem
              >.txt
                display: block;
                color: #333;
                font-size: .37333rem;
                line-height: .66667rem;
                text-overflow: ellipsis;
                white-space: nowrap;
                overflow: hidden;
              &.active
                &::before
                  content: ' ';
                  position: absolute;
                  top: 0;
                  left: 0;
                  height 100%
                  width: .08rem;
                  background-color: #ab2b2b
                >.txt
                  color: #ab2b2b
      >.cateContiner
        height 100%
        box-sizing border-box
        margin-left: 2.16rem;
        padding: .4rem .4rem .28rem
        >.catetScroll
          width 100%
          height 100%
          overflow hidden
          position: relative
          >.cates
            .banner
              width: 100%;
              height: 2.56rem;
              display: table;
              margin-bottom: .42667rem;
              background: center no-repeat #f4f4f4;
              background-size: 100%;
              border-radius: 4*$rem
</style>
