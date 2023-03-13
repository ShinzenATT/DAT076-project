<template>
  <div>
    <v-calendar
      :attributes='attributes'
      @dayclick='toEventsPage'
      @dayfocusout="nullCurrDate"
      style="background-color: #E0218A; border: none"
    />



    <v-card
      v-if="currentDate"
      v-for="event in currEvents"
      id="dayViewCard"
      max-width="344"
      min-width="250"
      max-height="370"
      style="margin: 0 20px"

    >
      <v-img
        :src="event.imagepath || undefined"
        cover
        height="200px"
      ></v-img>

      <v-card-title>
        {{ event?.name }}
      </v-card-title>

      <v-card-subtitle>
        {{ new Date(event?.start).toLocaleTimeString() + " " +  new Date(event?.start).toLocaleDateString()}}
      </v-card-subtitle>

      <v-card-item>{{ event?.description }}</v-card-item>


      <!--v-expand-transition>
        <div v-show="show">
          <v-divider></v-divider>

          <v-card-text>
            I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
          </v-card-text>
        </div>
      </v-expand-transition-->
    </v-card>


  </div>
</template>

<script lang="ts">

import {defineComponent} from "vue";
import {Event} from "../../types/Event";

export default defineComponent({

  data: () => ({

    currentDate: null as Date | null,
    currEvents: [] as Event[] | null,
    events: [] as Event[],
  }),

  async created () {
    const response = await fetch('http://localhost:8080/events', {
      method: 'GET',

    });
    this.events = await response.json();
  },

  computed: {
    attributes(): any[] {

      return [
        ...this.events.map(event => ({
          dates: event.start,
          dot: {
            style: {
              background: 'white',
            }
          },
          popover: {
            label: event.name,
          },
          customData: event,
          event: MouseEvent
        })),
      ];
    },
  },

  methods : {
    toEventsPage(day : {id: number}) {
      console.log(day.id)

      const events = this.events
      this.currEvents = []
      let j = 0;
      for (let i = 0; i < events.length; i++) {
        if(new Date(day.id).getDate() == new Date(events[i].start).getDate()){
          this.currentDate = new Date(day.id)
          this.currEvents[j] = events[i];
          j++;

          console.log("this day has a event")

        }
      }
    },

    nullCurrDate(){
      this.currentDate = null;
      this.currEvents = null;
    }
  }
})




</script>

<style>

#dayViewCard {
  border-radius: 10px;
}

.vc-weekday {
  color: antiquewhite;
}

.vc-weeknumber-content {
  color: antiquewhite;
}

.vc-title {
  color: antiquewhite;
}

.vc-day {
  color: antiquewhite;
}

.vc-svg-icon {
  color: antiquewhite;
}

</style>
