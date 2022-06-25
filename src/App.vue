<template>
  <div class="container container-sm">
    <div class="header d-flex mt-5 mb-5">
      <div class="left d-flex">
        <h1 class="display-5">My Notes</h1>
      </div>
      <div class="ms-auto p-2 d-flex align-self-center">
        <div
          @click="toggleModal"
          class="add-btn btn btn-outline-primary btn-sm rounded-pill d-flex align-items-center p-2"
        >
          <div class="inner-button d-flex">
            <img src="./assets/icons/icon-plus.svg" alt="" />
          </div>
          <span>Add Note</span>
        </div>
      </div>
    </div>
    <div id="note-container">
      <div class="row">
        <div
          class="col-md-3 col-xs-2"
          v-for="(item, index) in notesList"
          :key="index"
        >
          <div class="card mb-4 shadow-sm">
            <div class="card-header" :class="'tag-' + [item.tag]">
              {{ item.tag }}
            </div>
            <div class="card-body">
              <h5 class="card-title">{{ item.title }}</h5>
              <time class="text-muted small d-block mb-2">{{ item.date }}</time>
              <p class="card-text">{{ item.content }}</p>
              <div class="d-flex justify-content-end card-btn-options">
                <button @click="editNote(item.id)" class="btn">
                  <img src="@/assets/icons/icons8-edit.svg" alt="" />
                </button>
                <button @click="deleteNote(item.id)" class="btn">
                  <img src="@/assets/icons/icons8-delete.svg" alt="" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="modal d-block" v-if="showModal">
      <div class="modal-dialog modal-dialog-scrollable">
        <div class="modal-content">
          <div class="modal-header">
            <h5 v-if="isEditing" class="modal-title">Update Note</h5>
            <h5 v-if="!isEditing" class="modal-title">Add New Note</h5>
            <button
              @click="toggleModal"
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
  </div>
</template>

<script>
import { uid } from "uid";
import notes from "@/notes.json";

export default {
  data() {
    return {
      dateOptions: { year: "numeric", month: "short", day: "numeric" },
      noteDateUnix: null,
      noteDate: null,
      noteTitle: null,
      noteTag: null,
      noteContent: null,
      editNoteIndex: null,
      isEditing: false,
      showModal: false,
      notesList: notes,
    };
  },
  methods: {
    addNote(title, tag, content) {
      if (!this.isEditing) {
        this.notesList.push({
          id: uid(),
          tag: tag,
          title: title,
          content: content,
          date: this.getDate(),
        });
      }
      this.toggleModal();
    },
    updateNote(title, tag, content) {
      let itemNote = this.notesList[this.editNoteIndex];
      itemNote.title = title;
      itemNote.tag = tag;
      itemNote.content = content;
      itemNote.date = this.getDate();
      this.toggleModal();
    },
    toggleModal(state) {
      this.showModal = !this.showModal;
      if (state !== "editNote") {
        this.isEditing = false;
        this.resetForm();
      }
    },
    getDate() {
      console.log(Date.now());
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
      let objIndex = this.notesList.findIndex((obj) => obj.id == id);
      let itemNote = this.notesList[objIndex];

      this.isEditing = true;
      this.noteTitle = itemNote.title;
      this.noteTag = itemNote.tag;
      this.noteContent = itemNote.content;

      this.isEditing = true;
      this.editNoteIndex = objIndex;
      this.toggleModal("editNote");
    },
    resetForm() {
      this.noteTitle = "";
      this.noteTag = "";
      this.noteContent = "";
    },
  },
};
</script>
