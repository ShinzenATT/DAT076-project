<template>
  <div>
    <v-card flat style="background-image: url('/groupimg.jpg');
                        background-size: cover;
                        background-position: center center;
                        height: 35vh;">
      <h1 style="text-align: center;
                  color: white;
                  position: relative;
                  top: 45%;
                  text-shadow: #000 0 0 10px;"
      > Ingejörsteknologsektionen Chalmers </h1>
    </v-card>
    <v-container style="text-align: center">
      <h2> Välkommen till H-sektionen! </h2>
      <p style="text-align: justify">
        H-sektionen, även kallad ingenjörsteknologsektionen, är en sektion på Chalmers tekniska högskola för
        högskoleingenjörsprogrammen för datateknik, design och produktutveckling, elektroteknik, ekonomi och
        produktionsteknik, maskinteknik och mekatronik.
      </p>
      <h3> Läs mer om våra utbildningar här: </h3>
      <v-btn flat stacked width="120" height="140"
             href="https://www.chalmers.se/utbildning/hitta-program/datateknik-hogskoleingenjor/">
        <v-img width="100" src="@/assets/logos/Ikon_DATA.png"/>
        <b style="margin-top: 7px"> Data </b>
      </v-btn>
      <v-btn flat stacked style="width: 120px; height: 140px;"
             href="https://www.chalmers.se/utbildning/hitta-program/elektroteknik-hogskoleingenjor/">
        <v-img width="100" src="@/assets/logos/Ikon_ELEKTRO.png"/>
        <b style="margin-top: 7px"> Elektro </b>
      </v-btn>
      <v-btn flat stacked style="width: 120px; height: 140px;"
             href="https://www.chalmers.se/utbildning/hitta-program/mekatronik-hogskoleingenjor/">
        <v-img width="100" src="@/assets/logos/Ikon_MEKATRONIK.png"/>
        <b style="margin-top: 7px"> Mekatronik </b>
      </v-btn>
      <v-btn flat stacked style="width: 120px; height: 140px;"
             href="https://www.chalmers.se/utbildning/hitta-program/maskinteknik-hogskoleingenjor/">
        <v-img width="100" src="@/assets/logos/Ikon_MASKIN.png"/>
        <b style="margin-top: 7px"> Maskin </b>
      </v-btn>
      <v-btn flat stacked style="width: 120px; height: 140px;"
             href="https://www.chalmers.se/utbildning/hitta-program/design-och-produktutveckling-hogskoleingenjor/">
        <v-img width="100" src="@/assets/logos/Ikon_DESIGN.png"/>
        <b style="margin-top: 7px"> Design </b>
      </v-btn>
      <v-btn flat stacked style="width: 120px; height: 140px;"
             href="https://www.chalmers.se/utbildning/hitta-program/ekonomi-och-produktionsteknik-hogskoleingenjor/">
        <v-img width="100" src="@/assets/logos/Ikon_EPI.png"/>
        <b style="margin-top: 7px"> EPI </b>
      </v-btn>

    </v-container>
  </div>
</template>

<style>

</style>

<script lang="ts" setup>

</script>
