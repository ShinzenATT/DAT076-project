<!-- Frontend implementation for 'Home'-page -->

<template>

  <!-- Places the image and rubric at the top of the welcome-page -->
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

  <!-- 'About us'-section, presenting the different programmes -->
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
       id="aboutus"
  >
    <h2 id="aboutTitle" style="
              position: relative;
              font-size: x-large;
              color: white"
    >
      Om oss
    </h2>
    <p class="aboutParagraphs" style="position: relative; top: 50px; width: 80%; margin: auto; color: white;">Teknologsektionen IoD såg sitt ljus år 1990 då de som läste till Sjöbefäl bröt sig ur Ingenjörs- och Sjöbefälsteknologsektionen. IoD fick den vackraste sektionsfärgen Cerise tilldelad sig och så har det varit sedan dess. Under våren 1999 bytte sektionen namn till H som står för Ingenjörsteknologsektionen. Detta skedde på grund avatt driftteknikerna försvann och att det nu bara utbildades högskoleingenjörer på Chalmers Lindholmen.</p>
    <p class="aboutParagraphs" style="position: relative; top: 70px; width: 80%; margin: auto; color: white; font-weight: bold"> De utbildningar som idag finns på sektionen är:</p>

    <!-- Here every programme gets its own clickable logo, linking to the chalmers webpage -->
    <div id="buttonGroup" style="clear: both; position: relative; align-content: center; top: 100px;">
      <v-btn flat
             stacked
             width="160"
             height="140"
             href="https://www.chalmers.se/utbildning/hitta-program/datateknik-hogskoleingenjor/"
             class="programButton"
             :ripple="false">
        <v-img width="160" src="@/assets/icons/Ikon_DATA.png"/>
        <b style="margin-top: 7px; color: white; font-family: 'Lemon/Milk', sans-serif"> Data </b>
      </v-btn>
      <v-btn class="programButton" flat stacked style="width: 160px; height: 140px;" :ripple="false"
             href="https://www.chalmers.se/utbildning/hitta-program/elektroteknik-hogskoleingenjor/">
        <v-img width="160" src="@/assets/icons/Ikon_ELEKTRO.png"/>
        <b style="margin-top: 7px; color: white; font-family: 'Lemon/Milk', sans-serif"> Elektro </b>
      </v-btn>
      <v-btn class="programButton" flat stacked style="width: 160px; height: 140px;" :ripple="false"
             href="https://www.chalmers.se/utbildning/hitta-program/mekatronik-hogskoleingenjor/">
        <v-img width="160" src="@/assets/icons/Ikon_MEKATRONIK.png"/>
        <b style="margin-top: 7px; color: white; font-family: 'Lemon/Milk', sans-serif"> Mekatronik </b>
      </v-btn>
      <v-btn class="programButton" flat stacked style="width: 160px; height: 140px;" :ripple="false"
             href="https://www.chalmers.se/utbildning/hitta-program/maskinteknik-hogskoleingenjor/">
        <v-img width="160" src="@/assets/icons/Ikon_MASKIN.png"/>
        <b style="margin-top: 7px; color: white; font-family: 'Lemon/Milk', sans-serif"> Maskin </b>
      </v-btn>
      <v-btn class="programButton" flat stacked style="width: 160px; height: 140px;" :ripple="false"
             href="https://www.chalmers.se/utbildning/hitta-program/design-och-produktutveckling-hogskoleingenjor/">
        <v-img width="160" src="@/assets/icons/Ikon_DESIGN.png"/>
        <b style="margin-top: 7px; color: white; font-family: 'Lemon/Milk', sans-serif"> Design </b>
      </v-btn>
      <v-btn class="programButton" flat stacked style="width: 160px; height: 140px;" :ripple="false"
             href="https://www.chalmers.se/utbildning/hitta-program/ekonomi-och-produktionsteknik-hogskoleingenjor/">
        <v-img width="160" src="@/assets/icons/Ikon_EPI.png"/>
        <b style="margin-top: 7px; color: white; font-family: 'Lemon/Milk', sans-serif"> EPI </b>
      </v-btn>
    </div>
  </div>


  <!-- Event-calendar section -->
  <v-container style="text-align: center;
                        background: url('https://htek.se/wp-content/uploads/2019/10/bild.jpg');
                        background-size: cover, contain;
                        background-position: center;
                        max-width: inherit !important;
                        z-index: 11;
                        top: -200px;
                        clip-path: polygon(50% 0, 100% 0, 100% 90%, 50% 100%, 0 90%, 0 0);
                        position: relative;
                        height: 100vh;
                        padding: 0;"
               id="händer"
  >
    <div style="width: 100%; height: 100%; backdrop-filter: blur(4px); z-index: 10; position: absolute;" id="calendarBackground">
    <h2 id="händerTitle" style="

              position: relative;
              font-size: x-large;
              color: white;
              top: 120px;
              text-shadow: 1px 1px 1px #000000"
    >
      Vad händer hos oss?
    </h2>

      <!-- Event calendar component is inserted -->
      <EventCalendar id="calendar"></EventCalendar>
    </div>


  </v-container>

  <v-container style="text-align: center;
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
            v-for="kommittee in kommitteerData"
            v-bind:key="kommittee"
            style="width: 300px; height: 250px; margin: 50px;"
            flat
            :ripple="false"
            stacked
            :to="'kommitteer/' + kommittee.name"

          >
            <v-img class="committeeImg" :src="kommittee.logo_url" style="width: 300px"></v-img>
          </v-btn>
    </v-row>

  </v-container>
  <v-container
                style="  top: -100px;
                        text-align: center;
                        position: relative;
                        z-index: 0;
                        background-color: #E0218A;
                        background-size: cover;
                        clip-path: polygon(50% 5%, 100% 0, 100% 100%, 0 100%, 0 0);
                        max-width: 100%;
                        padding: 100px 30px;"
               id="utskott"
  >
    <h2 id="utskottTitle" style="
              position: relative;
              font-size: x-large;
              color: white;
              top: 60px"
    >
      Utskott
    </h2>
    <!-- Div containing "utskott", custom growing with flex -->
    <!-- Uses getUtskott() to fetch information about the current utskott -->
    <!-- This function is used since it's not possible to loop with v-for -->
    <!-- These cards are of custom class "grow" which gives them a nice hover effect-->
    <div id="utskottCards" style="display: flex; flex-wrap: wrap; top: 200px; position: relative">
        <v-card id="Jamh" class="grow" :to="'utskott/' + getUtskott('jamh').name">
          <v-img style="border-radius: 20px"
                 :src="getUtskott('jamh').banner_url"
                 cover
                 height="100%"
          ></v-img>
          <v-card-title style="
                  position: absolute;
                  font-family: 'Lemon/Milk light', sans-serif;
                  font-weight: lighter;
                  font-size: 60px;
                  text-shadow: 1px 1px 1px black;
                  color: white;
                  top: -20px">
            {{ getUtskott('jamh').name }}
            </v-card-title>
        </v-card>

    <v-card id="Harm" class="grow" :to="'utskott/' + getUtskott('harm').name">
      <v-img style="border-radius: 20px"
             :src="getUtskott('harm').banner_url"
             cover
             height="100%"
      ></v-img>
      <v-card-title style="
              font-family: 'Lemon/Milk light', sans-serif;
              position: absolute;
              font-size: 60px;
              font-weight: lighter;
              text-shadow: 1px 1px 1px black;
              color: white;
              top: -20px;
              ">
        {{ getUtskott('harm').name }}</v-card-title>
    </v-card>
    <v-card id="Snh" class="grow" :to="'utskott/' + getUtskott('snh').name">
      <v-img style="border-radius: 20px"
             :src="getUtskott('snh').banner_url"
             cover
             height="100%"
      ></v-img>
      <v-card-title style="
              font-family: 'Lemon/Milk light', sans-serif;
              top: -20px;
              position: absolute;
              font-size: 60px;
              text-shadow: 1px 1px 1px black;
              font-weight: lighter;
              color: white;
              ">{{ getUtskott('snh').name }}</v-card-title>
    </v-card>
    </div>


  </v-container>
  <v-container style="text-align: center;
                        position: relative;"

               id="antagen"
  >
    <h2 style="
              position: relative;
              top: -60px;
              font-size: x-large;
              color: #E0218A;"
        class="subTitle"
    >
      Har du blivit antagen?
    </h2>

    <p>Användbar information</p>


  </v-container>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import EventCalendar from "@/components/EventCalendar.vue";

