<template>
<div>
    <div id="navBg">

    </div>
    <div id="mainNav">
        <img src="../assets/hackwashulogo.png">
        <ul id="navbar">
            <li><a href="#about"><h3>ABOUT</h3></a></li>
            <li><a href="#tracks"><h3>TRACKS</h3></a></li>
            <li><a href="#sponsors"><h3>SPONSORS</h3></a></li>
            <li><a href="#contact"><h3>CONTACT</h3></a></li>
        </ul>
    </div>
</div>
</template>

<script>



export default {
  name: 'NavBar',
  created() {
      if(window.innerWidth>500) {
          window.addEventListener('scroll', this.handleScroll)
      }
      window.addEventListener('resize', this.handleResize)
  },
  destroyed() {
      window.removeEventListener('scroll', this.handleScroll)
      window.removeEventListener('scroll', this.handleResize)
  },
  data() {
      return {
          scrollPosition: window.pageYOffset,
      }
  },
  methods: {
      handleScroll() {
        let currentScrollPos = window.pageYOffset;
        if(this.$data.scrollPosition > currentScrollPos) {
            document.getElementById("mainNav").style.top = "0";
            document.getElementById("navBg").style.top = "0";
        } else {
            document.getElementById("mainNav").style.top = "-12vh";
            document.getElementById("navBg").style.top = "-12vh";
        }
        this.$data.scrollPosition = currentScrollPos;
        console.log("hg")
      },
      handleResize() {
          if(window.innerWidth>500) {
              window.addEventListener('scroll', this.handleScroll)
          } else {
              window.removeEventListener('scroll', this.handleScroll)
          }
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#navbar {
    padding: 10PX;
}
ul {
    list-style-type: none;
}
li {
    display: inline;
    margin: 15px;
}
h3 {
    display: inline;
}
a {
    text-decoration: none;
    color: white;
}
img {
    width: 50px;
    margin:20px;
}
#mainNav {
    top: 0;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 12vh;
    transition: .3s;
    z-index: 3;
}
#navBg {
    position: fixed;
    top: 0;
    width: 100%;
    height: 12vh;
    background-color: var(--bg-color);
    filter: blur(7px);
    opacity: 0.7;
    transition: 0.3s;
    z-index: 3;
}

@media only screen and (max-width: 500px) {
    li {
        display: block;
    }
    #mainNav {
        flex-direction: column;
        align-items: flex-end;
        top: 0;
        z-index: 5;
    }
    #navBg {
        filter: none;
        opacity: 0;
    }
    #navbar {
        opacity: 0;
    }
}
</style>
