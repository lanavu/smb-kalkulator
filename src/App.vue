<template>
  <div id="app">
    <main class="main" id="main">
      <router-view />
    </main>
  </div>
</template>

<style lang="scss">
@import "styles/theme";
@import "styles/typography";

#app {
  font-family: "Roboto", "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
main {
  display: flex;
  justify-content: center;
  padding: 15px;
}

input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  -moz-appearance: textfield;
}
</style>
