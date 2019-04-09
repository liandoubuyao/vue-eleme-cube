<template>
  <div id="app">
    <VHeader :seller="seller"></VHeader>
    <HeaderDetail :seller="seller"></HeaderDetail>
  </div>
</template>

<script>
import VHeader from 'components/v-header/v-header'
import HeaderDetail from 'components/header-detail/header-detail'
import { getSeller } from 'api/index.js'
export default {
  name: 'app',
  components: {
    VHeader,
    HeaderDetail
  },
  data () {
    return {
      seller: {}
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
