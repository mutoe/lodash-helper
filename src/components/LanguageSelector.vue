<template lang="pug">
.language-selector
  .en(@click="choose('en')" :class="{active: locale === 'en'}") English
  .zh(@click="choose('zh')" :class="{active: locale === 'zh'}") 简体中文

</template>

<script>
import { lstore } from '../utils'

export default {
  name: 'LanguageSelector',
  computed: {
    locale () { return this.$i18n.locale },
  },
  methods: {
    choose (lang) {
      document.title = this.$t('page.title')
      this.$i18n.locale = lang
      lstore.set('lang', lang)
    },
  },
}
</script>

<style lang="stylus" scoped>
.language-selector
  position absolute
  top $sm
  right @top
  display flex
  flex-direction: row-reverse
  font-size 14px
  color: #aaa

  > *
    margin-left (@top / 2)
    cursor pointer

    &.active
      color #38b

</style>
