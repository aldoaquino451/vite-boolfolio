<script>
import Header from './components/Header.vue';
import { RouterLink, RouterView } from 'vue-router';

export default {
  name: 'App',
  components: {
    Header,
    RouterLink,
    RouterView
  },
  data() {
    return {
    }
  },

}
</script>

<template>

  <Header />

  <main>
    <div class="container">
      <RouterView />
    </div>
  </main>

</template>

<style lang="scss">

main {
  height: calc(100% - 80px);
  padding: 50px 0;

  .container {
    width: 80%;
    max-width: 1200px;
    margin: 0 auto;
  } 
}
</style>
