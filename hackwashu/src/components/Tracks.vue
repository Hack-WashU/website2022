<template>
<div id="tracksAndDivisions">
    <div id="tracks">
        <h1><span class="number">two</span> tracks</h1>
        <div>
            <TrackContainer 
                title="Sustainability" 
                info="hi" 
                color="rgb(51, 255, 153)"
                logo="fab fa-pagelines"
            />
            <TrackContainer 
                title="Security"
                info="hi" 
                color="rgb(255, 102, 102)"
            />
        </div>
    </div>
    <div id="divisions">
        <h1><span class="number">two</span> divisions</h1>
        <div>
            <TrackContainer 
                title="Master" 
                info="hi" 
                color="rgb(51, 153, 255)"
            />
            <TrackContainer 
                title="Emerging"
                info="hi" 
                color="rgb(255, 255, 102)"
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
     color: azure;
 }
</style>