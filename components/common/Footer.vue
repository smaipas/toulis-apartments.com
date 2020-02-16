<template>
  <v-footer app dark>
    <v-container>
      <span>
        &copy; {{ new Date().getFullYear() }} Toulis Apartments. All Rights
        Reserved.
      </span>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style lang="scss" scoped></style>
