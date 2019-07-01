<template>
  <div class="user-input-form">
    <md-field>
      <label for="estimated-value">Boligens totalverdi</label>
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
      <label for="fellesgjeld">Andel fellesgjeld</label>
      <md-input
        type="number"
        id="fellesgjeld"
        name="fellesgjeld"
        min="0"
        :value="userInput.commonDebt"
        @input="value => handleNumberInput('commonDebt', value)"
      />
      <span class="md-suffix">kr</span>
    </md-field>
    <md-field>
      <label for="ownership-share">Din eierandel</label>
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
      <label for="property-dept">Samlet boliggjeld</label>
      <md-input
        type="number"
        id="property-dept"
        name="property-dept"
        min="0"
        :value="userInput.propertyDebt"
        @input="value => handleNumberInput('propertyDebt', value)"
      />
      <span class="md-suffix">kr</span>
    </md-field>
    <md-field>
      <label for="own-property-dept">Boliggjeld er du ansvarlig for</label>
      <md-input
        type="number"
        id="own-property-dept"
        name="own-property-dept"
        min="0"
        :value="userInput.proptyDebt"
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
      userInput: state => state.userInputBuyout
    })
  },
  methods: {
    ...mapMutations({ setUserInput: "SET_USER_INPUT" }),

    handleNumberInput(property, value) {
      const numberValue = parseInt(value);
      this.setUserInput({ property, value: numberValue });
    }
  }
};
</script>

<style></style>
