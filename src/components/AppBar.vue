<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-app-bar
          color="teal-darken-4"
          image="https://picsum.photos/1920/1080?random"
          :height="80"
        >
          <template v-slot:image>
            <v-img gradient="to top right, #1A237E, #000000CC"></v-img>
          </template>

          <template v-slot:prepend>
            <v-app-bar-nav-icon
              @click="$emit('toggle-drawer')"
            ></v-app-bar-nav-icon>
          </template>

          <v-app-bar-title>保險業務員管理與被保險人核保系統</v-app-bar-title>

          <v-btn to="staff">保險人員管理介面</v-btn>
          <v-btn to="users">被保險人名單</v-btn>
          <v-btn to="calculate">保險試算</v-btn>
          <v-btn to="jobtask" class="me-8">任務清單</v-btn>
        </v-app-bar>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { defineEmits } from "vue";

defineEmits(["toggle-drawer"]);
</script>
