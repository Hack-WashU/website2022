<template>
<div id="about">
   <div id="title">
       <h1 id="a">About</h1>
       <h1>Hack WashU</h1>
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
#title {
    text-align: left;
    padding: 30px;
}
#description {
    width: 40%;
    max-width: 600px;
    border: rgb(255, 255, 255) 3px solid;
    padding: 20px;
    border-radius: 20px;
    margin-left: 30px;
}

h1 {
    color: var(--orange);
}

p {
    color: white;
    font-family: Mont;
}

@media only screen and (max-width: 500px) {
    #about {
        min-height: 130vh;
    }
    #description {
        width: 70%;
        margin-left: 0px;
    }
}
</style>