<template>
  <div id="app">
    <VHeader :seller="seller"></VHeader>
  </div>
</template>

<script>
import VHeader from 'components/v-header/v-header'
import { getSeller } from 'api/index.js'
export default {
  name: 'app',
  components: {
    VHeader
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
