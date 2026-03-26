<template>
    <v-container>
        <v-row>
            <v-col cols="12">
                 <v-card elevation="4" class="pa-4 mt-5">
                     <div class="text-h6 mb-4">保單價值/現金價值表</div>
                    <div style="width:100%; height:300px"> 
                        <Line :data="chartSet" :options="chartOption"/>
                        </div>
                 </v-card>
                 </v-col>
            </v-row>
            <v-row>
                <v-col class="d-flex">
                 <br/>
                 <v-spacer></v-spacer>
                 <div>首年預估保費: ${{ money }}/年</div>
                 <v-spacer></v-spacer>
            </v-col>
        </v-row>
  </v-container>
</template>

<script setup>
import { Line } from 'vue-chartjs'
import { computed } from 'vue'
import { 
  Chart as ChartJS, Title, Tooltip, Legend, 
  LineElement, PointElement, CategoryScale, LinearScale, Filler 
} from 'chart.js'
ChartJS.register(Title, Tooltip, Legend, LineElement, PointElement, CategoryScale, LinearScale, Filler)




const chartSet = computed(()=>{
    return {
        labels:['2027', '2028', '2029', '2030', '2031', '2032'],
        datasets: [
            {
                label: '保單金額',
                borderColor: '#EEFF41',
                data: [100, 300, 600, 1000, 1200, 1800],
                fill: true,
                tension: 0.4
            },
            {
                label: '保單價值',
                borderColor: '#18FFFF',
                data: [300, 600, 1200, 2400, 4800,9600],
                fill: true,
                tension: 0.4
            }
        ]
    }
})

const chartOption = {
    repositive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            position: 'bottom'
        }
    },
    scales: {
        y: {
            beginAtZero: true
        }
    }
}

const money = 100000;


</script>