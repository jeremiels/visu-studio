<template>
  <section>
    <app-carousel/>
    <!-- <div
      v-for="(project, i) in projects"
      @click="changeProject(i)"
      :key="project.name"
      :class="[project === selectedProject ? activeProject : secondaryProject, `profile-${i}`]"
      :ref="`profile${i}`"
    >
      <img :src="project.image">
    </div> -->
  </section>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import AppCarousel from "~/components/AppCarousel.vue";

export default {
  components: {
    AppCarousel
  },
  computed: {
    ...mapState(["page", "projects", "indexedProject"]),
    ...mapGetters(["selectedProject"])
  },
  data() {
    return {
      following: false,
      follow: "follow",
      followclass: "active-follow",
      activeProject: "profile-photo",
      secondaryProject: "profile-photo-secondary"
    };
  },
  methods: {
    changeProject(i) {
      this.$store.commit("changeProject", i);
      if (this.page === "projects") {
        const el = this.$refs.profile0[0];
        el.style.transform = `translate3d(${-70 +
          this.indexedUser * 55}px, -70px, 0) scale(0.25)`;
      }
    }
  }
};
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>

