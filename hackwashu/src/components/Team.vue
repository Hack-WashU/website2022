<template>
<div id="team">
    <div class="titleContainer">
        <h1 id="meet-the">meet the&nbsp;</h1>
        <h1 id="-team">team</h1>
    </div>
    <div class="container">
        <TeamMember
            name="Bradley"
            role="Director of Technology"
        />
        <TeamMember
            name="Emily"
            role="Director of Finance"
        />
        <TeamMember
            name="Eugene"
            role="Director of Design"
        />
        <TeamMember
            name="Lisa"
            role="Co-Director of Communications"
        />
        <TeamMember
            name="Mitch"
            role="Co-Director of Communications"
        />
        <TeamMember
            name="Sam"
            role="Director of Operations"
        />
        <TeamMember
            name="Dr. Neumann"
            role="Faculty Advisor"
        />
    </div>
</div>

</template>

<script>
import TeamMember from './TeamMember.vue'

export default {
  name: 'Team',
  components: {
      TeamMember,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#team {
    height: 80vh;
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

h1 {
    font-size: 3em;
}

#meet-the {
    color: white;
}

#-team {
    color: rgb(255, 171, 60);
}

@media only screen and (max-width: 1000px) {
    #team {
        height: 140vh;
    }
}
</style>