<template>
<div id="about">
   <div id="left">
       <h1 id="a">About</h1>
       <h1>Hack WashU</h1>
       <p>
           At HackWashU, you'll meet fellow hackers from around the country, learn new skills, and work alongside seasoned mentors. We'll have free workshops, lecture series, mentorship, prizes, games, and more. Don't have a team, or even an idea? Don't worry! We'll give you the tools to build something incredible.
       </p>
       <p>
           For 36 hours from September 9th to September 11th, you’ll have the opportunity to collaborate and build out brilliant, innovative, and impactful ideas.
       </p>
   </div>
   <div id="right">
       <img src="../assets/hackwashulogo.png">
   </div>
</div>
</template>

<script>

export default {
  name: 'About',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#about {
    min-height: 80vh;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
}
#a {
    color: rgb(255, 255, 255);
}
#left {
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 450px;
    padding: 20px;
}
img {
    width: 80%;
    height: auto;
    align-self: center;
    max-width: 300px;
}
#right {
    width: 25%;
    max-width: 600px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

h1 {
    color: var(--orange);
}

p {
    color: white;
    font-family: Mont;
    line-height: 2;
}

@media only screen and (max-width: 1000px) {
    #about {
        min-height: 130vh;
    }
    #right {
        width: 70%;
    }
    img {
        width: 100%;
    }
}
</style>