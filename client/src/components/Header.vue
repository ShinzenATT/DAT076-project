<template>

  <v-app-bar id="header" class="d-flex justify-md-space-between" elevation="0">
      <router-link to="/">
        <v-img
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

        <div class="d-none d-md-flex justify-content-space-between">

          <v-btn-group>

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





  export default defineComponent({
    components: {Dropdown, DropdownSmall},


    data() {
      return {

        routeArr : {
          item1: {

            title: "Sektionen",
            content: [
              {routeName: 'Om H', link: '/about'},
              {routeName: 'Styret', link: '/styret'},
              {routeName: 'Dokument', link: '/dokument'},
              {routeName: 'SAMO', link: '/SAMO'}
            ]
          },
          item2: {
            title: "Kommitteer",
            content: [
              {routeName: 'NollK', link: '/kommitteer/nollk'},
              {routeName: 'DKV', link: '/kommitteer/dkv'},
              {routeName: 'H6', link: '/kommitteer/h6'},
              {routeName: 'pHoto', link: '/kommitteer/photo'},
              {routeName: 'Rustet', link: '/kommitteer/rustet'},
              {routeName: 'DSC', link: '/kommitteer/dsc'},
              {routeName: 'HD', link: '/kommitteer/hd'},
              {routeName: 'HKEX', link: '/kommitteer/hkex'},
              {routeName: 'Lindholmsfestivalen', link: '/kommitteer/lindholmsfestivalen'},
              {routeName: 'PubF', link: '/kommitteer/pubf'},
              {routeName: 'SkHål', link: '/kommitteer/skhal'}
            ]
          },
          item3: {
            title: "Utskott",
            content: [
              {routeName: 'Studienämnden', link: '/utskott/snh'},
              {routeName: 'Arbetsmarknadsutskottet', link: '/utskott/harm'},
              {routeName: 'Jämlikhetsutskottet', link: '/utskott/jamh'}
            ]
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
