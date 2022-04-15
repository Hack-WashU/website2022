<template>
    <div id="background">
        <div id="contents">
            <div id="left">
                <h2>Interested? </h2> 
                <h2><span id="hack">Join our Mailing List</span></h2>
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
    padding-top: 2vh;
    min-height:10vh;
    display: flex;
}

#contents {
   width: 100%;
}

#email{
    width: 75%;
    padding: 0;
    height:4vh;
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
    font-size:10px; 
    font-weight: 700; 
    height: 4vh; 
    line-height: 32px; 
    text-align: center; 
    text-decoration: none; 
    vertical-align: top; 
    white-space: nowrap; 
    width: 25%;
}

#hack {
    color: rgb(255, 255, 255);
}
#left {
    text-align: left;
    display: flex;
    flex-direction: column;
    }

#background {
    padding-top: 5vh;
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
}
#foot {
    display:grid; 
    grid-template-columns: 3fr 1fr; 
    width:96%; 
    align-items: center;
}

h2 {
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
    #background {
        min-height: 20vh;
        width: 80%;
    }
}

</style>