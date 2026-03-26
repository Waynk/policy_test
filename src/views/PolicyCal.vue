<template>
  <v-container>
    <v-row>
      <v-col cols="12" class="d-flex justify-center">
        <v-sheet>
          <h2 class="text-h5">試算表</h2>
          <v-form>
            <v-text-field
              label="請輸入客戶姓名"
              v-model="clientName"
              v-bind="clientNameProps"
              :error-messages="errors.clientName"
            />
            <v-text-field
              label="請輸入投保年齡"
              v-model="age"
              v-bind="ageProps"
              :error-messages="errors.age"
            />
            <v-text-field
              label="請輸入保險金額"
              v-model="coverage"
              v-bind="coverageProps"
              :error-messages="errors.coverage"
            />
            <v-btn @click="onSubmit">提交</v-btn>
            <v-btn @click="handleReset">重刷頁面</v-btn>
          </v-form>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";
import * as z from "zod";

const validateSchema = toTypedSchema(
  z.object({
    clientName: z.string("需要輸入文字"),
    age: z.coerce.number().min(18, "不能低於18歲").max(65, "不能高於65歲"),
    coverage: z.coerce
      .number()
      .min(500000, "保額不得低於500000")
      .max(5000000, "保額不得高於5000000"),
  }),
);

const { errors, handleSubmit, resetForm, defineField } = useForm({
  validationSchema: validateSchema,
  initialValues: {
    clientName: "",
    age: 0,
    coverage: 0,
  },
});

const [clientName, clientNameProps] = defineField("clientName");
const [age, ageProps] = defineField("age");
const [coverage, coverageProps] = defineField("coverage");

const onSubmit = handleSubmit((values) => {
  console.log("驗證成功", values);
  alert("成功");
});

const handleReset = () => {
  resetForm();
};
</script>
