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
      <label for="ownership-share">Hvor mye av boligen skal du eie?</label>
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
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
  name: "UserInputForm",
  computed: {
    ...mapState({
      userInput: state => state.userInputBuyShare
    })
  },
  methods: {
    ...mapMutations({ setUserInput: "SET_USER_INPUT_BUY_SHARE" }),

    handleNumberInput(property, value) {
      const numberValue = parseInt(value);
      this.setUserInput({ property, value: numberValue });
    }
  }
};
</script>

<style></style>
