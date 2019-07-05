<template>
  <div class="input-info">
    <p class="info-row">
      <span>Boligen din koster</span>
      <span>{{ toLocaleString(grossPropertyValue) }} kr</span>
    </p>
    <p class="info-row">
      <span>Egenkapital i boligen</span>
      <span>{{ toLocaleString(totalEquity) }} kr</span>
    </p>
    <p class="info-row">
      <span>Din eierandel av boligen</span>
      <span>{{ toLocaleString(shareValue) }} kr</span>
    </p>
    <p class="info-row">
      <span>Betaling til annen part</span>
      <span>{{ toLocaleString(purchaseAmount) }} kr</span>
    </p>
    <p class="info-row">
      <span>Nødvendig kjøpesum</span>
      <span
        ><strong>{{ toLocaleString(newLoanAmount) }}</strong> kr</span
      >
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
      userInput: state => state.userInputBuyout
    }),
    shareValue() {
      const multiplier = this.userInput.ownershipShare / 100;
      return (
        this.userInput.propertyValue * multiplier -
        this.userInput.ownPropertyDebt
      );
    },
    totalEquity() {
      return this.userInput.propertyValue - this.userInput.propertyDebt;
    },
    purchaseAmount() {
      const shareMultiplier = this.userInput.ownershipShare / 100;
      const partnerDebt =
        this.userInput.propertyDebt - this.userInput.ownPropertyDebt;
      return this.userInput.propertyValue * (1 - shareMultiplier) - partnerDebt;
    },
    newLoanAmount() {
      return this.userInput.propertyDebt + this.purchaseAmount;
    },
    grossPropertyValue() {
      return this.userInput.propertyValue + this.userInput.commonDebt;
    }
  },
  methods: {
    toLocaleString
  }
};
</script>

<style></style>
