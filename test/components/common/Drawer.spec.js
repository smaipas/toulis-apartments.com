import { shallowMount } from '@vue/test-utils';
import Drawer from '@/components/common/Drawer.vue';

const $route = {
  path: '/',
  name: 'index',
};

const wrapper = shallowMount(Drawer, {
  propsData: {
    value: true,
    menuItems: [
      {
        title: 'nav.home',
        to: '/',
        routeName: 'index',
      },
      {
        title: 'nav.apartments',
        to: '/apartments',
        routeName: 'apartments',
      },
      {
        title: 'nav.halkidiki',
        to: '/halkidiki',
        routeName: 'halkidiki',
      },
      {
        title: 'nav.contact',
        to: '/contact',
        routeName: 'contact',
      },
    ],
  },
  mocks: {
    $route,
    $t: () => 'home',
  },
});

describe('Drawer', () => {
  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  test('changing status properly emits new value', async () => {
    wrapper.setData({ status: false });
    await wrapper.vm.$nextTick();
    expect(wrapper.emitted('input')).toBeTruthy();
  });
});
