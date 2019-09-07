<template>
  <div class="user-input-form">
    <md-field>
      <label for="estimated-value">Boligens verdi</label>
      <md-input
        type="number"
        id="estimated-value"
        name="estimated-value"
        min="0"
        :value="userInput.propertyValue"
        @input="value => handleNumberInput('propertyValue', value)"
      />
      <span class="md-suffix">kr</span>
    </md-field>
    <md-field>
      <label for="ownership-share">Din eierandel i %</label>
      <md-input
        type="number"
        id="ownership-share"
        name="ownership-share"
        min="0"
        max="100"
        :value="userInput.ownershipShare"
        @input="value => handleNumberInput('ownershipShare', value)"
      />
      <span class="md-suffix">%</span>
    </md-field>
    <md-field>
      <label for="own-property-dept">Boliggjeld som du er ansvarlig for</label>
      <md-input
        type="number"
        id="own-property-dept"
        name="own-property-dept"
        min="0"
        :value="userInput.ownPropertyDebt"
        @input="value => handleNumberInput('ownPropertyDebt', value)"
      />
      <span class="md-suffix">kr</span>
    </md-field>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
  name: "UserInputForm",
  computed: {
    ...mapState({
      userInput: state => state.userInputSale
    })
  },
  methods: {
    ...mapMutations({ setUserInput: "SET_USER_INPUT_SALE" }),

    handleNumberInput(property, value) {
      const numberValue = parseInt(value);
      this.setUserInput({ property, value: numberValue });
    }
  }
};
</script>

<style></style>
