<template>
  <div class="loginContiner">
    <HeaderGuide class="header"></HeaderGuide>
    <div class="loginTypesWrap" v-show="!showPage">
      <div class="typesWarp">
        <div class="logoWarp">
          <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png">
        </div>
        <div class="btnWarp">
          <div class="loginPhone-button redBtn" >
            <i class="icon-loginPhone"></i>
            <span @click="loginWay(true)">手机号码登录</span>
          </div>
          <div class="loginMail-button writeBtn">
            <i class="icon-loginMail" data-reactid=".0.1.0.1.1.1.0"></i>
            <span @click="loginWay(false)">邮箱帐号登录</span>
          </div>
          <div class="register-button" >
            <span>手机号快捷注册</span>
            <i class="icon-arrow-right"></i>
          </div>
        </div>
        <div class="partnerWarp">
          <div class="itemWarp">
            <span class="item">
              <i class="iconfont icon-weixin"></i>
              <span class="name">微信</span>
            </span>
          </div>
          <div class="itemWarp middleWarp">
            <span class="item">
              <i class="iconfont icon-qq"></i>
              <span class="name">QQ</span>
            </span>
          </div>
          <div class="itemWarp">
            <span class="item">
              <i class="iconfont icon-weibo"></i>
              <span class="name">微博</span>
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="loginTypes" v-show="showPage">
      <div class="phoneLogin fromContiner" >
        <div class="logo">
          <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png">
        </div>
        <div class="userForm">
          <div class="inputWarp" >
            <input type="text" class="mail" placeholder="邮箱账号" v-show="!isPhone" v-model="mail" >
            <input type="text" class="phone" placeholder="请输入手机号" maxlength="11" v-show="isPhone" v-model="phone">
          </div>
          <div class="inputWarp" >

            <input type="password" class="password" placeholder="请输入密码"  v-show="!isPhone" v-model="pwd">
            <input type="password" class="password" :placeholder="showSendCode?'请输入短信验证码':'请输入密码'" v-show="isPhone" v-model="pwd1" >
            <a class="sendCode" v-show="isPhone" v-if="showSendCode">获取验证码</a>
          </div>
          <div class="switchTypes smallWrod">
            <span class="forgetPassword small" >
              {{isPhone?'忘记密码？':'注册账号'}}
            </span>
            <span class="useSMS" @click="showSendCode=true" v-show="isPhone">
              <!---->
              使用{{showSendCode?'密码':'短信'}}验证登录
            </span>
            <span class="useSMS" @click="showSendCode=true" v-show="!isPhone">
              忘记密码？
            </span>
          </div>
          <div class="loginBtnWarp">
            <div class="login-button redBtn" >
              <span @click="login">登录</span>
            </div>
            <div class="login-otherTypes writeBtn">
              <span @click="otherWay">其他登录方式</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import HeaderGuide from '../../components/HeaderGuide/HeaderGuide.vue'

  export default {
    data() {
      return{
        showPage:false,
        isPhone:true,
        mail:'',
        phone:'',
        pwd:'',
        pwd1:'',
        showSendCode:false
      }
    },
    computed:{
    },
    methods:{
      loginWay(way){
        this.isPhone=way;
        this.showPage=true
      },
      otherWay(){
        this.showPage=false
      },
      login(){
        const {phone, pwd1,mail,pwd} = this;
        if(this.isPhone){//手机登录验证
          if(!/^1\d{10}$/.test(phone)){
            alert('请输入正确的手机号')
          }else if(!this.showSendCode){
            if(!pwd1){
              alert('请输入密码')
            }else {
              this.$router.replace('/home')
            }
          }else{
            if(!pwd1){
              alert('请验证码')
            }else {
              this.$router.replace('/home')
            }
          }
        }else {//邮箱登录
          if(!mail){
            alert('请输入邮箱')
          }else{
            if(!pwd){
              alert('请输入密码')
            }else {
              this.$router.replace('/home')
            }
          }
        }
      }
    },
    components:{
      HeaderGuide
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .inputRight::before
    content ''
    position absolute
    right 10*$rem
    top 50%
    z-index 1
    transform translateY(-50%)
    width 60*$rem
    height 60*$rem
    display block
    /*background-image url("../../assets/images/checkout/checkout.jpg")*/
    background-repeat no-repeat
    background-size contain


  .redBtn
    text-align: center;
    font-size: .37333rem;
    border: 1px solid #b4282d;
    background-color: #b4282d;
    overflow: hidden
    height: 1.25333rem;
    line-height: 1.25333rem
    width: 100%
    border-radius: 2*$rem
    margin-bottom: .42667rem
  .writeBtn
    vertical-align: middle;
    text-align: center;
    font-size: .37333rem;
    border: 1px solid #b4282d;
    overflow: hidden
    color: #b4282d;
    background-color: transparent
    height: 1.25333rem;
    line-height: 1.25333rem
    display: block;
    width: 100%
    border-radius: 2*$rem
    margin-bottom: .42667rem
  .loginContiner
    width 100%
    height 100%
    margin-top 1.16rem
    background-color #fff
    >.loginTypesWrap
      position: relative;
      height: 100%;
      background: #F2F5F4
      >.typesWarp
        >.logoWarp
          text-align: center;
          padding-top: 2.13333rem;
          padding-bottom: 2.13333rem
          >img
            width: 3.57333rem;
            height: 1.2rem
        >.btnWarp
          padding: 0 .53333rem;
          margin-bottom: 2.73333rem
          >.loginPhone-button
            color: #fff;
            >.icon-loginPhone
              display: inline-block;
              vertical-align: middle;
              background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/login-s2d0d826858-b284a621da.png);
              background-repeat: no-repeat;
              background-size: .53333rem 3.86667rem;
              background-position: 0 -.66667rem
              width: .53333rem;
              height: .53333rem
              margin-right: .21333rem;
              position: relative;
              top: -.02667rem
          >.loginMail-button
            >.icon-loginMail
              display: inline-block;
              vertical-align: middle;
              margin-right: .21333rem;
              position: relative;
              top: -.02667rem
              background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/login-s2d0d826858-b284a621da.png);
              background-repeat: no-repeat;
              background-size: .53333rem 3.86667rem;
              width: .53333rem;
              height: .53333rem
              background-position: 0 0;
          >.register-button
            color: #333;
            font-size: .37333rem;
            text-align: center;
            width: 100%
            >.icon-arrow-right
              display: inline-block;
              vertical-align: middle;
              background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/arrow-right3-c1ab37e88b.png);
              background-repeat: no-repeat;
              background-size: 100% 100%;
              width: .37333rem;
              height: .37333rem
              margin-right: .21333rem;
              position: relative;
              top: -.02667rem
              margin-left: .05333rem;

        >.partnerWarp
          position: absolute;
          width: 100%;
          left: 0;
          bottom: 1.06667rem;
          height: .53333rem;
          display flex
          align-items center
          justify-content center
          >.itemWarp
            height: .53333rem;
            text-align: center;
            padding: 0 .53333rem
            flex 1
            &.middleWarp
              border-right: 1px solid #979797;
              border-left: 1px solid #979797;
            >.item
              height: .53333rem;
              position: relative;
              top: -.13333rem
              display: flex;
              align-items center
              justify-content center
              line-height: .53333rem;
              font-size: .37333rem;
              >.name
                position: relative;
                top: .13333rem;
                height: .53333rem;
                color: #7F7F7F;
                margin-left: .06667rem
                display inline-block
              >.iconfont
                position: relative;
                top: .13333rem;
                width: .53333rem;
                height: .53333rem;
                font-size: .37333rem;
    >.loginTypes
      width 100%
      height auto
      overflow hidden
      >.fromContiner
        >.logo
          text-align: center;
          margin-top: .74667rem;
          margin-bottom: 0
          >img
            width: 2.56rem;
            height: .85333rem
        >.userForm
          width: 100%
          margin-top: .53333rem
          padding: 1.6rem 0.2rem 0
          .inputWarp

            position relative
            padding .25rem 0
            &::after
              content: '';
              position: absolute;
              bottom: 0;
              left: 0;
              right 0
              margin 0 auto
              width: 90%;
              height: 1*$rem;
              background: #d9d9d9;
            input
              outline none
              margin 0 auto
              padding 0 .1rem
              position relative
              width: 8.27rem;
              height: 0.6rem;
              font-size: 0.4rem;
              line-height: 0.6rem;
              letter-spacing: normal
              display block
            .sendCode
              position absolute
              right 40*$rem
              top 50%
              transform translateY(-50%)
              width: 2.3rem;
              height: 0.75rem;
              text-align: center;
              color: #333;
              font-size: 29*$rem;
              background: #fff;
              line-height: 0.75rem;
              border: 1px solid #7F7F7F;
              border-radius: 4*$rem


          .smallWrod
            display flex
            align-items center
            justify-content space-between
            padding 0 .6rem
            margin-top 0.3rem
            .small
              height: 0.6rem;
              text-decoration: none;
              cursor: pointer;
              color: #7f7f7f !important;
              font-size: 0.4rem;
              line-height: 0.6rem
            .useSMS
              color: #333;
              font-size: 0.4rem;
              height: 0.6rem;
              padding: 0;
              line-height: 0.6rem
          .loginBtnWarp
            padding: 0 .53333rem;
            margin-top: .73333rem
            margin-bottom: 2.73333rem
            >.login-button
              color: white;
              &.right
                color: #fff;


</style>
