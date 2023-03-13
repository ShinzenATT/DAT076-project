<!-- Static page presenting information about 'SAMO' (student work environment representative) -->

<template>
  <!-- A divider to accentuate from the header -->
  <hr
    style="
        margin: 30px 0;
        height: 1px;
        background: black;
        border: none"
  >
  <v-container class="pa-16">
    <v-row class="align-center">
      <!-- Image of Moa -->
      <v-img
        max-width="500"
        src="@/assets/Samo_Moa_cropped-1536x1536.jpg"
      ></v-img>
      <v-col
        cols="7"
        class="text-center ml-16"
      >
        <!-- Description -->
        <h2 class="text-h4 mb-7">
          Studerande arbetsmiljöombud (SAMO)
        </h2>
        <p>
          Jag heter Moa Sidhagen och läser Design och produktutveckling år 3. Det är
          jag som är SAMO här på H-sektionen och är därmed din kontaktperson i alla
          arbetsmiljöfrågor, både fysiska och studiesociala.
          <br><br>
          Jag sitter i H-styret och jobbar för att du som student på H-sektionen ska
          trivas så bra som möjligt på din utbildning. Vet du inte vart du ska vända
          dig i en fråga så kan du alltid kontakta mig, så hänvisar jag dig rätt.
          <br><br>
          Bra att veta är också att jag har tystnadsplikt, så tveka inte att kontakta
          mig om du funderar över något.
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Samo"
}
</script>

<style scoped>

p {
  font-size: 19px;
}

</style>
