<template>
    <div id="header">
        <img src="../assets/hackwashubrookings.svg" alt="Hack WashU Logo">
        <h1>Hack WashU</h1>
        <!--<h1>2022</h1>i-->
        <h2>OCTOBER 14 - 16, 2022</h2>
    </div>
</template>

<script>
export default {
  name: 'HeaderSection'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
}

img {
    margin-bottom: 30px;
    max-width: 500px;
}

h1 {
    /* color: var(--green); */
    color: #A8E1BA;
    font-weight: 600;
}

h2 {
    font-family: 'Karla', sans-serif;
    padding-top: 2vh;
    /* color: var(--red); */
    color: #DF4E68;
    font-weight: 700;
}

@media only screen and (max-width: 800px) {
    #contents {
        padding: 80px 30px;
    }
    img {
        width: 50%;
    }
}

</style>
