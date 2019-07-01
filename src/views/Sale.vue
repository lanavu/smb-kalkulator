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
        User input form
      </div>
      <div class="result md-layout-item md-size-40 md-small-size-100">
        Calculation module
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Sale",
  components: {},
  computed: {
    ...mapState({
      userInput: state => state.userInputSale
    })
  }
};
</script>

<style lang="scss"></style>
