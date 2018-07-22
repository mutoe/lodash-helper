<template lang="pug">
header
  h1 {{ $t('page.title') }} #[small {{ $t('page.description') }}]

</template>

<style scoped lang="stylus">
header {
  margin-bottom $lg

  h1 {
    margin 0
    font-size 24px
    font-weight normal

    small {
      color $color-text-secondary
      font-size 75%
    }
  }
}
</style>
