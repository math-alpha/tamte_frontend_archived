<template>
  <div>
    <static-header/>
    <router-view></router-view>
    <static-footer/>
  </div>
</template>

<script>
import StaticHeader from '@/components/static/StaticHeader'
import StaticFooter from '@/components/static/StaticFooter'

export default {
  name: 'Landing',
  components: { StaticFooter, StaticHeader }
}
</script>
