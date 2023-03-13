<template>
  <div>
    <v-navigation-drawer v-model="drawer" :rail="$vuetify.display.md || $vuetify.display.sm" :permanent="$vuetify.display.smAndUp" expand-on-hover>
      <v-list nav :items="items" item-title="title" item-props="props" color="primary"></v-list>

      <v-list nav style="position: absolute; bottom: 0; width: 100%;" color="primary">
        <v-list-item>
          <v-list-item-title>
            {{ login?.account.email ?? 'Utloggad' }}
          </v-list-item-title>
        </v-list-item>
        <v-list-item @click="logout" prepend-icon="mdi-logout" variant="tonal" rounded>
          <v-list-item-title>
            Logga ut
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-container>
      <router-view/>
      <v-btn v-if="$vuetify.display.xs" color="primary" icon="mdi-menu" size="large" position="fixed" style="right: 30px; bottom: 30px;" @click="drawer = !drawer"/>
    </v-container>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import {LoginStorage} from "@/helpers/LoginStorage";
import {LoginSession} from "../../../types/Account";
export default defineComponent({
  name: "Admin",
  data(){
    return {
      drawer: true,
      login: null as LoginSession | null,
      items: [
        { title: "Mitt Konto", props: {"prepend-icon": "mdi-account-details", to: "/admin/"} },
        { title: "Kommitteer", props: { "prepend-icon": "mdi-clipboard-account", to: "/admin/kommitteer" } },
        { title: "Användare", props: { "prepend-icon": "mdi-account-group", to: "/admin/anvandare" } },
        { title: "Event", props: { "prepend-icon": "mdi-calendar", to: "/admin/events" } },
        { title: "Styret", props: { "prepend-icon": "mdi-contacts", to: "/admin/styret" } }
      ],
    }
  },
  created() {
    this.login = LoginStorage.get()
  },
methods: {
    logout(){
      LoginStorage.clear()
      this.$router.push('/login')
    }
  }
})
</script>

<style>
</style>
