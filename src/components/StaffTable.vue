<template>
  <v-data-table :headers="header" :items="filStaff">
    <template v-slot:[`item.caseLoad`]="{ item }">
      <v-progress-linear
        color="blue-darken-3"
        :model-value="(item.currentLoad / item.maxCapacity) * 100"
        :height="12"
        striped
      ></v-progress-linear>
    </template>
    <template v-slot:[`item.life`]="{ item }">
      {{ formatter.format(item.authLimits.lifeInsurance) }}
    </template>
  </v-data-table>
</template>
<script setup>
import staff from "@/data/data.json";
import { defineProps, ref, computed } from "vue";

const header = [
  { title: "員工編號", key: "empId" },
  { title: "員工姓名", key: "name" },
  { title: "員工職級", key: "role" },
  { title: "案件負載", key: "caseLoad" },
  { title: "壽險限額", key: "life" },
  { title: "代理人", key: "proxy.name" },
];

const virStaff = ref(staff);

const formatter = new Intl.NumberFormat("zh-TW", {
  style: "currency",
  currency: "TWD",
  minimumFractionDigits: 0,
});

//Props
const props = defineProps({
  sub: {
    type: Object,
    default: () => null,
  },
});

const filStaff = computed(() => {
  return virStaff.value.filter((item) => {
    const isSearch =
      props.sub.search == "" ||
      item.name == props.sub.search ||
      item.empId == props.sub.search;

    const favList = props.sub.favorites || [];
    const isFavorites =
      favList.includes("all") ||
      favList.length === 0 ||
      favList.includes(item.role);

    const isAttend =
      props.sub.attend == "all" || item.status == props.sub.attend;

    return isSearch && isFavorites && isAttend;
  });
});
</script>
