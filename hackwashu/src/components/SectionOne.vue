<template>
    <div id="background">
        <div id="contentsborder">
            <div id="contents">
                <h1><span id="hack">Hack </span>WashU</h1>
                <h3>September 9 - 11 2022</h3>
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
    color: rgb(255, 255, 255);
}

#background {
    height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

h1 {
    margin: 0;
    color: rgb(255, 171, 60);
    font-size: 3em;
    font-family: Mont;
}

h3 {
    margin: 0;
    color: rgb(255, 255, 255);
    font-family: Mont;
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
    background-color: #08003F;
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