<template>
  <div class="design grey lighten-2">
    <div class="container">
      <p class="headline">Text & Colors</p>
      <p
        class="red white--text"
      >Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos dolore expedita facilis. In eveniet vitae atque facilis odit maxime labore nostrum, nemo totam illo iste quod cum eos ipsam quos.</p>
      <p
        class="white lighten-4 black--text text--lighten-1"
      >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae, veniam. Magni blanditiis consectetur repudiandae dignissimos sequi, omnis possimus esse sit consequuntur veniam! Corporis iste esse qui doloremque. Veniam, blanditiis illo!</p>
      <h1 class="display-4">Massive Display</h1>
      <h6 class="display-4">Smaller display</h6>
      <p class="headline">This is a headline</p>
      <p class="subheading">This is a subheading</p>
      <p class="caption">This is a caption</p>
      <br />
      <p class="headline">Buttons & Icons</p>
      <v-btn class="green white--text">click me</v-btn>
      <br />
      <br />
      <v-btn depressed color="green" dark>click me</v-btn>
      <br />
      <br />
      <v-btn text color="green">click me</v-btn>
      <br />
      <br />
      <v-btn depressed color="green white--text">
        <v-icon left>email</v-icon>
        <span>email me</span>
      </v-btn>
      <br />
      <br />
      <v-btn depressed small color="green white--text">
        <v-icon left small>email</v-icon>
        <span>email me</span>
      </v-btn>
      <br />
      <br />
      <v-btn depressed large color="green white--text">
        <span>email me</span>
        <v-icon right large>email</v-icon>
      </v-btn>
      <br />
      <br />
      <v-btn fab depressed large color="green white--text">
        <v-icon>favorite</v-icon>
      </v-btn>
    </div>
  </div>
</template>