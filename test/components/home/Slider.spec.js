import { shallowMount } from '@vue/test-utils';
import Slider from '@/components/home/Slider.vue';

const wrapper = shallowMount(Slider);

describe('Slider', () => {
  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
