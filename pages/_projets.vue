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
            <div class="image">
              <h2 class="project__subtitle" v-if="project.subtitle">{{ project.subtitle}}</h2>
            </div>
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
  color: #fff;
  font-family: "CeraProBlack";
  font-size: 48px;
  font-weight: normal;
  text-transform: uppercase;
}
.project__subtitle {
  display: inline-block;
  color: #fff;
  font-family: "CeraProThin";
  font-size: 32px;
}
.image {
  position: relative;
  overflow: hidden;
}
.project__subtitle {
  line-height: 1;
  margin: 0;
  text-transform: uppercase;
  animation: fadeIn 0s 0.3s;
  animation-fill-mode: backwards;
}

.image::after {
  position: absolute;
  content: "";
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: #f0f2f6;
  transform: translateY(-100%);
  animation: secondaryImageOverlayIn 0.3s 0s, secondaryImageOverlayOut 0.3s 0.3s;
  animation-fill-mode: both;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes secondaryImageOverlayIn {
  0% {
    height: 0;
  }
  100% {
    height: 100%;
  }
}

@keyframes secondaryImageOverlayOut {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(100%);
  }
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


