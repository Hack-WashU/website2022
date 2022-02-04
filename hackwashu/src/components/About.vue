<template>
<div id="about">
   <div id="title">
       <h1>about</h1>
       <h1>HACKWASHU</h1>
   </div>
   <div id="description">
       <p>
           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
       </p>
       <p>
           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
       </p>
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
    width: 100vw;
    height: 100vh;
    background-color: rgb(0, 1, 24);
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
}
#title {
    text-align: left;
    padding: 30px;
}
#description {
    width: 40%;
    border: rgb(255, 171, 60) 2px solid;
    padding: 20px;
    border-radius: 20px;
    margin-left: 30px;
    box-shadow: 0px 0px 20px 10px rgb(255, 171, 60);
}

h1 {
    color: rgb(255, 171, 60);
    font-size: 3em;
    margin: 0;
}

p {
    color: azure;
}

@media only screen and (max-width: 1000px) {
    #about {
        height: 110vh;
    }
    #description {
        width: 70%;
        margin-left: 0px;
    }
}
</style>