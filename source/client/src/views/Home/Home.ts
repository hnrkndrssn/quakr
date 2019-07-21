import { Component, Vue } from 'vue-property-decorator';

@Component({
  data() {
    return {
      messages: [],
      form: {
        message: '',
        user: new Date().getTime(),
      },
    };
  },
  created() {
    this.$chatHub.$on('message-received', this.onMessageAdded);
  },
  beforeDestroy() {
    this.$chatHub.$off('message-received', this.onMessageAdded);
  },
  methods: {
    sendMessage(event) {
      this.$chatHub.sendMessage(this.$data.form.user, this.$data.form.message);
      this.$data.form.message = '';
    },
    onMessageAdded({username, text}) {
      this.$data.messages = [...this.$data.messages, {username, text}];
      // tslint:disable-next-line:no-console
      console.log(this.$data.messages);
    },
  },
})
export default class Home extends Vue {}
