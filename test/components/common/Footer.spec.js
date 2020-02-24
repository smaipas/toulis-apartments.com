import { shallowMount } from '@vue/test-utils';
import Footer from '@/components/common/Footer.vue';

const wrapper = shallowMount(Footer);

describe('Footer', () => {
  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
