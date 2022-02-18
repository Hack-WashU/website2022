<template>
  <MainPage/>
</template>

<script>
import MainPage from './components/MainPage.vue'

export default {
  name: 'App',
  components: {
    MainPage
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow-x: hidden;
}

@font-face {
  font-family: 'Mont';
  src: url('./fonts/Mont-Regular.woff');
}

h1 {
  font-size: 3em;
  font-family: Mont;
  margin: 0;
}

h2 {
  font-size: 2em;
  font-family: Mont;
  margin: 0;
}

h3 {
  font-size: 1em;
  font-family: Mont;
  margin: 0;
}

@media only screen and (max-width: 500px) {
    h1 {
      font-size: 2.5em;
    }
    h2 {
      font-size: 1.5em;
    }
}
</style>
