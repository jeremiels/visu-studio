<template>
  <ul class="project-list">
    <li
      v-for="(project, i) in projects"
      :key="project.name"
      @click="changeProject(i)"
      :ref="`profile${i}`"
    >
      <section class="project">
        <nuxt-link :to="'/projects/'+project.id">
          <div class="project__txt-wrapper">
            <h1 class="project__title">{{ project.name }}</h1>
            <h2 class="project__subtitle" v-if="project.subtitle">{{ project.subtitle}}</h2>
            <small class="project_cat">{{ project.category}}</small>
          </div>
          <img class="project__bg" :src="project.image">
        </nuxt-link>
      </section>
    </li>
    <nuxt-child :key="$route.params.id"/>
  </ul>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  computed: {
    ...mapState(["page", "projects", "indexedProject"]),
    ...mapGetters(["selectedProject"])
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
.project-list {
  list-style: none;
}
.project {
  position: relative;
  height: 250px;
  width: 100%;
  overflow: hidden;
}
.project__txt-wrapper {
  position: absolute;
  left: 200px;
  top: 50%;
  transform: translateY(-50%);
}
.project__title {
  padding-right: 20px;
  color: #fff;
  font-family: "CeraProBlack";
  font-size: 48px;
  font-weight: normal;
  text-transform: uppercase;
}
.project__subtitle {
  margin-bottom: 20px;
  color: #fff;
  font-family: "CeraProThin";
  font-size: 32px;
  text-transform: uppercase;
}
.project_cat {
  display: block;
  padding: 0 10px;
  background: #fff;
  color: black;
  letter-spacing: 2px;
  text-transform: uppercase;
}
.project__bg {
  position: absolute;
  top: 0;
  object-fit: cover;
  max-width: 100%;
  z-index: -1;
}
</style>


