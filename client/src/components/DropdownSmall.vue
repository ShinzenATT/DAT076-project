<template>

  <v-menu :value="inputArr">

    <template v-slot:activator="{props: parent}">
      <v-btn
        v-bind="parent"
        flat
        class="justify-center align-center actButton"
      >
        <v-icon
          end
          icon="mdi-menu"
          size="45"
        />
      </v-btn>

    </template>

    <v-list nav>

        <v-list-item
          v-for="current in inputArr" :key="current"
          class="actButton align-center justify-center"
        >

          <v-menu location="start">
            <template v-slot:activator="{props: child }">
              <v-btn
                v-bind="child"
                flat
              >
                {{current.title}}
              </v-btn>
            </template>
            <v-list nav>

              <v-list-item
                v-for="section of current.content" :key="section.link" :to="section.link"
                class="actButton align-center justify-center"
              >

                <v-list-item-title>{{section.routeName}}</v-list-item-title>

              </v-list-item>

            </v-list>
          </v-menu>
        </v-list-item>

    </v-list>


  </v-menu>


</template>

<script lang="ts">

import {defineComponent} from "vue";
import {mergeProps} from "vue"

interface inputArray {

}

export default defineComponent({


  name: "DropdownSmall",
  props: {
    inputArr : {
      type: Object,
      required : true
    }
  },
  methods: {
    mergeProps
  },
  watch: {

    inputArr() {
      this.$emit('update:inputArr', this.inputArr)
    },

  }

})
</script>

<style scoped>

  .actButton {
    font-family: "Lemon/Milk", sans-serif;
  }

</style>
