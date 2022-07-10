<template>
<div class="container">
<h2>{{title}}</h2>
<p>{{text}}</p>
</div>
</template>

<script>

export default {
  name: 'TraDirContainer',
  components: {
  },
  props: ['title', 'text']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2 {
    text-align: left;
    position: relative;
    font-size: 1.5em;
    color: rgba(109, 223, 144, 1);
    top: 20px;
    left: 20px;
}

p {
    position: relative;
    top: calc(20px + 1em);
    color: white;
    text-align: left;
    margin: 0px 20px 50px;
}

.container {
    width: calc(50% - 10px);
    border-radius: 20px;
    background: rgba(32, 35, 53, 1);
    position: relative;
    margin: 2vh 0;
}

@media only screen and (max-width: 1000px) {
.container {
    width: 90%;
    margin-left: auto;
    margin-right: auto;
}
}
</style>