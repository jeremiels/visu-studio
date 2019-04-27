<template>
  <nav>
    <ul class="nav__list">
      <li class="nav__list-item">
        <nuxt-link class="nuxt-link" exact to="/">accueil</nuxt-link>
      </li>
      <li class="nav__list-item" v-for="route in routes" :key="route">
        <nuxt-link class="nuxt-link" v-bind:to="route.path">{{route.label}}</nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<style>
nav {
  padding-left: 0;
  font-size: 48px;
  font-family: "CeraProBlack";
}
.nav__list {
  list-style: none;
}
.nav__list-item {
  margin-bottom: 20px;
  text-transform: uppercase;
}
.nav__list-item a {
  color: white;
  text-decoration: none;
  transition: all 0.25s ease-in-out;
}

.nav__list-item a:focus {
  outline: none;
}

.nav__list-item a.nuxt-link-active {
  display: block;
  transform: translateX(50px);
  transition: all 0.25s ease-in-out;
}

.navigation-enter {
  transform: translateX(100%);
}
.navigation-enter-to {
  transform: translateX(0);
}
.navigation-enter-active {
  position: absolute;
}

.navigation-leave {
  transform: translateX(0);
}
.navigation-leave-to {
  transform: translateX(-100%);
}

.navigation-enter-active,
.navigation-leave-active {
  transition: all 750ms ease-in-out;
}
</style>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  computed: {
    ...mapState(["page", "projects", "routes", "indexedProject"]),
    ...mapGetters(["selectedProject"])
  }
};
</script>
