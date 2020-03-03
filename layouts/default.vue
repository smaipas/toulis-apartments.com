<template>
  <v-app dark>
    <Drawer v-model="drawer" :menu-items="menuItems" @go-to-path="goToPath" />
    <Header
      :menu-items="menuItems"
      @toggle-drawer="toggleDrawer"
      @go-to-path="goToPath"
    />
    <v-content>
      <nuxt />
    </v-content>
    <Gdpr />
    <Footer />
  </v-app>
</template>

<script>
/**
 * Website layout.
 */
import Header from '@/components/common/Header.vue';
import Footer from '@/components/common/Footer.vue';
import Drawer from '@/components/common/Drawer.vue';
import Gdpr from '@/components/common/Gdpr.vue';

export default {
  name: 'DefaultLayout',
  components: { Header, Footer, Drawer, Gdpr },
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
