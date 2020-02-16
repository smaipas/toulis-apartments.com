<template>
  <div class="lang-selector__container">
    <NuxtLink :to="switchLocalePath('en')">
      <img src="~/assets/images/flags/en.png" alt="en_flag" />
    </NuxtLink>
    <NuxtLink :to="switchLocalePath('el')">
      <img src="~/assets/images/flags/gr.png" alt="gr_flag" />
    </NuxtLink>
    <NuxtLink :to="switchLocalePath('rs')">
      <img src="~/assets/images/flags/rs.png" alt="rs_flag" />
    </NuxtLink>
  </div>
</template>

<script>
/**
 * Language selector component.
 * FUNCTIONAL COMPONENT
 */

export default {
  name: 'LanguageSelector',
};
</script>

<style lang="scss" scoped>
.lang-selector__container :not(:last-child) {
  margin-right: 1em;
}
</style>
