<template>
  <v-card class="mx-auto" color="surface-light" max-width="400">
    <v-card-text>
      <v-text-field
        :loading="loading"
        append-inner-icon="mdi-magnify"
        density="compact"
        label="請輸入員工編號或員工姓名"
        variant="solo"
        hide-details
        single-line
        @click:append-inner="
          onClick();
          sendData();
        "
        v-model="search"
      ></v-text-field>
    </v-card-text>
  </v-card>
  <br />
  <v-select
    v-model="favorites"
    :items="states"
    hint="請選擇你想篩選的職級"
    label="請選擇職級"
    multiple
    single-line
    variant="outlined"
    persistent-hint
    @update:model-value="sendData"
  ></v-select>
  <v-chip-group
    v-model="attend"
    selected-class="v-chip--selected v-chip--variant-tonal text-deep-purple-accent-4"
    variant="outlined"
    mandatory
    @update:model-value="sendData"
  >
    <v-chip
      v-for="item in attends"
      :key="item"
      :text="item.state"
      :value="item.value"
    ></v-chip>
  </v-chip-group>
</template>
<script setup>
import { ref, defineEmits, onMounted } from "vue";
import { shallowRef } from "vue";

const loaded = ref(false);
const loading = ref(false);

function onClick() {
  loading.value = true;
  setTimeout(() => {
    loading.value = false;
    loaded.value = true;
  }, 2000);
}

//search
const search = ref("");

//v-selet
const favorites = shallowRef(["all"]);

const states = ref(["all", "Junior", "Senior", "Chief"]);

//v-chip-group
const attend = ref("all");

const attends = ref([
  { state: "全部", value: "all" },
  { state: "在線", value: "Online" },
  { state: "離線", value: "OnLeave" },
]);

//emit
const emit = defineEmits(["submitData"]);

function sendData() {
  emit("submitData", {
    search: search.value,
    favorites: favorites.value,
    attend: attend.value,
  });
}

onMounted(() => {
  sendData();
});
</script>
