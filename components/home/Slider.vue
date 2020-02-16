<template>
  <v-carousel cycle hide-delimiter-background show-arrows-on-hover>
    <v-carousel-item
      v-for="(item, i) in sliderItems"
      :key="i"
      :src="item.src"
      reverse-transition="fade-transition"
      transition="fade-transition"
    />
  </v-carousel>
</template>

<script>
/**
 * Images slider for the homepage.
 */
import halkidiki1 from '@/assets/images/home/slider/halkidiki_1.jpg';
import halkidiki2 from '@/assets/images/home/slider/halkidiki_2.jpg';
import halkidiki3 from '@/assets/images/home/slider/halkidiki_3.jpg';

export default {
  name: 'Slider',
  data() {
    return {
      sliderItems: [
        { src: halkidiki1 },
        { src: halkidiki2 },
        { src: halkidiki3 },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
