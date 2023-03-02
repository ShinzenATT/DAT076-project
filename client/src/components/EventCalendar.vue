<template>
  <div>
    <v-calendar
      show-weeknumbers="right"
      :attributes='attributes'
      @dayclick='toEventsPage'
      @dayfocusout="nullCurrDate"
      style="background-color: #E0218A; border: none"


    >

    </v-calendar>

    <v-card
      v-if="currentDate"
      v-for="event in currEvents"
      id="dayViewCard"
      max-width="344"
      style="margin: 0 20px"

    >
      <v-img
        :src="event.imagepath"
        cover
        height="200px"
      ></v-img>

      <v-card-title>
        {{ event?.name }}
      </v-card-title>

      <v-card-subtitle>
        {{ event?.start.toString().split(" GMT")[0]}}
      </v-card-subtitle>

      <v-card-item>{{ event?.description }}</v-card-item>

      <v-card-actions>
        <v-btn text>Share</v-btn>

        <v-btn
          color="purple"
          text
        >
          Explore
        </v-btn>

        <v-spacer></v-spacer>

        <v-btn
          icon
          @click="show = !show"
        >
          <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
        </v-btn>
      </v-card-actions>

      <v-expand-transition>
        <div v-show="show">
          <v-divider></v-divider>

          <v-card-text>
            I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
          </v-card-text>
        </div>
      </v-expand-transition>
    </v-card>


  </div>
</template>

<script lang="ts">

import {defineComponent} from "vue";
import {stringify} from "querystring";

export default defineComponent({

  data: () => ({

    currentDate: null as Date | null,
    currEvents: [] as Array<Object> | null,
    events: [
      {
        organizer: "DWA Group 6",
        name: "Meeting with Robin",
        location: "lindholmsallén 29",
        start: new Date(2023, 1, 20),
        stop: new Date(2023, 1, 21),
        description: "It's gonne be very najs",
        imagepath: "src/assets/DKV.png",
        id: 1
      },
      {
        organizer: "DWA group 6",
        name: "Coding big codes",
        location: "lindholmsallén 29",
        start: new Date(2023, 1, 20),
        stop: new Date(2023, 1, 21),
        description: "It's gonne be very najs",
        imagepath: "src/assets/jesustarzan.jpg",
        id: 1
      },
      {
        organizer : "DWA group 5",
        name : "Coding again..",
        location : "lindholmsallén 29",
        start : new Date(2023, 1, 22),
        stop : new Date(2023, 1, 23),
        description : "It's gonne be very najs IGEN",
        imagepath : "src/assets/H6.png",
        id : 2
      }
    ],
  }),

  async created () {
    console.log("hello")

    const response = await fetch('http://localhost:8080/event', {
      method: 'GET',

    });
    const res = await response.json();
    this.events = res;
    console.log("this is events " + res);
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
    toEventsPage(day : Object) {
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
