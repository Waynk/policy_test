<template>
  <v-container>
    <v-row>
      <v-col cols="4">
        <UserInfo></UserInfo>
      </v-col>

      <v-col cols="8">
        <CalculateResult></CalculateResult>
      </v-col>
    </v-row>
    <br />
    <br />
    <br />
    <v-row>
      <v-col cols="4">
        <InsuranceCondition></InsuranceCondition>
      </v-col>
      <v-col cols="8">
        <HistoryRecord></HistoryRecord>
      </v-col>
    </v-row>
  </v-container>
  <AppFooter />
</template>

<script setup>
//import { ref } from 'vue'
import UserInfo from "../components/UserInfo";
import InsuranceCondition from "../components/InsuranceCondition.vue";
import CalculateResult from "../components/CalculateResult.vue";
import HistoryRecord from "../components/HistoryRecord.vue";
import AppFooter from "@/components/AppFooter.vue";
</script>
