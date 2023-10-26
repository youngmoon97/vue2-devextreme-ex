<template>
  <v-container>
    <h1>DxDataGrid-ex</h1>
    <DxDataGrid
      @selection-changed="selectEmployee"
      id="dataGrid"
      :data-source="employees"
      key-expr="EmployeeID"
      :allow-column-reordering="true"
      :column-auto-width="true"
    >
      <DxColumn data-field="FullName" :fixed="true">
        <DxRequiredRule />
      </DxColumn>
      <DxColumn data-field="Position">
        <DxRequiredRule />
      </DxColumn>
      <DxColumn data-field="BirthDate" data-type="date" :width="100">
        <DxRequiredRule />
      </DxColumn>
      <DxColumn data-field="HireDate" data-type="date" :width="100">
        <DxRequiredRule />
      </DxColumn>
      <DxColumn data-field="City" />
      <DxColumn data-field="Country" sort-order="asc" :group-index="0">
        <DxRequiredRule
      /></DxColumn>
      <DxColumn data-field="Address" />
      <DxColumn data-field="HomePhone" />
      <DxColumn data-field="PostalCode" />
      <DxColumnFixing :enabled="true" />
      <!-- Configuration goes here -->
      <DxFilterRow :visible="true" />
      <DxSearchPanel :visible="true" />
      <DxGroupPanel :visible="true" />
      <DxEditing
        mode="popup"
        :allow-updating="true"
        :allow-adding="true"
        :allow-deleting="true"
      />
      <DxSelection mode="single" />
      <DxSummary>
        <DxGroupItem summary-type="count" />
      </DxSummary>
      <DxGrouping :auto-expand-all="expanded" />
      <DxToolbar>
        <DxItem name="groupPanel" />
        <DxItem location="after" template="button-template" />
        <DxItem name="addRowButton" show-text="always" />
        <DxItem name="exportButton" />
        <DxItem name="columnChooserButton" />
        <DxItem name="searchPanel" />
      </DxToolbar>
      <template #button-template>
        <DxButton
          :text="expanded ? 'Collapse All' : 'Expand All'"
          :width="136"
          @click="expanded = !expanded"
        />
      </template>
      <DxMasterDetail :enabled="true" template="employee-info" />
      <template #employee-info="{ data: employee }">
        <div>
          <img class="employee-photo" :src="employee.data.Photo" />
          <p class="employee-notes">{{ employee.data.Notes }}</p>
        </div>
      </template>
    </DxDataGrid>
  </v-container>
</template>

<script>
import "devextreme/dist/css/dx.light.css";
import {
  DxDataGrid,
  DxColumn,
  DxColumnFixing,
  DxFilterRow,
  DxSearchPanel,
  DxGroupPanel,
  DxRequiredRule,
  DxEditing,
  DxSelection,
  DxSummary,
  DxGroupItem,
  DxGrouping,
  DxToolbar,
  DxItem,
  DxMasterDetail,
} from "devextreme-vue/data-grid";
import { DxButton } from "devextreme-vue/button";

import service from "@/assets/data/employees.service";
// import { employees } from "@/assets/data/employees.js";
export default {
  components: {
    DxDataGrid,
    DxColumn,
    DxColumnFixing,
    DxFilterRow,
    DxSearchPanel,
    DxGroupPanel,
    DxRequiredRule,
    DxEditing,
    DxSelection,
    DxSummary,
    DxGroupItem,
    DxGrouping,
    DxToolbar,
    DxItem,
    DxButton,
    DxMasterDetail,
  },
  data() {
    return {
      employees: service.getEmployees(),
      selectedEmployee: undefined,
      expanded: true,
    };
  },
  methods: {
    selectEmployee(e) {
      e.component.byKey(e.currentSelectedRowKeys[0]).done((employee) => {
        if (employee) {
          this.selectedEmployee = employee;
        }
      });
    },
  },
};
</script>

<style>
#dataGrid {
  height: 500px;
}

#app-container {
  width: 900px;
  position: relative;
}

#selected-employee {
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
}

.employee-photo {
  height: 140px;
  float: left;
  padding: 0 20px 20px 0;
}

.employee-notes {
  text-align: justify;
  white-space: normal;
}
</style>
