<template>

  <v-app-bar id="header" class="d-flex justify-md-space-between" elevation="0">
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

            <v-btn text large cols="auto" class="headerButton" depressed variant="text">
              Sektionen
            </v-btn>

            <v-btn text large cols="auto" class="headerButton" depressed variant="text">
              Student
            </v-btn>

            <v-btn text large cols="auto" class="headerButton" depressed variant="text">
              Företag
            </v-btn>

            <v-btn text large cols="auto" class="headerButton" depressed variant="text">
              Kontakt
            </v-btn>



          </v-btn-group>


    </v-col>

  </v-app-bar>

</template>

<script setup lang="ts">


</script>


<style>

.headerButton>* {
  font-family: 'Lemon/Milk', sans-serif;
  font-weight: bolder;
  filter: blur(0);
  background: none;
  color: #E0218A;
}
.blurredBg {
  background: rgba(255,255,255, 50%);
  filter: blur(1px);
  height: 64px;
  width: 100%;
}

#header {
  backdrop-filter: blur(4px);
  background: rgba(255,255,255,0.3);
}
</style>
