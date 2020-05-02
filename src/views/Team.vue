<template>
  <div class="team">
    <p class="subheading grey--text">Team</p>

    <v-container class="my-5">
      
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 lg3 v-for="person in team" :key="person.name">
          <v-card flat class="text-xs-center ma-3 center">
            <v-responsive class="pt-4">
              <v-avatar size="100" class="grey lighten-2">
                <img :src="person.avatar">
              </v-avatar>
            </v-responsive>
            <v-card-text>
              <div class="subheading">{{ person.name }}</div>
              <div class="grey--text">{{ person.role }}</div>
            </v-card-text>
            <v-car-actions>
              <v-btn flat color="">
                <v-icon small left>message</v-icon>
                <span>Message</span>
              </v-btn>
            </v-car-actions>
          </v-card>
        </v-flex>
      </v-layout>

    </v-container>


  </div>
</template>

<script>
export default {
  data(){
    return {
      team: [
        {name: "Avee", role: "Tech Lead", avatar:'avatar-3.png'},
        {name: "Vtrev", role: "Developer", avatar:'/avatar-4.jpg'},
        {name: "Yiggy", role: "Developer", avatar:'avatar-1.png'},
        {name: "Magaola", role: "Developer", avatar:'/avatar-4.png'},
        {name: "Abby", role: "Graphic Designer", avatar:'/avatar-3.jpg'},
        {name: "Gorilla", role: "Sales Guru", avatar:'/avatar-2.jpg'},
      ]
    }
  }
};
</script>

<style>
</style>