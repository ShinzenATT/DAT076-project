<template>
  <div id="main">
    <v-card flat style="background-image: url('/styret/Styret_group1.jpg');
                        width: 100%;
                        background-position: center center;
                        margin: auto;
                        top: -65px;
                        height: 70vh;
                        border-radius: 0;
                        background-size: cover, contain">

      <h1 style="text-align: center;
                  color: #E0218A;
                  position: relative;
                  font-family: 'Lemon/Milk', sans-serif;
                  font-weight: bold;
                  top: 100px;
                  text-shadow: 2px 2px 2px #000000;
                  font-size: x-large"
      > Styret </h1>



    </v-card>
<v-container>
    <v-row align="center" justify="center">
      <v-col
        v-for="member in styret"
        :key="member.id"
        style="min-width: 300px; max-width: 300px; text-align: center"
      >

        <v-img class="styretImg" :src="member.imagepath ?? undefined">
        </v-img>
        <h2 class="styretTitle">{{ member.post }}</h2>
        <h3 class="styretName">{{ member.name }}</h3>
        <p class="styretEmail">{{ member.email }}</p>
        <p class="styretDescription">{{ member.description }}</p>
      </v-col>
    </v-row>

</v-container>

  </div>
</template>

<script lang="ts">

import {defineComponent} from "vue";
import {Styret} from "../../types/styret";

export default defineComponent ({

  data: () => ({
    styret: [] as Styret[]
  }),

  async created() {

    const response = await fetch('http://localhost:8080/styret', {
      method: 'GET',

    });
    this.styret = await response.json();
  }

})
</script>

<style>

.styretTitle {
  margin: 10px;
  text-align: center;
}

.styretName {
  text-align: center;
  font-size: large;
}

.styretEmail{
  text-align: center;
}

.styretDescription {
  text-align: center;
}

.styretImg {
  border-radius: 50px;
}

h2, h3 {
  font-family: 'Lemon/Milk light', sans-serif;
}
</style>
