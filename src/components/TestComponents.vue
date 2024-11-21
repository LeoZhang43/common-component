<script>
import { h } from 'vue';

export default {
  name: "TestComponents",
  render(){
    return h('div', { class: 'my-class' }, 'Hello, Vue 3!');
  }
}
</script>