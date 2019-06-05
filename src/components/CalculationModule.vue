<template>
  <div class="input-info">
    <p class="info-row">
      <span>Boligen din koster</span>
      <span>{{ toLocaleString(userInput.propertyValue) }} kr</span>
    </p>
    <p class="info-row">
      <span>Du eier</span>
      <span>{{ toLocaleString(userInput.ownershipShare) }}%</span>
    </p>
    <p class="info-row">
      <span>Samlet gjeld på boligen</span>
      <span>{{ toLocaleString(userInput.propertyDept) }} kr</span>
    </p>
    <p class="info-row">
      <span>Differanse</span>
      <span>{{ toLocaleString(diff) }} kr</span>
    </p>
  </div>
</template>

<script>
import { toLocaleString } from "@/helpers/functions";
import { mapState } from "vuex";
export default {
  name: "CalculationModule",
  computed: {
    ...mapState({
      userInput: state => state.userInput
    }),
    // New computed here
    diff() {
      return this.userInput.propertyValue - this.userInput.propertyDept;
    }
  },
  methods: {
    toLocaleString
  }
};
</script>

<style>
.info-row {
  display: flex;
  justify-content: space-between;
  font-size: 1.2em;
  border-bottom: 1px solid lightgrey;
  padding: 15px 0;
}
</style>
