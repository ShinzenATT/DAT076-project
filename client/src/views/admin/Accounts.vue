<template>
  <v-progress-circular v-if="loading" style="display: flex; width: 100%;" size="50" width="7" indeterminate color="primary"/>
 <v-container v-else>
   <v-data-table
     :items="accounts"
     return-object
     :headers="headers"
     :sort-by="[{key: 'name', order: 'asc'}]"
     must-sort
     expand-on-click
     show-expand
   >
     <template #top>
       <v-expansion-panels>
         <v-expansion-panel>
           <v-expansion-panel-title> <v-icon> mdi-account-plus </v-icon> Skapa nytt konto </v-expansion-panel-title>
           <v-expansion-panel-text>
             <account-form create-new @update:model-value="e => accounts.push(e)"/>
           </v-expansion-panel-text>
         </v-expansion-panel>
       </v-expansion-panels>
     </template>
     <template #expanded-row="props">
       <td colspan="3">
        <account-form :model-value="props.item.value" />
       </td>
     </template>

   </v-data-table>
 </v-container>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {Account} from "../../../types/Account";
import {VDataTable} from "vuetify/labs/VDataTable";
import AccountForm from "@/components/admin/AccountForm.vue";

export default defineComponent( {
  name: "Accounts Admin",
  components: {
    AccountForm,
    VDataTable
  },
  data: () => ({
    accounts: [] as Account[],
    search: '',
    loading: true,
    headers : [
      {title: 'Namn', align: 'start', key: 'name'},
      {title: 'E-mail', align: 'end', key: 'email'}
    ] as any
  }),
  async created() {
    const res = await fetch('http://localhost:8080/admin/accounts')
    this.accounts = await res.json()
    this.loading = false
  }
})
</script>

<style scoped>
</style>
