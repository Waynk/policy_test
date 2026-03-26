<template>
  <v-container>
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
        <v-pagination :length="talpage" v-model="page"></v-pagination>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import users from "@/data/reviewUsers.json";
import { ref, computed } from "vue";
import { useUserStore } from "@/store/reviewUser";
import { useRouter } from "vue-router";

const virUsers = ref(users);

const user = useUserStore();

const submit = (item) => {
  user.setUser(item);
};

const router = useRouter();

const jump = () => {
  router.push("review");
};

//分頁功能
const page = ref(1);

const limit = ref(8);

const talpage = Math.ceil(virUsers.value.length / limit.value);

const cutUsers = computed(() => {
  const start = (page.value - 1) * limit.value;
  const end = start + limit.value;
  return virUsers.value.slice(start, end);
});
</script>
