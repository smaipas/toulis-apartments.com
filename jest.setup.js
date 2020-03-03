import Vue from 'vue';
import Vuetify from 'vuetify';
import { config } from '@vue/test-utils';

Vue.config.silent = true;

// Mock Nuxt components
config.stubs['nuxt-link'] = '<a><slot /></a>';

Vue.use(Vuetify);
