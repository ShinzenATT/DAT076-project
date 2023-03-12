<template>
  <v-progress-circular v-if="loading" size="50" width="6" indeterminate color="primary" style="display: flex; margin: auto;"/>
  <div v-else>
    <v-img :src="committee.banner_url" max-height="300" cover style="display: block; width: 100%;"/>
    <v-container>
      <v-row>
        <v-col cols="12" sm="2">
          <v-img :src="committee.logo_url" max-height="200" style="width: 100%;"/>
        </v-col>
        <v-col>
          <v-card-title> <h1> {{ committee.fullname }} </h1> </v-card-title>
          <v-card-subtitle v-if="committee.fullname !== committee.name"><h3> {{ committee.name }} </h3></v-card-subtitle>
          <v-card-actions style="flex-wrap: wrap;">
            <v-btn v-if="committee.website" prepend-icon="mdi-web" variant="outlined" :href="'https://' + committee.website"> {{ committee.website }} </v-btn>
            <v-btn prepend-icon="mdi-email" variant="outlined" :href="'mailto:' + committee.email"> {{ committee.email }} </v-btn>
            <v-btn v-if="committee.instagram" prepend-icon="mdi-instagram" variant="outlined" color="purple" :href="'https://instagram.com/' + committee.instagram"> @{{committee.instagram}} </v-btn>
            <v-btn v-if="committee.facebook" prepend-icon="mdi-facebook" variant="outlined" :href="committee.facebook" color="blue"> Facebook </v-btn>
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
</style>

<script lang="ts">
import { Committee } from 'types/committees'
import {defineComponent} from 'vue'

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
      const res = await fetch('http://localhost:8080/committee/' + this.$router.currentRoute.value.params.name)
      if(!res.ok){
        this.error = true
        return
      }
      this.committee = await res.json()
      this.loading = false
      console.log(this.committee)
    }
})
</script>
