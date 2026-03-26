<template>
  <v-container fluid width="100%">
    <v-sheet min-height="100vh">
      <v-row>
        <v-col cols="4">
          <v-card>
            <v-card-title>總任務數: {{ rawTasks.length }}</v-card-title>
          </v-card>
        </v-col>
        <v-col cols="4">
          <v-card>
            <v-card-title>進行中: {{ rawTasks.length - finish }}</v-card-title>
          </v-card>
        </v-col>
        <v-col cols="4">
          <v-card>
            <v-card-title>已完成 {{ finish }}</v-card-title>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-select
            label="請選擇篩選工具"
            :items="['全部任務', '高優先級', '中優先級', '低優先級']"
            variant="outlined"
            density="compact"
            v-model="filteropt"
          />
          <div>{{ filteropt }}</div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-table>
            <thead>
              <tr>
                <th>任務名稱</th>
                <th>負責人</th>
                <th>優先級</th>
                <th>進度條</th>
                <th>截止日期</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="item in filtertask"
                :key="item.id"
                :style="{
                  backgroundColor:
                    item.priority === 'High'
                      ? '#880E4F'
                      : item.priority === 'Medium'
                      ? '#827717'
                      : '#283593',
                  color: 'white',
                }"
              >
                <td>{{ item.name }}</td>
                <td>{{ item.owner }}</td>
                <td>{{ item.priority }}</td>
                <td>
                  <v-progress-linear
                    v-model="item.progress"
                    striped
                    color="#4FC3F7"
                    height="12"
                  >
                  </v-progress-linear>
                </td>
                <td>{{ item.date }}</td>
              </tr>
            </tbody>
          </v-table>
        </v-col>
      </v-row>
    </v-sheet>
  </v-container>
</template>

<script setup>
import { ref, computed } from "vue";
const filteropt = ref("全部任務");

const rawTasks = [
  {
    id: 1,
    name: "整合 Spring Boot 安全框架",
    owner: "依依依",
    priority: "High",
    progress: 45,
    date: "2026-04-01",
  },
  {
    id: 2,
    name: "Vue 3 前端組件封裝",
    owner: "張小明",
    priority: "Medium",
    progress: 80,
    date: "2026-03-25",
  },
  {
    id: 3,
    name: "MySQL 資料庫索引優化",
    owner: "李華",
    priority: "Low",
    progress: 100,
    date: "2026-03-15",
  },
  {
    id: 4,
    name: "API 接口文件撰寫",
    owner: "哀哀哀",
    priority: "High",
    progress: 10,
    date: "2026-04-10",
  },
  {
    id: 5,
    name: "自動化測試腳本編寫",
    owner: "王五",
    priority: "Medium",
    progress: 0,
    date: "2026-04-20",
  },
];

const finish = computed(
  () => rawTasks.filter((item) => item.progress == 100).length,
);

const prioritymap = {
  高優先級: "High",
  中優先級: "Medium",
  低優先級: "Low",
};

const filtertask = computed(() => {
  if (filteropt.value == "全部任務") {
    return rawTasks;
  }
  const prioritykey = prioritymap[filteropt.value];
  return rawTasks.filter((item) => {
    return item.priority == prioritykey;
  });
});
</script>
