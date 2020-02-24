import { shallowMount, createLocalVue } from '@vue/test-utils';
import VueRouter from 'vue-router';
import QuickLinks from '@/components/home/QuickLinks.vue';

// const $route = {
//   path: '/',
//   name: 'index',
// };
// const $router = {
//   push: jest.fn(),
// };

const routes = [
  { path: '/', name: 'home___en' },
  { path: '/gr/', name: 'home___gr' },
  { path: '/apartments/', name: 'apartments___en' },
  { path: '/gr/apartments/', name: 'apartments___gr' },
];

const localVue = createLocalVue();
localVue.use(VueRouter);
const router = new VueRouter({ routes });

const wrapper = shallowMount(QuickLinks, {
  localVue,
  router,
  mocks: {
    // $route,
    // $router,
    $t: () => {},
    $i18n: {
      locale: 'en',
    },
  },
});

describe('QuickLinks', () => {
  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  test('go to path works properly', async () => {
    wrapper.vm.goToPath('home');
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.$route.name).toBe('home___en');
  });
  test('go to path works properly', async () => {
    wrapper.vm.goToPath('apartments');
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.$route.name).toBe('apartments___en');
  });
});
