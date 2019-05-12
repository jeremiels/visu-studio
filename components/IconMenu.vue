<template>
  <div class="hamburger" v-on:click="activeMenu" v-bind:class="{ active: isActive }" aria-l>
    <span class="line"></span>
    <span class="line"></span>
    <span class="line"></span>
  </div>
</template>
<style>
.hamburger {
  position: absolute;
  top: 80px;
  left: 60px;
  cursor: pointer;
}
.hamburger .line {
  width: 30px;
  height: 3px;
  background-color: #fff;
  display: block;
  margin: 5px auto;
  -webkit-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}

.hamburger {
  -webkit-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  transform: rotate(90deg);
}

.hamburger.active {
  transform: rotate(0deg);
}

/* .hamburger.active .line:nth-child(1) {
  width: 30px;
}

.hamburger.active .line:nth-child(2) {
  width: 40px;
} */
</style>

<script>
export default {
  data() {
    return {
      isActive: false
    };
  },

  methods: {
    activeMenu: function() {
      this.isActive = !this.isActive;
      // some code to filter users
    }
  }
};
</script>
