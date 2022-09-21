import { alert } from "notie";

export default {
  install(Vue) {
    Vue.mixin({
      methods: {
        notie_success(message) {
          alert({
            type: 1,
            text: message
          });
        },

        notie_warning(message) {
          alert({
            type: 2,
            text: message
          });
        },

        notie_error(message) {
          alert({
            type: 3,
            text: message
          });
        }

        // add more here
      }
    });
  }
};
