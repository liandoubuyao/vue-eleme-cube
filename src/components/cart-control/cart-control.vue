<!-- 添加购物车按钮 -->
<template>
  <div class='cart-control'>
    <transition enter-active-class="animated rollIn"
                leave-active-class="animated rollOut">
      <div class="subtract"
           v-show="food.count"
           @click.stop="subtract"><i class="icon-remove_circle_outline"></i></div>
    </transition>
    <div class="count"
         v-if="food.count">{{food.count}}</div>
    <div class="add"
         @click.stop="add"><i class="icon-add_circle"></i></div>
  </div>
</template>

<script>

export default {
  props: {
    food: {
      type: Object
    }
  },
  data () {
    return {

    }
  },
  methods: {
    add () {
      if (!this.food.count) {
        this.$set(this.food, 'count', 1)
      } else {
        this.food.count++
      }
    },
    subtract () {
      if (this.food.count) {
        this.food.count--
      }
    }
  },
  created () {

  },
  mounted () {

  }
}
</script>
<style lang='stylus' scoped>
@import '~common/stylus/animate.styl'
@import '~common/stylus/index.styl'
@import '~common/stylus/variable.styl'
.cart-control
  position relative
  display flex
  top 50%
  margin-top -9px
  >div
    flex 1
    padding-right 3px
    i
      color $color-blue
  .count
    font-size $fontsize-small
    line-height 18px
</style>
