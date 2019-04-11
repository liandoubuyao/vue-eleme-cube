<template>
  <div id="app">
    <VHeader :seller="seller"></VHeader>
    <div class="tab-wrapper">
      <Tab :tabs="tabs"></Tab>
    </div>

  </div>
</template>
<script>
import VHeader from 'components/v-header/v-header'
import Goods from 'components/goods/goods'
import Ratings from 'components/ratings/ratings'
import Seller from 'components/seller/seller'
import Tab from 'components/tab/tab'
import { getSeller } from 'api/index.js'
export default {
  name: 'app',
  components: {
    VHeader,
    Tab
  },
  data () {
    return {
      seller: {}
    }
  },
  computed: {
    tabs () {
      return [
        { label: '商品', component: Goods, data: { seller: this.seller } },
        { label: '评论', component: Ratings, data: { seller: this.seller } },
        { label: '商家', component: Seller, data: { seller: this.seller } }
      ]
    }
  },
  created () {
    this._getSeller()
  },
  methods: {
    _getSeller () {
      getSeller().then((seller) => {
        this.seller = seller
      })
    }
  }
}
</script>
<style lang="stylus">
.tab-wrapper
  position fixed
  top 135px
  left 0
  right 0
  bottom 0
</style>
