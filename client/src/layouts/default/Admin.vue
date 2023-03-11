<template>
  <div>
    <v-navigation-drawer v-model="drawer" :rail="$vuetify.display.md" :permanent="$vuetify.display.mdAndUp" expand-on-hover>
      <v-list nav :items="items" item-title="title" item-props="props" color="primary"></v-list>
    </v-navigation-drawer>
    <v-container>
      <router-view/>
      <v-btn v-if="$vuetify.display.smAndDown" color="primary" icon="mdi-menu" size="large" position="fixed" style="right: 30px; bottom: 30px;" @click="drawer = !drawer"/>
    </v-container>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
export default defineComponent({
  name: "Admin",
  data(){
    return {
      drawer: true,
      items: [
        { title: "Mitt Konto", props: {"prepend-icon": "mdi-account", to: "/admin/"} },
        { title: "Kommitteer", props: { "prepend-icon": "mdi-shirt", to: "/admin/kommitteer" } },
        { title: "Användare", props: { "prepend-icon": "mdi-account-group", to: "admin/anvandare" } },
        { title: "Event", props: { "prepend-icon": "mdi-calendar", to: "/admin/event" } }
      ],
    }
  }
})
</script>

<style scoped>

</style>
