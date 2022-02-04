<template>
<ul id="navbar">
    <li><a href="#about">ABOUT</a></li>
    <li><a href="#tracks">TRACKS</a></li>
    <li><a href="#sponsors">SPONSORS</a></li>
    <li><a href="#contact">CONTACT</a></li>
</ul>
</template>

<script>
export default {
  name: 'NavBar',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#navbar {
    position: fixed;
    left: 0;
    padding: 10PX;
}
ul {
    list-style-type: none;
}
li {
    display: inline;
    margin: 15px;
}
a {
    text-decoration: none;
    color: azure;
}
</style>
