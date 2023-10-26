<template>
  <v-container>
    <h1>DxAccordion</h1>
    <DxAccordion :data-source="accordionData" item-template="item">
      <template #item="{ data }">
        <div>
          <p v-for="key in getItemKeys(data)" :key="key">
            {{ key }}: {{ data[key] }}
          </p>
        </div>
      </template>
    </DxAccordion>
  </v-container>
</template>
<script>
import "devextreme/dist/css/dx.common.css";
import "devextreme/dist/css/dx.light.css";

import DxAccordion from "devextreme-vue/accordion";

export default {
  components: {
    DxAccordion,
  },
  data() {
    return {
      accordionData: [
        {
          title: "Personal Data",
          firstName: "John",
          lastName: "Smith",
          birthYear: 1986,
        },
        {
          title: "Contacts",
          phone: "(555)555-5555",
          email: "John.Smith@example.com",
        },
        {
          title: "Address",
          state: "CA",
          city: "San Francisco",
          street: "Stanford Ave",
        },
      ],
    };
  },
  methods: {
    getItemKeys: function (item) {
      return Object.keys(item);
    },
  },
};
</script>
