<template>
<div class='member'>
    <div class="inner">
        <div class="front">
            <img :src="require(`../assets/${photo}`)">
            <div class="nameContainer">
                <h3>{{name}}</h3>
            </div>
        </div>
        <div class="back">
            <h3>{{role}}</h3>
        </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'TeamMember',
  props: ['name', 'role', 'link', 'photo'],
  data() {
      return {
          name: this.name,
          role: this.role,
          link: this.link,
          photo: this.photo,
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.member {
    height: 200px;
    width: 200px;
    margin: 10px;
    position: relative;
    perspective: 1000px;
}
.inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
}

img {
    height: 200px;
    width: 200px;
    border-radius: 100px;
}

.front, .back {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden; /* Safari */
    backface-visibility: hidden;
    border-radius: 100px;
}

.back {
    background-color: var(--orange);
    transform: rotateY(-180deg);
    display: flex;
    align-items: center;
    justify-content: center;
}

.back h3 {
    color: rgb(255, 255, 255);
}

.front {
    background-color: azure;
    display: flex;
    justify-content: center;
    overflow: hidden;
}

.nameContainer {
    display: flex;
    justify-content: center;
    position: absolute;
    top: 160px;
    width: 200px;
    background-color: white;
    height: 40px;
    display: flex;
    align-items: center;
}

.member:hover .inner {
    transform: rotateY(180deg);
}

@media only screen and (max-width: 500px) {
    .member {
        width: 150px;
        height: 150px;
    }
    .nameContainer {
        top: 125px;
        height: 25px;
    }
}

</style>