<template>
  <div>
    <NavBar />
    <HeaderSection />

    <About />
    <Tracks />
    <FAQ />
    <Sponsors />
    <!-- <Team /> -->
    <FooterSection />
  </div>
</template>

<script>
import HeaderSection from "./HeaderSection.vue";
import NavBar from "./NavBar.vue";
import About from "./About.vue";
import Tracks from "./Tracks.vue";
import Sponsors from "./Sponsors.vue";
import Team from "./Team.vue";
import FAQ from "./FAQ.vue";
import FooterSection from "./FooterSection.vue";

export default {
  name: "MainPage",
  props: {
    msg: String,
  },
  components: {
    NavBar,
    HeaderSection,
    About,
    Tracks,
    Sponsors,
    Team,
    FAQ,
    FooterSection,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
