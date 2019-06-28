<template>
  <div class="sale"></div>
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
