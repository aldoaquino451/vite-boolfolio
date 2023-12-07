<script>
import axios from 'axios';
import { store } from '../data/store';
import ProjectCard from '../components/ProjectCard.vue';

export default {
  name: 'Projects',
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
      axios.get(store.apiUrl)
        .then( res => {
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
  <div>
    <h1>Welcome to Vue</h1>
    <div class="cards">
      <ProjectCard
        v-for="project in projects"
        :key="project.id" 
        :project="project"
        />
    </div>
  </div>
</template>

<style scoped lang="scss">

.cards {
  padding: 30px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  row-gap: 60px;
  column-gap: 30px;
}
</style>