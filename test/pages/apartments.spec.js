import { shallowMount } from '@vue/test-utils';
import Vuetify from 'vuetify';
import apartments from '@/pages/apartments.vue';

const vuetify = new Vuetify({
  mocks: {
    $vuetify: {
      breakpoint: {
        xs: false,
        sm: false,
        md: true,
      },
    },
  },
});

const wrapper = shallowMount(apartments, {
  vuetify,
  mocks: {
    $t: () => {},
  },
});

describe('apartments', () => {
  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
  // test('is a Vue instance', () => {
  //   expect(wrapper.vm.carouselImagesHeight).toBe('40em');
  // });
});
