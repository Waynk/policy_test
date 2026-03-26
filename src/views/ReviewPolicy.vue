<template>
  <v-container>
    <v-row>
      <v-col cols="8">
        <InfoPane></InfoPane>
      </v-col>
      <v-col cols="4">
        <RiskPane></RiskPane>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import InfoPane from "@/components/InfoPane.vue";
import RiskPane from "@/components/RiskPane.vue";
</script>
