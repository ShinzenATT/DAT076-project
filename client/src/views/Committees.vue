<!-- Dynamic page presenting committees, associations and others -->

<template>
    <v-container>
        <v-progress-circular v-if="loading" size="50" width="6" color="primary" indeterminate style="display: flex; margin: auto;"/>
        <template v-else>
            <v-card elevation="4" v-if="kommitteer.length">
                <v-card-title>
                    <h1> Kommitteer </h1>
                </v-card-title>
                <v-card-text>
                    <v-row dense>
                        <v-col v-for="com in kommitteer" :key="com.name" class="committee">
                            <router-link :to="'/kommitteer/' + com.name">
                                <v-img aspect-ratio="1" max-width="200" max-height="200" min-width="100" min-height="100" :src="com.logo_url ?? '/img.png'"/>
                                <h2> {{ com.name }} </h2>
                            </router-link>
                        </v-col>
                    </v-row>
                </v-card-text>
            </v-card>
            <v-card elevation="4" v-if="utskott.length">
                <v-card-title>
                    <h1> Utskott </h1>
                </v-card-title>
                <v-card-text>
                    <v-row dense>
                        <v-col v-for="com in utskott" :key="com.name" class="committee">
                            <router-link :to="'/kommitteer/' + com.name">
                                <v-img aspect-ratio="1" max-width="200" max-height="200" min-width="100" min-height="100" :src="com.logo_url ?? '/img.png'"/>
                                <h2> {{ com.name }} </h2>
                            </router-link>
                        </v-col>
                    </v-row>
                </v-card-text>
            </v-card>
            <v-card elevation="4" v-if="foreningar.length">
                <v-card-title>
                    <h1> Föreningar </h1>
                </v-card-title>
                <v-card-text>
                    <v-row>
                        <v-col v-for="com in foreningar" :key="com.name" class="committee">
                            <router-link :to="'/kommitteer/' + com.name">
                                <v-img aspect-ratio="1" max-width="200" max-height="200" min-width="100" min-height="100" :src="com.logo_url ?? '/img.png'"/>
                                <h2> {{ com.name }} </h2>
                            </router-link>
                        </v-col>
                    </v-row>
                </v-card-text>
            </v-card>
            <v-card elevation="4" v-if="others.length">
                <v-card-title>
                    <h1> Utomstående Föreningar </h1>
                </v-card-title>
                <v-card-text>
                    <v-row dense>
                        <v-col v-for="com in others" :key="com.name" class="committee">
                            <router-link :to="'/kommitteer/' + com.name">
                                <v-img aspect-ratio="1" max-width="200" max-height="200" min-width="100" min-height="100" :src="com.logo_url ?? '/img.png'"/>
                                <h2> {{ com.name }} </h2>
                            </router-link>
                        </v-col>
                    </v-row>
                </v-card-text>
            </v-card>
        </template>
    </v-container>
</template>

<style scoped>

    .committee > a {
        display: block;
        color: inherit;
        text-decoration: none;
    }

    .committee h2{
        margin-top: 4px;
        text-align: center;
    }

    .committee .v-img{
        margin: auto;
    }

    .v-card{
        margin: 10px 0;
    }
</style>

<script lang="ts">
import {defineComponent} from 'vue'
import {CommitteeListMember} from "../../types/committees";

export default defineComponent({
    name: "Commitees",
    data(){
        return {
            kommitteer: [] as CommitteeListMember[],
            utskott: [] as CommitteeListMember[],
            foreningar: [] as CommitteeListMember[],
            others: [] as CommitteeListMember[],
            loading: true
        }
    },

   async created(){
        const res: CommitteeListMember[] = await fetch("http://localhost:8080/committee").then(res => res.json())
        this.kommitteer = res.filter(e => e.type === 'kommittee')
        this.utskott = res.filter(e => e.type === 'utskott')
        this.foreningar = res.filter(e => e.type === 'forening')
        this.others = res.filter(e => e.type === 'utomstaende')
        this.loading = false
   }
})
</script>
