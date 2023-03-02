<template>
  <v-app-bar class="d-flex justify-md-space-between">
  <v-col cols="auto">

      <router-link to="/">
        <v-img
          contain
          class="align-self-stretch"
          width="65"
          aspect-ratio="1"
          src="@/assets/H-sektionens-logga.png"
          ref=""
        />
      </router-link>
  </v-col>

    <v-spacer/>

    <v-col cols="6">

          <v-btn-group
            class="d-flex justify-md-space-around"
            multiple>

            <v-btn text large cols="auto">
              Sektionen
            </v-btn>

            <v-btn text large cols="auto">
              Student
            </v-btn>

            <v-btn text large cols="auto">
              Företag
            </v-btn>

            <v-btn text large cols="auto">
              Kontakt
            </v-btn>


          </v-btn-group>


    </v-col>

  </v-app-bar>

</template>

<script setup lang="ts">


</script>
