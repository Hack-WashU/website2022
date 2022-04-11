<template>
<div id="FAQ">
    <div class="titleContainer">
        <h1><span class="highlight">F</span>requently <span class="highlight">A</span>sked <span class="highlight">Q</span>uestions</h1>
    </div>
    <div class="questionsContainer">
        <div class="question">
            <h2><span class="highlight">Q</span> >> What is this?</h2>
            <h2><span class="highlight">A</span> >> Questions and answers will go here (site is under construction).</h2>
        </div>

    </div>
</div>
</template>





<script>
export default {
  name: 'FAQ',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#FAQ {
    min-height: 50vh;
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 5vh;
}

h2 {
    font-size: 1.5em;
}

.questionsContainer {
    display: flex;
    flex-wrap: wrap;
    justify-content: left;
    max-width: 900px;
    margin-left: auto;
    margin-right: auto;
    flex-direction: column;
}

.question {
    display: flex;
    text-align: left;
    flex-direction: column;
    color: LightGrey;
    margin-top: 3vh;
    margin-right: 5vh;
    margin-left: 10vh;
}

.titleContainer {
    display: flex;
    color: white;
}

.highlight {
    color: var(--orange);
}

</style>