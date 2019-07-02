<template>
  <div class="sale content">
    <div class="md-layout md-gutter md-alignment-top-center">
      <div class="md-layout-item md-size-80 md-small-size-100">
        <h1 class="md-headline light-type">Salg av felles bolig</h1>
        <p>
          Regn ut din egenkapital ved salg av felles bolig.
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
import UserInputForm from "@/components/Sale/UserInputForm";
import CalculationModule from "@/components/Sale/CalculationModule";

export default {
  name: "Sale",
  components: {
    UserInputForm,
    CalculationModule
  }
};
</script>

<style lang="scss"></style>
