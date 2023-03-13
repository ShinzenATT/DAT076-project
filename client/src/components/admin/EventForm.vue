<template>
  <v-card :loading="loading">
    <v-form  @submit.prevent="submit()">
      <v-text-field v-model="event.name" label="Namn" counter="20" color="primary"/>
      <v-text-field v-model="event.location" counter="20" label="Plats" color="primary"/>
      <v-textarea v-model="event.description" label="Beskrivning av Arr" counter="400" color="primary"/>
      <v-row style="text-align: center;">
        <v-spacer/>
        <v-col
          cols="12"
          sm="6"
          md="4"
        > <p>Start</p>
          <VueDatePicker v-model="event.start"/>
        </v-col>
        <v-col
          cols="12"
          sm="6"
          md="4"
        > <p>Stop</p>
          <VueDatePicker v-model="event.stop"/>
        </v-col>
        <v-spacer/>
      </v-row>

      <v-select
        style="margin-top: 25px"
        v-model="event.organizer"
        label="Arrangör"
        item-title="fullname"
        item-value="fullname"
        :items="possibleHosts"
      ></v-select>

      <v-btn type="submit" :color="color" :loading="loading" style="bottom: 10px"> Spara </v-btn>
      <span :style="'color:' + $vuetify.theme.current.colors.error"> {{ this.error }} </span>

      <v-btn v-if="!createNew" color="red" icon="mdi-delete" style="position: absolute; bottom: 5px; right: 10px;" @click="deleteItem"/>
    </v-form>
  </v-card>


</template>

<script lang="ts">
import {defineComponent} from "vue";
import {Event} from "../../../types/Event";
import '@vuepic/vue-datepicker/dist/main.css';
import VueDatePicker from "@vuepic/vue-datepicker";

export default defineComponent({

  name: "EventForm",
  components: {VueDatePicker},
  props: {
    modelValue: Object,
    createNew: Boolean
  },
  emits: ['update:modelValue'],
  data: () => ({
    error: '',
    success: false,
    possibleHosts: [] as any[],
    loading: false,
    event: {} as Event
  }),
  computed: {
    color(): string{
      if(this.error){
        return 'error'
      } else if(this.success){
        return 'success'
      } else {
        return 'primary'
      }
    }
  },
  async created(){
    this.possibleHosts = await fetch("http://localhost:8080/committee/getCommitteesInfo").then(res => res.json());
    if(this.createNew){
      this.event = {
        name: '',
        description: '',
        start: '',
        stop: '',
        location: '',
        organizer: '',
        imagepath: null,
        id: -1
      }
    } else {
      this.event = this.modelValue as Event
    }
  },
  methods: {
    async submit(){
      this.loading = true
      this.error = ''
      this.success = false

      if(this.createNew){
        await this.post()
      } else {
        await this.put()
      }

      if(!this.error)
        this.$emit('update:modelValue', this.event)
      this.loading = false

    },

    async put(){
      for(let i = 0; i < this.possibleHosts.length; i++){
        if(this.event.organizer == this.possibleHosts[i].fullname){
          this.event.imagepath = this.possibleHosts[i].banner_url;
          this.event.organizer = this.possibleHosts[i].id;
        }
      }
      const res = await fetch('http://localhost:8080/events/', {
        method: 'PUT',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(this.event)
      })

      if(!res.ok){
        this.error = await res.text()
        return
      }

      this.event = await res.json()
      this.success = true
    },
    async post(){
      for(let i = 0; i < this.possibleHosts.length; i++){
        if(this.event.organizer == this.possibleHosts[i].fullname){
          this.event.organizer = this.possibleHosts[i].id;
        }
      }
      const res = await fetch('http://localhost:8080/events/', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(this.event)
      })

      if(!res.ok){
        this.error = await res.text()
        return
      }

      this.event = await res.json()
      this.success = true
    },

    async deleteItem(){
      console.log(this.event.id)
      this.loading = true
      const res = await fetch('http://localhost:8080/events/' + this.event.id, {
          method: 'DELETE',
      })
      if(res.ok){
        this.success = true
        this.event.name = '_DELETED'
      }
      this.loading = false
      this.$emit('update:modelValue', this.event)
    }
  }

});

</script>

<style scoped>

</style>
