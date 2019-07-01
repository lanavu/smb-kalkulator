<template>
  <div class="input-info">
    <p class="info-row">
      <span>Boligen din koster</span>
      <span>{{ toLocaleString(userInput.propertyValue) }} kr</span>
    </p>
    <p class="info-row">
      <span>Netto boligverdi</span>
      <span>{{ toLocaleString(netPropertyValue) }} kr</span>
    </p>
    <p class="info-row">
      <span>Egenkapital i boligen</span>
      <span>{{ toLocaleString(userInput.totalEquity) }} kr</span>
    </p>
    <p class="info-row">
      <span>Din eierandel av boligen</span>
      <span>{{ toLocaleString(shareValue) }} kr</span>
    </p>
    <p class="info-row">
      <span>Utkjøpssum</span>
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
      userInput: state => state.userInput
    }),
    // New computed here
    diff() {
      return this.userInput.propertyValue - this.userInput.propertyDept;
    },
    shareValue() {
      const multiplier = this.userInput.ownershipShare / 100;
      return this.netPropertyValue * multiplier;
    },
    netPropertyValue() {
      const netPropertyValue =
        this.userInput.propertyValue - this.userInput.commonDebt;
      return netPropertyValue;
    }
  },
  methods: {
    toLocaleString
  }
};
</script>

<style lang="scss">
.input-info {
  padding: 5px 10px;

  .info-row {
    display: flex;
    justify-content: space-between;
    font-size: 1.2em;
    border-bottom: 1px solid lightgrey;
    padding: 20px 0;
    margin: 0;

    &:last-child {
      border-bottom: none;
    }
  }
}
</style>
