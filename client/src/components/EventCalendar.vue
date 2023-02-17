<template>
  <div>
    <p>Hello</p>

    <v-calendar
      show-weeknumbers="right"
      :attributes='attributes'
      @dayclick='toEventsPage'
      @dayfocusout="nullCurrDate"
    >

    </v-calendar>
    <v-card v-if="currentDate"
            v-for="event in currEvents"
            width="40%"
            class="dayViewCard">
      <v-card-title>{{ event?.name }}</v-card-title>
      <v-card-subtitle>{{ event?.start + " " + event?.start.toLocaleTimeString() }}</v-card-subtitle>
      <v-card-item>
        {{ event?.description}}
      </v-card-item>
    </v-card>


  </div>
</template>

<script lang="ts">

import {defineComponent} from "vue";

export default defineComponent({

  data: () => ({

    currentDate: null as Date | null,
    currEvents: [] as Array<Object> | null,
    events: [
      {
      organizer: "itsa me, styret",
      name: "Koda vue med berza",
      location: "lindholmsallén 29",
      start: new Date(2023, 1, 20),
      stop: new Date(2023, 1, 21),
      description: "It's gonne be very najs",
      imagePath: "/img",
      id: 1
      },
      {
        organizer: "itsa me, styret",
        name: "Koda vue med berza 2",
        location: "lindholmsallén 29",
        start: new Date(2023, 1, 20),
        stop: new Date(2023, 1, 21),
        description: "It's gonne be very najs",
        imagePath: "/img",
        id: 1
      },
      {
      organizer : "itsa me, styret",
      name : "Koda vue med berza IGEN",
      location : "lindholmsallén 29",
      start : new Date(2023, 1, 22),
      stop : new Date(2023, 1, 23),
      description : "It's gonne be very najs IGEN",
      imagePath : "/img",
      id : 2
      }
    ],
  }),

  computed: {
    attributes(): any[] {
      return [
        ...this.events.map(event => ({
          dates: event.start,
          dot: true,
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

.dayViewCard {
  color: blue;
  position: absolute;
  top: 200px;
  z-index: 500000000;
  opacity: 1;
}

</style>
