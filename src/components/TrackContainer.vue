<template>

<div class="track" :style="`--element-color: ${color}`" data-aos="flip-right" data-aos-duration="1000">
    <h2>{{title}}</h2>
    <i :class="`${logo}`"></i>
</div>
</template>

<script>

export default {
  name: 'TrackContainer',
  props: ['title', 'info', 'color', 'logo'],
  data() {
      return {
          title: this.title,
          info: this.info,
          color: this.color,
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.track {
    width: 20%;
    max-width: 400px;
    height: 20vw;
    max-height: 400px;
    margin: 30px;
    border: 2px;
    border: 5px solid var(--element-color);
    border-radius: 30px;
    box-shadow: 0px 0px 20px 10px var(--element-color);
    animation: breath 2s ease 2s infinite alternate;
}

h2 {
    color: rgb(255, 255, 255);
    margin: 20px;
}

@keyframes breath {
    0% {box-shadow: 0px 0px 0px 0px var(--element-color);}
    100% {box-shadow: 0px 0px 20px 10px var(--element-color);}
}

@media only screen and (max-width: 500px) {
    .track {
        width: 70vw;
        height: 70vw;
    }
}
</style>