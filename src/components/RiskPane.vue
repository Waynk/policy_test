<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card variant="elevated">
          <div class="font-weight-bold pa-2">RISK ASSESSMENT</div>
          <v-list density="compact">
            <v-list-item>
              <v-alert
                v-for="(item, key) in virReview.riskAlerts"
                :key="key"
                :type="
                  item.severity === 'High'
                    ? 'error'
                    : item.severity === 'Medium'
                    ? 'warning'
                    : 'info'
                "
                variant="outlined"
              >
                <div class="text-caption text-black">{{ item.type }}</div>
                {{ `${item.severity}: ${item.message}` }}
              </v-alert>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-card>
          <div class="font-weight-bold ma-2">UNDERWRITING DECISION</div>
          <v-textarea
            placeholder="請輸入核保原因:"
            rows="5"
            counter
            maxlength="500"
            v-model="description"
          >
          </v-textarea>
          <v-checkbox label="我已確認所有風險" v-model="isCheck"> </v-checkbox>
          <v-card-actions class="flex-column align-stretch">
            <v-btn variant="outlined" color="success" :disabled="!isCheck"
              >通過審核</v-btn
            >
            <v-btn variant="outlined" color="primary">面會</v-btn>
            <v-btn variant="outlined" color="error">未過審</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import review from "@/data/review.json";
import { ref } from "vue";

const virReview = ref(review);
const isCheck = ref(false);
const description = ref("");
</script>
