<template>
  <v-progress-circular v-if="loading" style="display: flex; width: 100%;" size="50" width="7" indeterminate color="primary"/>
  <v-container v-else>
    <v-data-table
      :items="styret"
      return-object
      :headers="headers"
      :sort-by="[{key: 'name', order: 'asc'}]"
      must-sort
      expand-on-click
      show-expand
    >
      <template #expanded-row="props">
        <td colspan="3">
          <styret-form :model-value="props.item.value" />
        </td>
      </template>
    </v-data-table>
  </v-container>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {VDataTable} from "vuetify/labs/components";
import {Styret} from "../../../types/styret";
import {Account} from "../../../types/Account";
import StyretForm from "@/components/admin/StyretForm.vue";

export default defineComponent( {
  name: "Committees Admin",
  components: {
    StyretForm,
    VDataTable
  },
  data: () => ({
    styret: [] as Styret[],
    accounts: [] as Account[],
    loading: true,
    headers: [
      {title: 'Namn', align: 'start', key: 'name'}
    ]
  }),
  async created(){
    this.styret = await fetch("http://localhost:8080/styret/").then(e => e.json())
    this.loading = false
  },
  methods: {
    updateEntry(newItem: Styret, oldItem: Styret){
      oldItem.name = newItem.name
      oldItem.description = newItem.description
      oldItem.post = newItem.post
      oldItem.email = newItem.email
      oldItem.imagepath = newItem.imagepath
    }
  }
})
</script>

<style scoped>

</style>
