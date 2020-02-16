import Vue from 'vue';
import vuelidate from 'vuelidate';

Vue.use(vuelidate);

const getErrorMsg = (val) => {
  let error = [];
  if (!val.$dirty) return [];
  switch (false) {
    case val.required: {
      error.push('This field is required.');
      break;
    }
    case val.minLength: {
      error.push('Your entry is too small.');
      break;
    }
    case val.maxLength: {
      error.push('Your entry is too long.');
      break;
    }
    case val.email: {
      error.push('Your entry is not a valid email address.');
      break;
    }
    case val.numeric: {
      error.push('Your entry must be a number.');
      break;
    }
    default: {
      error = '';
      break;
    }
  }
  return error;
};

Vue.prototype.$validatorError = getErrorMsg;
