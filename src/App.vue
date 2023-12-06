<script>
import axios from 'axios';
import { store } from './data/store';
import ProjectCard from './components/ProjectCard.vue';

export default {
  name: 'App',
  components: {
    ProjectCard
  },
  data() {
    return {
      store,
      projects: []
    }
  },
  methods: {
    getApi() {
      axios.get('http://127.0.0.1:8000/api/projects')
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

  <header>
    <h2>Header</h2> 
  </header>

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
