<template>
  <v-container>
    <h1>DxDiagram</h1>
    <DxDiagram id="diagram" ref="diagram">
      <DxCustomShape
        v-for="employee in employees"
        :category="'employees'"
        :type="'employee' + employee.ID"
        :base-type="'rectangle'"
        :default-text="employee.Full_Name"
        :allow-edit-text="false"
        :key="employee.ID"
      />
      <DxToolbox :visible="true">
        <DxGroup
          :category="'employees'"
          :title="'Employees'"
          :display-mode="'texts'"
        />
      </DxToolbox>
    </DxDiagram>
  </v-container>
</template>

<script>
import dxDiagram from "devextreme/ui/diagram";
import { DxCustomShape, DxGroup, DxToolbox } from "devextreme-vue/diagram";

import service from "@/assets/data/employees.service";
export default {
  components: {
    dxDiagram,
    DxCustomShape,
    DxGroup,
    DxToolbox,
  },
  data() {
    return {
      employees: service.getEmployees(),
    };
  },
};
</script>
