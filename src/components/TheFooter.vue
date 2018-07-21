<template lang="pug">
footer
  p
    a(href="https://github.com/mutoe/lodash-helper" target="_blank") Github
    span.heart  ❤
    |  {{ $t('page.github_star') }}

</template>

<style lang="stylus" scoped>
footer
  p
    margin 0
    color $color-text-secondary

    .heart
      transition .3s

    &:hover .heart
      color $color-danger

</style>
