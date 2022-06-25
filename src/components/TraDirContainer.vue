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
    position: absolute;
    font-size: 1.5em;
    color: rgba(109, 223, 144, 1);
    top: 20px;
    left: 20px;
}

p {
    position: absolute;
    top: calc(20px + 2em);
    color: white;
    text-align: left;
    line-height: 1.5em;
    margin: 10px 20px;
}

.container {
    width: calc(50% - 10px);
    min-height: 200px;
    border-radius: 20px;
    background: rgba(32, 35, 53, 1);
    position: relative;
    margin: 1.5vh 0;
}

@media only screen and (max-width: 1000px) {
.container {
    width: 90%;
    margin-left: auto;
    margin-right: auto;
}
}
</style>