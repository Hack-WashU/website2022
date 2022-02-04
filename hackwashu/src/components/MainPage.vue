<template>
<div>
  <NavBar />
  <SectionOne />
  <About />
  <Tracks />
  <Sponsors />
</div>
</template>

<script>
import SectionOne from './SectionOne.vue'
import NavBar from './NavBar.vue'
import About from './About.vue'
import Tracks from './Tracks.vue'
import Sponsors from './Sponsors.vue'

export default {
  name: 'MainPage',
  props: {
    msg: String
  },
  components: {
    NavBar,
    SectionOne,
    About,
    Tracks,
    Sponsors,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
