<template>
  <section class="project-grid">
    <div class="project-grid__text">{{ selectedProject.name }}</div>
    <img :src="selectedProject.image" alt>
  </section>
</template>
<script>
import { mapState, mapGetters } from "vuex";

export default {
  computed: {
    ...mapState(["page", "projects", "indexedProject"]),
    ...mapGetters(["selectedProject"])
  }
};
</script>

<style>
.project-grid {
  max-height: 50vh;
  height: 50vh;
  display: grid;
  grid-template-columns: 50% 50%;
}

.project-grid__text {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  color: #000;
}
</style>
