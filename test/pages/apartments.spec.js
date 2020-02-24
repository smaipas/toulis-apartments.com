import { shallowMount } from '@vue/test-utils';
import apartments from '@/pages/apartments.vue';

const wrapper = shallowMount(apartments, {
  mocks: {
    $t: () => {},
  },
});

describe('apartments', () => {
  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
