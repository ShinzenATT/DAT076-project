<template>
  <v-progress-circular v-if="loading" style="display: flex; width: 100%;" size="50" width="7" indeterminate color="primary"/>
  <v-container v-else>
    <v-data-table
      :items="events"
      return-object
      :headers="headers"
      :sort-by="[{key: 'start', order: 'asc'}]"
      must-sort
      expand-on-click
      show-expand
    >
      <template #top>
        <v-expansion-panels>
          <v-expansion-panel>
            <v-expansion-panel-title> <v-icon> mdi-account-plus </v-icon> Skapa nytt event </v-expansion-panel-title>
            <v-expansion-panel-text>
              <event-form create-new @update:model-value="e => events.push(e)"/>
            </v-expansion-panel-text>
          </v-expansion-panel>
        </v-expansion-panels>
      </template>
      <template #expanded-row="props">
        <td colspan="3">
          <event-form :model-value="props.item.value"/>
        </td>
      </template>

    </v-data-table>
  </v-container>

</template>

<script lang="ts">

import {defineComponent} from "vue";
import {VDataTable} from "vuetify/labs/components";
import {Event} from "../../../types/Event";
import EventForm from "@/components/admin/EventForm.vue"


export default defineComponent({
  name: "EventsAdmin",

components :{
  EventForm,
  VDataTable
},
data: () => ({
  events: [] as Event[],
  loading: true,
  headers: [
    {title: 'Namn', key: 'name'},
    {title: 'Arrangör', key: 'organizer'},
    {title: 'Starttid', key: 'start'}
  ]
}),
  async created(){
    this.events = await fetch("http://localhost:8080/admin/events").then(e => e.json())
    this.loading = false
}
});

</script>

<style scoped>

</style>
