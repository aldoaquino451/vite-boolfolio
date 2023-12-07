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

        <RouterLink :to="{name: 'about'}">About</RouterLink>
      </li>
    </ul>
  </header>
</template>

<style lang="scss">
  
</style>