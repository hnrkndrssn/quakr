import { Component, Vue } from 'vue-property-decorator';
import Chat from '../Chat/Chat';

@Component({
  components: {
    Chat,
  },
})
export default class Home extends Vue {}
