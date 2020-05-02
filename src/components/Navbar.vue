<template>
  <nav>
    <v-app-bar flat app dark class="black lighten-1">
      <v-app-bar-nav-icon app @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title class="text-uppercase">
        <span class="font-weight-bold ">Todo</span>
        <span class="font-weight-bold grey--text">App</span>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-menu>
        <template v-slot:activator="{ on }">
          <v-btn text class="white--text" dark v-on="on">
            <v-icon>expand_more</v-icon>
            <span>Menu</span>
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
            <v-list-item-title>{{ link.text }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
     

      <!-- <v-btn small text color="#ccc">
        <span>Sign Out</span>
        <v-icon right>exit_to_app</v-icon>
      </v-btn> -->
    </v-app-bar>

    <v-navigation-drawer app v-model="drawer" class="cyan darken-4">
      <v-layout column align-center>
        <v-flex mt-5>
          <v-avatar size="100">
            <img src="/avatar-1.jpg" />
          </v-avatar>
          <p class="white--text subheading mt-1">Spike Lee</p>
        </v-flex>
        <v-flex class="mt-4 mb-3">
          <Popup />
        </v-flex>
      </v-layout>
      <v-list dense nav>
        <v-list-item v-for="item in links" :key="item.text" link router :to="item.route">
          <v-list-item-icon>
            <v-icon class="white--text">{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="white--text">{{ item.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>
<script>
import Popup from "./Popup";

export default {
  components: { Popup },
  data() {
    return {
      drawer: false,
      links: [
        { icon: "dashboard", text: "Dashboard", route: "/" },
        { icon: "folder", text: "Projects", route: "/projects" },
        { icon: "person", text: "Team", route: "/team" },
        { icon: "emoji_objects", text: "Playground", route: "/playground" }
      ]
    };
  }
};
</script>