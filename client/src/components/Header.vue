<template>

  <v-app-bar id="header" class="d-flex justify-md-space-between" elevation="0">
  <v-col cols="auto">
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
  </v-col>

    <v-spacer/>

    <v-col cols="6">

          <v-btn-group
            class="d-flex justify-md-space-around"
            multiple>

            <div
              class="d-flex justify-space-around"
              v-for="current in routeArr" :key="current">

              <v-menu>
                <template v-slot:activator="{ props }">
                  <v-btn
                    v-bind="props"
                  >
                    {{current.title}}
                  </v-btn>
                </template>
                <v-list>

                  <v-list-item
                    v-for="section of current.content" :key="section.link" :to="section.link"
                  >

                    <v-list-item-title>{{section.routeName}}</v-list-item-title>

                  </v-list-item>

                </v-list>
              </v-menu>

            </div>


      <!--
            <v-btn text large cols="auto">
              Student
            </v-btn>

            <v-btn text large cols="auto">
              Företag
            </v-btn>

            <v-btn text large cols="auto">
              Kontakt
            </v-btn>
       -->

          </v-btn-group>


    </v-col>

  </v-app-bar>

</template>

<script lang="ts">

import {defineComponent} from "vue";

  export default defineComponent({

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

.headerButton>* {
  font-family: 'Lemon/Milk', sans-serif;
  font-weight: bolder;
  filter: blur(0);
  background: none;
  color: white;
  text-shadow: 1px 1px 1px #000000
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
