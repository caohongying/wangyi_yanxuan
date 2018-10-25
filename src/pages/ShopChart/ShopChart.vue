<template>
  <div class="shopcar">
    <header class="header">
      <span class="logo">购物车</span>
      <div class="right">
        <a href="javascript:;">领券</a>
      </div>
    </header>
    <div class="serviceContiner">
      <ul class="servicePolicy">
        <li class="item">
          <i class="service-icon"></i>
          <span class="text">30天无忧退货</span>
        </li>
        <li class="item">
          <i class="service-icon"></i>
          <span class="text">48小时快速退款</span>
        </li>
        <li class="item">
          <i class="service-icon"></i>
          <span class="text">满88元免邮费</span>
        </li>
      </ul>
    </div>
    <div class="defaultPag">
      <div class="defaulContiner">
        <div class="img"></div>
        <div class="txt">
          <div class="noCart-login">
            <div class="noCart-title">去添加点什么吧</div>
            <div class="noCart-btn" @click="$router.history.replace('/personal')">登录</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {}
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .shopcar
    width 100%
    height 100%
    position relative
    overflow hidden
    >.header
      height: 1.17333rem;
      padding: 0 .4rem;
      line-height: 1.17333rem;
      text-align: center;
      background-color: #fff;
      position relative
      overflow hidden
      >.logo
        display: inline-block;
        font-size: .48rem
        vertical-align middle
        margin-top -20*$rem
      >.right
        position: absolute;
        top: 0;
        right: .4rem;
        font-size: .4rem
        >a
          margin-right: .37333rem;
          color: #B4282D
    >.serviceContiner
      >.servicePolicy
        position: relative;
        z-index: 1;
        height: .93333rem;
        padding: 0 .4rem;
        background: #f4f4f4;
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        justify-content: space-between
        >.item
          display: flex;
          align-items: center;
          font-size: .32rem;
          color: #666;
          >.service-icon
            display: inline-block;
            vertical-align: middle;
            background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/servicePolicy-1d7541974f.png);
            background-repeat: no-repeat;
            width: .13333rem;
            height: .13333rem
            margin-right: .08rem;
            position: relative;
            top: -1*$rem


    >.defaultPag
      position: fixed;
      top: 1.17333rem;
      left: 0;
      bottom: 0;
      z-index: 0;
      width: 100%;
      background-color: #f4f4f4;
      text-align: center
      >.defaulContiner
        position: absolute;
        top: -.66667rem;
        right: 0;
        bottom: 0;
        left: 0;
        height: 4rem;
        margin: auto
        >.img
          display: inline-block;
          vertical-align: middle;
          width: 3.30667rem;
          height: 3.30667rem;
          margin-bottom: .10667rem;
          background-size: 3.30667rem 3.30667rem;
          background-position: center center;
          background-repeat: no-repeat
          background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-a8fe3f12e5.png);

        >.txt
          font-size: .37333rem;
          line-height: 1;
          color: #7f7f7f
          >.noCart-login
            margin-top: -.26667rem
            >.noCart-title
              margin-bottom: .66667rem;
              line-height: 1;
              font-size: .37333rem;
              color: #999
            >.noCart-btn
              margin: auto;
              width: 6.4rem;
              height: 1.22667rem;
              font-size: .4rem;
              line-height: 1.22667rem;
              color: #fff;
              background-color: #b4282d;
              border-radius: .04rem
</style>
