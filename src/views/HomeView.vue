<template>
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
</template>

<script>
export default {
  name: "homeView",
  props: ["notesList", "deleteNote", "updateNote", "editNote"],
};
</script>
