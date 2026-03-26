<template>
  <v-app>
    <AppBar @toggle-drawer="drawer = !drawer"></AppBar>
    <v-navigation-drawer
      v-model="drawer"
      :location="$vuetify.display.mobile ? 'bottom' : undefined"
      temporary
    >
      <v-list :items="items"></v-list>
    </v-navigation-drawer>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup>
import AppBar from "./components/AppBar.vue";
import { ref } from "vue";

const drawer = ref(false);

const items = [
  {
    title: "保險人員管理介面",
    value: "staff",
    props: {
      to: "staff",
      prependIcon: "mdi-account-tie",
    },
  },
  {
    title: "被保險人名單",
    value: "users",
    props: {
      to: "users",
      prependIcon: "mdi-seatbelt",
    },
  },
  {
    title: "保險試算",
    value: "calculate",
    props: {
      to: "calculate",
      prependIcon: "mdi-counter",
    },
  },
  {
    title: "任務清單",
    value: "jobtask",
    props: {
      to: "jobtask",
      prependIcon: "mdi-calendar-check",
    },
  },
];
</script>
