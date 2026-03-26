<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-select
          :items="occLevels"
          item-title="title"
          item-value="value"
          label="請選擇想篩選的職業等級"
          variant="outlined"
          v-model="occLevel"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-list lines="two">
          <v-list-item
            v-for="item in cutUsers"
            :key="item.policyNo"
            :prepend-avatar="item.applicant.avatar"
            variant="outlined"
            @click="
              submit(item);
              jump();
            "
          >
            <v-list-item-title style="white-space: pre-wrap">
              {{
                `姓名: ${item.applicant.name}   -   關係: ${item.applicant.relation}   -   職業: ${item.applicant.occupation}`
              }}
            </v-list-item-title>
            <v-list-item-subtitle>
              {{ `保單編號: ${item.policyNo}` }}
            </v-list-item-subtitle>
          </v-list-item>
        </v-list>
        <v-pagination
          :length="talpage"
          v-model="page"
          active-color="#8C9EFF"
          total-visible="5"
          show-first-last-page
        ></v-pagination>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import users from "@/data/reviewUsers.json";
import { ref, computed, watch, onMounted } from "vue";
import { useUserStore } from "@/store/reviewUser";
import { useRouter, useRoute } from "vue-router";

const virUsers = ref(users);

const user = useUserStore();

const submit = (item) => {
  user.setUser(item);
};

//分頁功能
const router = useRouter();

const jump = () => {
  router.push("review");
};

const page = ref(1);

const limit = ref(8);

const talpage = computed(() => {
  return Math.ceil(occFilter.value.length / limit.value);
});

const cutUsers = computed(() => {
  const start = (page.value - 1) * limit.value;
  const end = start + limit.value;
  return occFilter.value.slice(start, end);
});

//保留分頁
const route = useRoute();

onMounted(() => {
  if (route.query.page) {
    page.value = route.query.page;
  }
});

watch(page, (newPage) => {
  router.replace({
    query: { ...route.query, page: newPage },
  });
});

//篩選
const occLevels = [
  { title: "第一級: 危險度極低", value: 1 },
  { title: "第二級: 危險度低", value: 2 },
  { title: "第三級: 危險度中", value: 3 },
  { title: "第四級: 危險度中高", value: 4 },
  { title: "第五級: 危險度高", value: 5 },
  { title: "第六級: 危險度極高", value: 6 },
];

const occLevel = ref(null);

const occFilter = computed(() => {
  return virUsers.value.filter((value) => {
    return occLevel.value == null || value.applicant.occLevel == occLevel.value;
  });
});

watch(occLevel, () => {
  page.value = 1;
});
</script>
