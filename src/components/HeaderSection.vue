<template>
    <div id="header">
        <img id="title" class="desktop" src="../assets/ABTechPNG.png" />
        <img id="title" class="mobile" src="../assets/mobileImage.svg" />
        <div id="info">
            <h1 id="date">OCTOBER 14 - 16 2022</h1>
            <button class="subscribe">
                <h2 id="soon">Applications are Closed!</h2>
            </button>
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

.subscribe {
    clear:both; 
    background-color: rgb(50, 52, 62);
    border: 1px solid var(--white);
    border-radius: 12px;
    box-shadow: 2;
    color: var(--white); 
    cursor: pointer; 
    font-weight: 600; 

    margin: 3vh;
    width: 200px;
    height: 80px;

    text-align: center;
} 
.subscribe:hover {
    border: 2px solid rgba(149, 255, 182, 1);
    background-color: rgba(49, 107, 67, 1);

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

@media only screen and (max-width: 1000px) {
    #contents {
        padding: 80px 30px;
    }
    #header {
        min-height: 90vh;
    }
    h2 {
        font-size: 1.2em;
        margin-top: 2vh;
    }
    .subscribe {
        width: 120px;
        height: 55px;
    }

    .desktop {
        display: none;
    }

    img {
        width: 100%;
    }
    #title {
        margin-bottom: 0vh;
    }
    #date {
        width: 80%;
        font-size: 7vw;
    }
}

@media only screen and (min-width: 1000px) {
    .mobile {
        display: none;
    }
}

img {
    margin: 0;
    padding: 0;
}

</style>
