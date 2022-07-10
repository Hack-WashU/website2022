<template>
<div class="container">
  <div id="about">
    <div id="text">
      <h1 id="title">ABOUT</h1>
      <h1><span>Hack WashU</span></h1>
      <p>
        At HackWashU, you'll meet fellow hackers from around the country, learn new skills, and work alongside seasoned mentors.
        We'll have free workshops, lecture series, mentorship, prizes, games, and more. Don't have a team, or even an idea?
        Don't worry! We'll give you the tools to build something incredible.
        <br />
        <br />
        For 36 hours from October 14th to 16th, you’ll have the opportunity to collaborate and build out
        brilliant, innovative, and impactful ideas.
      </p>
    </div>
    <div id="picture">
      <img alt="" src="../assets/about.png" />
    </div>
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
  text-align: left;
}

h2 {
  text-align: left;
}

.container {
  margin-left: auto;
  margin-right: auto;
  max-width: 1200px;
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
  justify-content: right;
  flex-wrap: wrap-reverse;
  width: 100%;
  max-width: 1200px;
}

#text {
  max-width: 650px;
  margin-left: 20px;
  margin-right: auto;
  align-items: left;
}

img {
  max-width: 400px;
}

p {
  color: #D9D9D9;
  text-align: left;
  margin-top: 3vh;
}

@media only screen and (max-width: 1000px) {
  p {
    font-size: 1em;
    text-align: left;
  }

  #about {
    text-align: center;
  }
  .container {
    width: 80%;
    margin-left: auto;
    margin-right: auto;
  }
  img {
    width: 60%;
  }
}
</style>