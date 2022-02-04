<template>
<div>
  <NavBar />
  <SectionOne />
  <About />
  <Tracks />
</div>
</template>

<script>
import SectionOne from './SectionOne.vue'
import NavBar from './NavBar.vue'
import About from './About.vue'
import Tracks from './Tracks.vue'

export default {
  name: 'MainPage',
  props: {
    msg: String
  },
  components: {
    NavBar,
    SectionOne,
    About,
    Tracks
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
