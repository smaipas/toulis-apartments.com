<template>
  <div>
    <Slider />
    <QuickLinks />
    <ComplexInfo />
  </div>
</template>

<script>
/**
 * Home page.
 */
import Slider from '@/components/home/Slider.vue';
import QuickLinks from '@/components/home/QuickLinks.vue';
import ComplexInfo from '@/components/home/ComplexInfo.vue';

export default {
  name: 'Index',
  components: { Slider, QuickLinks, ComplexInfo },
};
</script>
