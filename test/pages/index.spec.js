import { shallowMount } from '@vue/test-utils';
import index from '@/pages/index.vue';

const wrapper = shallowMount(index);

describe('index', () => {
  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
