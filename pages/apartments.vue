<template>
  <v-container>
    <v-carousel
      cycle
      hide-delimiter-background
      show-arrows-on-hover
      height="750"
    >
      <v-carousel-item
        v-for="(item, i) in sliderItems"
        :key="i"
        :src="item.src"
        reverse-transition="fade-transition"
        transition="fade-transition"
      />
    </v-carousel>
    <section>
      <SectionHeader margin="3em 0 1em">
        {{ $t('apartments.h1') }}
      </SectionHeader>
      <v-row>
        <v-col
          v-for="(item, i) in facilityItems"
          :key="i"
          cols="12"
          lg="2"
          md="3"
          sm="6"
          class="d-flex justify-center"
        >
          <figure class="facility__item">
            <v-icon size="60" color="primary">icon-{{ item.icon }}</v-icon>
            <figcaption class="facility__title">
              {{ $t(item.title) }}
            </figcaption>
          </figure>
        </v-col>
      </v-row>
    </section>
    <section>
      <SectionHeader margin="3em 0 1.5em">
        {{ $t('apartments.h2') }}
      </SectionHeader>
      <p class="prices__top-p">
        <strong>{{ $t('apartments.h2p1a') }}</strong>
        {{ $t('apartments.h2p1b') }}
      </p>
      <p class="prices__bottom-p">
        <strong>{{ $t('apartments.h2p2a') }}</strong>
        {{ $t('apartments.h2p2b') }}
      </p>
    </section>
  </v-container>
</template>

<script>
/**
 * Apartments page.
 */
import SectionHeader from '@/components/common/SectionHeader.vue';
import apartments1 from '@/assets/images/apartments/photo1.jpg';
import apartments2 from '@/assets/images/apartments/photo2.jpg';
import apartments3 from '@/assets/images/apartments/photo3.jpg';
import apartments4 from '@/assets/images/apartments/photo4.jpg';
import apartments5 from '@/assets/images/apartments/photo5.jpg';
import apartments6 from '@/assets/images/apartments/photo6.jpg';
import apartments7 from '@/assets/images/apartments/photo7.jpg';
import apartments8 from '@/assets/images/apartments/photo8.jpg';
import apartments9 from '@/assets/images/apartments/photo9.jpg';
import apartments10 from '@/assets/images/apartments/photo10.jpg';
import apartments11 from '@/assets/images/apartments/photo11.jpg';
import apartments12 from '@/assets/images/apartments/photo12.jpg';

export default {
  name: 'Apartments',
  components: { SectionHeader },
  data() {
    return {
      sliderItems: [
        { src: apartments1 },
        { src: apartments2 },
        { src: apartments3 },
        { src: apartments4 },
        { src: apartments5 },
        { src: apartments6 },
        { src: apartments7 },
        { src: apartments8 },
        { src: apartments9 },
        { src: apartments10 },
        { src: apartments11 },
        { src: apartments12 },
      ],
      facilityItems: [
        { icon: 'reception', title: 'apartments.h1li1' },
        { icon: 'garden', title: 'apartments.h1li2' },
        { icon: 'playground', title: 'apartments.h1li3' },
        { icon: 'basketball', title: 'apartments.h1li4' },
        { icon: 'bbq', title: 'apartments.h1li5' },
        { icon: 'parking', title: 'apartments.h1li6' },
        { icon: 'kitchen', title: 'apartments.h1li7' },
        { icon: 'fridge', title: 'apartments.h1li8' },
        { icon: 'tv', title: 'apartments.h1li9' },
        { icon: 'ac', title: 'apartments.h1li10' },
        { icon: 'bath', title: 'apartments.h1li11' },
        { icon: 'wifi', title: 'apartments.h1li12' },
      ],
    };
  },
  head() {
    return {
      title: this.$t('nav.apartments'),
    };
  },
};
</script>

<style lang="scss" scoped>
.facility {
  &__item {
    text-align: center;
  }
  &__title {
    margin: 0.5em 0 1.5em;
    font-weight: 500;
  }
}
.prices {
  &__top-p {
    text-align: center;
    font-size: 1.2em;
  }
  &__bottom-p {
    text-align: center;
    font-size: 1.4em;
  }
}
</style>
