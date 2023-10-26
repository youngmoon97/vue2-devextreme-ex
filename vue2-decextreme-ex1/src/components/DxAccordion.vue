<template>
  <v-container>
    <h2>Accordion-ex1</h2>
    <DxAccordion
      :data-source="employees"
      :collapsible="true"
      :multiple="true"
      :animation-duration="450"
    />
    <p>
      {{ employees }}
    </p>
  </v-container>
</template>

<script>
import "devextreme/dist/css/dx.light.css";
import { DxAccordion } from "devextreme-vue";
import { employees } from "../assets/data/employees.js";

export default {
  components: {
    DxAccordion,
  },
  data() {
    return {
      employees,
    };
  },
};
</script>
