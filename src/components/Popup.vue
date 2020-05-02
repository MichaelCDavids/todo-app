<template>
  <div class="text-center">
    <v-dialog max-width="600px">
      <template v-slot:activator="{ on }">
        <v-btn color="blue lighten-2" dark v-on="on">Add new project</v-btn>
      </template>

      <v-card>
        <v-card-title class="headline grey lighten-2" primary-title>
          <h2>Add new project</h2>
        </v-card-title>

        <v-card-text>
          <v-form class="px-3" ref="form">
            <v-text-field label="Title" v-model="title" prepend-icon="folder" :rules="inputRules"></v-text-field>
            <v-textarea
              prepend-icon="edit"
              name="input-7-1"
              label="Information"
              hint="something cool about the project"
              v-model="content"
              :rules="inputRules"
            ></v-textarea>
            <v-container>
              <v-row>
                <v-col cols="12" lg="6">
                  <v-menu v-model="dueDatePicker" :close-on-content-click="false" max-width="290">
                    <template v-slot:activator="{ on }">
                      <v-text-field
                        :rules="inputRules"
                        :value="computedDateFormattedMomentjs"
                        clearable
                        label="Due Date"
                        readonly
                        prepend-icon="date_range"
                        v-on="on"
                        @click:clear="date = null"
                      ></v-text-field>
                    </template>
                    <v-date-picker v-model="date" @change="dueDatePicker = false"></v-date-picker>
                  </v-menu>
                </v-col>
              </v-row>
            </v-container>
          </v-form>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn class="primary mx-0 mt-3" text @click="submit">Add project</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import moment from "moment";
import { format, parseISO } from "date-fns";

export default {
  data() {
    return {
      title: "",
      content: "",
      date: parseISO(new Date().toISOString().substr(0, 10)),
      dueDatePicker: false,
      inputRules:[
        v => v.length >= 5 || "Minimum length is 5"
      ]
      // menu2: false,
    };
  },
  computed: {
    computedDateFormattedMomentjs() {
      return this.date ? moment(this.date).format("dddd, MMMM Do YYYY") : "";
    },
    computedDateFormattedDatefns() {
      return this.date ? format(this.date, "EEEE, MMMM do yyyy") : "";
    }
  },
  methods: {
    submit() {
      if(this.$refs.form.validate()){

        console.log(this.title, this.content, this.computedDateFormattedMomentjs);
      }
    }
  }
};
</script>

<style>
</style>