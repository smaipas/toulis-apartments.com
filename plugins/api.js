// import Vue from 'vue';
// import axios from 'axios';

// const api = axios.create({
// });

// Vue.prototype.$api = api;

export default function({ $axios, redirect }, inject) {
  // Create a custom axios instance
  const api = $axios.create({
    baseURL: 'https://5rtovgjhy2.execute-api.eu-west-1.amazonaws.com/dev',
  });

  // Inject to context as $api
  inject('api', api);
}
