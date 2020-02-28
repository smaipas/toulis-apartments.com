import { shallowMount } from '@vue/test-utils';
import ComplexInfo from '@/components/home/ComplexInfo.vue';

const wrapper = shallowMount(ComplexInfo, {
  mocks: {
    $t: () => {},
  },
});

describe('ComplexInfo', () => {
  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
