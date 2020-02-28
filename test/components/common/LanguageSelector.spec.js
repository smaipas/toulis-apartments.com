import { shallowMount } from '@vue/test-utils';
import LanguageSelector from '@/components/common/LanguageSelector.vue';

const wrapper = shallowMount(LanguageSelector, {
  mocks: {
    switchLocalePath: () => {},
  },
});

describe('LanguageSelector', () => {
  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
