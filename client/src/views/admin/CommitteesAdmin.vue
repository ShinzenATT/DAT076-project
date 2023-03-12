<template>
  <v-container>
    <v-data-table
      :headers="headers"
      :items="committees"
      return-object
      show-expand
      expand-on-click
      :group-by="[{key: 'type'}]"
      must-sort
      :sort-by="[{key: 'name', order: 'asc'}]"
    >
      <template #top>
        <create-committee-form @created-new="e => committees.push(e)"/>
      </template>

      <template #expanded-row="props">
        <td colspan="4">
          <committee-form :model-value="props.item.value" @update:model-value="e => updateEntry(e, props.item.value)"/>
        </td>
      </template>
    </v-data-table>
  </v-container>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {VDataTable} from "vuetify/labs/components";
import {Committee, CommitteeListMember} from "../../../types/committees";
import {Account} from "../../../types/Account";
import CommitteeForm from "@/components/admin/CommitteeForm.vue";
import CreateCommitteeForm from "@/components/admin/CreateCommitteeForm.vue";

export default defineComponent( {
  name: "Committees Admin",
  components: {
    CreateCommitteeForm,
    CommitteeForm,
    VDataTable
  },
  data: () => ({
    committees: [] as CommitteeListMember[],
    accounts: [] as Account[],
    loading: true,
    headers: [
      {title: 'Namn', align: 'start', key: 'name'},
      {title: 'Typ', key: 'type'}
    ]
  }),
  async created(){
    this.committees = await fetch("http://localhost:8080/committee/").then(e => e.json())
  },
  methods: {
    updateEntry(newItem: Committee, oldItem: CommitteeListMember){
      oldItem.name = newItem.name
      oldItem.type = newItem.type
      oldItem.logo_url = newItem.logo_url
    }
  }
})
</script>

<style scoped>

</style>
