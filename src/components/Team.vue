<template>
<div id="team">
    <div class="titleContainer">
        <h1 id="meet-the">Meet The&nbsp;</h1>
        <h1 id="-team">Team</h1>
    </div>
    <div class="container">
        <TeamMember
            name="Bradley"
            role="Director of Technology"
            photo="hackwashulogo.png"
        />
        <TeamMember
            name="Emily"
            role="Director of Finance"
            photo="emsheehan.jpg"
        />
        <TeamMember
            name="Eugene"
            role="Director of Design"
            photo="eugenesong.jpeg"
        />
        <TeamMember
            name="Lisa"
            role="Co-Director of Communications"
            photo="lisahan.jpeg"
        />
        <TeamMember
            name="Mitch"
            role="Co-Director of Communications"
            photo="mitch.png"
        />
        <TeamMember
            name="Sam"
            role="Director of Operations"
            photo="samkim.jpg"
        />
        <TeamMember
            name="Jack"
            role="Co-Director of Technology"
            photo="jackh.jpeg"
        />
    </div>
</div>

</template>

<script>
import TeamMember from './TeamMember.vue'
import { lisa } from '../assets/lisahan.jpeg'

export default {
  name: 'Team',
  components: {
      TeamMember,
  },
  data() {
      return {
          lisaphoto: lisa,
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#team {
    min-height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 900px;
    margin-left: auto;
    margin-right: auto;
}

.titleContainer {
    display: flex;
}

#meet-the {
    color: white;
}

#-team {
    color: var(--orange);
}

@media only screen and (max-width: 500px) {
    #team {
        height: 105vh;
    }
}
</style>