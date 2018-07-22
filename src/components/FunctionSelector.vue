<template lang='pug'>
.function-selector
  p {{$t('page.i_have_a')}}
  select(v-model='type')
    option(value='...' disabled) ...

</template>

<script>
export default {
  name: 'FunctionSelector',
  data () {
    return {
      type: [],
    }
  },
}
</script>

<style scoped lang="stylus">
.function-selector
  flex none
  width 20em

  p
    margin 0
    font-size $font-size-middle
    font-weight bolder

  select
    padding $xs
    width calc(100% - 4em)

</style>
