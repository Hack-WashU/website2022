<template>
    <div id="header">
        <img id="title" src="../assets/hackwashu-ab.svg" />
        <h2 id="date">OCTOBER 14 - 16, 2022</h2>
        <h2 id="interested">applications opening soon!</h2>
        <a id="subscribe">Soon™</a>
    </div>
</template>

<script>
import EmailList from './EmailList.vue'

export default {
  name: 'HeaderSection',
  components: {
    EmailList,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#subscribe {
    clear:both; 
    background-color: var(--green); 
    border: none;
    box-shadow: 2;
    color: var(--background); 
    cursor: pointer; 
    font-size: 1em; 
    font-weight: 600; 

    margin: 2vh;
    padding-left: 5vh;
    padding-right: 5vh;
    padding-top: 2vh;
    padding-bottom: 2vh;

    text-align: center;
} 

#title {
    width: 60%;
}

#header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    min-height: 60vh;
    padding-top: 10vh;
}

#date {
    color: var(--white)
}

#interested {
    color: var(--green)
}

h2 {
    color: var(--white);
    font-size: 32px;
    font-weight: 700;
    padding-top: 5vh;
    /* padding-bottom: 5vh; */
}

#hack {
    color: #FFFFFF;
}

@media only screen and (max-width: 800px) {
    #contents {
        padding: 80px 30px;
    }
    img {
        width: 50%;
    }
}

</style>
