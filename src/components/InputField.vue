<template>
  <div class="input-field">
    <label :for="id">{{ label }}</label>
    <input :type="inputType" :id="id" />
  </div>
</template>

<script>
import { generateUUID } from "@/helpers/functions";

export default {
  name: "InputField",
  props: {
    inputType: {
      type: String,
      default: "text"
    },
    label: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      id: null
    };
  },
  created() {
    this.id = this.generateUUID();
  },
  methods: {
    generateUUID
  }
};
</script>

<style lang="scss" scoped>
.input-field {
  width: 450px;
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;

  input {
    padding: 15px;
  }
}
</style>
