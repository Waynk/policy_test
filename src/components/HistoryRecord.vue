<template>
    <v-table>
        <thead>
            <tr>
                <th>產品</th>
                <th>保額</th>
                <th>狀態</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item, key) in historyList" :key="key">
                <td>{{ item.product }}</td>
                <td>{{ item.amount }}</td>
                <td>{{ item.state }}</td>
            </tr>
        </tbody>
    </v-table>
    <div class="d-flex">
    <v-btn>查看詳情</v-btn>
    <v-btn>生成PDF檔</v-btn>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const historyList = ref([
    {
        product: '意外保險A',
        amount: 1000,
        state: 'Active'
    },
    {
        product: '意外保險B',
        amount: 10000,
        state: 'End'
    },
    {
        product: '團體保險A',
        amount: 100000,
        state: 'End'
    },
    {
        product: '團體保險B',
        amount: 25000,
        state: 'End'
    }
]);





</script>