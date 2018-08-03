<template lang='pug'>
#app
  LanguageSelector
  TheHeader
  main
    MethodSelector
    MethodDetail
  TheFooter

</template>

<script>
import TheHeader from './components/TheHeader.vue'
import TheFooter from './components/TheFooter.vue'
import LanguageSelector from './components/LanguageSelector.vue'
import MethodSelector from './components/MethodSelector.vue'
import MethodDetail from './components/MethodDetail.vue'

export default {
  name: 'LodashHelper',
  components: {
    TheHeader,
    TheFooter,
    LanguageSelector,
    MethodSelector,
    MethodDetail,
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
