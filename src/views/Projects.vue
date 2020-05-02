<template>
  <div class="projects">
    <p class="subheading grey--text ma-5">Projects</p>

    <v-container class="my-5">
      <v-expansion-panels>
        <v-expansion-panel v-for="project in myProjects" :key="project.title">
          <v-expansion-panel-header>{{project.title}}</v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-card>
              <v-card-text class="px-4 grey--text">
                <div class="fount-weight-bold">due by {{project.due}}</div>
                <div>{{project.content}}</div>
              </v-card-text>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-container>
  </div>
</template>
<script>
export default {
  data(){
    return {
      projects: [
        {
          title: "Create a Webapp using Vuejs",
          person: "Spike Lee",
          due: "31 May 2020",
          status: "ongoing",
          content: "Simple todo app"
        },
        {
          title: "Project Unknown",
          person: "you",
          due: "7 June 2020",
          status: "ongoing",
          content: "What if this was a cool project you're working on"
        },
        {
          title: "Greetings",
          person: "Booi",
          due: "16 July 2020",
          status: "ongoing",
          content: "Greet user in command line using Java"
        },
        {
          title: "BikeRide",
          person: "JavaXMafia",
          due: "10 September 2020",
          status: "completed",
          content: "Go for a bike ride in java"
        }
      ]
    }
  },
  computed:{
    myProjects(){
      return this.projects.filter(project => {
        return project.person === 'you'
      })
    }
  }
};
</script>

<style>
</style>
