<template>
  <div id="app">
    <div class="page-top">
      <div class="md-layout md-gutter md-alignment-center-center">
        <div class="md-layout-item md-size-80 md-small-size-100">
          <h1 class="md-display-1 light-type">Boliglånskalkulator</h1>
        </div>
        <div class="menu md-layout-item md-size-80 md-small-size-100">
          <router-link to="/">
            <md-button class="md-raised md-primary">Kjøp ut andre</md-button>
          </router-link>
          <router-link to="/buy-share">
            <md-button class="md-raised md-primary"
              >Kjøp inn</md-button
            ></router-link
          >
          <router-link to="/sale">
            <md-button class="md-raised md-primary"
              >Salg av felles bolig</md-button
            >
          </router-link>
        </div>
      </div>
    </div>
    <main class="main" id="main">
      <router-view />
    </main>
  </div>
</template>

<style lang="scss">
@import "styles/theme";
@import "styles/typography";
@import "~vue-material/dist/theme/engine";
@import "styles/grid";

body {
  @media (max-width: $screen-xs-max) {
    font-size: 12px;
  }
}
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

.page-top {
  text-align: center;
  display: flex;
  justify-content: center;
}

input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  -moz-appearance: textfield;
}

.router-link-exact-active {
  & > button {
    background-color: md-get-palette-color(pink, 200) !important;
  }
}
</style>
