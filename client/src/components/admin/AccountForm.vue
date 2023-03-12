<template>
  <v-card :class="createNew ? '' : 'tabled'">
      <v-form @submit.prevent="submit">
        <v-btn v-if="!createNew" color="red" icon="mdi-delete" style="position: absolute; bottom: 10px; right: 10px;" @click="deleteItem"/>
        <v-text-field v-model="account.name" label="Namn" color="primary"/>
        <v-text-field v-model="account.email" label="email" color="primary"/>
        <v-text-field v-model="account.password" label="password" color="primary"/>
        <v-switch v-model="account.admin" label="Admin" color="primary"/>
        <v-btn :loading="loading" type="submit" :color="color"> Spara </v-btn> <span :style="'color: ' + $vuetify.theme.current.colors.error"> {{ this.error }}</span>
      </v-form>
  </v-card>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {Account} from "../../../types/Account";

export default defineComponent( {
  name: "AccountForm",
  props: {
    modelValue: Object,
    createNew: Boolean
  },
  emits: ['update:modelValue'],
  data: () => ({
    account: {} as Account,
    loading: false,
    error: '',
    success: false
  }),
  created() {
    if(this.createNew){
      this.account = {
        name: '',
        email: '',
        admin: false,
        password: ''
      } as any
    } else {
      this.account = this.modelValue as any
    }
    console.log(this.account)
  },
  methods: {
    async submit(){
      this.loading = true
      this.success = false
      this.error = ''

      if(this.createNew){
        await this.post()
      } else {
        await this.put()
      }

      if(!this.error)
        this.$emit('update:modelValue', this.account)
      this.loading = false
    },
    async put(){
      const res = await fetch("http://localhost:8080/admin/accounts", {
        method: "PUT",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify(this.account)
      })

      if(!res.ok){
        this.error = await res.text()
        return
      }
      this.account = await res.json()
      this.success = true
    },
    async post(){
      const res = await fetch('http://localhost:8080/account/register', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(this.account)
      })

      if(!res.ok){
        this.error = await res.text()
        return
      }

      this.account = await res.json()
      this.success = true
    },
    async deleteItem(){
      this.loading = true
      const res = await fetch("http://localhost:8080/admin/accounts/" + this.account.id, {
        method: "DELETE",
        headers: { 'content-type': 'application/json' },
      })

      if(!res.ok){
        this.error = "något gick fel när kontot skulle tas bort"
        return
      }
      this.account.name = "_DELETED"
      this.loading = false
      this.success = true
    }
  },
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
  }
})
</script>

<style scoped>
  .v-card{
    padding: 10px;
  }

  .tabled {
    display: table-row;
  }

  .tabled .v-form {
    display: table-cell;
    width: 100%;
    padding: 10px 0;
  }
</style>
