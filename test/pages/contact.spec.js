// import { equal } from 'assert';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuelidate from 'vuelidate';
import Vuetify from 'vuetify';
// import mockAxios from 'jest-mock-axios';
// import flushPromises from 'flush-promises';
import contact from '@/pages/contact.vue';
import validation from '@/plugins/validation.js';

const localVue = createLocalVue();
localVue.use(Vuelidate);
localVue.use(Vuetify);

beforeEach(function() {
  // import and pass your custom axios instance to this method
});

afterEach(function() {
  // import and pass your custom axios instance to this method
  // mockAxios.reset();
});

const wrapper = shallowMount(contact, {
  localVue,
  validation,
  mocks: {
    $t: () => {},
  },
});

describe('contact', () => {
  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  test('clicking submit without filling any form inputs does not submit form', () => {
    const validator = wrapper.vm.$v;
    wrapper.setData({
      form: {
        name: '',
        email: '',
        checkIn: '',
        checkOut: '',
        message: '',
      },
    });
    const submitBtn = wrapper.find('[data-test="submitBtn"]');
    submitBtn.trigger('click');
    expect(validator.$invalid).toBeTruthy();
    // TODO: check if calls api
  });
  // test('clicking submit with properly filled form inputs does submit form', async (done) => {
  //   wrapper.setData({
  //     form: {
  //       name: 'my name',
  //       email: 'myEmail@gmail.com',
  //       checkIn: '1 11 2022',
  //       checkOut: '30 11 2022',
  //       message: 'my message',
  //     },
  //   });
  //   wrapper.vm.$api = axios;
  //   const validator = wrapper.vm.$v;
  //   // const submitBtn = wrapper.find('[data-test="submitBtn"]');
  //   // submitBtn.trigger('click');
  //   wrapper.vm.submit();
  //   await wrapper.vm.$nextTick();
  //   // expect(validator.$invalid).toBeFalsy();
  //   // expect(mockAxios.post).toHaveBeenCalledWith(
  //   //   '/contact/submit-reservation',
  //   //   wrapper.vm.form
  //   // );
  //   const getCurrentUserReq = mockAxios.lastReqGet();
  //   debugger;
  //   expect(getCurrentUserReq.url.url).toBe('/contact/submit-reservation');
  //   const response = { data: {}, status: 200 };
  //   mockAxios.mockResponse(response, getCurrentUserReq);
  //   await flushPromises();
  //   done();
  //   expect(validator.$invalid).toBeTruthy();
  // });

  test('clear form properly clears form', () => {
    wrapper.setData({
      form: {
        name: 'my name',
        email: 'myEmail@gmail.com',
        checkIn: '1 11 2022',
        checkOut: '30 11 2022',
        message: 'my message',
      },
    });
    wrapper.vm.clearForm();
    expect(wrapper.vm.form).toEqual({
      name: '',
      email: '',
      checkIn: '',
      checkOut: '',
      message: '',
    });
  });
});
