<template>
<div id="sponsors">
    <h1 id="sponsorTitle">SPONSORS</h1>
    <div class="sponsorList" data-aos="fade-left" data-aos-duration="1000">
        <h2>Coming Soon!</h2>
    </div>
    <h1 id="partnerTitle">PARTNERS</h1>
    <div class="sponsorList" data-aos="fade-right" data-aos-duration="1000">
        <h2><img src="../assets/acm.png">WASHU ACM</h2>
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
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

h1 {
    font-size: 3em;
    color: rgb(255, 171, 60);
    text-align: left;
    margin-left: 5%;
}

.sponsorList {
    margin-left: auto;
    margin-right: auto;
    background-color: azure;
    border-radius: 20px;
    padding: 20px;
    width: 80vw;
}

img {
    width: 50px;
}

h2 {
    display: flex;
    align-items: center;
}
</style>