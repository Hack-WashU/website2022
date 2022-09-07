<template>
<div id="sponsors">
    <h1 id="sponsorTitle">Our <span>Sponsors</span></h1>
    <div class="sponsorList">
        <div class="sponsorsContainer" id="titleSponsors">
            <Sponsor 
                logoName="AB_Tech_Logo_Transparent.png"
                sponsorType="title"
            />
        </div>
        <div class="sponsorsContainer" id="platSponsors">
            <Sponsor 
                logoName="Mastercard.png"
                sponsorType="platinum"
            />
        </div>
        <div class="sponsorsContainer" id="goldSponsosrs">
            <Sponsor 
                logoName="Microsoft.png"
                sponsorType="gold"
            />
        </div>
        <div class="sponsorsContainer" id="silverSponsors">
            <Sponsor 
                logoName="zillow.png"
                sponsorType="silver"
            />
        </div>
        <div class="sponsorsContainer" id="bronzeSponsors">
            <Sponsor 
                logoName="cardinals.png"
                sponsorType="bronze"
            />
        </div>
    </div>
    <h1 id="partnerTitle">Our <span>Partners</span></h1>
    <div class="sponsorList">
        <Sponsor 
            logoName="acm.png"
            sponsorType="bronze"
        />
    </div>
    <h3>Want to sponsor us? Check out our <a href="https://drive.google.com/file/d/1hDLDHqmddTjC0cWv_k-60YEhz5GkceE9/view">guidelines</a> and reach out!</h3>
</div>
</template>

<script>
import Sponsor from './Sponsor.vue'

export default {
  name: 'Sponsors',
  components: {
      Sponsor,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#sponsors {
    min-height: 75vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
}

.sponsorsContainer {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
}

h1 {
    color: white;
    text-align: center;
}

h3 {
    color: white;
    font-family: 'Quicksand', sans-serif;
}

a {
    color: #6DDF90;
}

.sponsorList {
    min-height: 7em;
    background-color: rgba(32, 35, 53, 1);
    border-radius: 15px;
    width: 100%;
    margin-bottom: 5vh;
    margin-top: 1.5vh;
}

img {
    max-width: 50px;
}

h2 {
    display: flex;
    align-items: center;
    margin: 20px;
    color: white;
}

@media only screen and (max-width: 1000px) {
#sponsors {
    width: 80%;
}
}
</style>