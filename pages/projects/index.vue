<template>
  <section>Projet : {{ selectedProject.name }}</section>
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
