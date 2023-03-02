<template>
  <v-carousel
    cycle
    height="500"
    hide-delimiter-background
    show-arrows="hover"
  >
    <v-carousel-item
      v-for="(image, i) in kommiteer"
      :key="i"
      :src="image.src"
      cover
      id="carouselItem"
    >
      <v-btn id="itemText" :href="image.to" variant="plain">{{ image.name }} </v-btn>
    </v-carousel-item>
  </v-carousel>
</template>


<script>

export default {
  data () {
    return {
      kommiteer : [
        {
          name: 'Nollk',
          src: 'src/assets/nollk.png',
          to: 'https://htek.se/nollk/'
        },
        {
          name: 'H6',
          src: 'src/assets/H6.png',
          to: 'https://htek.se/h6/'
        },
        {
          name: 'HD',
          src: 'src/assets/HD.png',
          to: 'https://htek.se/hd/'
        },
        {
          name: 'DKV',
          src: 'src/assets/DKV.png',
          to: 'https://htek.se/dkv/'
        }
      ]
    }
  }
}

</script>

<style>

#itemText {
  color: white;
  font-family: "Lemon/Milk", sans-serif;
  font-size: 120px;
  top: 50%;
  position: relative;

}
</style>
