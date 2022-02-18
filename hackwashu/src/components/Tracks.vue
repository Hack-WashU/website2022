<template>
<div id="tracksAndDivisions">
    <div id="divisions">
        <h1><span class="number">Two</span> Divisions</h1>
        <div>
            <TrackContainer 
                title="Master" 
                info="hi" 
                color="var(--red)"
            />
            <TrackContainer 
                title="Emerging"
                info="hi" 
                color="var(--purple)"
            />
        </div>
    </div>
    <div id="tracks">
        <h1><span class="number">Two</span> Tracks</h1>
        <div>
            <TrackContainer 
                title="Security"
                info="hi" 
                color="var(--blue)"
            />
            <TrackContainer 
                title="Sustainability" 
                info="hi" 
                color="var(--green)"
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
    color: var(--orange);
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

 @media only screen and (max-width: 500px) {
    #tracksAndDivisions {
        height: 190vh;
    }
 }

 .number {
     color: rgb(255, 255, 255);
 }
</style>