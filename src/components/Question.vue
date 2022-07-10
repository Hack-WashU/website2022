<template>
<div class="container" :class="{'active_container':showAnswer}">
    <button @click="showAnswer=!showAnswer" :class="{'active_button':showAnswer, 'initial_button':!showAnswer}">
        <h2>{{this.question}}</h2><font-awesome-icon icon="fa-solid fa-user-secret" />
    </button>
    <div class="ans" v-show="showAnswer"><p>{{this.answer}}</p></div>
</div>
</template>

<script>
export default {
  name: 'Question',
  props: ['question', 'answer'],
  data() {
      return {
          showAnswer: false,
      }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button {
    display: flex;
    justify-content: space-between;
    width: 100%;
    border: none;
    padding: 20px;
    border-radius: 15px;
}


.initial_button {
    background: rgba(32, 35, 53, 1);
}
.initial_button:hover {
    border: 2px solid rgba(149, 255, 182, 1);
    background: rgba(49, 107, 67, 1);
    margin: -2px;
}


.active_button {
    background: rgba(49, 107, 67, 1);
}

h2 {
    color: white;
    text-align: left;
}
 p {
     text-align: left;
     color: white;
     margin-top: 10px;
     margin-left: 0px;
     font-size: 1em;
     line-height: 1.3;
     padding: 0px 20px 20px 20px;
 }

 .container {
     border-radius: 15px;
     background: rgba(49, 107, 67, 1);
     margin-bottom: 20px;
 }

.active_container {
    border: 2px solid rgba(149, 255, 182, 1);
    margin-left: -2px;
}

</style>