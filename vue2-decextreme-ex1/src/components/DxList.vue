<template>
  <v-container>
    <h1>DxList</h1>
    <DxList
      :data-source="dataSource"
      display-expr="Name"
      selection-mode="contains"
      :grouped="true"
      :search-enabled="true"
      :allow-item-deleting="true"
    >
      <DxItemDragging :allow-reordering="true" />
    </DxList>
  </v-container>
</template>

<script>
import { products } from "@/assets/data/products.js";

import DataSource from "devextreme/data/data_source";
import { DxList } from "devextreme-vue";
import { DxItemDragging } from "devextreme-vue/list";

export default {
  components: {
    DxList,
    DxItemDragging,
  },
  data() {
    return {
      dataSource: new DataSource({
        store: products,
        group: "Category",
      }),
    };
  },
};
</script>
