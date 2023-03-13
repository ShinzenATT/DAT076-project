<template>
   <v-card :loading="loading && !committee.name">
     <v-form v-if="committee.name !== undefined" @submit.prevent="submit()">
       <v-text-field v-model="committee.name" label="Namn" color="primary"/>
       <v-text-field v-model="committee.fullname" label="Fullständig Namn" color="primary"/>
       <v-select v-model="committee.type" label="Typ" :items="committeeTypes"/>
       <v-text-field v-model="committee.email" label="Email" color="primary" hint="Detta uppdaterar även mejlet du loggar in med!"/>
       <v-text-field v-model="committee.facebook" label="Facebook Länk" color="primary"/>
       <v-text-field v-model="committee.instagram" label="Instagram Användarnamn" color="primary" prefix="@"/>
       <v-text-field v-model="committee.website" label="Webbsida" color="primary" prefix="https://"/>
       <v-text-field v-model="committee.logo_url" label="Logo URL" color="primary"/>
       <v-text-field v-model="committee.banner_url" label="Banner URL" color="primary"/>
       <v-textarea v-model="committee.description" label="Beskrivning" color="primary"/>

       <v-btn type="submit" :color="color" :loading="loading"> Spara </v-btn>
       <span :style="'color:' + $vuetify.theme.current.colors.error"> {{ error }} </span>

       <v-btn v-if="!createNew" color="red" icon="mdi-delete" style="position: absolute; bottom: 10px; right: 10px;" @click="deleteItem"/>
     </v-form>
   </v-card>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {Committee} from "../../../types/committees";

export default defineComponent( {
  name: "CommitteeForm",
  props: {
    modelValue: Object,
    createNew: Boolean
  },
  emits: ['update:modelValue'],
  data: () => ({
    error: '',
    success: false,
    loading: true,
    committee: {} as Committee,
    committeeTypes: [
      {title: 'Kommittee', value: 'kommittee'},
      {title: 'Förening', value: 'forening'},
      {title: 'Utskott', value: 'utskott'},
      {title: 'Utomstående Förening', value: 'utomstaende'}
    ]
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
    if(this.createNew){
      this.committee = this.modelValue as Committee
    } else {
      this.committee = await fetch('http://localhost:8080/committee/' + this.modelValue?.name).then(e => e.json())
    }
    this.loading = false
  },
  methods: {
    async submit(){
      this.loading = true
      this.error = ''
      this.success = false

      const res = await fetch('http://localhost:8080/committee/', {
        method: 'PUT',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(this.committee)
      })

      if(!res.ok){
        this.error = await res.text()
        return
      }

      this.committee = await res.json()
      this.success = true
      this.loading = false
      this.$emit('update:modelValue', this.committee)
    },
    async deleteItem(){
      this.loading = true
      const res = await fetch('http://localhost:8080/committee/' + this.committee.id, {
        method: 'DELETE',
      })
      if(res.ok){
        this.success = true
        this.committee.name = '_DELETED'
      }

      this.loading = false
      this.$emit('update:modelValue', this.committee)
    }
  }
})
</script>

<style scoped>
.v-card{
  padding: 10px;
}
</style>
