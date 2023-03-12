<template>
  <v-expansion-panels>
    <v-expansion-panel>
      <v-expansion-panel-title> Skapa ny kommittee eller förening </v-expansion-panel-title>
      <v-expansion-panel-text>
        <v-row style="margin-bottom: 10px">
          <v-col>
            <v-select
              color="secondary"
              label="Konto att koppla till"
              variant="solo" :loading="loading"
              :items="accounts"
              item-title="name"
              return-object
              v-model="selectedAccount"
              @update:model-value="changeAccount"
              hide-details
            />
          </v-col>
          <v-col cols="2">
            <v-btn color="secondary" block style="height: 100%" @click="showDialog = true"> <v-icon> mdi-plus </v-icon> </v-btn>
          </v-col>
        </v-row>
        <committee-form v-if="selectedAccount" create-new :model-value="data" @update:model-value=" e => $emit('createdNew', e)"/>
      </v-expansion-panel-text>
    </v-expansion-panel>
  </v-expansion-panels>
  <v-dialog v-model="showDialog">
    <v-card>
      <h2 style="margin: 10px"> Skapa konto </h2>
      <account-form create-new @update:model-value="addAccount"/>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import CommitteeForm from "@/components/admin/CommitteeForm.vue";
import {Account} from "../../../types/Account";
import {Committee} from "../../../types/committees";
import AccountForm from "@/components/admin/AccountForm.vue";

export default defineComponent( {
  name: "CreateCommitteeForm",
  components: {AccountForm, CommitteeForm},
  emits: ['createdNew'],
  data: () => ({
      data: {
        banner_url: null,
        description: null,
        facebook: null,
        fullname: '',
        instagram: null,
        logo_url: null,
        type: "",
        website: null,
        name: '',
        email: '',
        id: -1
    } as Committee,
    accounts: [] as Account[],
    loading: true,
    selectedAccount: null as Account | null,
    showDialog: false
  }),
  async created(){
    this.accounts = await fetch("http://localhost:8080/admin/accounts").then(e => e.json())
    this.loading = false
  },
  methods: {
    changeAccount(item: Account){
      this.data.name = item.name
      this.data.email = item.email
      this.data.id = item.id
    },
    addAccount(item: Account){
      this.accounts.push(item)
      this.selectedAccount = item
      this.changeAccount(item)
      this.showDialog = false
    }
  }
})
</script>

<style scoped>

</style>
