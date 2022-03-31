<template>
<div>
  <NavBar />
  <EmailList />
  <SectionOne />
  <About />
  <Tracks />
  <Sponsors />
  <Team />
  <Contact />
</div>
</template>

<script>
import SectionOne from './SectionOne.vue'
import NavBar from './NavBar.vue'
import About from './About.vue'
import Tracks from './Tracks.vue'
import Sponsors from './Sponsors.vue'
import Team from './Team.vue'
import Contact from './Contact.vue'
import EmailList from './EmailList.vue'

export default {
  name: 'MainPage',
  props: {
    msg: String
  },
  components: {
    NavBar,
    SectionOne,
    EmailList,
    About,
    Tracks,
    Sponsors,
    Team,
    Contact,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
