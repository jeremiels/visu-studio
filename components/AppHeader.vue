<template>
  <header class="header">
    <app-logo/>
    <app-navigation/>
  </header>
</template>

<style>
.header {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 4;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  background-color: black;
}
</style>
<script>
import AppLogo from "~/components/AppLogo.vue";
import AppNavigation from "~/components/AppNavigation.vue";

export default {
  components: {
    AppLogo,
    AppNavigation
  }
};
</script>
