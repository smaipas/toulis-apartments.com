import { shallowMount } from '@vue/test-utils';
import SectionHeader from '@/components/common/SectionHeader.vue';

const wrapper = shallowMount(SectionHeader, {
  propsData: {
    tag: 'div',
    margin: '2em 0 1em',
  },
});

describe('SectionHeader', () => {
  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
  test('to have a div tag', () => {
    expect(wrapper.find('div')).toBeTruthy();
  });
});