export default defineComponent ({
  components: {
    EventCalendar
  },
  data: () => ({
    dialog: false as boolean,
    kommitteerData: [] as any[],
    utskottData: [] as any[],
  }),

  async created() {
    const res: any[] = await fetch("http://localhost:8080/committee").then(res => res.json())
    this.kommitteerData = res.filter(e => e.type === 'kommittee')
    this.utskottData = res.filter(e => e.type === 'utskott')
  },
  methods: {

    getUtskott(name: String){
      for(let i = 0; i < this.utskottData.length; i++){
        if(name == this.utskottData[i].name){
          return this.utskottData[i];
        }
      }
      return "not found";
    }

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
  overflow: visible
}
#Harm {
  border-radius: 25px;
  top: 10px;
  width: 50%;
  overflow: visible

}

#Snh {
  border-radius: 25px;
  width: 40%;
  height: 37%;
  top: -216px;
  left: 116px;
  overflow: visible

}

.grow {
  transition: transform 0.5s;
  background-image: none;
}
.grow:hover {
  transform: scale(1.03);
}

.programButton {
  margin: 30px;
  background-color: transparent !important;
}

.programButton:hover{
  transform: scale(1.03);
}

.v-btn__overlay{
  background: transparent !important;
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

@media only screen and (max-width: 1200px) {

  #aboutTitle {
    bottom: 10px;
  }

  .aboutParagraphs {
    width: 100% !important;
    top: 5px !important;
  }

  #buttonGroup {
    top: 10px !important;
    height: 100%;
  }

  #utskott {
    clip-path: polygon(0 0, 100% 0%, 100% 100%, 0% 100%) !important;
    padding: 0 !important ;
  }

  #utskottCards {
    flex-direction: column;
    width: 100%;
    flex-wrap: nowrap;
    align-items: center;
    top: 0 !important;
  }

  #utskottTitle {
    top: 10px !important;
  }

  #Jamh {
    top: 0;
    left: 0;
    width: 50%;
    margin: 10%;
  }
  #Harm {
    top: 0;
    left: 0;
    width: 50%;
    margin: 0 !important;
  }

  #Snh {
    left: 0;
    top: 0;
    width: 50%;
    margin: 10%;

  }

  #aboutus {

    top: 0;

    clip-path: polygon(0 0, 100% 0%, 100% 100%, 0% 100%) !important;

  }

  #calendar{
    left: 25px;
    top: 40px;
  }

  #händer {
    align-items: center;
  }

  #händerTitle {
    top: 0;
  }

  #calendarBackground {
    display: grid;
    justify-content: center
  }


}

</style>
