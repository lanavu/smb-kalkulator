<template>
  <div class="SMB">
    <div class="SMB-borad md-layout">
      <div class="user-input md-layout-item">
        <h1 class="md-display-2 light-type">Kjøp ut andre</h1>
        <p>Regn ut hvor mye du må betale for å kjøpe ut andre eiere</p>
        <UserInputForm />
      </div>
      <div class="result md-layout-item">
        <div class="input-info">
          <h3>Boligen din koster</h3>
          <p class="md-display-1">
            {{ toLocaleString(userInput.propertyValue) }} kr
          </p>
          <h3>Du eier</h3>
          <p class="md-display-1">
            {{ toLocaleString(userInput.ownershipShare) }}%
          </p>
          <h3>Samlet gjeld på boligen</h3>
          <p class="md-display-1">
            {{ toLocaleString(userInput.propertyDept) }} kr
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { toLocaleString } from "@/helpers/functions";
import UserInputForm from "@/components/UserInputForm";
export default {
  name: "SMB",
  components: {
    UserInputForm
  },
  methods: {
    toLocaleString
  },
  computed: {
    ...mapState({
      userInput: state => state.userInput
    })
  }
};
</script>

<style lang="scss" scoped>
.SMB {
  max-width: 1024px;
  width: 100%;
}
.result {
  display: flex;
  justify-content: center;
  background: lightgray;
  margin: 15px;
  padding: 15px;

  .input-info {
    text-align: center;
  }
}
</style>
