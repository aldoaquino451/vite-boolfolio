<script>

export default {
  name: 'Header',
  data() {
    return {
      
    }
  },
}
</script>

<template>
  <header>
    <ul>
      <li>
        <RouterLink :to="{name: 'home'}">Home</RouterLink>
      </li>
      <li>
        <RouterLink :to="{name: 'projects'}">Progetti</RouterLink>
      </li>
      <li>
        <RouterLink :to="{name: 'contacts'}">Contatti</RouterLink>
      </li>
      <li>
        <RouterLink :to="{name: 'about'}">About</RouterLink>
      </li>
    </ul>
  </header>
</template>

<style lang="scss">
  
header {
  height: 80px;
  padding: 10px 50px;
  display: flex;
  align-items: center;
}
</style>