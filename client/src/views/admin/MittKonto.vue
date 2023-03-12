<template>
  <v-container>
    <v-card elevation="4">
      <v-card-title>
        <h3> Mitt konto </h3>
      </v-card-title>
      <v-card-text>
        <p> <b> <v-icon> mdi-account </v-icon> Namn: </b> {{ account.name }} </p>
        <p> <b> <v-icon> mdi-email </v-icon> Email:</b> {{ account.email }} </p>
        <p> <b> <v-icon> mdi-shield-half-full </v-icon> Är admin:</b> {{ account.admin }} </p>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import { LoginStorage } from "@/helpers/LoginStorage";
import {defineComponent} from "vue";
import {Account} from "../../../types/Account";

export default defineComponent( {
  name: "MittKonto",
  data: () => ({
    account: {} as Account
  }),
  created() {
    this.account = LoginStorage.get()!.account
  }
})
</script>

<style scoped>

</style>
