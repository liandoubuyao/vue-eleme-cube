<!--  -->
<template>
  <div class='goods'>
    <div class="scroll-nav-wrapper">
      <cube-scroll-nav :side="true"
                       :data="goods"
                       v-if="goods.length"
                       :options="scrollOptions">
        <cube-scroll-nav-panel v-for="item in goods"
                               :key="item.name"
                               :label="item.name"
                               :title="item.name">
          <ul>
            <li v-for="(food,index) in item.foods"
                :key="index">
              <div class="food">
                <div class="head-img"><img :src="food.icon"></div>
                <div class="cont">
                  <div class="name">{{food.name}}</div>
                  <div class="desc">{{food.description}}</div>
                  <div class="info"><span class="count">月售{{food.sellCount}}份</span><span class="rating">好评率{{food.rating}}%</span></div>
                  <div class="price">￥{{food.price}}</div>
                </div>
                <div class="addbtn">
                  <cartControl :food="food"></cartControl>
                </div>
              </div>
            </li>
          </ul>
        </cube-scroll-nav-panel>
      </cube-scroll-nav>
    </div>
    <shopCart :deliveryPrice="seller.deliveryPrice"
              :minPrice="seller.minPrice"
              :selectFoods="selectFoods"></shopCart>
  </div>
</template>

<script>
import { getGoods } from 'api/index'
import shopCart from 'components/shop-cart/shop-cart'
import cartControl from 'components/cart-control/cart-control'
export default {
  props: {
    data: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  name: 'goods',
  components: {
    shopCart,
    cartControl
  },
  data () {
    return {
      goods: [],
      scrollOptions: {
        click: false,
        directionLockThreshode: 0
      }
    }
  },
  computed: {
    seller () {
      return this.data.seller
    },
    selectFoods () {
      let selectFoods = []
      this.goods.forEach(function (item) {
        item.foods.forEach(function (food) {
          if (food.count) {
            selectFoods.push(food)
          }
        })
      })
      return selectFoods
    }
  },
  methods: {
    fetch () {
      if (!this.goods.length) {
        getGoods().then((goods) => {
          this.goods = goods
        })
      }
    }

  }
}
</script>
<style lang='stylus' scoped>
.goods
  position relative
  height 100%
  bottom 45px
  .scroll-nav-wrapper
    position relative
    height 100%
    overflow hidden
    margin-top 45px
  >>>.cube-scroll-nav-bar-items
    padding-bottom 45px
  >>>.cube-scroll-nav-panels
    padding-bottom 45px
  >>>.cube-scroll-nav-bar
    width 80px
    .cube-scroll-nav-bar-items
      font-size $fontsize-small
      background-color $color-background-ssss
      .cube-scroll-nav-bar-item
        white-space normal
    .cube-scroll-nav-bar-item_active
      color $color-red
      background-color #fff
  >>>.cube-scroll-wrapper
    .cube-sticky-fixed
      background-color $color-background-ssss
      padding 8px 12px
      font-size $fontsize-small
  >>>.cube-scroll-nav-panels
    .cube-scroll-nav-panel
      .cube-sticky-ele
        height auto
        .cube-sticky-content
          h2
            padding 8px 12px
            background-color $color-background-ssss
            font-size $fontsize-small
    .food
      position relative
      padding 10px 0px 10px 20px
      display flex
      .head-img
        margin-right 10px
        img
          height 64px
          width 64px
      .cont
        flex 1
        &>div
          padding-top 4px
        .name
          font-size $fontsize-normall
          font-weight bold
        .desc
          font-size $fontsize-small
          color $color-background-s
        .info
          font-size $fontsize-small
          color $color-background-s
          .rating
            padding-left 4px
        .price
          font-size $fontsize-normal
          font-weight bold
          color $color-red
      .addbtn
        position absolute
        height 100%
        right 0
        background-color #FFF
        margin-top -9px
        text-align center
</style>
