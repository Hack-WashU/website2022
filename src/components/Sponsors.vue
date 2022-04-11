<template>
<div id="sponsors">
    <h1 id="sponsorTitle">Sponsors</h1>
    <div class="sponsorList" data-aos="fade-left" data-aos-duration="1000">
        <h2>Coming Soon!</h2>
    </div>
    <h1 id="partnerTitle">Partners</h1>
    <div class="sponsorList" data-aos="fade-right" data-aos-duration="1000">
        <h2><img src="../assets/acm.png">WashU ACM</h2>
    </div>
</div>
</template>

<script>
export default {
  name: 'Sponsors',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#sponsors {
    padding-top: 8rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 55vw;
    margin: auto;
}

h1 {
    color: rgb(255, 255, 255);
    text-align: left;
    margin-left: 4%;
}

.sponsorList {
    margin-left: auto;
    margin-right: auto;
    height: 3em;
    background-color: azure;
    border-radius: 20px;
    padding: 20px;
    width: 50vw;
    margin-bottom: 5vh;
}

img {
    width: 50px;
}

h2 {
    display: flex;
    align-items: center;
}
</style>