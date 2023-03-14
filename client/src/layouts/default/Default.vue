<!-- Defining the default layout of the app -->
<!-- Header on top, footer at the end, and the currently selected route in the middle -->

<template>
  <v-app>
    <Header/>
    <v-main>
      <router-view/>
    </v-main>
    <Footer/>
  </v-app>
</template>

<script lang="ts" setup>
// Importing header and footer components
  import Header from '@/components/Header.vue';
  import Footer from '@/components/Footer.vue';


</script>
