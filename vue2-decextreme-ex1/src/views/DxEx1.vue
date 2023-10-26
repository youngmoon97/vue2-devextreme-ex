<template>
  <v-container>
    <DxAccordion />
    <v-row class="ma-4 pa-4">
      <v-col cols="12"> <hr /></v-col>
    </v-row>

    <DxDataGrid />
  </v-container>
</template>

<script>
import DxDataGrid from "@/components/DxDataGrid.vue";
import DxAccordion from "../components/DxAccordion";

export default {
  name: "HomeView",

  components: {
    DxAccordion,
    DxDataGrid,
  },
  data: () => {
    return {
      pageNum: 1,
    };
  },
};
</script>
