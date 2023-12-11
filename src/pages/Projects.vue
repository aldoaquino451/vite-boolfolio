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
      endpoint: '/projects',
      projects: []
    }
  },
  methods: {
    getApi() {
      axios.get(store.apiUrl + this.endpoint)
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
    <h2>Progetti</h2>
    <div class="cards">
        <ProjectCard
          v-for="project in projects"
          :key="project.id" 
          :project="project"
          :slug="project.slug"
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