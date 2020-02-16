<template>
  <v-app dark>
    <v-navigation-drawer v-model="drawer" temporary app>
      <v-list>
        <v-list-item
          v-for="(item, i) in menuItems"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <Header @toggle-drawer="toggleDrawer" />
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer app>
      <span>&copy; {{ new Date().getFullYear() }} Toulis Apartments</span>
    </v-footer>
  </v-app>
</template>

<script>
/**
 * Website layout.
 */
import Header from '@/components/common/Header.vue';

export default {
  name: 'DefaultLayout',
  components: { Header },
  data() {
    return {
      drawer: false,
      menuItems: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Contact',
          to: '/contact',
        },
      ],
      title: 'Vuetify.js',
    };
  },
  methods: {
    /**
     * Toggle drawer.
     */
    toggleDrawer() {
      this.drawer = !this.drawer;
    },
  },
};
</script>
