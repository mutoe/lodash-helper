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
      this.$i18n.locale = lang
      lstore.set('lang', lang)
    },
  },
}
</script>

<style lang="stylus" scoped>
.language-selector
  position absolute
  top 4px
  right 4px
  display flex
  flex-direction: row-reverse
  font-size 14px
  color: #aaa

  > *
    margin-right 4px
    cursor pointer

    &.active
      color #38b

</style>
