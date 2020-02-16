<template>
  <v-app-bar app>
    <v-app-bar-nav-icon @click.stop="toggleDrawer" />
    <v-toolbar-title v-text="title" />
    <v-spacer />
    <div>
      {{ $t('nav.home') }}
      <NuxtLink :to="switchLocalePath('en')">
        <v-btn color="primary">en</v-btn>
      </NuxtLink>
      <NuxtLink :to="switchLocalePath('el')">
        <v-btn color="primary">el</v-btn>
      </NuxtLink>
      <NuxtLink :to="switchLocalePath('rs')">
        <v-btn color="primary">rs</v-btn>
      </NuxtLink>
    </div>
  </v-app-bar>
</template>

<script>
/**
 * Website header.
 */
export default {
  name: 'Header',
  data() {
    return {
      title: 'Toulis apartments',
    };
  },
  created() {
    // console.log(this.$route);
  },
  methods: {
    toggleDrawer() {
      this.$emit('toggle-drawer');
    },
  },
};
</script>

<style lang="scss" scoped></style>
