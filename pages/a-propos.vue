<template>
  <section>
    <h1>à propos</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor assumenda cupiditate ex rerum quia, odio rem deleniti a aut maxime doloribus nesciunt iste aliquam suscipit aspernatur perferendis quam corporis laudantium!</p>
  </section>
</template>
<script>
import { mapState } from "vuex";

export default {
  computed: mapState(["page", "about", "contact", "projects"])
};
</script>
