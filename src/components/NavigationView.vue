<template>
  <div class="header d-flex mt-5 mb-5">
    <div class="left d-flex">
      <h1 class="display-5">My Notes</h1>
    </div>
    <div class="ms-auto p-2 d-flex align-self-center">
      <div
        @click="addNote"
        class="add-btn btn btn-outline-primary btn-sm rounded-pill d-flex align-items-center p-2"
      >
        <div class="inner-button d-flex">
          <img src="@/assets/icons/icon-plus.svg" alt="" />
        </div>
        <span>Add Note</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "navigationView",
  methods: {
    ...mapMutations(["TOGGLE_MODAL"]),
    addNote() {
      this.TOGGLE_MODAL();
    },
  },
};
</script>

<style lang="sass" scoped></style>
