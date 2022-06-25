<template>
  <div class="container container-sm">
    <NavigationView />
    <router-view
      :notesList="notesList"
      :editNote="editNote"
      :deleteNote="deleteNote"
    />
    <transition name="modal">
      <NoteModal
        v-if="noteModal"
        :notesList="notesList"
        :addNote="addNote"
        :editNoteItemID="editNoteItemID"
        :getDate="getDate"
      />
    </transition>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import { uid } from "uid";
import NavigationView from "./components/NavigationView.vue";
import NoteModal from "./components/NoteModal.vue";
import notes from "@/notes.json";

export default {
  components: {
    NavigationView,
    NoteModal,
  },
  data() {
    return {
      dateOptions: { year: "numeric", month: "short", day: "numeric" },
      noteDateUnix: null,
      editNoteIndex: null,
      editNoteItemID: null,
      notesList: notes,
    };
  },
  methods: {
    ...mapMutations(["TOGGLE_MODAL", "IS_EDITING", "IS_NOT_EDITING"]),
    addNote(title, tag, content) {
      this.notesList.push({
        id: uid(),
        tag: tag,
        title: title,
        content: content,
        date: this.getDate(),
      });
      this.TOGGLE_MODAL();
    },
    updateNote(title, tag, content) {
      let itemNote = this.notesList[this.editNoteIndex];
      itemNote.title = title;
      itemNote.tag = tag;
      itemNote.content = content;
      itemNote.date = this.getDate();
      this.TOGGLE_MODAL();
    },
    getDate() {
      this.noteDateUnix = Date.now();
      return new Date(this.noteDateUnix).toLocaleDateString(
        "en-us",
        this.dateOptions
      );
    },
    deleteNote(id) {
      this.notesList = this.notesList.filter((item) => item.id !== id);
    },
    editNote(id) {
      this.editNoteItemID = id;

      this.IS_EDITING();
      this.TOGGLE_MODAL();
    },
  },
  computed: {
    ...mapState(["noteModal", "isEditing"]),
  },
};
</script>
