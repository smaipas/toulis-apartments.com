<template>
  <section class="ci__container">
    <v-container>
      <SectionHeader margin="3em 0 2em">
        {{ $t('home.complex.h') }}
      </SectionHeader>
      <v-row>
        <v-col
          v-for="(item, i) in infoItems"
          :key="i"
          cols="12"
          sm="6"
          md="3"
          class="d-flex justify-center"
        >
          <figure elevation="0" class="ci__item">
            <v-icon size="60" color="primary">icon-{{ item.icon }}</v-icon>
            <!-- <img :src="item.img" :alt="item.imgAlt" class="ci__item-img" /> -->
            <figcaption class="ci__item-text">
              <div class="ci__item-title">{{ $t(item.title) }}</div>
              <div class="ci__item-text">{{ $t(item.text) }}</div>
            </figcaption>
          </figure>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
/**
 * Complex/apartment information.
 */
import SectionHeader from '@/components/common/SectionHeader.vue';

export default {
  name: 'ComplexInfo',
  components: { SectionHeader },
  data() {
    return {
      infoItems: [
        {
          icon: 'map',
          title: 'home.complex.h1',
          text: 'home.complex.p1',
        },
        {
          icon: 'beach',
          title: 'home.complex.h2',
          text: 'home.complex.p2',
        },
        {
          icon: 'utensils',
          title: 'home.complex.h3',
          text: 'home.complex.p3',
        },
        {
          icon: 'vacations',
          title: 'home.complex.h4',
          text: 'home.complex.p4',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.ci {
  &__item {
    text-align: center;
    max-width: 20em;
    padding: 2em 0;
  }
  &__item-title {
    margin: 1.3em 0 0.5em;
    font-weight: 600;
  }
}
</style>
