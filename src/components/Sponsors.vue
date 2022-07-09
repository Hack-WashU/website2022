<template>
<div id="sponsors">
    <h1 id="sponsorTitle">Our <span>Sponsors</span></h1>
    <div class="sponsorList" data-aos="fade-left" data-aos-duration="1000">
        <h2>Coming Soon!</h2>
    </div>
    <h1 id="partnerTitle">Our <span>Partners</span></h1>
    <div class="sponsorList" data-aos="fade-right" data-aos-duration="1000">
        <img src="../assets/acm.png">
    </div>
    <h3>Want to sponsor us? Check out our <a href="https://drive.google.com/file/d/1hDLDHqmddTjC0cWv_k-60YEhz5GkceE9/view">guidelines</a> and reach out!</h3>
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
    min-height: 75vh;
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
    margin-bottom: 10px;
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