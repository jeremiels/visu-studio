<template>
  <div class="app-root o-layout">
    <app-header/>
    <main class="main">
      <nuxt/>
    </main>
    <app-social-links/>
    <app-cursor/>
  </div>
</template>

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.o-layout {
  min-height: 100vh;
  display: grid;
  grid-template-columns: 350px auto;
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 10px;
  width: 100vw;
  height: 100vh;

  align-items: stretch;
}
.main {
  overflow-x: hidden;
  grid-column-start: 2;
  grid-column-end: -1;
  grid-row-start: 1;
  grid-row-end: 4;
}
.page-enter-active,
.page-leave-active {
  transition: all 0.85s ease-in-out;
  transform: translateY(0);
}
.page-enter,
.page-leave-active {
  opacity: 0;
  transform: translateY(200px);
  backface-visibility: hidden;
}
</style>

<script>
import AppHeader from "~/components/AppHeader.vue";
import AppSocialLinks from "~/components/AppSocialLinks.vue";
import AppCursor from "~/components/AppCursor.vue";
export default {
  components: {
    AppHeader,
    AppSocialLinks,
    AppCursor
  }
};
</script>
