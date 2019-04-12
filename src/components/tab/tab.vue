<!--  -->
<template>
  <div class='tab'>
    <cube-tab-bar v-model="selectedLabel"
                  :data="tabs"
                  :showSlider="true"
                  ref="tabbar"
                  :useTransition="false">
    </cube-tab-bar>
    <cube-slide ref="slide"
                :loop="false"
                :auto-play="false"
                :showDots="false"
                :initialIndex="index"
                :options="options"
                @scroll="slideScroll"
                @change="onChange">
      <cube-slide-item v-for="(item,index) in tabs"
                       :key="index">
        <component :is="item.component"
                   ref="component"
                   :data="item.data"></component>
      </cube-slide-item>
    </cube-slide>
  </div>
</template>

<script>
export default {
  props: {
    tabs: {
      type: Array,
      default () {
        return []
      }
    },
    infinatialIndex: {
      type: Number,
      default () {
        return 0
      }
    }
  },
  data () {
    return {
      index: this.infinatialIndex,
      options: {
        listenScroll: true,
        probeType: 3,
        directionLockThreshold: 0
      }
    }
  },
  computed: {
    selectedLabel: {
      get () {
        return this.tabs[this.index].label
      },
      set (newValue) {
        this.index = this.tabs.findIndex((tab) => {
          return tab.label === newValue
        })
      }
    }
  },
  mounted () {
    this.onChange(this.infinatialIndex)
  },
  methods: {
    onChange (index) {
      this.index = index
      const component = this.$refs.component[index]
      component.fetch && component.fetch()
    },
    slideScroll ({ x, y }) {
      const tabBarWidth = this.$refs.tabbar.$el.clientWidth
      const slideGroupWidth = this.$refs.slide.slide.scrollerWidth
      const transfromX = -x / slideGroupWidth * tabBarWidth
      this.$refs.tabbar.setSliderTransform(transfromX)
    }
  }
}
</script>
<style lang='stylus' scoped>
.tab
  display flex
  flex-direction column
  height 100%
  >>> .cube-tab
    padding 10px 0
  >>> .cube-slide
    flex 1
</style>
