<template>
    <label>投保金額: (萬元)</label>
    <v-slider
    min="0"
    max="1000000"
    step="1"
    thumb-label
    hide-details
    v-model="amount"
    >
    </v-slider>
    <span>{{ `< ${amount} >` }}</span>
    <br/>
    <br/>
    <div class="d-flex">
        <v-spacer></v-spacer>
        <v-btn>開始計算</v-btn>
        <v-spacer></v-spacer>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const amount = ref(0);





</script>