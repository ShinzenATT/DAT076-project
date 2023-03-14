<!-- Login-page for administrative control -->

<template>
  <v-container>
    <v-alert v-if="error" type="error" variant="tonal" style="margin: 10px 0;"> {{ error }} </v-alert>
    <v-form @submit.prevent="login">
      <v-text-field v-model="email" color="primary" label="Email" type="email" prepend-inner-icon="mdi-email"/>
      <v-text-field v-model="password" color="primary" label="Password" type="password" prepend-inner-icon="mdi-key"/>
      <v-btn type="submit" block :color="error ? 'error': 'primary'" prepend-icon="mdi-login" :loading="loading">Login</v-btn>
    </v-form>
  </v-container>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {LoginStorage} from "@/helpers/LoginStorage";

export default defineComponent({
  name: "Login",
  data: () => ({
    email: '',
    password: '',
    error: '',
    loading: false
  }),
  methods: {
    async login() {
      this.loading = true
      const res = await fetch('http://localhost:8080/account/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: this.email,
          password: this.password
        })
      })
      if(!res.ok){
        this.error = 'Inloggnings uppgifterna är felaktiga'
        this.loading = false
        return
      }
      this.error = ''
      LoginStorage.set(await res.json())
      this.loading = false
      this.$router.push('/admin')
    }
  }
})
</script>

<style scoped>

</style>
