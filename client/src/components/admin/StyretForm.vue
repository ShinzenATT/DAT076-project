<template>
  <v-card>
    <v-form @submit.prevent="submit">
      <v-btn v-if="!createNew" color="red" icon="mdi-delete" style="position: absolute; bottom: 10px; right: 10px;" @click="deleteItem"/>
      <v-text-field v-model="styret.name" label="Namn" color="primary"/>
      <v-text-field v-model="styret.email" label="email" color="primary"/>
      <v-text-field v-model="styret.description" label="Beskrivning" color="primary"/>
      <v-text-field v-model="styret.imagepath" label="Bild-filepath" color="primary"/>
      <v-btn :loading="loading" type="submit" :color="color"> Spara </v-btn> <span :style="'color: ' + $vuetify.theme.current.colors.error"> {{ this.error }}</span>
    </v-form>
  </v-card>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {Styret} from "../../../types/styret";

export default defineComponent( {
  name: "StyretForm",
  props: {
    modelValue: Object,
    createNew: Boolean
  },
  emits: ['update:modelValue'],
  data: () => ({
    error: '',
    success: false,
    loading: true,
    styret: {} as Styret,
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
      this.styret = this.modelValue as Styret
    } else {
      this.styret = await fetch('http://localhost:8080/styret/' + this.modelValue?.name).then(e => e.json())
    }
    this.loading = false
  },
  methods: {
    async submit(){
      this.loading = true
      this.error = ''
      this.success = false

      const res = await fetch('http://localhost:8080/styret/', {
        method: 'PUT',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(this.styret)
      })

      if(!res.ok){
        this.error = await res.text()
        return
      }

      this.styret = await res.json()
      this.success = true
      this.loading = false
      this.$emit('update:modelValue', this.styret)
    },
    async deleteItem(){
      this.loading = true
      const res = await fetch('http://localhost:8080/styret/' + this.styret.id, {
        method: 'DELETE',
      })
      if(res.ok){
        this.success = true
        this.styret.name = '_DELETED'
      }

      this.loading = false
      this.$emit('update:modelValue', this.styret)
    }
  }
})
</script>

<style scoped>

</style>
