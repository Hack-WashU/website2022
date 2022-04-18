<template>
<div id="sponsors">
    <h1 id="sponsorTitle">SPONSORS</h1>
    <div class="sponsorList" data-aos="fade-left" data-aos-duration="1000">
        <h2>Coming Soon!</h2>
    </div>
    <h1 id="partnerTitle">PARTNERS</h1>
    <div class="sponsorList" data-aos="fade-right" data-aos-duration="1000">
        <img src="../assets/acm.png">
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
    min-height: 50vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 900px;
    margin-left: auto;
    margin-right: auto;
}

h1 {
    color: white;
    text-align: center;
    font-weight: 600;
    margin-bottom: 10px;
}

.sponsorList {
    height: 3em;
    background-color: rgba(134, 151, 244, 1);
    border-radius: 10px;
    width: 100%;
    margin-bottom: 5vh;
    padding: 10px;
}

img {
    max-width: 50px;
}

h2 {
    display: flex;
    align-items: center;
}

@media only screen and (max-width: 1000px) {
#sponsors {
    width: calc(80% - 20px);
}
}
</style>