<template>
<img 
    :src="require(`../assets/${logoName}`)"
    :class="sponsorType"
>
</template>

<script>
export default {
    props: ['logoName', 'sponsorType']
}
</script>

<style scoped>

img {
    height: auto;
    margin: 20px;
}
.title {
    max-width: 800px;
}
.platinum {
    max-width: 400px;
}
.gold {
    max-width: 300px;
}
.silver {
    max-width: 250px;
}
.bronze {
    max-width: 150px;
}

@media only screen and (max-width: 1000px) {
.title {
    max-width: 80%;
}
.platinum {
    max-width: 65%;
}
.gold {
    max-width: 45%;
}
.silver {
    max-width: 30%;
}
.bronze {
    max-width: 25%;
}
}
</style>
