<template>
  <div>
    <Slider />
    <QuickLinks />
  </div>
</template>

<script>
/**
 * Home page.
 */
import Slider from '@/components/home/Slider.vue';
import QuickLinks from '@/components/home/QuickLinks.vue';

export default {
  name: 'Index',
  components: { Slider, QuickLinks },
};
</script>
