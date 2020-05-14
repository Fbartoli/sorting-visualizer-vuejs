<template>
  <v-app id="inspire">
    <v-app-bar app clipped-left color="red" dense>
      <v-toolbar-title class="mr-12 align-center">
        <span class="title">Sorting visualiser</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn class="mr-5" @click="random(width)">New Array</v-btn>
      <v-select v-model="value" :items="sortType"></v-select>
      <v-btn class="mr-5" @click="sort(value, delay)">Sort</v-btn>
    </v-app-bar>

    <v-content>
      <v-container class="fill-height">
        <v-row justify="center" align="center">
          <v-col class="shrink">
            <arraydisplay />
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import arraydisplay from "./components/Array";
import { mapActions } from "vuex";

export default {
  components: { arraydisplay },
  data() {
    return {
      value: "Bubble sort",
      delay: 10,
      sortType: ["Bubble sort", "Insertion sort", "Selection sort"],
      width: 10
    };
  },
  methods: {
    ...mapActions({
      random: "generateRandomArray", // map `this.add()` to `this.$store.dispatch('increment')`
      sort: "sort"
    })
  },
  created() {
    this.$vuetify.theme.dark = true;
    this.random(10);
  }
};
</script>
<style scoped>
</style>
