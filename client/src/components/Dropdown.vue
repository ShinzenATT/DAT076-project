<template>


      <v-menu
      :value="inputArr"
      v-for="current in inputArr" :key="current"
      >
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


</template>

<script lang="ts">

import {defineComponent} from "vue";

interface inputArray {

}

export default defineComponent({


  name: "Dropdown",
  props: {
    inputArr : {
      type: Object,
      required : true
    }
  },
  watch: {

    inputArr() {
      this.$emit('update:inputArr', this.inputArr)
    }

  }

})
</script>

<style scoped>

</style>
