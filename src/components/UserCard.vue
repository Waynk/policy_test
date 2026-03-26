<template>
  <v-container>
    <v-row class="d-flex justify-center">
      <v-col cols="12">
        <v-card text="" variant="elevated" hover class="rounded-lg">
          <v-chip
            prepend-icon="mdi mdi-alert-circle"
            variant="flat"
            color="primary"
            >Chip
          </v-chip>
          <v-list lines="two">
            <tamplete v-for="(item, key) in 3" :key="key">
              <v-list-item
                :title="`保單編號${item}`"
                :subtitle="`險種名稱${item}`"
              ></v-list-item>
              <v-divider v-if="key < 2" inset></v-divider>
            </tamplete>
          </v-list>
          <v-divider></v-divider>
          <v-card-text> 下次繳費日 </v-card-text>
          <v-card-text> 繳費金額 </v-card-text>
          <v-card-actions>
            <v-btn variant="text" color="grey">查看詳情</v-btn>

            <v-spacer></v-spacer>
            <v-btn variant="elevated" color="primary">立即繳費</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
