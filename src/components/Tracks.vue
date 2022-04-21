<template>
<div id="tracksAndDivisions">
    <div class="tracks">
        <h1>TRACKS</h1>
        <h2 class="trackHeader">Sustainability</h2>
        <h3>Sustainable practices support ecological, human, and economic health and vitality. The sustainability track is for hackers who aim to improve environmental sustainability through the use of technology.</h3>
        <h2 class="trackHeader">Security and Privacy</h2>
        <h3>The safeguarding of data and user identity in various platforms is an increasingly pressing issue in our data driven world. The Security and Privacy track is for hackers who aim to improve how we protect our data.</h3>
    </div>
    <div class="divisions">
        <h1>DIVISIONS</h1>
        <h2 class="divHeader">Master</h2>
        <h3>The master division is for more experienced hackers who are comfortable with having full creative control of their projects. We will have exciting speakers and experienced mentors to help take your project to the next level.</h3>
        <h2 class="divHeader">Emerging</h2>
        <h3>The emerging division is for underclassmen who may not be as experienced in building their own projects. We will have mentors and volunteers to help guide you through building your projects.</h3>
    </div>
</div>
</template>

<script>

export default {
  name: 'Tracks',
  components: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 #tracksAndDivisions {
     margin-top: 5vh;
     max-width: 900px;
     min-width: 300px;
     min-height: 90vh;
     display: flex;
     flex-direction: column;
     justify-content: center;
     margin-left: auto;
     margin-right: auto;
     text-align: left;
}

.tracks {
    margin-bottom: 20px;
}

.trackHeader {
    color: #A8E1BA;
}

.divHeader {
    color: #EDC6CD;
}

h1 {
    color: white;
    font-weight: 600;
    margin: 7px;
    text-align: center;
}

h2 {
    font-family: 'Karla', sans-serif;
    font-weight: 800;
}

h3 {
    color: white;
}

h2, h3 {
    margin: 10px;
}

@media only screen and (max-width: 1000px) {
#tracksAndDivisions {
    width: 80%;
    min-height: 70vh;
}
}
</style>