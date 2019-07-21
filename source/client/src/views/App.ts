import Vue from 'vue';
import { mapActions } from 'vuex';

export default Vue.extend({
  name: 'App',
  created() {
    Vue.prototype.startSignalR();
  },
});
