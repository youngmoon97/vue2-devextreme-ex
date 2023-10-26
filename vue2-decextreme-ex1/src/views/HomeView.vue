<template>
  <v-container>
    <DxAccordion />
    <hr />
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
};
</script>
