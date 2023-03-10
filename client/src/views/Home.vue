<template>
  <div id="main">
    <v-card flat style="background-image: url('/groupimg.jpg');
                        width: 100%;
                        background-position: center center;
                        margin: auto;
                        top: -65px;
                        height: 75vh;
                        border-radius: 0;
                        background-size: cover, contain">

      <h1 style="text-align: center;
                  color: #E0218A;
                  position: relative;
                  font-family: 'Lemon/Milk', sans-serif;
                  font-weight: bold;
                  top: 100px;
                  text-shadow: 1px 1px 1px white;
                  font-size: x-large"
      > Välkommen till H-sektionen! </h1>



    </v-card>

    <v-spacer></v-spacer>

  </div>
  <div style="text-align: center;
                        background-position: center;
                        z-index: 100;
                        top: -125px;
                        position: relative;
                        background-size: cover, contain;
                        padding: 30px;
                        min-height: 600px;
                        background-color: #E667AD;
                        clip-path: polygon(50% 0, 100% 10%, 100% 90%, 50% 100%, 0 90%, 0 10%);"
       id="about us"
  >
    <h2 style="
              position: relative;
              font-size: x-large;
              color: white"
    >
      Om oss
    </h2>
    <p style="position: relative; top: 50px; width: 80%; margin: auto; color: white;">Teknologsektionen IoD såg sitt ljus år 1990 då de som läste till Sjöbefäl bröt sig ur Ingenjörs- och Sjöbefälsteknologsektionen. IoD fick den vackraste sektionsfärgen Cerise tilldelad sig och så har det varit sedan dess. Under våren 1999 bytte sektionen namn till H som står för Ingenjörsteknologsektionen. Detta skedde på grund avatt driftteknikerna försvann och att det nu bara utbildades högskoleingenjörer på Chalmers Lindholmen.</p>
    <p style="position: relative; top: 70px; width: 80%; margin: auto; color: white; font-weight: bold"> De utbildningar som idag finns på sektionen är:</p>
    <div id="buttonGroup" style="clear: both; position: relative; align-content: center; top: 100px;">
      <v-btn flat
             stacked
             width="160"
             height="170"
             href="https://www.chalmers.se/utbildning/hitta-program/datateknik-hogskoleingenjor/"
             class="programButton"
             :ripple="false">
        <v-img width="160" src="@/assets/logos/Ikon_DATA.png"/>
        <b style="margin-top: 7px; color: white; font-family: 'Lemon/Milk', sans-serif"> Data </b>
      </v-btn>
      <v-btn class="programButton" flat stacked style="width: 160px; height: 170px;" :ripple="false"
             href="https://www.chalmers.se/utbildning/hitta-program/elektroteknik-hogskoleingenjor/">
        <v-img width="160" src="@/assets/logos/Ikon_ELEKTRO.png"/>
        <b style="margin-top: 7px; color: white; font-family: 'Lemon/Milk', sans-serif"> Elektro </b>
      </v-btn>
      <v-btn class="programButton" flat stacked :ripple="false"
             href="https://www.chalmers.se/utbildning/hitta-program/mekatronik-hogskoleingenjor/">
        <v-img width="160" src="@/assets/logos/Ikon_MEKATRONIK.png"/>
        <b style="margin-top: 7px; color: white; font-family: 'Lemon/Milk', sans-serif"> Mekatronik </b>
      </v-btn>
      <v-btn class="programButton" flat stacked style="width: 160px; height: 140px;" :ripple="false"
             href="https://www.chalmers.se/utbildning/hitta-program/maskinteknik-hogskoleingenjor/">
        <v-img width="160" src="@/assets/logos/Ikon_MASKIN.png"/>
        <b style="margin-top: 7px; color: white; font-family: 'Lemon/Milk', sans-serif"> Maskin </b>
      </v-btn>
      <v-btn class="programButton" flat stacked style="width: 160px; height: 140px;" :ripple="false"
             href="https://www.chalmers.se/utbildning/hitta-program/design-och-produktutveckling-hogskoleingenjor/">
        <v-img width="160" src="@/assets/logos/Ikon_DESIGN.png"/>
        <b style="margin-top: 7px; color: white; font-family: 'Lemon/Milk', sans-serif"> Design </b>
      </v-btn>
      <v-btn class="programButton" flat stacked style="width: 160px; height: 140px;" :ripple="false"
             href="https://www.chalmers.se/utbildning/hitta-program/ekonomi-och-produktionsteknik-hogskoleingenjor/">
        <v-img width="160" src="@/assets/logos/Ikon_EPI.png"/>
        <b style="margin-top: 7px; color: white; font-family: 'Lemon/Milk', sans-serif"> EPI </b>
      </v-btn>
    </div>
  </div>
  <v-container style="text-align: center;
                        background: url('https://htek.se/wp-content/uploads/2019/10/bild.jpg');
                        background-size: cover, contain;
                        background-position: center;
                        z-index: 11;
                        top: -200px;
                        clip-path: polygon(50% 0, 100% 0, 100% 90%, 50% 100%, 0 90%, 0 0);
                        position: relative;
                        height: 100vh;
                        padding: 0;"
               id="Händer på sektionen"
  >
    <div style="width: 100%; height: 100%; backdrop-filter: blur(4px); z-index: 10; position: absolute">
    <h2 style="

              position: relative;
              font-size: x-large;
              color: white;
              top: 120px;
              text-shadow: 1px 1px 1px #000000"
    >
      Vad händer hos oss?
    </h2>

    <EventCalendar id="calendar"></EventCalendar>
    </div>


  </v-container>

  <v-container style="text-align: center;
                        <!-- url('https://htek.se/wp-content/uploads/2019/10/bild2.jpg') -->
                        background: #E667AD;
                        max-width: 4000px;
                        position: relative;
                        top: -120px"

               id="kommitteer"
  >
    <h2 style="
              position: relative;
              top: -60px;
              font-size: x-large;
              color: #E0218A;"
        class="subTitle"
    >
      KOMMITTÉER
    </h2>

    <!-- <SlideShow style="border-radius: 30px; width: 75%; margin: auto;"></SlideShow> -->
    <v-row align="center" justify="center">

          <v-btn
            v-for="kommittee in kommitteer"
            v-bind:key="kommittee"
            style="width: 300px; height: 250px; margin: 50px;"
            flat
            :ripple="false"
            stacked
            v-bind="props"
            :to="'kommitteer/' + kommittee.name"

          >
            <v-img class="committeeImg" :src="kommittee.logo_url" style="width: 300px"></v-img>
          </v-btn>
    </v-row>

  </v-container>
  <v-container style="  top: -100px;
                        position: relative;
                        z-index: 0;
                        background-color: #E0218A;
                        background-size: cover;
                        clip-path: polygon(50% 10%, 100% 0, 100% 100%, 0 100%, 0 0);
                        max-width: 4000px;
                        height: 150vh;
                        padding: 200px 30px;"
               id="utskott"
  >
    <h2 style="
              position: absolute;
              color: white;
              font-size: 80px;
              top: 1.5em;
              left: 1000px;"
        class="subTitle"
              >
      UTSKOTT
    </h2>
    <div id="utskottCards" style="display: flex; flex-wrap: wrap; height: inherit; top: 100px; position: relative">
        <v-card id="Jamh"
                href="https://htek.se/jamh/"
                class="grow"
                style="
                  background: url('src/assets/jamh.png');
                  background-size: cover;
                  background-position: center;
                  background-repeat: no-repeat;
                  overflow: visible">
          <v-card-title style="
                  position: absolute;
                  font-family: 'Lemon/Milk light', sans-serif;
                  font-weight: lighter;
                  font-size: 80px;
                  color: white;
                  top: -25px">
            JAMH</v-card-title>
        </v-card>

    <v-card id="Harm"
            href="https://htek.se/harm/"
            class="grow"
            style="
                  background: url('src/assets/harm.png');
                  background-size: cover;
                  background-position: center;
                  background-repeat: no-repeat;
                  overflow: visible">
      <v-card-title style="
              position: absolute;
              font-size: 60px;
              font-weight: bolder;
              color: white;
              top: -20px;
              ">
        HARM</v-card-title>
    </v-card>
    <v-card id="Snh"
            href="https://htek.se/snh/"
            class="grow"
            style="
                  background: url('src/assets/jesustarzan.jpg');
                  background-size: cover;
                  background-position: center;
                  background-repeat: no-repeat;
                  overflow: visible">
      <v-card-title style="
              position: absolute;
              font-size: 60px;
              font-weight: bolder;
              color: white;
              ">
        SNH</v-card-title>
    </v-card>
    </div>


  </v-container>


