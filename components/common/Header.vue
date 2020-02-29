<template>
  <v-app-bar app class="header__container" height="145" elevation="0">
    <v-container>
      <div style="display: flex;">
        <div class="header__logo">
          <v-img
            :src="logo"
            height="100px"
            alt="Toulis Apartments Halkidiki"
            contain
          ></v-img>
        </div>
        <v-spacer></v-spacer>
        <div class="header__right">
          <v-app-bar-nav-icon
            class="d-flex d-sm-none"
            @click.stop="toggleDrawer"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn v-bind="attrs" v-on="on">
                Toggle Menu
              </v-btn>
            </template>
          </v-app-bar-nav-icon>
          <div class="header__lang-selector d-none d-sm-flex">
            <LanguageSelector />
          </div>
          <div
            v-if="menuItems && menuItems.length"
            class="header__nav d-none d-sm-flex"
          >
            <div
              v-for="item in menuItems"
              :key="item.to"
              :class="isNavActive(item.routeName) ? 'nav--active' : ''"
              @click="goToPath(item.routeName)"
            >
              {{ $t(item.title) }}
            </div>
          </div>
        </div>
      </div>
    </v-container>
  </v-app-bar>
</template>

<script>
/**
 * Website header.
 */
import logo from '@/static/toulis-logo.svg';
import LanguageSelector from '@/components/common/LanguageSelector.vue';

export default {
  name: 'Header',
  components: { LanguageSelector },
  props: {
    menuItems: { type: Array, default: null },
  },
  data() {
    return {
      logo,
    };
  },
  methods: {
    /**
     * Toggle drawer visibility.
     */
    toggleDrawer() {
      this.$emit('toggle-drawer');
    },
    /**
     * Go to path.
     */
    goToPath(name) {
      this.$emit('go-to-path', name);
    },
    /**
     * Check if nav link is active.
     */
    isNavActive(name) {
      return this.$route.name.includes(name);
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  &__container {
    border-top: 0.35em solid $primary;
    background-color: white !important;
  }
  &__lang-selector {
    display: flex;
    justify-content: flex-end;
    margin-top: 1.3em;
  }
  &__nav {
    display: flex;
    margin-top: 2em;
    text-transform: uppercase;
    & > * {
      cursor: pointer;
      transition: color ease-in-out 0.2s;
      &:hover {
        color: $primary;
      }
    }
    & :not(:last-child) {
      margin-right: 1em;
    }
  }
}
.nav--active {
  font-weight: 500;
  color: $primary;
}
</style>
