<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-select
          label="請選擇險種"
          :items="userProducts"
          item-title="prodName"
          item-value="prodCode"
          v-model="selectCode"
        />
        <v-text-field label="請輸入保額" v-model.number="sumAssured" />
        <v-btn
          @click="
            addPolicy({ prodCode: selectCode, sumAssured: sumAssured });
            clear;
          "
          >確認投保</v-btn
        >
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from "vue";
import { useInsurance, addPolicy } from "@/composables/useInsurance.js";
const { products } = useInsurance();
const userProducts = products;

//下拉選單
const selectCode = ref("");

const sumAssured = ref(0);

const clear = () => {
  sumAssured.value = null;
};
</script>
