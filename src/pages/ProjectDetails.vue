<script>
import axios from 'axios';
import { store } from '../data/store';

export default {
  name: 'ProjectCard',
  // props: {
  //   slug: String
  // },
  data() {
    return {
      endpoint: '/show-project/',
      project: {},
      slug: ''
    }
  },
  methods: {
    getProject() {
      console.log(store.apiUrl + this.endpoint + this.slug); 
      axios.get(store.apiUrl + this.endpoint + this.slug)
        .then( res => {
          console.log(res.data); 
          this.project = res.data; 
        })
    }
  },
  mounted() {
    // this.getProject();
    this.slug = this.$route.params.slug;
  },
}
</script>

<template>
  <div class="card">
    
    <!-- <h3>
      {{ project.name }}
    </h3>

    <p class="date">
      <strong>Data: </strong> 
      {{ project.date }}
    </p>
    
    <p>
      <strong>Descrizione: </strong>      
      <br>
       {{ project.description }} 
    </p> -->
    <p>ciao</p>
    <p>{{ slug }}</p>
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