<template>
    <div id="background">
        <div id="contentsborder">
            <div id="contents">
                <!-- Begin Mailchimp Signup Form -->
                <div id="mc_embed_signup">
                <form action="https://hackwashu.us14.list-manage.com/subscribe/post?u=d6407a071d93443bbb9a61e1c&amp;id=a3154e19e4" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
                    <div id="mc_embed_signup_scroll">
                    <h2>Subscribe</h2>
                <div class="indicates-required"><span class="asterisk">*</span> indicates required</div>
                <div class="mc-field-group">
                    <label for="mce-EMAIL">Email Address  <span class="asterisk">*</span>
                </label>
                    <input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL">
                </div>
                    <div id="mce-responses" class="clear foot">
                        <div class="response" id="mce-error-response" style="display:none"></div>
                        <div class="response" id="mce-success-response" style="display:none"></div>
                    </div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
                    <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_d6407a071d93443bbb9a61e1c_a3154e19e4" tabindex="-1" value=""></div>
                        <div class="optionalParent">
                            <div class="clear foot">
                                <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button">
                                <p class="brandingLogo"><a href="http://eepurl.com/hWhZdL" title="Mailchimp - email marketing made easy and fun"><img src="https://eep.io/mc-cdn-images/template_images/branding_logo_text_dark_dtp.svg"></a></p>
                            </div>
                        </div>
                    </div>
                </form>
                </div>

<!--End mc_embed_signup-->
            </div>
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
#title {
    display: flex;
}

#hack {
    color: rgb(255, 255, 255);
}

#background {
    height: 70vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

h1 {
    color: rgb(255, 171, 60);
}

h3 {
    color: rgb(255, 255, 255);
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

@media only screen and (max-width: 500px) {
    #contents {
        padding: 80px 30px;
    }
}

</style>