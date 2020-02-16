<template>
  <section class="ql__container">
    <v-container>
      <v-row>
        <v-col
          v-for="(item, i) in linkItems"
          :key="i"
          class="d-flex justify-center"
        >
          <v-card elevation="0" class="ql__card" tag="figure">
            <v-img :src="item.img" :alt="item.imgAlt" />
            <figcaption class="ql__card-text" tag="">
              {{ $t(item.title) }}
            </figcaption>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
/**
 * Quick links component.
 */
import img1 from '@/assets/images/home/quickLinks/makeareservation.jpg';
import img2 from '@/assets/images/home/quickLinks/viewourrooms.jpg';
import img3 from '@/assets/images/home/quickLinks/specialoffer.jpg';

export default {
  name: 'QuickLinks',
  data() {
    return {
      linkItems: [
        {
          title: 'home.quickLinks.t1',
          img: img1,
          imgAlt: 'Make reservation in our apartments',
        },
        {
          title: 'home.quickLinks.t2',
          img: img2,
          imgAlt: 'View our apartments',
        },
        {
          title: 'home.quickLinks.t3',
          img: img3,
          imgAlt: 'See our apartment offers',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.ql {
  &__container {
    margin-top: 2em;
  }
  &__card {
    max-width: 20em;
    text-align: center;
  }
  &__card-text {
    margin-top: 0.5em;
    font-size: 1.1em;
  }
}
</style>
