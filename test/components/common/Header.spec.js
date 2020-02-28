import { shallowMount } from '@vue/test-utils';
import Header from '@/components/common/Header.vue';

const $route = {
  path: '/',
  name: 'index',
};

const wrapper = shallowMount(Header, {
  propsData: {
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

describe('Header', () => {
  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  test('toggle drawer emits event to parent component', () => {
    wrapper.vm.toggleDrawer();
    expect(wrapper.emitted('toggle-drawer')).toBeTruthy();
  });

  test('go to path emits event to parent component', () => {
    wrapper.vm.goToPath('home');
    expect(wrapper.emitted('go-to-path')).toBeTruthy();
  });
});
