import { shallowMount } from '@vue/test-utils';
import halkidiki from '@/pages/halkidiki.vue';

const wrapper = shallowMount(halkidiki, {
  mocks: {
    $t: () => {},
  },
});

describe('halkidiki', () => {
  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
