<template>
  <div class="input-info">
    <p class="info-row">
      <span>Boligen din koster</span>
      <span>{{ toLocaleString(userInput.propertyValue) }} kr</span>
    </p>
    <p class="info-row">
      <span>Din egenkapital i boligen</span>
      <span>{{ toLocaleString(ownEquity) }} kr</span>
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
      userInput: state => state.userInputSale
    }),
    ownEquity() {
      const shareMultiplier = this.userInput.ownershipShare / 100;
      return (
        this.userInput.propertyValue * shareMultiplier -
        this.userInput.ownPropertyDebt
      );
    }
  },
  methods: {
    toLocaleString
  }
};
</script>

<style></style>
