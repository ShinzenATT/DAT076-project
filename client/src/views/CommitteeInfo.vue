<!-- Dynamic frontend implementation for all the committee-information pages -->
<!-- The selected committees information is fetched from the database. -->
<!-- Details on this is found below, in the script-section of this .vue file -->

<template>
  <v-progress-circular v-if="loading" size="50" width="6" indeterminate color="primary" style="display: flex; margin: auto;"/>
  <div v-else>
    <v-img :src="committee.banner_url ?? undefined" max-height="465" cover style="display: block; width: 100%; top: -64px;"/>
    <v-container>
      <v-row>
        <v-col cols="12" sm="2">
          <v-img :src="committee.logo_url ?? undefined" max-height="200" style="width: 100%;"/>
        </v-col>
        <v-col>
          <v-card-title id="pageTitle">{{ committee.fullname }} </v-card-title>
          <v-card-subtitle v-if="committee.fullname !== committee.name"><h3> {{ committee.name }} </h3></v-card-subtitle>
          <v-card-actions style="flex-wrap: wrap;">
            <v-btn class="redirectButton" v-if="committee.website" prepend-icon="mdi-web" variant="outlined" :href="'https://' + committee.website"> {{ committee.website }} </v-btn>
            <v-btn class="redirectButton" prepend-icon="mdi-email" variant="outlined" :href="'mailto:' + committee.email"> {{ committee.email }} </v-btn>
            <v-btn class="redirectButton" v-if="committee.instagram" prepend-icon="mdi-instagram" variant="outlined" color="purple" :href="'https://instagram.com/' + committee.instagram"> @{{committee.instagram}} </v-btn>
            <v-btn class="redirectButton" v-if="committee.facebook" prepend-icon="mdi-facebook" variant="outlined" :href="committee.facebook" color="blue"> Facebook </v-btn>
          </v-card-actions>
        </v-col>
      </v-row>
      <v-card-text>
        <p> {{ committee.description }} </p>
      </v-card-text>
    </v-container>
  </div>
</template>

<style scoped>
  .v-card-actions > .v-btn {
    flex-grow: 1;
  }

  .redirectButton {
    margin: 2px !important;
  }

  h1, h2, h3, h5, h6 {
    font-family: 'Lemon/Milk', sans-serif;
  }

  #pageTitle {
    font-family: 'Lemon/Milk', sans-serif;
    font-size: xx-large;
  }

  @media only screen and (max-width: 716px) {
    #pageTitle {
      font-size: medium;
    }
  }

</style>

<script lang="ts">

// Imports
import { Committee } from 'types/committees'
import {defineComponent} from 'vue'

// Defining the methods for fetching data about the selected committee
export default defineComponent({
    name: 'committeeInfo',
    data(){
        return {
            committee: {} as Committee,
            error: false,
            loading: true
        }
    },
    async created(){
      this.$watch(() => this.$route.params, (to, from) => this.load(to.name as string))
      await this.load(this.$route.params.name as string)
    },
  methods: {
      async load(target: string){
        const res = await fetch('http://localhost:8080/committee/' + target)
        if(!res.ok){
          this.error = true
          return
        }
        this.committee = await res.json()
        this.loading = false
      }
  }
})
</script>
