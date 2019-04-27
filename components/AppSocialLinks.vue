<template>
  <div class="social-links">
    <a href="http://" title="Facebook">
      <icon-facebook/>
    </a>
    <a href="http://" title="Twitter">
      <icon-instagram/>
    </a>
  </div>
</template>

<style>
.social-links {
  position: absolute;
  right: 60px;
  bottom: 40px;
  display: inline-flex;
  flex-flow: row;
  width: 60px;
  justify-content: space-between;
}

.social-links svg {
  height: 24px;
}
</style>

<script>
import IconFacebook from "~/components/IconFacebook.vue";
import IconInstagram from "~/components/IconInstagram.vue";

export default {
  components: {
    IconFacebook,
    IconInstagram
  }
};
</script>
