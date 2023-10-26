<template>
  <v-container>
    <h1>DxDataGrid-ex</h1>
    <DxDataGrid
      :data-source="employees"
      key-expr="EmployeeID"
      :allow-column-reordering="true"
      :column-auto-width="true"
    >
      <DxColumn data-field="FullName"></DxColumn>
      <DxColumn data-field="Position"></DxColumn>
      <DxColumn data-field="BirthDate" data-type="date" :width="100">
      </DxColumn>
      <DxColumn data-field="HireDate" data-type="date" :width="100"> </DxColumn>
      <DxColumn data-field="City" />
      <DxColumn data-field="Country" sort-order="asc"></DxColumn>
      <DxColumn data-field="Address" />
      <DxColumn data-field="HomePhone" />
      <DxColumn data-field="PostalCode" :visible="false" />
      <DxColumnFixing :enabled="true" />
      <!-- Configuration goes here -->
    </DxDataGrid>
  </v-container>
</template>

<script>
import "devextreme/dist/css/dx.light.css";
import { DxDataGrid, DxColumn, DxColumnFixing } from "devextreme-vue/data-grid";
import service from "@/assets/data/employees.service";
// import { employees } from "@/assets/data/employees.js";
export default {
  components: {
    DxDataGrid,
    DxColumn,
    DxColumnFixing,
  },
  data() {
    return {
      employees: service.getEmployees(),
    };
  },
};
</script>

<style>
#dataGrid {
  height: 500px;
}
</style>
