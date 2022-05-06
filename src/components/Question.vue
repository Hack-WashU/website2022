<template>
    <button @click="showAnswer=!showAnswer"><h2>{{this.question}}</h2><h2>+</h2></button>
    <div class="ans" v-show="showAnswer"><p>{{this.answer}}</p></div>
</template>

<script>
export default {
  name: 'Question',
  props: ['question', 'answer'],
  data() {
      return {
          showAnswer: false,
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button {
    display: flex;
    justify-content: space-between;
    width: 100%;
    background-color: rgba(8, 0, 63, 1);
    border: none;
    margin-top: 20px;
}

h2 {
    color: white;
    text-align: left;
}
 p {
     text-align: left;
     color: rgb(207, 207, 207);
     margin-top: 10px;
     margin-left: 5px;
     font-size: 24px;
     line-height: 1.3;
 }
</style>