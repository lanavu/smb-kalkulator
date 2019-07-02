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
      <span>Ny eiers eierandel</span>
      <span>{{ newOwnerShare }} %</span>
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
    netPropertyValue() {
      //TODO: Regn ut nettoverdi av bolig
      return 0;
    },
    newOwnerShare() {
      //TODO: Regn ut ny eiers andel i prosent
      return 0;
    },
    purchaseAmount() {
      //TODO: Regn ut hvor mye ny eier må betale
      return 0;
    }
  },
  methods: {
    toLocaleString
  }
};
</script>

<style></style>
