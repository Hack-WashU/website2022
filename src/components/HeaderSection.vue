<template>
    <div id="header">
        <h1>Hack <span id="hack">WashU</span></h1>
        <h2>OCTOBER 14 - 16, 2022</h2>
        <EmailList />
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
#header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 75vh;
    font-family: 'Quicksand', sans-serif;
}

h1 {
    color: var(--green);
    font-size: 65px;
    font-weight: 800;
}

h2 {
    color: var(--white);
    font-size: 24px;
    font-weight: 600;
    padding-top: 5vh;
    padding-bottom: 5vh;
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
