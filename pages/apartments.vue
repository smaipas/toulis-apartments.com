<template>
  <v-container>
    <v-carousel
      cycle
      hide-delimiter-background
      show-arrows-on-hover
      :height="carouselImagesHeight"
    >
      <v-carousel-item v-for="n in 14" :key="n">
        <picture>
          <source
            media="(max-width: 800px)"
            type="image/webp"
            :srcset="require(`~/assets/images/apartments/photo${n}-sm.webp`)"
          />
          <source
            media="(max-width: 800px)"
            :srcset="require(`~/assets/images/apartments/photo${n}-sm.jpg`)"
          />
          <source
            media="(max-width: 1200px)"
            type="image/webp"
            :srcset="require(`~/assets/images/apartments/photo${n}-md.webp`)"
          />
          <source
            media="(max-width: 1200px)"
            :srcset="require(`~/assets/images/apartments/photo${n}-md.jpg`)"
          />
          <source
            type="image/webp"
            :srcset="require(`~/assets/images/apartments/photo${n}-lg.webp`)"
          />
          <img
            :src="require(`~/assets/images/apartments/photo${n}-lg.jpg`)"
            alt="Toulis apartments in Polychrono"
          />
        </picture>
      </v-carousel-item>
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
          sm="4"
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

export default {
  name: 'Apartments',
  components: { SectionHeader },
  data() {
    return {
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
  computed: {
    /**
     * Carousel images height.
     */
    carouselImagesHeight() {
      if (this.$vuetify.breakpoint.xs) return '30em';
      if (this.$vuetify.breakpoint.sm) return '35em';
      if (this.$vuetify.breakpoint.md) return '40em';
      return '50em';
    },
  },
  head() {
    return {
      title: this.$t('nav.apartments'),
    };
  },
};
</script>

<style lang="scss" scoped>
picture {
  display: flex;
  height: 100%;
  width: 100%;
  & > img {
    object-fit: cover;
    height: auto;
    width: 100%;
  }
}
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
