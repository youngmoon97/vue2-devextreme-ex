<template>
  <v-container>
    <DxList />
    <v-row class="ma-4 pa-4">
      <v-col cols="12"> <hr /></v-col>
    </v-row>
    <DxDiagram></DxDiagram>
  </v-container>
</template>

<script>
import DxList from "@/components/DxList.vue";
import DxDiagram from "@/components/DxDiagram.vue";

export default {
  name: "Ex2View",

  components: {
    DxList,
    DxDiagram,
  },
  data: () => {
    return {
      pageNum: 2,
    };
  },
};
</script>
