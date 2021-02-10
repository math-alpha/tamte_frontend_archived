<template>
  <v-footer
    absolute
  >
    <v-container>
      <v-row
        class="py-2"
        justify="left"
        no-gutters
      >
        <span style="font-weight: 400; font-size: 32px; color: #5f6368 ">Tamte</span>
        <v-btn
          text
          class="mx-4 my-2"
        >
          Link 1
        </v-btn>
        <v-btn
          text
          class="mx-4 my-2"
        >
          Link 2
        </v-btn>
        <v-btn
          text
          class="mx-4 my-2"
        >
          Link 3
        </v-btn>
      </v-row>
      <v-col
        class="py-2 text-center"
        cols="12"
      >
        &copy; {{ new Date().getFullYear() }} — <strong> Nghom Tamte</strong>
      </v-col>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  name: 'StaticFooter'
}
</script>

<style scoped>

</style>
