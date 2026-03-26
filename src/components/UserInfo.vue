<template>
  <div class="d-flex">
    <v-radio-group v-model="userId" label="請選擇想登入帳號">
      <v-radio
        v-for="item in userList"
        :key="item.userId"
        :label="item.userName"
        :value="item.userId"
      >
      </v-radio>
    </v-radio-group>
    <v-spacer></v-spacer>
    <v-btn class="align-self-end" @click="checkAccount()">確定</v-btn>
  </div>
  <hr />
  <span>--請輸入新註冊資料--</span>
  <br />
  <v-row no-gutters class="align-center d-flex mt-4">
    <v-col cols="auto">
      <label for="in1">姓名: </label>
    </v-col>
    <v-col cols="auto" class="text-left pe-2">
      <v-text-field
        placeholder="請輸入姓名 "
        id="in1"
        width="200"
        density="compact"
        hide-details
        variant="outlined"
        v-model="newUser.userName"
      />
    </v-col>
  </v-row>
  <v-row no-gutters class="align-center d-flex mt-4">
    <v-col cols="auto">
      <label for="in2">生日: </label>
    </v-col>
    <v-col cols="auto" class="text-left pe-2">
      <v-text-field
        placeholder="YYYY/MM/DD "
        id="in2"
        width="200"
        density="compact"
        hide-details
        variant="outlined"
        v-model="newUser.birthday"
      />
    </v-col>
  </v-row>
  <v-row no-gutters class="align-center d-flex mt-4">
    <v-col cols="auto">
      <label>性別: </label>
    </v-col>
    <v-col cols="auto" class="text-left pe-2">
      <v-radio-group v-model="newUser.gender">
        <v-row no-gutters class="aling-center d-flex mt-4">
          <v-col cols="auto">
            <v-radio label="男" value="male"></v-radio>
          </v-col>
          <v-col cols="auto">
            <v-radio label="女" value="female"></v-radio>
          </v-col>
        </v-row>
      </v-radio-group>
    </v-col>
  </v-row>
  <v-row no-gutters class="align-center d-flex mt-4">
    <v-col cols="auto">
      <label for="in2">職業: </label>
    </v-col>
    <v-col cols="auto" class="text-left pe-2">
      <v-select
        label="選擇職業級別"
        :items="['一級', '二級', '三級', '四級', '五級']"
        variant="outlined"
        width="200"
        density="compact"
        hide-details
        v-model="newUser.job"
      >
      </v-select>
    </v-col>
  </v-row>

  <v-row no-gutters class="align-center d-flex mt-4">
    <v-col cols="auto">
      <label for="in2">產品: </label>
    </v-col>
    <v-col cols="auto" class="text-left pe-2">
      <v-select
        label="選擇產品"
        :items="['定期壽險A', '定期壽險B', '意外險A', '意外險B']"
        variant="outlined"
        width="200"
        density="compact"
        hide-details
        v-model="newUser.product"
      >
      </v-select>
    </v-col>
  </v-row>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";
import { useUserStore } from "@/stores/User";

const userId = ref(1);

const newUser = ref({
  userId: 0,
  userName: "",
  birthday: new Date().toISOString().substring(0, 10),
  gender: "",
  job: "",
  product: "",
  amount: 0,
});

console.log(newUser);

const userList = ref([
  {
    userId: 1,
    userName: "小名",
  },
  {
    userId: 2,
    userName: "小豪",
  },
  {
    userId: 3,
    userName: "小狗",
  },
]);

const userStore = useUserStore();

const checkAccount = async () => {
  const res = await axios.get(`http://localhost:8080/user/${userId.value}`);
  userStore.setUser(res.data);
};
</script>
