<template>
  <div class="input-info">
    <p class="info-row">
      <span>Boligen din koster</span>
      <span>{{ toLocaleString(userInput.propertyValue) }} kr</span>
    </p>
    <p class="info-row">
      <span>Ny eier må betale</span>
      <span>{{ toLocaleString(purchaseAmount) }} kr</span>
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
      userInput: state => state.userInputBuyShare
    }),
    purchaseAmount() {
      const multiplier = this.userInput.ownershipShare / 100;
      const purchaseAmount = this.userInput.propertyValue * multiplier;
      return purchaseAmount;
    }
  },
  methods: {
    toLocaleString
  }
};
</script>

<style></style>
