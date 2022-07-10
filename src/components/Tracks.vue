<template>
<div id="tracksAndDivisions">
    <h1>Our <span>Tracks</span></h1>
    <div class="tracks">
        <TraDirContainer
            title="Sustainability"
            text="Sustainable practices support ecological, human, and economic health and vitality. The sustainability track is for hackers who aim to improve environmental sustainability through the use of technology."
        />
        <TraDirContainer 
            title="Security and Privacy"
            text="The safeguarding of data and user identity in various platforms is an increasingly pressing issue in our data driven world. The Security and Privacy track is for hackers who aim to improve how we protect our data."
        />
        <TraDirContainer 
            title="Interactive Media"
            text="From terminal windows in the 60s to full blown virtual reality UIs in modern times, the way we interact with technology has evolved quickly. The Interactive Media track is for hackers who wish to push the limits of how we interact with technology."
        />
        <TraDirContainer 
            title="One More Track"
            text="Coming Soon!"
        />
    </div>
    <h1>Our <span>Divisions</span></h1>
    <div class="divisions">
        <TraDirContainer 
            title="Master"
            text="The master division is for more experienced hackers who are comfortable with having full creative control of their projects. We will have exciting speakers and experienced mentors to help take your project to the next level."
        />
        <TraDirContainer 
            title="Emerging"
            text="The emerging division is for underclassmen who may not be as experienced in building their own projects. We will have mentors and volunteers to help guide you through building your projects."
        />
    </div>
</div>
</template>

<script>
import TraDirContainer from './TraDirContainer.vue'
export default {
  name: 'Tracks',
  components: {
      TraDirContainer
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 #tracksAndDivisions {
     margin-top: 5vh;
     max-width: 1200px;
     min-width: 350px;
     min-height: 90vh;
     display: flex;
     flex-direction: column;
     justify-content: center;
     margin-left: auto;
     margin-right: auto;
     text-align: center;
}

.tracks, .divisions {
    margin-bottom: 40px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
}

.trackHeader {
    color: #A8E1BA;
}

.divHeader {
    color: #EDC6CD;
}

h1 {
    color: white;
}

h2, h3 {
    margin: 10px;
}

span {
    color: rgba(109, 223, 144, 1);
}

@media only screen and (max-width: 1000px) {
#tracksAndDivisions {
    width: 80%;
    min-height: 70vh;
}
}
</style>