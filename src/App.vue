<template lang='pug'>
#app
  LanguageSelector
  img(src='./assets/logo.png')
  | {{ $t('message') }}
  HelloWorld(msg='Welcome to Your Vue.js App')

</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import LanguageSelector from './components/LanguageSelector.vue'
import { lstore } from './utils'

export default {
  name: 'App',
  components: {
    HelloWorld,
    LanguageSelector,
  },
  created () {
    this.setDefaultLanguage()
  },
  methods: {
    setDefaultLanguage () {
      const lang = lstore.get('lang')
      console.log(lang)
      console.log(this.$t('message'))
    },
  },
}
</script>
