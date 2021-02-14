<template>
  <div>
    <dashboard-header></dashboard-header>
    <v-main>
      <router-view></router-view>
    </v-main>
  </div>
</template>

<script>
import DashboardHeader from '@/components/DashboardHeader'

export default {
  name: 'Dashboard',
  components: { DashboardHeader }
}
</script>

<style scoped>

</style>
