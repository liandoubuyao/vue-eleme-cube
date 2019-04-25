<!--  -->
<template>
  <div class='shop-cart'>
    <div class="cart-wrapper">
      <div class="shop-icon"
           :class="cartClass">
        <div class="icon-wrapper">
          <div class="cart-wrapper">
            <i class="icon-shopping_cart"></i>
            <div class="point">{{totalCount}}</div>
          </div>
        </div>
      </div>
      <div class="info">
        <span class="price">￥{{totalPrice}}</span>
        <span class="shipping-fee">另需配送费￥{{deliveryPrice}}元</span>
      </div>
      <div class="btn"
           :class="btnClass">{{btnInfo}}</div>
    </div>
    <div class="cart-balls">
      <div v-for="(item ,index) in balls" :key="index">
        <transition
          @before-enter="beforeDrop"
          @enter="dropping"
          @after-enter="afterDrop"
        >
          <div class="ball" v-show="item.show">
            <div class="inner"></div>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
const BALL_NUM = 10
function createBalls () {
  let ret = []
  for (let i = 0; i < BALL_NUM; i++) {
    ret.push({
      show: false
    })
  }
  return ret
}

export default {

  name: 'shop-cart',
  props: {
    selectFoods: {
      type: Array,
      default () {
        return []
      }
    },
    deliveryPrice: {
      type: Number,
      default () {
        return 0
      }
    },
    minPrice: {
      type: Number,
      default () {
        return 0
      }
    }
  },
  data () {
    return {
      balls: createBalls()
    }
  },
  computed: {
    totalPrice () {
      let total = 0
      for (let i = 0; i < this.selectFoods.length; i++) {
        total += this.selectFoods[i].price * this.selectFoods[i].count
      }
      return total
    },
    totalCount () {
      let totalCount = 0
      for (let i = 0; i < this.selectFoods.length; i++) {
        totalCount += this.selectFoods[i].count
      }
      return totalCount
    },
    cartClass () {
      let cartClass
      if (this.totalCount < 1) {
        cartClass = ''
      } else {
        cartClass = 'light'
      }
      return cartClass
    },
    btnInfo () {
      let btnInfo
      if (this.totalPrice === 0) {
        btnInfo = `￥${this.minPrice}元起送`
      } else if (this.totalPrice > 0 && this.totalPrice < this.minPrice) {
        btnInfo = `还差￥${this.minPrice - this.totalPrice}元起送`
      } else {
        btnInfo = `去结算`
      }
      return btnInfo
    },
    btnClass () {
      let btnClass
      if (!this.totalCount || this.totalPrice < this.minPrice) {
        btnClass = ''
      } else {
        btnClass = 'light'
      }
      return btnClass
    }
  },
  methods: {
    drop (el) {
      for (let i = 0; i < this.balls.length; i++) {
        const ball = this.balls[i]
        if (!ball.show) {
          ball.el = el
          ball.show = true
          el.style.display = ''
          this.dropBalls.push(ball)
          return
        }
      }
    },
    beforeDrop (el) {
      const ball = this.dropBalls[this.dropBalls.length - 1]
      const rect = ball.el.getBoundingClientRect()
      const x = rect.left - window.innerWidth / 10
      const y = -(window.innerHeight - rect.top - 23)
      el.style.transform = el.style.webkitTransform = `translate3d(0,${y}px,0)`
      const inner = el.getElementsByClassName('inner')[0]
      inner.style.transform = inner.style.webkitTransform = `translate3d(${x}px,0,0)`
    },
    dropping (el, done) {
      this._reflow = document.body.offsetHeight
      el.style.transform = el.style.webkitTransform = `translate3d(0,0,0)`
      const inner = el.getElementsByClassName('inner')[0]
      inner.style.transform = inner.style.webkitTransform = `translate3d(0,0,0)`
      el.addEventListener('transitionend', done)
    },
    afterDrop (el) {
      let ball = this.dropBalls.shift()
      ball.show = false
      if (ball) {
        el.style.display = 'none'
      }
    }
  },
  created () {
    this.dropBalls = []
  }
}
</script>
<style lang='stylus' scoped>
@import '~common/stylus/index.styl'
@import '~common/stylus/variable.styl'
.shop-cart
  position absolute
  z-index 10
  bottom 0
  left 0
  width 100%
  height 45px
  background-color $color-background
  color $color-light-grey-s
  font-size $fontsize-small
  line-height 45px
  text-align center
  .cart-wrapper
    position relative
    top 0
    left 0
    display flex
    .shop-icon
      flex 2
      &.light
        .icon-wrapper
          .cart-wrapper
            background-color $color-blue
            i
              color #FFF
            .point
              display block
      .icon-wrapper
        position relative
        width 60px
        height 60px
        margin 0 auto
        background-color $color-background
        margin-top -15px
        border-radius 30px
        .cart-wrapper
          position relative
          width 46px
          height 46px
          margin 0 auto
          background-color $color-dark-grey
          box-shadow 0 0 5px $color-background
          top 6px
          border-radius 23px
          i
            font-size 26px
            line-height 46px
            margin 0 auto
          .point
            position absolute
            right 0
            top -4px
            width 16px
            height 16px
            text-align center
            line-height 16px
            border-radius 8px
            color #ffffff
            background-color $color-red
            font-size $fontsize-small
            display none
    .info
      flex 5
      .price
        font-size $fontsize-medium
        font-weight bold
        margin-right 24px
        &.light
          color #FFF
    .btn
      flex 3
      background-color $color-dark-grey
      &.light
        color #ffffff
        font-weight bold
        background-color $color-green
  .cart-balls
    .ball
      position fixed
      z-index 999999
      bottom 23px
      left 10vw
      margin-left -6px
      transition all 0.4s cubic-bezier(0,-0.14,.91,-0.35)
      .inner
        width 12px
        height 12px
        border-radius 6px
        background-color $color-blue
        transition all 0.4s linear

</style>
