<!--  -->
<template>
  <div class='v-header'
       @click="showDetail">
    <div class="bg"
         :style="{backgroundImage:'url('+seller.avatar+')'}"></div>
    <div class="info">
      <div class="img">
        <div class="border">
          <img :src="seller.avatar"
               alt=""
               height="64"
               width="64">
        </div>
      </div>
      <div class="cont">
        <div class="title">
          <span class="brand_icon"></span>
          <span>{{seller.name}}</span>
        </div>
        <div class="time">{{seller.description}}/{{seller.deliveryTime}}分钟送达</div>
        <div class="discount"
             v-if="seller.supports">
          <SupportIco :size="2"
                      :type="seller.supports[0].type"></SupportIco>
          <span class="cutdown">{{seller.supports[0].description}}</span>
        </div>
      </div>
      <div class="more">
        <div class="text"
             v-if="seller.supports">
          {{seller.supports.length}}个<i class="icon-arrow_lift "></i>
        </div>
      </div>
    </div>
    <div class="notice">
      <span class="cont"><span class="notice_icon"></span>{{seller.bulletin}}<i class="icon icon-arrow_lift"></i></span>
    </div>
  </div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';
import SupportIco from 'components/support-ico/support-ico'
export default {
  // import引入的组件需要注入到对象中才能使用
  props: {
    'seller': {
      type: Object,
      default () {
        return {}
      }
    }
  },
  components: {
    SupportIco
  },
  data () {
    // 这里存放数据
    return {

    }
  },
  methods: {
    showDetail () {
      this.HeaderDetailComp = this.HeaderDetailComp || this.$createHeaderDetail({
        $props: {
          seller: 'seller'
        }
      })
      this.HeaderDetailComp.show()
    }
  }
}
</script>
<style lang='stylus' scoped>
@import '~common/stylus/mixin'
@import '~common/stylus/variable'
@import '~common/stylus/icon'
.v-header
  position relative
  .bg
    content ''
    position absolute
    top 0
    left 0
    width 100%
    height 100%
    filter blur(4px)
    z-index -1
  .info
    padding 20px 0 15px 0
    position relative
    display flex
    background-color $color-background-ss
    color #FFF
    .img
      flex 3
      .border
        border 1px solid $color-row-line
        width 64px
        height 64px
        margin 0 0 0 20px
        img
          width 100%
    .cont
      flex 7
      font-size $fontsize-medium
      div
        margin-bottom 7px
      .title
        margin-top 5px
        font-size $fontsize-large-x
        span
          vertical-align top
        .brand_icon
          display inline-block
          bg-image('brand')
          width 30px
          height 18px
          background-size 30px 18px
          background-repeat no-repeat
          margin 0 5px 0 0
      .discount
        span
          vertical-align top
        .cutdown
          display inline-block
          margin 0 0 0 3px
          font-size $fontsize-large
    .more
      position absolute
      right 10px
      bottom 20px
      .text
        bottom 10px
        color #FFF
        padding 2px 5px
        border-radius 8px
        display inline-block
        font-size $fontsize-small
        background-color $color-background-ss
        i
          display inline-block
          transform scale(0.5) rotateY(180deg)
  .notice
    position relative
    background-color $color-background-s
    padding 4px 2px 0 5px
    .cont
      vertical-align top
      display block
      color #FFF
      font-size $fontsize-small
      padding 3px 0 5px 0
      overflow hidden
      text-overflow ellipsis
      white-space nowrap
      .notice_icon
        vertical-align top
        display inline-block
        bg-image('bulletin')
        background-repeat no-repeat
        width 22px
        height 12px
        background-size 22px 12px
        margin-right 3px
      .icon
        color #fff
        display inline-block
        transform rotateY(180deg) scale(0.5)
        vertical-align top
        position absolute
        right 0px
        top 5px
        background-color $color-background-s
</style>
