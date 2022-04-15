<template>
<div class="container">
  <h1 id="title">About</h1>
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
}

.container {
  margin-left: auto;
  margin-right: auto;
  max-width: 900px;
  margin-top: 20px;
  min-height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

#about {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}

#text {
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

img {
  max-width: 300px;
  margin-left: auto;
  margin-right: auto;
}

p {
  color: #D9D9D9;
  font-size: 20px;
  text-align: left;
}

@media only screen and (max-width: 1000px) {
  p {
    font-size: 1em;
    text-align: left;
    margin: 10px;
  }
  #title {
    padding-bottom: 5vh;
  }
  #about {
    text-align: center;
  }
  .container {
    width: 80%;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>