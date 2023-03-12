<template>
  <v-card flat style="background-image: url('/groupimg.jpg');
                        width: 100%;
                        background-position: center center;
                        margin: auto;
                        top: -65px;
                        height: 40vh;
                        border-radius: 0;
                        background-size: cover, contain">
  </v-card>
  <div class="wholeForm" style="top: -100px; position: relative">
    <v-form v-model="valid">
      <h1 style="text-align: center">Skapa arrangemang</h1>
      <v-container>
        <v-row>
          <v-col
            cols="12"
            md="6"
          >
            <v-text-field
              v-model="name"
              :counter="20"
              label="Namn på arr"
              required
              variant="outlined"
              dark
            ></v-text-field>
          </v-col>
          <v-col
            cols="12"
            md="6"
          >
            <v-text-field
              v-model="location"
              :counter="20"
              label="Plats"
              required
              variant="outlined"
              dark
              prepend-inner-icon="mdi-map-marker"
            ></v-text-field>
          </v-col>


          <v-col
            cols="12"
            md="12"
          >

            <v-textarea
              v-model="description"
              :counter="400"
              label="Beskrivning av Arr"
              required
              variant="outlined"

            ></v-textarea>
          </v-col>

          </v-row>
          <v-row style="text-align: center">
            <v-spacer></v-spacer>
            <v-col
              cols="12"
              sm="6"
              md="4"
            > <p>Start</p>
              <VueDatePicker v-model="start"/>
            </v-col>
            <v-col
              cols="12"
              sm="6"
              md="4"
            > <p>Stop</p>
              <VueDatePicker v-model="stop"/>
            </v-col>
            <v-spacer></v-spacer>
          </v-row>
        <v-row>
          <v-spacer></v-spacer>
          <v-col
            cols="12"
            sm="6"
            md="4">
            <v-select
              required
              v-model="host"
              variant="outlined"
              label="Arrangör"
              item-title="fullname"
              item-value="fullname"
              :items="possibleHosts"

            ></v-select>
          </v-col>

          <v-spacer></v-spacer>
        </v-row>
        <v-row>
          <v-btn style="top: 40px" class="createButton" @click="createEvent">Skapa arr</v-btn>

        </v-row>
      </v-container>
    </v-form>
  </div>
</template>

<script lang="ts">

import '@vuepic/vue-datepicker/dist/main.css';
import VueDatePicker from "@vuepic/vue-datepicker";
import {defineComponent} from "vue";

export default defineComponent({
  components: {VueDatePicker},

  data: () => ({
    valid: false,
    name: '',
    description: '',
    start: '',
    stop: '',
    location: '',
    host: '',
    possibleHosts: [] as any[],
    hostId: '',
    imagepath: '',
    organizer: '',
  }),
  methods: {
    async createEvent(){
      console.log(this.possibleHosts[0].banner_url)
     for(let i = 0; i < this.possibleHosts.length; i++){
       if(this.host == this.possibleHosts[i].fullname){
          this.imagepath = this.possibleHosts[i].banner_url;
          this.organizer = this.possibleHosts[i].id;
       }
     }

      const payload = {
        name: this.name,
        location: this.location,
        description: this.description,
        start: this.start,
        stop: this.stop,
        imagepath: this.imagepath,
        organizer: this.organizer
      }
     const requestOptions = {
       "method": "POST",
       "headers": {
         "Content-type": "application/json"
       },
       body: JSON.stringify(payload)
     }

     const response = await fetch("http://localhost:8080/event", requestOptions);
     const data = await response.json();
    },
  },
  async created(){
    this.possibleHosts = await fetch("http://localhost:8080/committee/getCommitteesInfo").then(res => res.json());
  }
});
</script>

<style>

.createButton {
  margin: 1px auto 30px auto;
}

.wholeForm {
  margin-top: 100px;
}

.dp__action {
  border: solid black thin;
  margin: 1px;
  color: #E0218A;
}

.dp__action_buttons {
  width: 60%;
}
</style>


