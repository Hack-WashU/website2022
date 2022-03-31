<template>
    <div id="background">
        <div id="contents">
            <div id="left">
                <h1>Interested? </h1> 
                <h1><span id="hack">Join our Mailing List</span></h1>
            </div>
            <div id="mc_embed_signup">
                <form action="https://hackwashu.us14.list-manage.com/subscribe/post?u=d6407a071d93443bbb9a61e1c&amp;id=a3154e19e4" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
                    <div id="mc_embed_signup_scroll">
                        <div id="mc-field-group">

                            <input type="email" 
                                    value="" 
                                    placeholder="  Email Address" 
                                    name="EMAIL" 
                                    class="required email" 
                                    id="email">
                            <input type="submit" 
                                    value="SUBSCRIBE" 
                                    name="subscribe" 
                                    id="subscribe" 
                                    class="button">
                        </div>


                        <div id="mce-responses" class="clear foot">
                            <div class="response" id="mce-error-response" style="display:none"></div>
                            <div class="response" id="mce-success-response" style="display:none"></div>
                        </div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
                        <div style="position: absolute; left: -5000px;" aria-hidden="true">
                            <input type="text" name="b_d6407a071d93443bbb9a61e1c_a3154e19e4" tabindex="-1" value="">
                        </div>

                    </div>

                </form>
            </div>

<!--End mc_embed_signup-->
        </div>
    </div>
    
</template>

<script>
export default {
  name: 'EmailList'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#mc-field-group {
    position:relative; 
    width:100%; 
    padding-top: 2vh;
    padding-bottom:3%; 
    min-height:10vh;
}

#title {
    display: flex;
}

#email{
    width:50vh; 
    height:5vh;
    border: none;
}

#subscribe {
    clear:both; 
    background-color: #5144A6; 
    border: none;
    box-shadow: 2;
    transition: all 0.23s ease-in-out 0s; 
    color: white; 
    cursor: pointer; 
    display: inline-block; 
    font-size:16px; 
    font-weight: 700; 
    height: 5vh; 
    line-height: 32px; 
    text-align: center; 
    text-decoration: none; 
    vertical-align: top; 
    white-space: nowrap; 
    width: 15vh;
}

#hack {
    color: rgb(255, 255, 255);
}
#left {
    text-align: left;
    display: flex;
    flex-direction: column;
    max-width: 50vw;
    }

#background {
    padding-top: 5vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
#foot {
    display:grid; 
    grid-template-columns: 3fr 1fr; 
    width:96%; 
    align-items: center;
}

h1 {
    color: rgb(255, 171, 60);
}

h3 {
    color: rgb(255, 255, 255);
}



@keyframes bgcolorchange {
    0%   {background-color:rgb(255, 143, 143); box-shadow: 0px 0px 30px 20px rgba(255, 143, 143, 0.452);}
    25%  {background-color:rgb(255, 255, 155); box-shadow: 0px 0px 30px 20px rgba(255, 255, 155, 0.445);}
    50%  {background-color:rgb(206, 153, 255); box-shadow: 0px 0px 30px 20px rgba(206, 153, 255, 0.438);}
    75%  {background-color:rgb(162, 255, 162); box-shadow: 0px 0px 30px 20px rgba(162, 255, 162, 0.466);}
    100% {background-color:rgb(255, 159, 159); box-shadow: 0px 0px 30px 20px rgba(255, 159, 159, 0.432);}
}


@media only screen and (max-width: 500px) {
    #contents {
        padding: 80px 30px;
    }
}

</style>