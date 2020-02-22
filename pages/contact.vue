<template>
  <v-container>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m17!1m11!1m3!1d3178.640711342774!2d23.52600156977856!3d40.01568392035171!2m2!1f0!2f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x63f622359be85c64!2sToulis+Apartments!5e1!3m2!1sen!2sus!4v1485706131038"
      width="100%"
      height="450"
      frameborder="0"
      style="border:0"
      allowfullscreen
    />
    <SectionHeader>
      {{ $t('contactInfo.h') }}
    </SectionHeader>
    <v-row>
      <v-col
        v-for="(item, i) in contactInfoItems"
        :key="i"
        cols="12"
        md="4"
        sm="12"
        class="d-flex justify-center"
      >
        <figure class="contact-info__item">
          <v-icon size="60" color="primary">icon-{{ item.icon }}</v-icon>
          <figcaption>
            <div class="contact-info__title">{{ $t(item.title) }}</div>
            <div
              v-for="(detail, ii) in item.details"
              :key="ii"
              class="contact-info__detail"
            >
              {{ $t(detail) }}
            </div>
          </figcaption>
        </figure>
      </v-col>
    </v-row>
    <SectionHeader>
      {{ $t('reservationForm.h') }}
    </SectionHeader>
    <v-form>
      <v-row justify="center">
        <v-col cols="12" lg="9" md="11" sm="12">
          <v-row>
            <v-col cols="12" md="6" sm="12" class="px-5">
              <v-text-field
                v-model="form.name"
                prepend-inner-icon="mdi-account"
                :label="$t('reservationForm.name')"
                :error-messages="$validatorError($v.form.name)"
                :disabled="loading"
                outlined
                @input="$v.form.name.$touch()"
              />
              <v-text-field
                v-model="form.email"
                type="email"
                prepend-inner-icon="mdi-email"
                :label="$t('reservationForm.email')"
                :error-messages="$validatorError($v.form.email)"
                :disabled="loading"
                outlined
                @input="$v.form.email.$touch()"
              />
              <v-row>
                <v-col cols="12" sm="12" md="6">
                  <v-menu
                    ref="menu1"
                    v-model="checkInDatePicker"
                    :close-on-content-click="false"
                    transition="scale-transition"
                    offset-y
                    max-width="290px"
                    min-width="290px"
                  >
                    <template v-slot:activator="{ on }">
                      <v-text-field
                        :value="formatDate(form.checkIn)"
                        :label="$t('reservationForm.checkIn')"
                        prepend-inner-icon="mdi-calendar-arrow-right"
                        readonly
                        clearable
                        outlined
                        :disabled="loading"
                        @click:clear="form.checkIn = ''"
                        v-on="on"
                      />
                    </template>
                    <v-date-picker
                      v-model="form.checkIn"
                      no-title
                      @input="checkInDatePicker = false"
                    />
                  </v-menu>
                </v-col>
                <v-col cols="12" sm="12" md="6">
                  <v-menu
                    ref="menu1"
                    v-model="checkOutDatePicker"
                    :close-on-content-click="false"
                    transition="scale-transition"
                    offset-y
                    max-width="290px"
                    min-width="290px"
                  >
                    <template v-slot:activator="{ on }">
                      <v-text-field
                        :value="formatDate(form.checkOut)"
                        :label="$t('reservationForm.checkOut')"
                        prepend-inner-icon="mdi-calendar-arrow-left"
                        readonly
                        clearable
                        outlined
                        :disabled="loading"
                        @click:clear="form.checkOut = ''"
                        v-on="on"
                      />
                    </template>
                    <v-date-picker
                      v-model="form.checkOut"
                      no-title
                      @input="checkOutDatePicker = false"
                    />
                  </v-menu>
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="12" md="6" sm="12" class="px-5">
              <v-textarea
                v-model="form.message"
                :label="$t('reservationForm.moreInfo')"
                :error-messages="$validatorError($v.form.message)"
                :disabled="loading"
                outlined
                rows="8"
                @input="$v.form.message.$touch()"
              />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <div class="text-center">
        <v-btn color="primary" :loading="loading" @click="submit">
          {{ $t('reservationForm.send') }}
        </v-btn>
      </div>
    </v-form>
    <v-snackbar v-model="showNotification" :right="true" :top="true">
      {{ notificationMessage }}
      <v-btn
        :color="formHasError ? 'red' : 'green'"
        text
        @click="showNotification = false"
      >
        Close
      </v-btn>
    </v-snackbar>
  </v-container>
</template>

<script>
/**
 * Contact page.
 */
import {
  required,
  maxLength,
  minLength,
  email,
} from 'vuelidate/lib/validators';
import format from 'date-fns/format';
import SectionHeader from '@/components/common/SectionHeader.vue';

export default {
  name: 'Conteact',
  components: { SectionHeader },
  data() {
    return {
      loading: false,
      formHasError: false,
      showNotification: false,
      notificationMessage: '',
      checkInDatePicker: false,
      checkOutDatePicker: false,
      contactInfoItems: [
        {
          icon: 'map-pin',
          title: 'contactInfo.h1',
          details: ['contactInfo.h1p1', 'contactInfo.h1p2'],
        },
        {
          icon: 'telephone',
          title: 'contactInfo.h2',
          details: ['contactInfo.h2p1', 'contactInfo.h2p2'],
        },
        {
          icon: 'email',
          title: 'contactInfo.h3',
          details: ['contactInfo.h3p1'],
        },
      ],
      form: {
        name: '',
        email: '',
        checkIn: '',
        checkOut: '',
        message: '',
      },
    };
  },
  validations: {
    form: {
      name: { required, minLength: minLength(2), maxLength: maxLength(25) },
      email: { required, minLength: minLength(2), email },
      message: { minLength: minLength(3), maxLength: maxLength(1024) },
    },
  },
  methods: {
    /**
     * Submit form.
     */
    async submit() {
      this.$v.form.$touch();
      if (this.$v.form.$invalid) return;
      this.loading = true;
      try {
        const { name, email, checkIn, checkOut, message } = this.form;
        const data = {
          name,
          email,
          checkIn: this.formatDate(checkIn),
          checkOut: this.formatDate(checkOut),
          message,
        };
        await this.$api.post('/contact/submit-reservation', data);
        this.clearForm();
        this.notificationMessage =
          'Your message has been submitted successfully!';
        this.showNotification = true;
        this.loading = false;
      } catch (error) {
        this.notificationMessage = error;
        this.formHasError = true;
        this.showNotification = true;
        this.loading = false;
      }
      this.loading = false;
    },
    /**
     * Clear form.
     */
    clearForm() {
      this.form = {
        name: '',
        email: '',
        checkIn: '',
        checkOut: '',
        message: '',
      };
      this.$v.$reset();
    },
    /**
     * Format date.
     */
    formatDate(date) {
      return date ? format(new Date(date), 'dd-MM-yyyy') : '';
    },
  },
};
</script>

<style lang="scss" scoped>
.contact-info {
  &__item {
    text-align: center;
  }
  &__title {
    margin: 0.5em 0;
    font-weight: 500;
  }
  &__detail {
    margin: 0.3em 0;
  }
}
</style>
