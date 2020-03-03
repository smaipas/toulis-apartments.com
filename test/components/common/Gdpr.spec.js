import { shallowMount } from '@vue/test-utils';
import Gdpr from '@/components/common/Gdpr.vue';

const wrapper = shallowMount(Gdpr, {
  mocks: {
    $gtm: {
      init: () => {},
    },
  },
});

describe('Gdpr', () => {
  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
  test('gdpr values are not set initialy and show gdpr message', () => {
    expect(Object.keys(localStorage.__STORE__).length).toBe(0);
    expect(wrapper.vm.showWarning).toBeTruthy();
  });
  test('gdpr set to agree', () => {
    wrapper.vm.gtmInit(true);
    expect(Object.keys(localStorage.__STORE__).length).toBe(1);
    expect(localStorage.__STORE__.gdprAgree).toBe('true');
    expect(wrapper.vm.showWarning).toBeFalsy();
    localStorage.clear();
  });
  test('gdpr set to reject', () => {
    wrapper.vm.gtmInit(false);
    expect(Object.keys(localStorage.__STORE__).length).toBe(1);
    expect(localStorage.__STORE__.gdprAgree).toBe('false');
    expect(wrapper.vm.showWarning).toBeFalsy();
    localStorage.clear();
  });
});
