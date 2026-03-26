<template>
  <v-container>
    <v-row>
      <v-col cols="12" class="d-flex justify-center">
        <v-sheet>
          <h2 class="text-h6">試算表2</h2>
          <v-text-field
            label="請輸入受益人A"
            v-model="nameA"
            v-bind="nameAProps"
            :error-messages="errors.nameA"
          />
          <v-text-field
            label="請輸入受益人A分配的百分比"
            v-model="percentA"
            v-bind="percentAProps"
            :error-messages="errors.percentA"
          />
          <v-text-field
            label="請輸入受益人B"
            v-model="nameB"
            v-bind="nameBProps"
            :error-messages="errors.nameB"
          />
          <v-text-field
            label="請輸入受益人B分配的百分比"
            v-model="percentB"
            v-bind="percentBProps"
            :error-messages="errors.percentB"
          />
          <v-btn @click="onSubmit">送出</v-btn>
          <v-btn @click="handleReset">重製</v-btn>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";
import * as z from "zod";

const validationSchema = toTypedSchema(
  z
    .object({
      nameA: z.string().min(1, "此欄不得為空"),
      percentA: z.coerce
        .number()
        .int("此欄必須為整數")
        .min(1, "此欄不得低於1")
        .max(100, "此欄不得高於100"),
      nameB: z.string().min(1, "此欄不得為空"),
      percentB: z.coerce
        .number()
        .int("此欄必須為整數")
        .min(1, "此欄不得低於1")
        .max(100, "此欄不得高於100"),
    })
    .refine(
      (data) => {
        return data.percentA + data.percentB === 100;
      },
      {
        message: "percentA + percentB 要等於100",
        path: ["percentB"],
      },
    ),
);

const { errors, handleSubmit, resetForm, defineField } = useForm({
  validationSchema,
  initialValues: {
    nameA: " ",
    percentA: 0,
    nameB: " ",
    percentB: 0,
  },
});

const onSubmit = handleSubmit((value) => {
  console.log(value);
});

const handleReset = () => {
  resetForm();
};

const [nameA, nameAProps] = defineField("nameA");
const [percentA, percentAProps] = defineField("percentA");
const [nameB, nameBProps] = defineField("nameB");
const [percentB, percentBProps] = defineField("percentB");
</script>
