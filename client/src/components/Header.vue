<template>

  <v-app-bar id="header" class="d-flex justify-md-space-between" elevation="0">
      <router-link to="/">
        <v-img
          style="left: 5px;"
          contain
          class="align-self-stretch"
          width="65"
          aspect-ratio="1"
          src="@/assets/H-sektionens-logga.png"
          ref=""
        />
      </router-link>

    <template #append>
        <div class="d-flex d-md-none">

            <DropdownSmall v-model:inputArr="routeArr"></DropdownSmall>

        </div>

        <div class="d-none d-md-flex">

          <v-btn-group class="justify-content-space-between">

            <Dropdown v-model:inputArr="routeArr"></Dropdown>
          </v-btn-group>

        </div>
    </template>
  </v-app-bar>

</template>

<script lang="ts">

import {defineComponent} from "vue";
import Dropdown from "./Dropdown.vue"
import DropdownSmall from "./DropdownSmall.vue"
import {CommitteeListMember} from "../../types/committees";

  export default defineComponent({
    components: {Dropdown, DropdownSmall},
    async created(){
      const res: CommitteeListMember[] = await fetch('http://localhost:8080/committee').then(e => e.json())
      this.routeArr.item2.content = [
        ...res.filter(e => e.type !== 'utskott').map(e => ({routeName: e.name, link: '/kommitteer/' + e.name}))
      ]
      this.routeArr.item3.content = [
        ...res.filter(e => e.type === 'utskott').map(e => ({routeName: e.name, link: '/kommitteer/' + e.name}))
      ]
    },
    data() {
      return {

        routeArr : {
          item1: {

            title: "Sektionen",
            content: [
              {routeName: 'Om H', link: '/about'},
              {routeName: 'Styret', link: '/styret'},
              {routeName: 'Föreningslivet', link: '/kommitteer'},
              {routeName: 'Dokument', link: '/dokument'},
              {routeName: 'SAMO', link: '/SAMO'}
            ]
          },
          item2: {
            title: "Kommitteer",
            content: [] as any[]
          },
          item3: {
            title: "Utskott",
            content: [] as any[]
          },
          item4: {
            title: "Kontakt",
            content: [
              {routeName: 'Programteam', link: '/programteam'},
              {routeName: 'Akademihälsan', link: '/akademihalsan'}
            ]
          }
        }
      }
    }

  })

</script>


<style>

.headerButton {
  font-family: 'Lemon/Milk', sans-serif;
  font-weight: bolder;
  background: none;
  text-shadow: 1px 1px 1px white;
  color: white;
}
.blurredBg {
  background: rgba(255,255,255, 50%);
  filter: blur(1px);
  height: 64px;
  width: 100%;
}

#header {
  backdrop-filter: blur(4px);
  background: rgba(255,255,255,0.3);
}
</style>
