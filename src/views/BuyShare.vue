<template>
  <div class="buy-share content">
    <div class="md-layout md-gutter md-alignment-top-center">
      <div class="md-layout-item md-size-80 md-small-size-100">
        <h1 class="md-headline light-type">Kjøp inn ny eier</h1>
        <p>
          Regn ut hvor mye en ny eier må betale for å kjøpe seg inn i felles
          eiendom.
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
import UserInputForm from "@/components/BuyShare/UserInputForm";
import CalculationModule from "@/components/BuyShare/CalculationModule";
export default {
  name: "BuyShare",
  components: {
    UserInputForm,
    CalculationModule
  }
};
</script>

<style></style>
