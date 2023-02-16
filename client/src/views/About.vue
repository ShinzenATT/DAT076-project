<template>
  <div class="about">
    <h1 class="text-h3">Om H-sektionen</h1>
    <p>
      Teknologsektionen IoD såg sitt ljus år 1990 då de som läste till Sjöbefäl bröt sig ur Ingenjörs- och Sjöbefälsteknologsektionen.<br>
      IoD fick den vackraste sektionsfärgen Cerise tilldelad sig och så har det varit sedan dess.
    </p>
    <p>
      Under våren 1999 bytte sektionen namn till H som står för Ingenjörsteknologsektionen.<br>
      Detta skedde på grund avatt driftteknikerna försvann och att det nu bara utbildades högskoleingenjörer på Chalmers Lindholmen.
    </p>
    <p>De utbildningar som idag finns på sektionen är:</p>
    <v-row>
      <v-col>
        <v-img
          src="@/assets/logos/Ikon_DESIGN.png"
          height="170"
        />
        <p>Designingenjör <br> (DEI)</p>
      </v-col>
      <v-col>
        <v-img
          src="@/assets/logos/Ikon_MASKIN.png"
          height="170"
        />
        <p>Maskiningenjör <br> (MI)</p>
      </v-col>
      <v-col>
        <v-img
          src="@/assets/logos/Ikon_MEKATRONIK.png"
          height="170"
        />
        <p>Mekatronikingenjör <br> (MEI)</p>
      </v-col>
      <v-col>
        <v-img
          src="@/assets/logos/Ikon_ELEKTRO.png"
          height="170"
        />
        <p>Elektroingenjör <br> (EI)</p>
      </v-col>
      <v-col>
        <v-img
          src="@/assets/logos/Ikon_DATA.png"
          height="170"
        />
        <p>Dataingenjör <br> (DAI)</p>
      </v-col>
      <v-col>
        <v-img
          src="@/assets/logos/Ikon_EPI.png"
          height="170"
        />
        <p>Ekonomi och <br> produktionsteknik <br> (EPI)</p>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "About"
}
</script>

<style scoped>
h1 {
  margin: 15px;
  text-align: center;
}

p {
  margin: 20px;
  text-align: center;
  font-size: large;
}
</style>
