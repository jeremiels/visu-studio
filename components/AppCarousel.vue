<template>
  <div class="cross_slide" id="cross_slide">
    <ul class="cross_list">
      <transition
        @enter="enter"
        @leave="leave"
        @after-enter="afterEnter"
        :css="false"
        appear="appear"
      >
        <li
          class="cross_item"
          v-for="(project, index) in projects"
          v-if="selected === index"
          :key="index"
        >
          <section class="project">
            <nuxt-link :to="'/projects/'+project.id">
              <div :ref="'thumbnail' + index">
                <img class="project__bg" :src="project.image">
              </div>
              <div class="project__txt-wrapper" :ref="'detail' + index">
                <h1 class="project__title">{{ project.name }}</h1>
                <h2 class="project__subtitle" v-if="project.subtitle">{{ project.subtitle}}</h2>
                <small class="project_cat">{{ project.category}}</small>
              </div>
            </nuxt-link>
          </section>
          <!-- <div class="cross_thumbnail" :ref="'thumbnail' + index">
            <img class="cross_thumbnail_image" :src="project.image">
          </div>
          <div class="cross_detail" :ref="'detail' + index">
            <p class="cross_detail_paragraph" v-html="project.name"></p>
          </div>-->
        </li>
      </transition>
    </ul>
    <div class="slider__control">
      <button v-for="project in projects" :key="project">[o]</button>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  data() {
    return {
      selected: 0,
      last: 0,
      timer: 4
    };
  },

  computed: {
    ...mapState(["page", "projects", "indexedProject"]),
    ...mapGetters(["selectedProject"]),

    nextPick() {
      let temp = [];
      for (let i = 0; i < this.projects.length; i++) {
        if (this.selected !== i) temp.push(i);
      }
      return temp[Math.floor(Math.random() * temp.length)];
    }
  },

  methods: {
    change() {
      this.last = this.selected;
      this.selected = this.nextPick;
    },

    afterEnter() {
      // timer: temps d'affichage d'un slide
      setTimeout(this.change, this.timer * 750);
    },

    enter(el, done) {
      const thumbnail = this.$refs["thumbnail" + this.selected];
      const detail = this.$refs["detail" + this.selected];
      const thumbnailAnime = new TimelineMax({
        onComplete: done
      });
      const detailAnime = new TimelineMax();

      thumbnailAnime.set(thumbnail, {
        x: window.innerWidth
        // scale: 0.85
      });

      thumbnailAnime.to(thumbnail, 3.6, {
        x: 0,
        y: 0,
        ease: Power3.easeInOut,
        delay: 1.2
      });

      thumbnailAnime.to(thumbnail, 2.4, {
        // scale: 1,
        borderRadius: 0,
        ease: Power2.easeInOut
      });

      detailAnime.set(detail, {
        x: window.innerWidth
      });

      detailAnime.to(detail, 2.4, {
        x: 0,
        ease: Power3.easeOut,
        delay: 1.4
      });
      detailAnime.set(".project__subtitle", { className: "+=red" });
    },

    leave(el, done) {
      const thumbnail = this.$refs["thumbnail" + this.last];
      const detail = this.$refs["detail" + this.last];
      const thumbnailAnime = new TimelineMax({
        onComplete: done
      });
      const detailAnime = new TimelineMax();

      thumbnailAnime.to(thumbnail, 1.8, {
        x: "-50px",
        scale: 0.98,
        ease: Power2.easeInOut
      });

      thumbnailAnime.to(thumbnail, 1, {
        x: "-100%",
        ease: Power3.easeIn
      });

      detailAnime.to(detail, 1, {
        x: "-300%",
        ease: Power3.easeIn,
        delay: 0.6
      });
    }
  }
};
</script>

<style lang="scss">
.cross {
  &_item {
    position: absolute;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
  }

  &_detail {
    position: absolute;
    bottom: 0;
    width: 100%;

    &_paragraph {
      width: 100%;
      text-align: center;
    }
  }

  &_thumbnail {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;

    &_image {
      position: absolute;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}

.slider__control {
  position: absolute;
  bottom: 60px;
  left: 50%;
  transform: translateX(-50%);
}
.cross_item .project {
  height: 100vh;
}

.cross_item .project__txt-wrapper {
  top: 75%;
}

.project__subtitle.red {
  color: red;
}
</style>
