<template>
  <v-footer app dark>
    <v-container>
      <div class="footer__container">
        <div>
          &copy; {{ new Date().getFullYear() }} Toulis Apartments. All Rights
          Reserved.
        </div>
        <div>{{ $t('footer.regNumber') }}</div>
      </div>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style lang="scss" scoped>
.footer__container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
  }
}
</style>
