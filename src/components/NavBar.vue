<template>
  <div>
    <div id="navBg"></div>
    <div id="mainNav">
      <img src="../assets/hackwashulogo.png" />
      <a
        id="mlh-trust-badge"
        href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2023-season&utm_content=white"
        target="_blank"
        ><img
          src="https://s3.amazonaws.com/logged-assets/trust-badge/2023/mlh-trust-badge-2023-white.svg"
          alt="Major League Hacking 2023 Hackathon Season"
          style="width: 60%"
      /></a>
      <ul id="navbar">
        <li>
          <a href="#about"><h3>ABOUT</h3></a>
        </li>
        <li>
          <a href="#tracks"><h3>TRACKS</h3></a>
        </li>
        <li>
          <a href="#sponsors"><h3>SPONSORS</h3></a>
        </li>
        <li>
          <a href="#contact"><h3>CONTACT</h3></a>
        </li>
        <li>
          <a href="#FAQ"><h3>FAQ</h3></a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  created() {
    if (window.innerWidth > 500) {
      window.addEventListener("scroll", this.handleScroll);
    }
    window.addEventListener("resize", this.handleResize);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
    window.removeEventListener("scroll", this.handleResize);
  },
  data() {
    return {
      scrollPosition: window.pageYOffset,
    };
  },
  methods: {
    handleScroll() {
      let currentScrollPos = window.pageYOffset;
      if (this.$data.scrollPosition > currentScrollPos) {
        document.getElementById("mainNav").style.top = "0";
        document.getElementById("navBg").style.top = "0";
      } else {
        document.getElementById("mainNav").style.top = "-14vh";
        document.getElementById("navBg").style.top = "-14vh";
      }
      this.$data.scrollPosition = currentScrollPos;
      console.log("hg");
    },
    handleResize() {
      if (window.innerWidth > 500) {
        window.addEventListener("scroll", this.handleScroll);
      } else {
        window.removeEventListener("scroll", this.handleScroll);
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#mlh-trust-badge {
  display: block;
  max-width: 100px;
  min-width: 0px;
  position: absolute;
  left: 75px;
  top: 0px;
  width: 10%;
}

#navbar {
  padding: 10px;
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
  margin: 20px;
}
#mainNav {
  top: 0;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 12vh;
  transition: 0.3s;
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
  #mlh-trust-badge {
    left: 0px;
    width: 15%;
  }

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
