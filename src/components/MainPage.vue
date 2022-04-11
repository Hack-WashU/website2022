<template>
<div>
  <NavBar />
  <HeaderSection />
  <EmailList />
  
  <About />
  <Tracks />
  <Sponsors />
  <Team />
  <FAQ />
  <Contact />
</div>
</template>

<script>
import HeaderSection from './HeaderSection.vue'
import NavBar from './NavBar.vue'
import About from './About.vue'
import Tracks from './Tracks.vue'
import Sponsors from './Sponsors.vue'
import Team from './Team.vue'
import Contact from './Contact.vue'
import EmailList from './EmailList.vue'
import FAQ from './FAQ.vue'

export default {
  name: 'MainPage',
  props: {
    msg: String
  },
  components: {
    NavBar,
    HeaderSection,
    EmailList,
    About,
    Tracks,
    Sponsors,
    Team,
    FAQ,
    Contact,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
