<template>
<div id="tracksAndDivisions">
    <div id="divisions">
        <h1><span class="number">Two</span> Divisions</h1>
        <div>
            <TrackContainer 
                title="Master" 
                info="hi" 
                color="#DF4E68"
            />
            <TrackContainer 
                title="Emerging"
                info="hi" 
                color="#562EEB"
            />
        </div>
    </div>
    <div id="tracks">
        <h1><span class="number">Two</span> Tracks</h1>
        <div>
            <TrackContainer 
                title="Security"
                info="hi" 
                color="#3C5BFF"
            />
            <TrackContainer 
                title="Sustainability" 
                info="hi" 
                color="#6DDF90"
                logo="fab fa-pagelines"
            />
        </div>
    </div>
</div>
</template>

<script>
import TrackContainer from './TrackContainer.vue'

export default {
  name: 'Tracks',
  components: {
      TrackContainer
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 #tracksAndDivisions {
     width: 100%;
     height: 90vh;
     display: flex;
     flex-direction: column;
     justify-content: center;
}
h1 {
    color: rgb(255, 171, 60);
    font-size: 3em;
    font-family: Mont;
}
 #tracks div {
     display: flex;
     justify-content: center;
     flex-wrap: wrap;
 }
 
 #divisions div {
     display: flex;
     justify-content: center;
     flex-wrap: wrap;
 }

 @media only screen and (max-width: 1000px) {
    #tracksAndDivisions {
        height: 200vh;
    }
 }

 .number {
     color: rgb(255, 255, 255);
 }
</style>