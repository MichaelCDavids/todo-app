<template>
  <div class="dashboard">
    <p class="subheading grey--text ma-5">Dashboard</p>

    <v-container class="my-2 mx3">
      <v-layout row class="mb-4">
        
        <v-tooltip top>
          <template v-slot:activator="{ on }">
          <v-btn small text color="grey" @click="sortBy('title')" slot="activator" dark v-on="on">
            <v-icon left small>folder</v-icon>
            <span class="caption text-lowercase">By Title</span>
          </v-btn>
          </template>
          <span>Sort by project title</span>
        </v-tooltip>
        <v-tooltip top>
          <template v-slot:activator="{ on }">
          <v-btn small text color="grey" @click="sortBy('person')" slot="activator" dark v-on="on">
            <v-icon left small>person</v-icon>
            <span class="caption text-lowercase">By person</span>
          </v-btn>
          </template>
          <span>Sort by person name</span>
        </v-tooltip>
        <!-- <v-btn small flat color="grey" @click="sortBy('person')">
          <v-icon left small>person</v-icon>
          <span class="caption text-lowercase">By person</span>
        </v-btn>-->
      </v-layout>

      <v-card flat class="ma-3 grey lighten-5" v-for="project in projects" :key="project.title">
        <v-layout row wrap :class="`pa-3 project ${project.status}`">
          <v-flex xs12 md6>
            <div class="caption grey--text">Project Title</div>
            <div>{{project.title}}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Person</div>
            <div>{{project.person}}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Due by</div>
            <div>{{project.due}}</div>
          </v-flex>
          <v-flex xs2 sm4 md2>
            <div class="right">
              <v-chip
                small
                :class="`${project.status === 'complete' ? 'green' : project.status === 'overdue' ? 'red' : 'orange'} white--text caption my-2`"
              >{{ project.status }}</v-chip>
            </div>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
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
          status: "complete",
          content: "Go for a bike ride in java"
        }
      ]
    };
  },
  methods: {
    sortBy(prop) {
      this.projects.sort((a, b) => (a[prop] < b[prop] ? -1 : 1));
    }
  }
};
</script>
<style >
.project.complete {
  border-left: 6px solid green;
}
.project.ongoing {
  border-left: 6px solid orange;
}
.project.overdue {
  border-left: 6px solid red;
}
</style>