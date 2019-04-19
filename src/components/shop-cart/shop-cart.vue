<!--  -->
<template>
  <div class='shop-cart'>
    <div class="cart-wrapper">
      <div class="shop-icon light">
        <div class="icon-wrapper">
          <div class="cart-wrapper">
            <i class="icon-shopping_cart"></i>
            <div class="point">3</div>
          </div>
        </div>
      </div>
      <div class="info">
        <span class="price">￥35</span>
        <span class="shipping-fee">另需配送费￥4元</span>
      </div>
      <div class="btn light">去结算</div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'shop-cart',
  data () {
    return {

    }
  },
  methods: {

  },
  created () {

  },
  mounted () {

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
</style>
