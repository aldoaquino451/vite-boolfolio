<script>
import axios from 'axios';
import { store } from './data/store';

export default {
  name: 'App',
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
      <ul>
        <li v-for="project in projects" :key="project.id" >
          <strong>Nome progetto: </strong> {{ project.name }} <br>
          <strong>Data: </strong> {{ project.date }} <br>
          <strong>Descrizione: </strong> {{ project.description }}   
        </li>
      </ul> 
    </div>
  </main>

</template>

<style lang="scss">

</style>
