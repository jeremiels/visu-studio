import Vuex from "vuex";

const createStore = () => {
  return new Vuex.Store({
    state: {
      page: "index",
      indexedProject: 0,
      projects: [
        {
          id: "luminoscope",
          name: "Lumi Noscope",
          category: ["mapping vidéo"],
          image: "/luminoscope.jpg"
        },
        {
          id: "frequences",
          name: "Fréquence(s)",
          subtitle: "Live A/V",
          category: ["scénographie"],
          image: "/frequence.jpg"
        },
        {
          id: "crush_for_crash",
          name: "Crush for _crash",
          category: ["lumières"],
          image: "/crush_for_crash.jpg"
        },
        {
          id: "armistice",
          name: "Armistice party",
          category: ["mapping vidéo", "lumières"],
          image: "/armistice.jpg"
        }
      ],
      routes: [
        { path: "/about", label: "à propos" },
        { path: "/projects", label: "projets" },
        { path: "/contact", label: "contact" }
      ]
    },
    getters: {
      selectedProject: state => {
        return state.projects[state.indexedProject];
      }
    },
    mutations: {
      updatePage(state, pageName) {
        state.page = pageName;
      },

      changeProject(state, i) {
        state.indexedProject = i;
      }
    }
  });
};

export default createStore;
