<template>
  <div>
    <div class="cursor cursor--small" ></div>
    <canvas class="cursor cursor--canvas" resize></canvas>
  </div>
</template>

<script>
export default {
  methods: {
    initCursor: function() {
      // add listener to track the current mouse position
      document.addEventListener("mousemove", e => {
        clientX = e.clientX;
        clientY = e.clientY;
      });

      // transform the innerCursor to the current mouse position
      // use requestAnimationFrame() for smooth performance
      const render = () => {
        innerCursor.style.transform = `translate(${clientX}px, ${clientY}px)`;
        // if you are already using TweenMax in your project, you might as well
        // use TweenMax.set() instead
        // TweenMax.set(innerCursor, {
        //   x: clientX,
        //   y: clientY
        // });

        requestAnimationFrame(render);
      };
      requestAnimationFrame(render);
    }
  }
};
</script>

<style>
/* body,
a {
  cursor: none;
} */
.cursor {
  position: fixed;
  left: 0;
  top: 0;
  pointer-events: none;
}
.cursor--small {
  width: 5px;
  height: 5px;
  left: -2.5px;
  top: -2.5px;
  border-radius: 50%;
  z-index: 11000;
  background: white;
}
.cursor--canvas {
  width: 100vw;
  height: 100vh;
  z-index: 12000;
}
</style>