</template>

<style>

</style>

<script lang="ts">
import {defineComponent} from "vue";
import EventCalendar from "@/components/EventCalendar.vue";

export default defineComponent ({
  components: {
    EventCalendar
  },
  data: () => ({
    dialog: false,
    kommitteer: [] as any[],
  }),

  async created() {
    const res: any[] = await fetch("http://localhost:8080/committee").then(res => res.json())
    this.kommitteer = res.filter(e => e.type === 'kommittee')
  }
});


</script>

<style>
@import url("https://fonts.cdnfonts.com/css/lemonmilk");


#mainPage {
  clear: bottom;
}

#Jamh {
  border-radius: 25px;
  width: 47%;
  height: 35%;
  margin: 20px;
  top: -100px;
}
#Harm {
  border-radius: 25px;
  top: 10px;
  width: 50%;
  height: 40%;

}

#Snh {
  border-radius: 25px;
  width: 40%;
  height: 37%;
  top: -230px;
  left: 116px;

}

.grow {
  transition: transform 0.5s;
  background-image: none;
}
.grow:hover {
  transform: scale(1.03);
}

#buttonGroup {
  top: 60px;
}

.programButton {
  margin: 30px;
  background-color: transparent;
}

.programButton:hover{
  transform: scale(1.03);
}

.v-btn__overlay{
  background: none;
}

.programButton::after {
  background-color: transparent !important;
}

.committeeImg {
  transition: transfrom 0.5s cubic-bezier(.15, .15, .15, .15);
}

.committeeImg:hover {
  transform: scale(1.02);
}


#calendar{
  position: relative;
  float: left;
  display: flex;
  flex-direction: row;
  top: 200px;
  left: 100px;
  z-index: 2;


}

#comitteeCardTitle {
  color: white;
  text-shadow: 1px 1px 1px #000000;
  font-family: 'Lemon/Milk', sans-serif;
}

.subTitle{
  color: #E0218A;

}


h1, h2, h3, h5, h6 {
  font-family: 'Lemon/Milk', sans-serif;
}

h4 {
  font-family: 'Inter', sans-serif;
}

</style>
