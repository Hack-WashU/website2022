<template>
    <div id="header">
        <img id="title" src="../assets/hackwashu-ab.svg" />
        <div id="info">
            <h1 id="date">OCTOBER 14 - 16, 2022</h1>
            <h2 id="interested">applications opening soon!</h2>
            <a id="subscribe" href="https://register.hackwashu.com">
                <h2 id="soon">REGISTER NOW</h2>
            </a>
        </div>
        
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
    font-weight: 600; 

    margin: 2vh;
    width: 200px;
    height: 80px;

    text-align: center;
} 

#title {
    max-width: 1200px;
    margin-bottom: 4.5vh;
}

#info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

#header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 60vh;
    padding-top: 7vh;
}

#date {
    color: var(--white)
}

#interested {
    color: var(--green)
}

h2 {
    color: var(--white);
    margin-top: 5vh;
    /* padding-bottom: 5vh; */
}

#soon {
    margin: 0;
    color: var(--background); 
}

#hack {
    color: #FFFFFF;
}

@media only screen and (max-width: 800px) {
    #contents {
        padding: 80px 30px;
    }
    #title {
        width: 80vw;
    }
    #header {
        min-height: 90vh;
    }
    h2 {
        font-size: 1.2em;
        margin-top: 2vh;
    }
    #subscribe {
        width: 120px;
        height: 48px;
    }
}

</style>
