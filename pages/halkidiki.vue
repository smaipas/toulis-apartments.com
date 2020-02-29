<template>
  <v-container>
    <SectionHeader margin="0 0 1em">
      {{ $t('halkidiki.aboutHalkidiki.h') }}
    </SectionHeader>
    <article>
      <v-img :src="imgHalkidiki" alt="halkidiki" style="margin-bottom: 1em;" />
      <p>{{ $t('halkidiki.aboutHalkidiki.p1') }}</p>
      <p>{{ $t('halkidiki.aboutHalkidiki.p2') }}</p>
      <p></p>
    </article>
    <SectionHeader margin="5em 0 1em">
      {{ $t('halkidiki.aboutPolychrono.h') }}
    </SectionHeader>
    <article>
      <v-img
        :src="imgPolychrono"
        alt="polychrono"
        style="margin-bottom: 1em;"
      />
      <p>{{ $t('halkidiki.aboutPolychrono.p1') }}</p>
      <p>{{ $t('halkidiki.aboutPolychrono.p2') }}</p>
      <p>{{ $t('halkidiki.aboutPolychrono.p3') }}</p>
      <p>{{ $t('halkidiki.aboutPolychrono.p4') }}</p>
    </article>
    <SectionHeader margin="5em 0 1em">
      {{ $t('halkidiki.howToGet.h') }}
    </SectionHeader>
    <article>
      <h3>{{ $t('halkidiki.howToGet.h1') }}</h3>
      <p>{{ $t('halkidiki.howToGet.h1p1') }}</p>
      <p>{{ $t('halkidiki.howToGet.h1p2') }}</p>
      <p>
        <a href="http://www.thessalonikiairport.com"
          >www.thessalonikiairport.gr</a
        >
      </p>

      <h3>{{ $t('halkidiki.howToGet.h2') }}</h3>
      <p>{{ $t('halkidiki.howToGet.h2p1') }}</p>
      <p>{{ $t('halkidiki.howToGet.h2p2') }}</p>
      <p><a href="http://www.ose.gr">www.ose.gr</a></p>

      <h3>{{ $t('halkidiki.howToGet.h3') }}</h3>
      <p>{{ $t('halkidiki.howToGet.h3p1') }}</p>
      <p>{{ $t('halkidiki.howToGet.h3p2') }}</p>
      <p>{{ $t('halkidiki.howToGet.h3p3') }}</p>
      <p>{{ $t('halkidiki.howToGet.h3p4') }}</p>
      <p>{{ $t('halkidiki.howToGet.h3p5') }}</p>
      <p>{{ $t('halkidiki.howToGet.h3p6') }}</p>
      <p><a href="http://ktelmacedonia.gr/">www.ktel.org</a></p>

      <h3>{{ $t('halkidiki.howToGet.h4') }}</h3>
      <p>{{ $t('halkidiki.howToGet.h4p1') }}</p>
      <p>{{ $t('halkidiki.howToGet.h4p2') }}</p>
      <p>{{ $t('halkidiki.howToGet.h4p3') }}</p>
      <p>{{ $t('halkidiki.howToGet.h4p4') }}</p>
      <p>{{ $t('halkidiki.howToGet.h4p5') }}</p>
      <p>{{ $t('halkidiki.howToGet.h4p6') }}</p>
      <p>{{ $t('halkidiki.howToGet.h4p7') }}</p>
      <p>{{ $t('halkidiki.howToGet.h4p8') }}</p>
      <p>{{ $t('halkidiki.howToGet.h4p9') }}</p>
      <p>{{ $t('halkidiki.howToGet.h4p10') }}</p>
      <p>{{ $t('halkidiki.howToGet.h4p11') }}</p>
    </article>
  </v-container>
</template>

<script>
/**
 * Halkidiki page.
 */
import SectionHeader from '@/components/common/SectionHeader.vue';
import imgHalkidiki from '@/assets/images/halkidiki/halkidiki.jpg';
import imgPolychrono from '@/assets/images/halkidiki/polychrono.jpg';

export default {
  name: 'Halkidiki',
  components: { SectionHeader },
  data() {
    return {
      imgHalkidiki,
      imgPolychrono,
    };
  },
  head() {
    return {
      title: this.$t('nav.halkidiki'),
    };
  },
};
</script>

<style lang="scss" scoped></style>
