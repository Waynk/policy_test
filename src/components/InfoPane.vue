<template>
  <v-container>
    <v-sheet border class="pa-4">
      <v-row>
        <v-col cols="12">
          <v-toolbar
            density="compact"
            class="d-flex pa-2 border-md border-black border-opacity-100 ma-2 mx-auto"
          >
            {{
              `policyNo: ${virReview.policyNo} - Applicant: ${virReview.applicant.name}`
            }}
            <v-spacer />
            <span class="text-caption">Status: </span>
            <v-chip color="primary" variant="tonal">{{
              virReview.status
            }}</v-chip>
          </v-toolbar>
          <v-card variant="outlined">
            <div class="text-bold mb-4 pa-2">CUSTOMER INFORMATION</div>
            <v-row no-gutters>
              <v-col cols="4" class="border pa-2 d-flex align-center">
                <div class="text-caption">ID:</div>
                {{ !isEye ? secureId : virReview.applicant.id }}
                <v-spacer />
                <v-btn
                  :icon="isEye ? 'mdi-eye' : 'mdi-eye-off'"
                  @click="switchEye"
                ></v-btn>
              </v-col>
              <v-col cols="4" class="border pa-2">
                <div class="text-caption">RELATION:</div>
                <div>{{ virReview.applicant.relation }}</div>
              </v-col>
              <v-col cols="4" class="border pa-2">
                <div class="text-caption">BIRTHDATE:</div>
                <div>{{ virReview.applicant.birthDate }}</div>
              </v-col>
            </v-row>
            <v-row no-gutters>
              <v-col cols="4" class="border pa-2">
                <div class="text-caption">OCCUPATION:</div>
                <div>{{ virReview.applicant.occupation }}</div>
              </v-col>
              <v-col cols="4" class="border pa-2">
                <div class="text-caption">OCCUPATION LEVEL:</div>
                <div>{{ virReview.applicant.occLevel }}</div>
              </v-col>
              <v-col cols="4" class="border pa-2">
                <div class="text-caption">GENDER:</div>
                <div>{{ virReview.applicant.gender }}</div>
              </v-col>
            </v-row>
          </v-card>
          <v-card variant="outlined" class="mt-2">
            <div class="pa-2">PRODUCT & RIDERS</div>
            <v-data-table
              :items="virReview.allProducts"
              :headers="header"
            ></v-data-table>
          </v-card>
          <v-card variant="outlined">
            <v-expansion-panels>
              <v-expansion-panel
                v-for="(item, key) in virReview.healthDeclarations"
                :key="key"
                :title="item.q"
                :text="`${item.a}   ${item.detail}`"
                style="white-space: pre-wrap"
              >
              </v-expansion-panel>
            </v-expansion-panels>
          </v-card>
        </v-col>
      </v-row>
    </v-sheet>
  </v-container>
</template>

<script setup>
import review from "@/data/review.json";
import { ref, computed } from "vue";

const virReview = ref(review);

const header = [
  { title: "代號", key: "id" },
  { title: "商品名稱", key: "name" },
  { title: "理賠金", key: "amount" },
];

const secureId = computed(() => {
  const temp = virReview.value.applicant.id;
  if (!temp) return "";
  return temp.substring(0, 3) + "****" + temp.substring(temp.length - 3);
});

const isEye = ref(false);

const switchEye = () => {
  isEye.value = !isEye.value;
};
</script>
