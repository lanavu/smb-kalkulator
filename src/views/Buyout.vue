<template>
  <div class="buyout">
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
import UserInputForm from "@/components/UserInputForm";
import CalculationModule from "@/components/CalculationModule";
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

<style lang="scss" scoped>
@import "~vue-material/dist/theme/engine";

.buyout {
  width: 100%;
  max-width: 1280px;
}
.result {
  background: md-get-palette-color(bluegrey, 50);
}
</style>
