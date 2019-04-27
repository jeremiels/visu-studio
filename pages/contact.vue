<template>
  <div class="contact">
    <h1>CONTACT</h1>
  </div>
</template>
<script>
import { mapState } from "vuex";

export default {
  computed: mapState(["page", "about", "contact", "projects"])
};
</script>

<style>
.contact h1 {
  transform: translateX(215px);
}
</style>
