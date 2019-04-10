<!-- 头部蒙版 -->
<template>
  <transition name="fade"
              :duration="10000">
    <div class='header-detail'
         v-show="visible">
      <div class="info">
        <div class="title">{{seller.name}}</div>
        <div class="stars">
          <Star :size="'24'"
                :score="seller.foodScore"></Star>
        </div>
        <div class="floor-title">优惠信息</div>
        <div class="infos">
          <ul>
            <li v-for="(item,index) in seller.supports"
                :key="index">
              <SupportIco :size="2"
                          :type="item.type"></SupportIco>
              <span>{{item.description}}</span>
            </li>
          </ul>
        </div>
        <div class="floor-title">商家公告</div>
        <div class="notice">{{seller.bulletin}}</div>
      </div>
      <div class="close">
        <div class="btn-close"
             @click="hide">
          <i class="icon-close"></i>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import SupportIco from 'components/support-ico/support-ico'
import Star from 'components/star/star'
export default {
  name: 'header-detail',
  props: {
    seller: {
      type: Object,
      default: function () {
        return {}
      }
    }
  },
  components: {
    SupportIco,
    Star
  },
  data () {
    return {
      visible: false
    }
  },
  methods: {
    show () {
      this.visible = true
    },
    hide () {
      this.visible = false
    }
  },
  created () {

  },
  mounted () {

  }
}
</script>
<style lang='stylus' scoped>
@import '~common/stylus/mixin'
@import '~common/stylus/variable'
@import '~common/stylus/icon'
.fade-enter-active, .fade-leave-active
  transition opacity 0.5s
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
  opacity 0
.bounce-enter-active
  animation bounce-in 0.5s
.bounce-leave-active
  animation bounce-in 0.5s reverse
@keyframes bounce-in
  0%
    transform scale(0)
  50%
    transform scale(1.5)
  100%
    transform scale(1)
.header-detail
  position absolute
  width 100vw
  height 100vh
  top 0
  left 0
  background-color $color-background-s
  color #FFF
  display flex
  flex-direction column
  .info
    flex 7
    width 90%
    margin 0 auto
    .title
      font-size $fontsize-large-xx
      text-align center
      margin-top 50px
    .stars
      text-align center
      margin 25px 0
    .floor-title
      text-align center
      font-size $fontsize-large
      margin 25px 0
      position relative
      &:before
        content ''
        display block
        position absolute
        top 50%
        left 5%
        border-top 1px solid $color-col-line
        width 30%
        height 1px
        opacity 0.5
      &:after
        content ''
        display block
        position absolute
        top 50%
        right 5%
        border-top 1px solid $color-col-line
        width 30%
        height 1px
        opacity 0.5
    .infos
      width 85%
      margin 0 auto
      ul
        li
          margin-top 12px
          span
            display inline block
            margin-left 5px
            vertical-align top
    .notice
      width 85%
      margin 0 auto
      font-size $fontsize-medium
      line-height 1.5
  .close
    flex 3
    position relative
    color #FFF
    .btn-close
      position absolute
      left 50%
      transform translateX(-50%)
      bottom 20%
      i
        font-size $fontsize-large-xxx
</style>
