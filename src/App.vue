<script>
import axios from 'axios';
import { store } from './data/store';
import ProjectCard from './components/ProjectCard.vue';
import Header from './components/Header.vue';
import { RouterLink, RouterView } from 'vue-router';

export default {
  name: 'App',
  components: {
    ProjectCard,
    Header,
    RouterLink,
    RouterView
},
  data() {
    return {
      store,
      projects: []
    }
  },
  methods: {
    getApi() {
      axios.get(store.apiUrl)
        .then( res => {
          console.log(res.data.data);  
          this.projects = res.data.data;
        })
    }
  },
  mounted() {
    this.getApi(); 
  },

}
</script>

<template>
  <Header />
  <RouterView />
  <main>
    <div class="container">
      <h1>Welcome to Vue</h1>
      <div class="cards">
        <ProjectCard
          v-for="project in projects"
          :key="project.id" 
          :project="project"
          />
      </div>
      
    </div>
  </main>

</template>

<style lang="scss">

header {
  height: 80px;
  padding: 10px 50px;
  display: flex;
  align-items: center;
}

main {
  height: calc(100% - 80px);
  padding: 50px 0;

  .container {
    width: 80%;
    max-width: 1200px;
    margin: 0 auto;

    .cards {
      padding: 30px 0;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      row-gap: 60px;
      column-gap: 30px;
    }
  } 
}
</style>
