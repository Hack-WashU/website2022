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
    object-fit: cover;
    height: auto;
}
.title {
    width: 400px;
}
.platinum {
    width: 200px;
}
.gold {
    width: 150;
}
.silver {
    width: 100px;
}
.bronze {
    width: 50px;
}
</style>
