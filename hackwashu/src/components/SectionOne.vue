<template>
    <div id="background">
        <div id="contentsborder">
            <div id="contents">
                <h1><span id="hack">HACK</span>WASHU</h1>
                <h3>SEPTEMBER 9 - 11 2022</h3>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'SectionOne'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#title {
    display: flex;
}

#hack {
    color: azure;
}

#background {
    height: 90vh;
    background-color: rgb(0, 1, 24);
    display: flex;
    justify-content: center;
    align-items: center;
}

h1 {
    margin: 0;
    color: rgb(255, 171, 60);
    font-size: 3em;
}

h3 {
    margin: 0;
    color: azure;
}

#contentsborder {
    background-color: azure;
    padding: 3px;
    border-radius: 18px;
    animation: bgcolorchange 10s ease 2s infinite alternate;
    box-shadow: 0px 0px 40px 20px;
}

@keyframes bgcolorchange {
    0%   {background-color:rgb(255, 143, 143); box-shadow: 0px 0px 30px 20px rgba(255, 143, 143, 0.452);}
    25%  {background-color:rgb(255, 255, 155); box-shadow: 0px 0px 30px 20px rgba(255, 255, 155, 0.445);}
    50%  {background-color:rgb(206, 153, 255); box-shadow: 0px 0px 30px 20px rgba(206, 153, 255, 0.438);}
    75%  {background-color:rgb(162, 255, 162); box-shadow: 0px 0px 30px 20px rgba(162, 255, 162, 0.466);}
    100% {background-color:rgb(255, 159, 159); box-shadow: 0px 0px 30px 20px rgba(255, 159, 159, 0.432);}
}

#contents {
    background-color: rgba(0, 1, 24, 0.911);
    border-radius: 15px;
    padding: 90px;
}

@media only screen and (max-width: 1000px) {
    #contents {
        padding: 80px 30px;
    }

    h1 {
        font-size: 2em;
    }
}

</style>