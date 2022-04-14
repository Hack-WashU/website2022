<template>
  <h1 id="title">ABOUT</h1>
  <div id="about">
    <div id="text">
      <p>
        At HackWashU, you'll meet fellow hackers from around the country, learn new skills, and work alongside seasoned mentors.
        We'll have free workshops, lecture series, mentorship, prizes, games, and more. Don't have a team, or even an idea?
        Don't worry! We'll give you the tools to build something incredible.
        <br />
        <br />
        For 36 hours from September 9th to September 11th, you’ll have the opportunity to collaborate and build out
        brilliant, innovative, and impactful ideas.
      </p>
    </div>
    <img alt="" src="../assets/hackwashurabbit.svg" />
  </div>
</template>

<script>

export default {
  name: 'About',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

h1 {
  color: white;
  font-weight: 600;
  font-size: 55px;
  font-family: 'Quicksand', sans-serif;
}

#about {
  display: flex;
  align-items: center;
  width: 65%;
  margin-left: auto;
  margin-right: auto;
}

p {
  color: #D9D9D9;
  font-size: 25px;
  text-align: left;
}

@media only screen and (max-width: 1000px) {
  p {
    font-size: 20px;
  }
  #title {
    padding-bottom: 5vh;
  }
  #about {
    display: block;
  }
}
</style>