<template>
  <div class="modal d-block">
    <div class="modal-dialog modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header">
          <h5 v-if="isEditing" class="modal-title">Update Note</h5>
          <h5 v-if="!isEditing" class="modal-title">Add New Note</h5>
          <button
            @click="closeModal"
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="submitForm" ref="noteForm">
            <div class="mb-3">
              <label for="noteTitle" class="form-label">Title</label>
              <input type="text" class="form-control" v-model="noteTitle" />
            </div>
            <div class="mb-3">
              <label for="noteTitle" class="form-label">Tag</label>
              <select class="form-select" v-model="noteTag">
                <option selected></option>
                <option value="house">House</option>
                <option value="school">School</option>
                <option value="work">Work</option>
              </select>
            </div>
            <div class="mb-3">
              <label for="noteContent" class="form-label">Note</label>
              <textarea
                class="form-control"
                rows="3"
                v-model="noteContent"
              ></textarea>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button
            v-if="isEditing"
            @click="updateNote(noteTitle, noteTag, noteContent)"
            type="button"
            class="btn btn-outline-primary rounded-pill"
            data-bs-dismiss="modal"
          >
            Update
          </button>
          <button
            v-if="!isEditing"
            @click="addNote(noteTitle, noteTag, noteContent)"
            type="button"
            class="btn btn-outline-primary rounded-pill"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
  name: "noteModal",
  props: ["notesList", "addNote", "editNoteItemID"],
  data() {
    return {
      noteDate: null,
      noteTitle: null,
      noteTag: null,
      noteContent: null,
      noteItemIndex: null,
    };
  },
  created() {
    if (this.isEditing) {
      let id = this.editNoteItemID;
      this.noteItemIndex = this.notesList.findIndex((obj) => obj.id == id);
      let itemNote = this.notesList[this.noteItemIndex];

      this.noteTitle = itemNote.title;
      this.noteTag = itemNote.tag;
      this.noteContent = itemNote.content;
    } else {
      this.reset();
    }
  },
  methods: {
    ...mapMutations(["TOGGLE_MODAL", "IS_EDITING", "IS_NOT_EDITING"]),
    closeModal() {
      this.TOGGLE_MODAL();
      this.IS_NOT_EDITING();
      this.reset();
    },
    updateNote(title, tag, content) {
      let updateItem = this.notesList[this.noteItemIndex];
      updateItem.title = title;
      updateItem.tag = tag;
      updateItem.content = content;
      //   updateItem.date = this.getDate();
      this.TOGGLE_MODAL();
      this.IS_NOT_EDITING();
    },
    reset() {
      //   this.noteTitle = "";
      //   this.noteTag = "";
      //   this.noteContent = "";
    },
  },
  computed: {
    ...mapState(["isEditing"]),
  },
};
</script>
