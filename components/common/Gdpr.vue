<template>
  <v-bottom-sheet v-model="showWarning" inset>
    <template v-slot:activator="{ on }">
      <v-btn color="orange" dark v-on="on">
        I agree
      </v-btn>
    </template>
    <v-sheet class="text-center pt-1" height="220px">
      <div class="gdpr__header">Our website uses cookies</div>
      <div class="my-3">
        We are always working to improve our website services for our users. To
        do this, we use the anonymous data provided by cookies.
      </div>
      <div class="mt-5 mb-2">
        <v-btn data-test="iDisagreeBtn" @click="gtmInit(false)">
          <v-icon class="mr-2">mdi-close</v-icon>
          I disagree
        </v-btn>
        <v-btn
          color="primary"
          data-test="iAgreeBtn"
          class="ml-3"
          @click="gtmInit(true)"
        >
          <v-icon class="mr-2">mdi-check</v-icon>
          I agree
        </v-btn>
      </div>
    </v-sheet>
  </v-bottom-sheet>
</template>

<script>
export default {
  name: 'Gdpr',
  data() {
    return {
      showWarning: false,
    };
  },
  mounted() {
    this.gdprWarningCheck();
  },
  methods: {
    /**
     * Check if user has agreed to accept tracking coockies.
     */
    gdprWarningCheck() {
      if (localStorage.getItem('gdprAgree') === null) {
        this.showWarning = true;
      }
    },
    /**
     * Add gtm tracking
     */
    gtmInit(agree) {
      this.showWarning = false;
      if (agree) {
        localStorage.setItem('gdprAgree', true);
        this.$gtm.init('GTM-57NXTCK');
      } else {
        localStorage.setItem('gdprAgree', false);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.gdpr__header {
  margin-top: 0.5em;
  font-size: 1.4em;
  font-weight: 600;
  color: $primary;
}
</style>
