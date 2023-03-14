<!-- Frontend implementation for 'About'-page -->

<template>
  <div class="about">

    <!-- Inserting the cover image -->
    <v-img src="@/assets/about_cover.jpg"
           cover
           style="top: -64px"
           max-height="60vh"
    >
    </v-img>

    <!-- Presenting the text -->
    <v-container class="text-center">
      <h1 style="font-size: 70px">Om H-sektionen</h1>
      <p>
        Teknologsektionen IoD såg sitt ljus år 1990 då de som läste till Sjöbefäl bröt sig ur Ingenjörs- och Sjöbefälsteknologsektionen.<br>
        IoD fick den vackraste sektionsfärgen Cerise tilldelad sig och så har det varit sedan dess.
      </p>
      <p>
        Under våren 1999 bytte sektionen namn till H som står för Ingenjörsteknologsektionen.<br>
        Detta skedde på grund avatt driftteknikerna försvann och att det nu bara utbildades högskoleingenjörer på Chalmers Lindholmen.
      </p>
      <h3>De utbildningar som idag finns på sektionen är:</h3>

      <!-- Logos for each program -->
      <v-row
        justify="center"
        class="mb-6 mx-16 pt-10"
        no-gutters
        style="background-color: #E667AD;"
      >

        <!-- Designingenjör (DEI) -->
        <v-col>
          <v-img
            src="@/assets/icons/Ikon_DESIGN.png"
            max-height="170"
          />
          <p>Designingenjör <br> (DEI)</p>
        </v-col>

        <!-- Maskiningenjör (MI) -->
        <v-col>
          <v-img
            src="@/assets/icons/Ikon_MASKIN.png"
            max-height="170"
          />
          <p>Maskiningenjör <br> (MI)</p>
        </v-col>

        <!-- Mekatronikingenjör (MEI) -->
        <v-col>
          <v-img
            src="@/assets/icons/Ikon_MEKATRONIK.png"
            max-height="170"
          />
          <p>Mekatronikingenjör <br> (MEI)</p>
        </v-col>

        <!-- Elektroingenjör (EI) -->
        <v-col>
          <v-img
            src="@/assets/icons/Ikon_ELEKTRO.png"
            max-height="170"
          />
          <p>Elektroingenjör <br> (EI)</p>
        </v-col>

        <!-- Dataingenjör (DAI) -->
        <v-col>
          <v-img
            src="@/assets/icons/Ikon_DATA.png"
            max-height="170"
          />
          <p>Dataingenjör <br> (DAI)</p>
        </v-col>

        <!-- Ekonomi och produktionsteknik (EPI) -->
        <v-col>
          <v-img
            src="@/assets/icons/Ikon_EPI.png"
            max-height="170"
          />
          <p>Ekonomi och <br> produktionsteknik <br> (EPI)</p>
        </v-col>
      </v-row>

      <!-- Map & Info about campus Lindholmen -->
      <v-row
        align="center"
        class="mb-10"
      >
        <v-col>
          <v-img src="@/assets/Lindholmenkarta_Sep2018_SV-_croped1.png"
                 max-height="300"
          />
        </v-col>
        <v-col>
          <p>
            H-sektionen delar Lindholmen med ett flertal gymnasieskolor men
            främst med Chalmers egna Sjösektion där utbildningar som Sjöingenjör,
            Sjökapten och Sjöfart och logistik finns. De som läser tekniskt basår
            läser också på Campus Lindholmen.
          </p>
        </v-col>
      </v-row>
      <hr
        style="
        margin: 30px 0;
        height: 2px;
        background: #e0218a;
        border: none"
      >

      <!-- H-istory about the section -->
      <!-- Each important point is presented next to a small material design icon -->
      <h2>
        H-istoria
      </h2>
      <p>
        Alla som läser till högskoleingenjör på Campus Lindholmen tillhör H-sektionen (Ingenjörsteknologsektionen).
        Här är bakgrunden till hur vi blev en egen sektion:
      </p>
      <v-row>
        <!-- This column contains all the historical points and is forced to take 9 (out of 12) columns -->
        <!-- This is done to have the logo which is inserted on the same row take an appropriate amount of space -->
        <v-col
          cols="9"
          class="text-start pb-10"
        >
          <v-row>
            <v-icon class="align-self-center mr-1" icon="mdi-home-silo"></v-icon>
            <v-col class="ma-1 pa-0 historytext">
              1829 - Chalmers slöjdskola bildades (grunden till hela Chalmers)
            </v-col>
          </v-row>

          <v-row>
            <v-icon class="align-self-center mr-1" icon="mdi-anchor"></v-icon>
            <v-col class="ma-1 pa-0 historytext">
              1841 - Sjöbefälsskolan grundades
            </v-col>
          </v-row>

          <v-row>
            <v-icon class="align-self-center mr-1" icon="mdi-merge"></v-icon>
            <v-col class="ma-1 pa-0 historytext">
              1887 - Ett samarbete mellan de två skolorna började. “Skeppsbyggmästarlinjen” på
              Sjöbefälsskolan flyttades över till Chalmers (finns idag på Lindholmen).
            </v-col>
          </v-row>

          <v-row>
            <v-icon class="align-self-center mr-1" icon="mdi-set-split"></v-icon>
            <v-col class="ma-1 pa-0 historytext">
              1980 - Sjöbefälsskolan blev en egen sektion på Chalmers. Samma år startade
              Driftingenjörsutbildningen. Namnet på den nya sektionen blev Sjöbefäls- och Driftsektionen.
            </v-col>
          </v-row>

          <v-row>
            <v-icon class="align-self-center mr-1" icon="mdi-arrow-decision"></v-icon>
            <v-col class="ma-1 pa-0 historytext">
              1985 - Kortare utbildningar inom Chalmers lades på Sjöbefäls- och Driftsektionen.
            </v-col>
          </v-row>

          <v-row>
            <v-icon class="align-self-center mr-1" icon="mdi-school"></v-icon>
            <v-col class="ma-1 pa-0 historytext">
              1989 - Sektionen bytte namn till Ingenjörs- och Sjöbefälsteknologsektionen. Det berodde på att de
              nya ingenjörsutbildningarna startade.
            </v-col>
          </v-row>

          <v-row>
            <v-icon class="align-self-center mr-1" icon="mdi-vector-intersection"></v-icon>
            <v-col class="ma-1 pa-0 historytext">
              1990 - Sektionen delades i två delar; Sjöbefälssektionen och Ingenjörs- och Driftteknologsektionen (IoD).
            </v-col>
          </v-row>

          <v-row>
            <v-icon class="align-self-center mr-1" icon="mdi-arrow-right-thin"></v-icon>
            <v-col class="ma-1 pa-0 historytext">
              1994 - IoD flyttade från Kvarnberget, Polhem, Ascheberg och Johannebergsområdet till Lindholmen.
            </v-col>
          </v-row>

          <v-row>
            <v-icon class="align-self-center mr-1" icon="mdi-subtitles"></v-icon>
            <v-col class="ma-1 pa-0 historytext">
              1999 - IoD bytte namn till Ingenjörsteknologsektionen (H-sektionen).
            </v-col>
          </v-row>

          <v-row class="align-center">
            <v-icon class="align-self-center mr-1" icon="mdi-party-popper"></v-icon>
            <v-col class="ma-1 pa-0 historytext">
              2010 - Vi firade att sektionen blev 20 år.
            </v-col>
          </v-row>
        </v-col>

        <v-img
          src="@/assets/H-sektionens-logga.png"
        />
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "About"
}
</script>

<style scoped>

h1, h2, h3, h5, h6 {
  font-family: 'Lemon/Milk', sans-serif;
}

h1 {
  margin: 15px;
  font-weight: 400;
}

h2 {
  font-size: 50px;
  font-weight: 400;
}

h3 {
  font-weight: 400;
  font-size: x-large;
  margin-bottom: 15px;
}

p {
  margin: 20px;
  font-size: large;
}

.historytext {
  font-size: 18px;
  font-weight: 500;
}
</style>
