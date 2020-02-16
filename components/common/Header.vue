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
            v-if="$vuetify.breakpoint.xsOnly"
            @click.stop="toggleDrawer"
          />
          <template v-else>
            <div class="header__lang-selector">
              <NuxtLink :to="switchLocalePath('en')">
                <v-img :src="flagEn" height="25px" contain />
              </NuxtLink>
              <NuxtLink :to="switchLocalePath('el')">
                <v-img :src="flagEl" height="25px" contain />
              </NuxtLink>
              <NuxtLink :to="switchLocalePath('rs')">
                <v-img :src="flagRs" height="25px" contain />
              </NuxtLink>
            </div>
            <div v-if="menuItems && menuItems.length" class="header__nav">
              <div
                v-for="item in menuItems"
                :key="item.to"
                :class="isNavActive(item.routeName) ? 'nav--active' : ''"
                @click="goToPath(item.routeName)"
              >
                {{ $t(item.title) }}
              </div>
            </div>
          </template>
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
import flagEn from '@/static/flags/en.png';
import flagEl from '@/static/flags/gr.png';
import flagRs from '@/static/flags/rs.png';

export default {
  name: 'Header',
  props: {
    menuItems: { type: Array, default: null },
  },
  data() {
    return {
      title: 'Toulis apartments',
      logo,
      flagEn,
      flagEl,
      flagRs,
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
    border-top: 0.35em solid var(--v-primary-base);
    background-color: white !important;
  }
  &__lang-selector {
    display: flex;
    justify-content: flex-end;
    margin-top: 1.3em;
    & :not(:last-child) {
      margin-right: 0.5em;
    }
  }
  &__nav {
    display: flex;
    margin-top: 2em;
    text-transform: uppercase;
    & > * {
      cursor: pointer;
      transition: color ease-in-out 0.2s;
      &:hover {
        color: var(--v-primary-base);
      }
    }
    & :not(:last-child) {
      margin-right: 1em;
    }
  }
}
.nav--active {
  font-weight: bold;
  color: var(--v-primary-base);
}
</style>
