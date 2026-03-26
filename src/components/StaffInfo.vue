<template>
  <v-container>
    <v-row>
      <AppBar></AppBar>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-card class="d-flex" color="#0D47A1">
          <v-col cols="3">
            <v-card title="總人數" :text="staff.length"></v-card>
          </v-col>
          <v-col cols="3">
            <v-card title="在線率" :text="`${isOnLine.toFixed(0)}%`"></v-card>
          </v-col>
          <v-col cols="3">
            <v-card
              title="高負載警示"
              :text="`${isHighLoad}`"
              class="text-red"
            ></v-card>
          </v-col>
          <v-col cols="3">
            <v-card title="代處理總數" :text="`${pending}`"></v-card>
          </v-col>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <search-area @submitData="receiveData"></search-area>
      </v-col>
    </v-row>
    <v-row>
      <StaffTable :sub="sub" />
    </v-row>
  </v-container>
</template>

<script setup>
import staff from "@/data/data.json";
import { computed } from "vue";
import SearchArea from "@/components/SearchArea";
import StaffTable from "@/components/StaffTable.vue";
import { ref } from "vue";
import AppBar from "@/components/AppBar.vue";

const isOnLine = computed(() => {
  return (
    (staff.filter((value) => {
      return value.status === "Online";
    }).length /
      staff.length) *
    100
  );
});

const isHighLoad = computed(() => {
  return staff.filter((value) => {
    return value.currentLoad / value.maxCapacity >= 0.9;
  }).length;
});

const pending = computed(() => {
  let i = 0;
  staff.forEach((element) => {
    i += element.currentLoad;
  });
  return i;
});

//接收emit
const sub = ref({});

const receiveData = (search) => {
  sub.value = search;
};
</script>
