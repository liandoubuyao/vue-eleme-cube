<!-- 星星 -->
<template>
  <span class='vstars'>
    <span class="vstar"
          v-for="(item,index) in starsClass"
          :key="index"
          :class="item"></span>
  </span>
</template>

<script>

export default {
  props: {
    score: {
      type: Number,
      default () {
        return 0
      }
    },
    size: {
      type: String,
      default () {
        return '24'
      }
    }
  },
  components: {},
  data () {
    return {
      // starsClass: []
    }
  },
  computed: {
    sizeClass: function () {
      return 'star' + '_' + this.size
    },
    starsClass: function () {
      const LENGTH = 5
      const CLS_ON = 'on'
      const CLS_HALF = 'half'
      const CLS_OFF = 'off'
      let starsClass = []
      for (let i = 0; i < parseInt(this.score); i++) {
        starsClass.push(this.sizeClass + ' ' + CLS_ON)
      }
      if (!(parseInt(this.score) === this.score)) {
        (this.score - parseInt(this.score)) >= 0.5 ? starsClass.push(this.sizeClass + ' ' + CLS_HALF) : starsClass.push(this.sizeClass + ' ' + CLS_OFF)
      }
      while (starsClass.length < LENGTH) {
        starsClass.push(this.sizeClass + ' ' + CLS_OFF)
      }
      return starsClass
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
@import '~common/stylus/mixin'
@import '~common/stylus/variable'
@import '~common/stylus/icon'
.vstars
  display inline-block
  .vstar
    display inline-block
    background-repeat no-repeat
    background-size contain
    margin 0 2px
  .star_24
    width 24px
    height 24px
    &.on
      bg-image('star24_on')
    &.half
      bg-image('star24_half')
    &.off
      bg-image('star24_off')
  .star_36
    width 36px
    height 36px
    &.on
      bg-image('star36_on')
    &.half
      bg-image('star36_half')
    &.off
      bg-image('star36_off')
  .star_48
    width 48px
    height 48px
    &.on
      bg-image('star48_on')
    &.half
      bg-image('star48_half')
    &.off
      bg-image('star48_off')
</style>
