<script>
import { store } from '@/data/store';
export default {
  name: 'ProjectCard',
  props: {
    project: Object
  },
  data() {
    return {}
  },
  computed: {},
  mounted() {},
  methods: {}
}
</script>

<template>
  <div class="card">
    
    <h3>
      <RouterLink :to="{name: 'projectDetails', params:{slug: project.slug}}">
        <h3>{{ project.name }}</h3>
      </RouterLink>
    </h3>

    <p class="date">
      <strong>Data: </strong> 
      {{ project.date }}
    </p>
    
    <p>
      <strong>Descrizione: </strong>      
      <br>
       {{ project.description }} 
    </p>

  </div>
</template>

<style scoped lang="scss">
.card {
  width: 250px;
  min-height: 300px;
  border: 1px solid black;
  border-radius: 20px;
  padding: 20px;

  h3 {
    text-transform: capitalize;
    margin-bottom: 20px;
  }
  
  p {
    margin-bottom: 15px;
  }
}
</style>