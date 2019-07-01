<template>
  <div class="buyout content">
    <div class="md-layout md-gutter md-alignment-top-center">
      <div class="md-layout-item md-size-80 md-small-size-100">
        <h1 class="md-headline light-type">Kjøp ut andre eiere</h1>
        <p>
          Regn ut hvor mye du må betale for å kjøpe ut andre eiere fra felles
          bolig.
        </p>
      </div>
      <div class="user-input md-layout-item md-size-40 md-small-size-100">
        <UserInputForm />
      </div>
      <div class="result md-layout-item md-size-40 md-small-size-100">
        <CalculationModule />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import UserInputForm from "@/components/Buyout/UserInputForm";
import CalculationModule from "@/components/Buyout/CalculationModule";
export default {
  name: "Buyout",
  components: {
    UserInputForm,
    CalculationModule
  },
  computed: {
    ...mapState({
      userInput: state => state.userInput
    })
  }
};
</script>

<style></style>
