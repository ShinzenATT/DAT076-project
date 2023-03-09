<template>
    <v-container>
        <v-card-title>
            <h1> Kommitteer </h1>
        </v-card-title>
        <v-card-text>
            stuff
        </v-card-text>
    </v-container>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
    name: "Commitees",
    data(){
        return {
            kommitteer: [] as any[],
            utskott: [] as any[],
            foreningar: [] as any[],
            others: [] as any[],
            loading: true
        }
    },

   async created(){
        const res: any[] = await fetch("localhost:8080/committee").then(res => res.json())
        this.kommitteer = res.filter(e => e.type === 'kommittee')
        this.utskott = res.filter(e => e.type === 'utskott')
        this.foreningar = res.filter(e => e.type === 'foreningar')
        this.others = res.filter(e => e.type === 'utomstaende')
        this.loading = false
   }
})
</script>