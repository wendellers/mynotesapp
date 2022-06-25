import { createStore } from "vuex";

export default createStore({
  state: {
    noteModal: null,
    isEditing: false,
  },
  getters: {},
  mutations: {
    TOGGLE_MODAL(state) {
      state.noteModal = !state.noteModal;
    },
    IS_EDITING(state) {
      state.isEditing = true;
    },
    IS_NOT_EDITING(state) {
      state.isEditing = false;
    },
  },
  actions: {},
  modules: {},
});
