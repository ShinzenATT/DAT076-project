<template>
  <v-app>
    <v-main>
      <Header/>
      <HelloWorld />
      <Footer />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
  import Header from '@/components/Header.vue'
  import Footer from '@/components/Footer.vue'
  import HelloWorld from '@/components/HelloWorld.vue'
</script>
