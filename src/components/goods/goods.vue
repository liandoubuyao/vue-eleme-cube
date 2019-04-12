<!--  -->
<template>
  <div class='goods'>
    <div class="scroll-nav-wrapper">
      <cube-scroll-nav :side="true"
                       :data="goods">
        <cube-scroll-nav-panel v-for="item in goods"
                               :key="item.name"
                               :label="item.name"
                               :title="item.name">
          <ul>
            <li v-for="(food,index) in item.foods"
                :key="index">
              <div>
                <img :src="food.icon">
                <p>{{food.name}}</p>
              </div>
            </li>
          </ul>
        </cube-scroll-nav-panel>
      </cube-scroll-nav>
    </div>
  </div>
</template>

<script>
import { getGoods } from 'api/index'
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
  components: {},
  data () {
    return {
      goods: []
    }
  },
  methods: {
    fetch () {
      getGoods().then((goods) => {
        this.goods = goods
      })
    }

  },
  created () {

  },
  mounted () {

  }
}
</script>
<style lang='stylus' scoped></style>
