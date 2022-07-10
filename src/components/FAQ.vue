<template>
<div id="FAQ">
    <h2>Frequently Asked <span>Questions</span></h2>
    <div class="questionsContainer">
        <Question
            question = "what is a hackathon?"
            answer = "A hackathon is an invention marathon where students build software around a central theme. At Hack WashU, you can look forward to amazing prizes, engaging speakers, and tons of skilled mentors!"
        />
        <Question
            question = "when is hack washu?"
            answer = "hack washu will start on the evening of September 9, 2022 and end on the morning of the 11th"
        />
        <Question
            question = "who can attend hack washu?"
            answer = "any college student in the continental United States can attend hack washu!"
        />
        <Question
            question = "is hack washu in-person?"
            answer = "hack washu will primarily be virtual, but there will be an in-person component for washu students"
        />
        <Question
            question = "is hack washu free?"
            answer = "YES!!!"
        />
        <Question
            question = "If I can't code, should I still come?"
            answer = "YES!!! Hack WashU will be an inclusive event for all"
        />
        <Question
            question = "Will there be swag?"
            answer = "YES!!!"
        />
        <Question
            question = "I have more questions"
            answer = "feel free to reach out to us at Organizer@HackWashu.io"
        />
    </div>
</div>
</template>


<script>
import Question from './Question.vue'

export default {
  name: 'FAQ',
  components: {
      Question,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#FAQ {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-bottom: 10vh;
    margin-top: 10vh;
}

.questionsContainer {
    width: 700px;
}

h2 {
    color: white;
    width: 200px;
    text-align: left;
    align-self:flex-start;
    margin-bottom: 1vh;
}

@media only screen and (max-width: 1000px) {
    .questionsContainer {
        width: 80%;
    }
    #FAQ {
        min-height: 50vh;
    }
    h2 {
        width: 80%;
        text-align: center;
        font-size: 2em;
        margin-bottom: 3vh;
    }
}

</style>