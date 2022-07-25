<template>
    <div id="footer">
        <img id="footerimg" src="../assets/hwu-footer.svg" />
        <p id="mlh"><a id="mlh" href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf">MLH Code of Conduct</a></p>
        <p>have any questions?</p>
        <p>talk to us at <a id="mail" href="mailto:organizer@hackwashu.io">organizer@hackwashu.io</a></p>
        <div id="social-group">
            <a href="https://www.linkedin.com/company/hack-washu/"><img class="social" src="../assets/socials/LinkedIn.svg" alt="LinkedIn" /></a>
            <a href="https://instagram.com/hackwashu"><img class="social" src="../assets/socials/Instagram.svg" alt="Instagram" /></a>
            <a href="https://github.com/hack-washu"><img class="social" src="../assets/socials/Github.svg" alt="Github" /></a>"
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

img {
    padding-bottom: 5vw;
    /* background-color: #DADADA; */
    position: relative;
}

#mlh {
    color: white;
    padding-bottom: 20px;
}

#footerimg {
    width: 60%;
}

#mail {
    color: #54CA78;
}

#social-group {
    margin-top: 2vh;
}

.social {
    color: #54CA78;
    height: auto;
    height: 2em;
    padding-left: 10px;
    padding-right: 10px;
}

p {
    color: var(--white)
}

@media only screen and (max-width: 1000px) {
    .social {
        width: 5%;
        height: auto;
    }
}

</style>