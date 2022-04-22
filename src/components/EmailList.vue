<template>
    <div id="background">
        <div id="contents">
            <div id="left">
                <h2 id="interested">interested? </h2> 
                <h2>join our mailing list!</h2>
            </div>
            <div id="mc_embed_signup">
                <form action="https://hackwashu.us14.list-manage.com/subscribe/post?u=d6407a071d93443bbb9a61e1c&amp;id=a3154e19e4" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
                    <div id="mc_embed_signup_scroll">
                        <div id="mc-field-group">

                            <input type="email" 
                                    value="" 
                                    placeholder="EMAIL ADDRESS" 
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
    font-family: 'Karla', sans-serif;
    color: black;
    width: 75%;
    height:5vh;
    border: none;
    margin-right: 10px;
    padding-left: 2vh;
}

#email ::placeholder {
    color: black;
}

#subscribe {
    font-family: 'Karla', sans-serif;
    clear:both; 
    background-color: #6DDF90; 
    border: none;
    box-shadow: 2;
    color: black; 
    cursor: pointer; 
    font-size: 1em; 
    font-weight: 500; 
    height: 5vh; 
    text-align: center; 
    vertical-align: top; 
    white-space: nowrap; 
    width: 25%;
} 

#hack {
    color: rgb(255, 255, 255);
}
#left {
    text-align: center;
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
    color: white;
    font-family: 'Karla', sans-serif;
    font-weight: 600;
}

#interested {
    color: #6DDF90;
}

@media only screen and (max-width: 500px) {
    #background {
        min-height: 20vh;
        width: 80%;
    }
        
    #subscribe {
        font-size: 0.9em; 
    } 
}

@media only screen and (max-width: 415px) {

    #subscribe {
        font-size: 0.75em; 
    } 
}

</style>