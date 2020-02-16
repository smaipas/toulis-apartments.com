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
    <Header
      :menu-items="menuItems"
      @toggle-drawer="toggleDrawer"
      @go-to-path="goToPath"
    />
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
    /**
     * Go to path.
     */
    goToPath(name) {
      this.$router.push({ name: `${name}___${this.$i18n.locale}` });
    },
  },
};
</script>
