<template lang='pug'>
#app
  LanguageSelector
  TheHeader
  main
    FunctionSelector
    FunctionDetail
  TheFooter

</template>

<script>
import TheHeader from './components/TheHeader.vue'
import TheFooter from './components/TheFooter.vue'
import LanguageSelector from './components/LanguageSelector.vue'
import FunctionSelector from './components/FunctionSelector.vue'
import FunctionDetail from './components/FunctionDetail.vue'

export default {
  name: 'LodashHelper',
  components: {
    TheHeader,
    TheFooter,
    LanguageSelector,
    FunctionSelector,
    FunctionDetail,
  },
  created () {
    this.initApp()
  },
  methods: {
    initApp () {
      document.title = this.$t('page.title')
    },
  },
}
</script>

<style scoped lang="stylus">
#app
  height 100%
  display flex
  flex-direction column
  justify-content space-between
  padding $sm

  header
  footer
    flex none

  main
    flex auto
    display flex
    justify-content space-between

</style>
