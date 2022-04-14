<template>
    <div id="footer">
        <a href="https://hackwashu.io"><img id="logo" src="../assets/hackwashulogo.png" alt="Hack WashU Logo"></a>
        <p>have any questions?</p>
        <p>talk to us at <a id="mail" href="mailto:organizer@hackwashu.io">organizer@hackwashu.io</a></p>
        <div id="social-group">
            <img class="social" src="../assets/socials/Facebook.svg" alt="Facebook" />
            <img class="social" src="../assets/socials/Instagram.svg" alt="Instagram" />
            <img class="social" src="../assets/socials/Twitter.svg" alt="Twitter" />
            <img class="social" src="../assets/socials/LinkedIn.svg" alt="LinkedIn" />
            <img class="social" src="../assets/socials/YouTube.svg" alt="YouTube" />
        </div>
    </div>
</template>

<script>
export default {
  name: 'FooterSection'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#footer {
    padding: 5vw;
    background-color: #DADADA;
    position: relative;
}

#logo {
    width: 5%;
    height: auto;
    padding-bottom: 1vw;
}

#mail {
    color: #54CA78;
}

#social-group {
    margin-top: auto;
    float: right;
}

.social {
    height: auto;
    padding-left: 10px;
    padding-right: 10px;
}

@media only screen and (max-width: 1000px) {
    #social-group {
        padding-top: 2vw;
        float: none;
    }

    .social {
        width: 5%;
        height: auto;
    }
}

</style>